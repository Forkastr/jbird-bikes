export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      
      <!-- JBird Bikes Homepage - FINAL VERIFIED VERSION -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JBird Bikes - Sales & Service On the Lafitte Greenway</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;900&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-green: #008000;
            --primary-blue: #3064c7;
            --neutral-gray: #E0E1DD;
            --accent-yellow: #FFD700;
        }
        body {
            font-family: 'Space Grotesk', sans-serif;
            background-color: #f8f9fa;
            color: #1a1a1a;
        }
        h1, h2, h3 {
            font-family: 'Epilogue', sans-serif;
            font-weight: 900;
            text-transform: uppercase;
        }
        .bg-primary-green { background-color: var(--primary-green); }
        .text-primary-green { color: var(--primary-green); }
        .bg-primary-blue { background-color: var(--primary-blue); }
        .bg-neutral-gray { background-color: var(--neutral-gray); }
        .bg-accent-yellow { background-color: var(--accent-yellow); }
        .text-accent-yellow { color: var(--accent-yellow); }
        
        .btn-contact {
            background-color: var(--accent-yellow);
            color: var(--primary-green);
            font-weight: 900;
            padding: 1rem 2.5rem;
            border-radius: 0.5rem;
            text-transform: uppercase;
            transition: transform 0.2s, box-shadow 0.2s;
            display: inline-block;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            font-size: 1.25rem;
        }
        .btn-contact:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }
        .accordion-item:hover .accordion-content {
            max-height: 500px;
        }
    </style>
