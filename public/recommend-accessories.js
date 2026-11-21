// Picks accessories from the catalog that suit a bike, scooter or trike (product page "Recommended Accessories").
// Rules: same brand only; an accessory whose Fits (or, when Fits is blank, Title) names specific models is shown
// only for those models; "Universal" / "All <Brand> ... Models" accessories suit any vehicle of that brand.
// Scooters skip bike-only accessories. Picks favour a model match, then one accessory per subcategory.
(function () {
  var str = function (v) { return (v == null ? '' : String(v)).trim(); };
  var norm = function (s) { return str(s).toLowerCase().replace(/[^a-z0-9]+/g, ''); };
  var GENERIC = /universal|all\s+\w+\s+(e-?bike|e-?trike|e-?scooter|\w+)?.*models|most standard/i;

  // Subcategories that suit each kind of vehicle get a small boost.
  var AFFINITY = {
    cargo: ['Kids & Passenger Seats', 'Racks & Baskets', 'Bags & Storage', 'Locks & Security', 'Pets & Trailers', 'Packages & Kits'],
    escooters: ['Bags & Storage', 'Phone, Cup & Audio', 'Locks & Security', 'Helmets & Safety'],
    etrikes: ['Covers & Weather', 'Pets & Trailers', 'Racks & Baskets', 'Bags & Storage'],
    other: ['Racks & Baskets', 'Locks & Security', 'Bags & Storage', 'Helmets & Safety', 'Phone, Cup & Audio'],
  };

  function brandOf(b) {
    var brand = str(b['Brand']);
    if (brand) return brand.toLowerCase();
    return str(b['Slug']).split('-')[0].toLowerCase();
  }

  // Model keys from the slug, e.g. "Gotrax-F1" -> ["f1"], "Lectric-XPedition2" -> ["xpedition2", "xpedition"],
  // "Lectric-XP-Trike2" -> ["xptrike2", "xptrike"], scooter "Flex Voyager" -> ["flex"].
  function modelKeys(b) {
    var parts = str(b['Slug']).split(/[-\s]+/).filter(Boolean);
    if (parts.length > 1 && parts[0].toLowerCase() === brandOf(b)) parts.shift();
    var key = norm(parts[0]);
    if (/^[a-z]{1,2}$/.test(key) && parts[1]) key += norm(parts[1]);
    if (!key) return [];
    var keys = [key];
    var m = key.match(/^([a-z]{3,})(\d)$/); // drop a generation digit: xpedition2 -> xpedition
    if (m) keys.push(m[1]);
    return keys;
  }

  // Single words plus neighbouring pairs, so "XP Trike" also reads as "xptrike" and "XP 4" as "xp4".
  function tokens(text) {
    var words = str(text).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    var out = words.slice();
    for (var i = 0; i + 1 < words.length; i++) out.push(words[i] + words[i + 1]);
    return out;
  }

  function mentions(text, keys) {
    var t = tokens(text);
    return keys.some(function (k) { return t.some(function (w) { return w.indexOf(k) === 0; }); });
  }

  // "XPedition 1.0 only" doesn't suit an XPedition2.
  function wrongGeneration(fits, keys) {
    if (keys.length < 2) return false;
    var gen = keys[0].slice(-1);
    var re = new RegExp(keys[1] + '\\s*(\\d)(\\.0)?\\s+only', 'i');
    var m = str(fits).match(re);
    return !!(m && m[1] !== gen);
  }

  window.recommendAccessories = function (catalog, bike, limit) {
    limit = limit || 5;
    var category = str(bike['Category']).toLowerCase();
    if (category === 'accessories') return [];
    var brand = brandOf(bike);
    var keys = modelKeys(bike);
    var isScooter = category === 'escooters';
    var isCargo = /cargo/i.test(str(bike['Title']) + ' ' + str(bike['Slug']));
    var affinity = AFFINITY[isCargo ? 'cargo' : isScooter ? 'escooters' : category === 'etrikes' ? 'etrikes' : 'other'];

    // Model keys of the brand's other vehicles, to spot accessories made for a different model.
    var otherKeys = [];
    catalog.forEach(function (b) {
      if (b !== bike && brandOf(b) === brand && str(b['Category']).toLowerCase() !== 'accessories') {
        modelKeys(b).forEach(function (k) { if (keys.indexOf(k) < 0) otherKeys.push(k); });
      }
    });

    var scored = [];
    catalog.forEach(function (a) {
      if (str(a['Category']).toLowerCase() !== 'accessories') return;
      if (str(a['JBird Status']).toLowerCase() !== 'available') return;
      if (brandOf(a) !== brand) return;
      var title = str(a['Title']);
      if (isScooter && /bike|bicycle|seat|pannier/i.test(title) && !/scooter|universal/i.test(title + ' ' + str(a['Fits']))) return;
      if (!isScooter && /scooter/i.test(title) && !/bike/i.test(title)) return;

      // Tire liners etc. sized by width ("4'' Fat Tire") must match the vehicle's tire width ('20" x 4"'; no width = ~2").
      var accWidth = title.match(/(\d+(?:\.\d+)?)\s*(?:''|"|in\b)[^,]*tire/i);
      if (accWidth) {
        var bikeWidth = str(bike['Tire Size']).match(/x\s*(\d+(?:\.\d+)?)/i);
        if (Math.abs(Number(accWidth[1]) - (bikeWidth ? Number(bikeWidth[1]) : 2)) > 0.5) return;
      }

      var fits = str(a['Fits']);
      var score;
      if (fits && GENERIC.test(fits)) score = 40;
      else if (fits) {
        if (mentions(fits, keys.slice(0, 1)) && !wrongGeneration(fits, keys)) score = 100;
        else if (mentions(fits, keys) && !wrongGeneration(fits, keys)) score = 70; // earlier generation of this model
        // Fits names only models we don't sell (e.g. Kid Carrier "Porter"): a "Cargo Bike ..." accessory still suits a cargo bike.
        else if (isCargo && /cargo bike/i.test(title) && !mentions(fits, otherKeys)) score = 90;
        else return; // made for other models
      } else if (mentions(title, keys.slice(0, 1))) score = 100;
      else if (mentions(title, keys)) score = 70;
      else if (mentions(title, otherKeys)) return; // e.g. "XPeak Battery Thermal Sleeve" on an XP4
      else score = 20;

      if (mentions(title, keys.slice(0, 1))) score += 10; // "XPeak2 Rear Rack" beats "XPeak Rear Rack" on an XPeak2
      if (affinity.indexOf(str(a['Subcategory'])) >= 0) score += 15;
      scored.push({ a: a, score: score });
    });
    scored.sort(function (x, y) { return y.score - x.score; });

    // One per subcategory first, then fill; never two of the same item in different colours.
    var picked = [], seenTitles = {}, seenSubs = {};
    var stem = function (a) { return norm(str(a['Title']).split(' - ')[0]); };
    [true, false].forEach(function (onePerSub) {
      scored.forEach(function (s) {
        if (picked.length >= limit || picked.indexOf(s.a) >= 0 || seenTitles[stem(s.a)]) return;
        var sub = str(s.a['Subcategory']);
        if (onePerSub && seenSubs[sub]) return;
        picked.push(s.a);
        seenTitles[stem(s.a)] = true;
        seenSubs[sub] = true;
      });
    });
    return picked;
  };
})();
