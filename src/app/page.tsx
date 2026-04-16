"use client";

import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, ShoppingCart, MapPin, Bike, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @font-face {
      font-family: 'Bugaki';
      src: url('https://fonts.cdnfonts.com/s/93123/Bugaki.woff') format('woff');
      font-weight: normal; font-style: normal; font-display: swap;
    }
    
    /* FORCE COLORS AND FONTS ON EVERYTHING */
    html, body, #__next, .forced-jbird-bg {
      background-color: #FEF9E7 !important;
      font-family: 'Bugaki', sans-serif !important;
      color: #1A1A1A !important;
    }

    /* THE TRADER JOE'S FIX */
    .google-map-embed {
      filter: saturate(1.2);
      border: 4px solid #1A1A1A;
      border-radius: 1.5rem;
    }
  `}} />
);

export default function HomePage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  return (
    <div className="forced-jbird-bg min-h-screen pb-24">
      <GlobalStyles />
            {/* SERVICE CARD */}
            <Card className="bg-white/95 border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 text-center cursor-pointer" onClick={() => toggle('service')}>
                  <Wrench className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-1">Repairs & Maintenance</h2>
                  <p className="text-lg font-bold text-green-700 mb-2">Free Diagnostic</p>
                  <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                    <span>View Rates</span>
                    {expanded === 'service' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
                {expanded === 'service' && (
                  <div className="px-6 pb-6 text-left border-t border-black/5 pt-6">
                    <p className="text-xl font-black mb-4 leading-tight">We Repair & Maintain <br /><span className="text-blue-700">All Bicycles and eBikes.</span></p>
                    <div className="space-y-3 mb-4 text-lg">
                      <div className="flex justify-between items-center border-b border-black/5 pb-2">
                        <span className="font-bold">Flat Tire</span><span className="font-black">$30 + parts</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-black/5 pb-2">
                        <span className="font-bold">Full Tune-Up</span><span className="font-black">$95</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* SALES CARD */}
            <Card className="bg-white/95 border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 text-center cursor-pointer" onClick={() => toggle('sales')}>
                  <ShoppingCart className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-1">Quality eBikes <br /> Affordable Prices</h2>
                  <p className="text-lg font-bold text-green-700 mb-2">Starting at $350</p>
                </div>
                {expanded === 'sales' && (
                  <div className="px-6 pb-6 text-left border-t border-black/5 pt-6">
                    <ul className="space-y-3 mb-4 text-lg font-bold leading-tight text-left">
                      <li>• Financing Available</li>
                      <li>• Ready to Ride</li>
                      <li>• UL Listed Safety Standards</li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* TEST RIDE SECTION */}
          <section className="w-full py-10 px-6 bg-white rounded-3xl shadow-xl text-center border-4 border-[#1A1A1A]">
            <Badge className="bg-green-600 text-white mb-4 animate-pulse">Limited Time Offer</Badge>
            <h2 className="text-3xl font-black uppercase mb-2 leading-tight">Test-Ride <br /> Get $20</h2>
            <div className="grid grid-cols-2 gap-4 mb-8 mt-6">
              {["Lectric XP 4.0", "Gotrax G3 Plus", "XPpedition", "Gotrax Ranger"].map((name, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-full aspect-square bg-slate-100 rounded-xl mb-2 flex items-center justify-center border border-black/5">
                    <Bike className="opacity-20 text-[#1A1A1A]" size={40} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-tighter leading-none">{name}</span>
                </div>
              ))}
            </div>
            <Button className="w-full py-8 text-2xl font-black uppercase bg-green-600 text-white shadow-lg">Claim It!</Button>
          </section>

          {/* THE TRADER JOE'S KILLER MAP */}
          <div className="map-container w-full">
           <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.6354!2d-90.088194!3d29.961139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620af0f8b809d43%3A0x7d6c62c938d67287!2sJBird%20Bikes!5e0!3m2!1sen!2sus!4v1713295800000!5m2!1sen!2sus" 
  className="google-map-embed w-full h-[300px]" 
  style={{ border: 0 }} 
  allowFullScreen={true} 
  loading="lazy"
></iframe>
          </div>

          <footer className="mt-16 pb-8 flex flex-col items-center">
            <div className="flex items-center gap-2 font-black text-xl mb-2"><MapPin size={24} /><span>2336 St. Louis Street</span></div>
            <p className="text-[10px] font-black bg-[#1A1A1A] text-[#FFD700] px-4 py-1 rounded-full uppercase tracking-widest">Directly on the Lafitte Greenway</p>
          </footer>
        </main>
      </div>
    </>
  );
}