</head>
<body>

    <!-- HEADER (Mirror of Footer) -->
    <header class="bg-white border-b border-gray-200 py-8 px-8 flex flex-col items-center">
        <div class="flex justify-between items-center w-full max-w-7xl">
            <div class="text-4xl font-black italic tracking-tighter text-primary-green">JBird Bikes</div>
            <div class="text-center">
                <p class="text-xl font-bold uppercase tracking-widest text-gray-500 mb-1">Call / Text</p>
                <a href="tel:5045216997" class="text-3xl font-black text-primary-blue hover:underline">(504) 521-6997</a>
            </div>
            <div class="w-20"></div> <!-- Balance spacer -->
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="relative h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden bg-black">
        <img src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=2070&auto=format&fit=crop" alt="Bike Shop Interior" class="absolute inset-0 w-full h-full object-cover opacity-60">
        <div class="relative z-10 max-w-5xl">
            <h1 class="text-8xl md:text-[10rem] text-accent-yellow mb-4 italic leading-none">JBird Bikes</h1>
            <p class="text-4xl md:text-5xl text-accent-yellow font-bold mb-14 uppercase tracking-wide">Sales & Service<br>On the Lafitte Greenway</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="btn-contact text-3xl px-16 py-8">Contact Us</a>
        </div>
    </section>

    <!-- CORE OFFERINGS -->
    <main class="max-w-7xl mx-auto py-24 px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <!-- Repair & Maintenance -->
        <div class="bg-neutral-gray p-12 rounded-[2.5rem] flex flex-col justify-between">
            <div>
                <h2 class="text-5xl mb-8 text-primary-green">Repair & Maintenance for All Bikes</h2>
                <p class="text-2xl mb-10 leading-relaxed text-gray-800">Whether it's a vintage cruiser or a high-performance carbon road bike, our expert technicians provide surgical-level precision to keep you rolling.</p>
                <p class="font-black text-gray-600 mb-4 italic uppercase tracking-widest">Free Diagnostic</p>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="btn-contact self-start mt-8">Contact Us</a>
        </div>

        <!-- Quality eBike Sales -->
        <div class="bg-primary-blue p-12 rounded-[2.5rem] text-white flex flex-col justify-between">
            <div>
                <h2 class="text-5xl mb-8 leading-tight">Quality eBikes Sales<br>Affordable Prices</h2>
                <p class="text-2xl mb-10 leading-relaxed">Engineered for NOLA streets. Durable, stylish, and powerful. Affordable quality without the compromise.</p>
                
                <div class="accordion-item border-t border-blue-400 pt-6">
                    <div class="flex justify-between items-center cursor-pointer mb-4">
                        <span class="text-xl font-bold uppercase tracking-widest">See Features</span>
                        <span class="text-2xl">↓</span>
                    </div>
                    <ul class="accordion-content list-disc pl-8 space-y-3 text-xl opacity-90 pb-6">
                        <li>Financing Available</li>
                        <li>Ready to Ride</li>
                        <li>Our Exclusive JBird Build</li>
                        <li>UL Listed</li>
                        <li>Many Extra Features Included</li>
                        <li>Professional Service & Maintenance</li>
                    </ul>
                </div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="btn-contact self-start mt-8">Contact Us</a>
        </div>

        <!-- NEW: Test-Ride Section -->
        <div class="md:col-span-2 bg-accent-yellow p-16 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-12 border-8 border-primary-green">
            <div class="text-center md:text-left">
                <h2 class="text-7xl mb-6 text-primary-green">Test-Ride an eBike</h2>
                <p class="text-4xl font-black text-primary-blue mb-4 italic">Get a 20-dollar Voucher</p>
                <p class="text-2xl font-bold uppercase tracking-widest text-primary-green opacity-70">Limited Time Offer</p>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="btn-contact bg-primary-green text-accent-yellow text-4xl px-16 py-10 hover:bg-green-800">Contact Us</a>
        </div>

        <!-- Buy Online - We Build It -->
        <div class="bg-neutral-gray p-12 rounded-[2.5rem] flex flex-col justify-between">
            <div>
                <h2 class="text-5xl mb-8 text-primary-green">Buy Online – We Build It</h2>
                <p class="text-2xl mb-10 leading-relaxed text-gray-800">Don't struggle with a box in your living room. Order online and pick it up professionally assembled and safety-checked.</p>
                
                <div class="accordion-item border-t border-gray-400 pt-6">
                    <div class="flex justify-between items-center cursor-pointer mb-4">
                        <span class="text-xl font-bold uppercase tracking-widest">Get Details</span>
                        <span class="text-2xl">↓</span>
                    </div>
                    <ul class="accordion-content list-disc pl-8 space-y-3 text-xl text-gray-700 pb-6">
                        <li>Full Assembly: $135</li>
                        <li>Professional Assembly</li>
                        <li>Extra Features Included</li>
                        <li>Full Safety Inspection</li>
                    </ul>
                </div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="btn-contact self-start mt-8">Contact Us</a>
        </div>

        <!-- NOLA eBike Incentive -->
        <div class="bg-primary-green p-12 rounded-[2.5rem] text-white flex flex-col justify-between relative overflow-hidden">
            <div class="relative z-10">
                <h2 class="text-5xl mb-8 leading-tight">NOLA eBike Incentive</h2>
                <p class="text-6xl font-black mb-10 leading-tight">Get up to $1,200 to buy an eBike</p>
                
                <div class="accordion-item border-t border-green-400 pt-6">
                    <div class="flex justify-between items-center cursor-pointer mb-4">
                        <span class="text-xl font-bold uppercase tracking-widest">View Details</span>
                        <span class="text-2xl">↓</span>
                    </div>
                    <ul class="accordion-content list-disc pl-8 space-y-3 text-xl opacity-90 pb-6">
                        <li>Availability is Limited</li>
                        <li>Get Your Application In</li>
                        <li>We Handle All the Paperwork for You</li>
                    </ul>
                </div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="btn-contact self-start mt-8">Contact Us</a>
        </div>

    </main>

    <!-- VISIT US SECTION (Map) -->
    <section class="bg-white py-24 px-8">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-7xl text-center mb-20 text-primary-green">Visit Us On The Greenway</h2>
            <div class="rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-neutral-gray">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4573444586567!2d-90.08376382609781!3d29.966283822272693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a5bd54333c35%3A0x53d82eb12f09b98b!2sJBird%20Bike%20Shop!5e0!3m2!1sen!2sus!4v1776541031107!5m2!1sen!2sus" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-neutral-gray py-24 px-8 border-t border-gray-300 flex flex-col items-center text-center">
        <div class="max-w-7xl w-full">
            <div class="text-7xl font-black italic tracking-tighter text-primary-green mb-12">JBird Bikes</div>
            
            <div class="mb-14">
                <p class="text-2xl font-bold uppercase tracking-widest text-gray-500 mb-3">Call / Text</p>
                <a href="tel:5045216997" class="text-6xl font-black text-primary-blue hover:underline">(504) 521-6997</a>
            </div>

            <div class="flex justify-center gap-14 mb-20">
                <a href="https://jbirdbikes.com/" class="opacity-80 hover:opacity-100 transition-opacity"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" class="w-16 h-16"></a>
                <a href="https://jbirdbikes.com/" class="opacity-80 hover:opacity-100 transition-opacity"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" class="w-16 h-16"></a>
                <a href="https://jbirdbikes.com/" class="opacity-80 hover:opacity-100 transition-opacity"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" class="w-16 h-16"></a>
                <a href="https://jbirdbikes.com/" class="opacity-80 hover:opacity-100 transition-opacity"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" class="w-16 h-16"></a>
            </div>

            <div class="space-y-6 text-gray-700">
                <p class="text-3xl font-bold">On the Lafitte Greenway, New Orleans</p>
                <div class="flex justify-center gap-12 text-xl font-bold uppercase tracking-widest mt-12">
                    <a href="https://jbirdbikes.com/" class="hover:text-primary-blue transition-colors">Privacy Policy</a>
                    <a href="https://jbirdbikes.com/" class="hover:text-primary-blue transition-colors">Terms</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="text-primary-green hover:underline">Contact Us</a>
                </div>
                <p class="text-base mt-16 opacity-50 font-medium">&copy; 2026 JBird Bikes. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>

      
    ` }} />
  );
}
