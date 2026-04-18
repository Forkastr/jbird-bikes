export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `

     <!-- JBird Bikes Final Production Code -->
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
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            text-transform: uppercase;
            transition: transform 0.2s, box-shadow 0.2s;
            display: inline-block;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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

    <!-- HEADER -->
    <header class="bg-white border-b border-gray-200 py-6 px-8 flex flex-col items-center">
        <div class="flex justify-between items-center w-full max-w-7xl">
            <div class="text-3xl font-black italic tracking-tighter text-primary-green">JBird Bikes</div>
            <div class="text-center">
                <p class="text-lg font-bold uppercase tracking-widest text-gray-500">Call / Text</p>
                <a href="tel:5045216997" class="text-2xl font-black text-primary-blue hover:underline">(504) 521-6997</a>
            </div>
            <div class="w-12"></div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="relative h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden bg-black">
        <img src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=2070&auto=format&fit=crop" alt="Bike Shop Interior" class="absolute inset-0 w-full h-full object-cover opacity-60">
        <div class="relative z-10 max-w-4xl">
            <h1 class="text-7xl md:text-9xl text-accent-yellow mb-4 italic leading-tight">JBird Bikes</h1>
            <p class="text-3xl md:text-4xl text-accent-yellow font-bold mb-12 uppercase tracking-wide">Sales & Service<br>On the Lafitte Greenway</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="btn-contact text-2xl px-12 py-6">Contact Us</a>
        </div>
    </section>

    <!-- CORE OFFERINGS -->
    <main class="max-w-7xl mx-auto py-20 px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <!-- Repair & Maintenance -->
        <div class="bg-neutral-gray p-10 rounded-3xl flex flex-col justify-between">
            <div>
                <h2 class="text-4xl mb-6 text-primary-green">Repair & Maintenance for All Bikes</h2>
                <p class="text-xl mb-8 leading-relaxed"><li>Flat Fee on All Repairs
</li> </p>
                <p class="font-bold text-gray-600 mb-4 italic">Free Diagnostic</p>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="btn-contact self-start mt-8">Contact Us</a>
        </div>

        <!-- Quality eBike Sales -->
        <div class="bg-primary-blue p-10 rounded-3xl text-white flex flex-col justify-between">
            <div>
                <h2 class="text-4xl mb-6">Quality eBikes Sales<br>Affordable Prices</h2>
                <p class="text-xl mb-8 leading-relaxed">Engineered for NOLA streets. Durable, stylish, and powerful. Affordable quality without the compromise.</p>
                
                <div class="accordion-item border-t border-blue-400 pt-4">
                    <div class="flex justify-between items-center cursor-pointer mb-2">
                        <span class="font-bold uppercase tracking-widest">See Features</span>
                        <span>↓</span>
                    </div>
                    <ul class="accordion-content list-disc pl-5 space-y-2 opacity-90">
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

        <!-- Buy Online - We Build It -->
        <div class="bg-neutral-gray p-10 rounded-3xl flex flex-col justify-between">
            <div>
                <h2 class="text-4xl mb-6 text-primary-green">Buy Online – We Build It</h2>
                <p class="text-xl mb-8 leading-relaxed">Don't struggle with a box in your living room. Order online and pick it up professionally assembled and safety-checked.</p>
                
                <div class="accordion-item border-t border-gray-400 pt-4">
                    <div class="flex justify-between items-center cursor-pointer mb-2">
                        <span class="font-bold uppercase tracking-widest">Get Details</span>
                        <span>↓</span>
                    </div>
                    <ul class="accordion-content list-disc pl-5 space-y-2 text-gray-700">
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
        <div class="bg-primary-green p-10 rounded-3xl text-white flex flex-col justify-between relative overflow-hidden">
            <div class="relative z-10">
                <h2 class="text-4xl mb-6">NOLA eBike Incentive</h2>
                <p class="text-5xl font-black mb-8">Get up to $1,200 to buy an eBike</p>
                
                <div class="accordion-item border-t border-green-400 pt-4">
                    <div class="flex justify-between items-center cursor-pointer mb-2">
                        <span class="font-bold uppercase tracking-widest">View Details</span>
                        <span>↓</span>
                    </div>
                    <ul class="accordion-content list-disc pl-5 space-y-2 opacity-90">
                        <li>Availability is Limited</li>
                        <li>Get Your Application In</li>
                        <li>We Handle All the Paperwork for You</li>
                    </ul>
                </div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="btn-contact self-start mt-8">Contact Us</a>
        </div>

        <!-- Test-Ride Section -->
        <div class="md:col-span-2 bg-accent-yellow p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-primary-green">
            <div class="text-center md:text-left">
                <h2 class="text-5xl mb-4 text-primary-green">Test-Ride an eBike</h2>
                <p class="text-3xl font-bold text-primary-blue mb-2 italic">Get a 20-dollar Voucher</p>
                <p class="text-xl font-bold uppercase tracking-widest text-primary-green opacity-70">Limited Time Offer</p>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="btn-contact bg-primary-green text-accent-yellow text-3xl px-12 py-8 hover:bg-green-800">Contact Us</a>
        </div>

    </main>

    <!-- VISIT US SECTION (Map) -->
    <section class="bg-white py-20 px-8">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-6xl text-center mb-16 text-primary-green">Visit Us On The Greenway</h2>
            <div class="rounded-3xl overflow-hidden shadow-2xl border-8 border-neutral-gray">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4573444586567!2d-90.08376382609781!3d29.966283822272693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a5bd54333c35%3A0x53d82eb12f09b98b!2sJBird%20Bike%20Shop!5e0!3m2!1sen!2sus!4v1776541031107!5m2!1sen!2sus" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-neutral-gray py-20 px-8 border-t border-gray-300 flex flex-col items-center text-center">
        <div class="max-w-7xl w-full">
            <div class="text-6xl font-black italic tracking-tighter text-primary-green mb-10">JBird Bikes</div>
            
            <div class="mb-12">
                <p class="text-3xl font-bold uppercase tracking-widest text-gray-500 mb-2">Call / Text</p>
                <a href="tel:5045216997" class="text-5xl font-black text-primary-blue hover:underline">(504) 521-6997</a>
            </div>

            <div class="flex justify-center gap-10 mb-16">
                <a href="https://jbirdbikes.com/" class="opacity-70 hover:opacity-100 transition-opacity"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" class="w-12 h-12"></a>
                <a href="https://jbirdbikes.com/" class="opacity-70 hover:opacity-100 transition-opacity"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" class="w-12 h-12"></a>
                <a href="https://jbirdbikes.com/" class="opacity-70 hover:opacity-100 transition-opacity"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" class="w-12 h-12"></a>
                <a href="https://jbirdbikes.com/" class="opacity-70 hover:opacity-100 transition-opacity"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" class="w-12 h-12"></a>
            </div>

            <div class="space-y-4 text-gray-600 font-bold">
                <p class="text-2xl">On the Lafitte Greenway, New Orleans</p>
                <div class="flex justify-center gap-8 text-lg uppercase tracking-widest mt-8">
                    <a href="https://jbirdbikes.com/" class="hover:text-primary-blue">Privacy Policy</a>
                    <a href="https://jbirdbikes.com/" class="hover:text-primary-blue">Terms</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" class="text-primary-green hover:underline">Contact Us</a>
                </div>
                <p class="text-sm mt-12 opacity-50">&copy; 2026 JBird Bikes. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>
    ` }} />
  );
}
