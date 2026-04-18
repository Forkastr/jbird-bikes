export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>JBird Bikes - Sales & Service</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;900&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
          <style>
              body { font-family: 'Space Grotesk', sans-serif; background-color: #191a1f; color: white; margin: 0; }
              h1, h2, h3 { font-family: 'Epilogue', sans-serif; font-weight: 900; text-transform: uppercase; letter-spacing: -0.05em; }
              .accent-yellow { color: #FFD700; }
              .bg-yellow { background-color: #FFD700; color: #008000; }
              .btn-contact { font-family: 'Epilogue', sans-serif; font-weight: 900; text-transform: uppercase; transition: all 0.2s; }
              .btn-contact:hover { transform: scale(1.05); }
          </style>
      </head>
      <body>
          <div class="min-h-screen flex flex-col items-center justify-center p-6 text-center">
              <h1 class="text-6xl md:text-8xl accent-yellow italic mb-4">JBird Bikes</h1>
              <p class="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-widest">Sales & Service on the Greenway</p>
              
              <div class="bg-yellow p-8 rounded-3xl border-4 border-green-700 max-w-lg">
                  <h2 class="text-4xl mb-2">Test-Ride an eBike</h2>
                  <p class="text-2xl font-black mb-4">Get a 20-dollar Voucher</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3jjkIX_bqHy_3Vnk3t-UKb5kh8UWBOM6wAUOYzu3hFzME4w/viewform?usp=header" 
                     class="btn-contact bg-green-800 text-white px-8 py-4 rounded-xl inline-block mt-4">Contact Us</a>
              </div>

              <div class="mt-12 space-y-4 opacity-70 uppercase tracking-tighter">
                  <p>On the Lafitte Greenway, New Orleans</p>
                  <a href="tel:5045216997" class="text-3xl font-black block">(504) 521-6997</a>
              </div>
          </div>
      </body>
      </html>
    ` }} />
  );
}
