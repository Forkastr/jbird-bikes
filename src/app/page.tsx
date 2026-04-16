{/* SECTION 3: TEST RIDE & VOUCHER */}
<section className="w-full py-12 px-6 bg-white rounded-3xl shadow-2xl mt-12 text-center border-4 border-[#1A1A1A]">
  <Badge className="bg-green-600 text-white mb-4 animate-pulse">Limited Time Offer</Badge>
  <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
    Test-Ride a Bike <br /> Get a $20 Voucher
  </h2>
  <p className="text-sm font-bold opacity-70 mb-8">
    Valid toward any service or accessory.
  </p>

  {/* BIKE SELECTION GRID (Mobile 2x2) */}
  <div className="grid grid-cols-2 gap-4 mb-8">
    {[
      { name: "XPeak 2.0", img: "/bike1.jpg" },
      { name: "Alpine Fat Tire", img: "/bike2.jpg" },
      { name: "XPpedition", img: "/bike3.jpg" },
      { name: "Gotrax Ranger", img: "/bike4.jpg" }
    ].map((bike, i) => (
      <div key={i} className="flex flex-col items-center">
        <div className="w-full aspect-square bg-slate-100 rounded-xl mb-2 flex items-center justify-center">
           <Bike className="opacity-20" size={40} /> {/* Placeholder for real images */}
        </div>
        <span className="text-xs font-black uppercase tracking-tighter">{bike.name}</span>
      </div>
    ))}
  </div>

  <Button 
    className="w-full py-8 text-xl font-black uppercase tracking-widest bg-green-600 text-white hover:bg-green-700 shadow-lg active:scale-95 transition-all"
  >
    Claim My $20 Voucher
  </Button>
</section>
