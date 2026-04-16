"use client";

import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  ShoppingCart, 
  Banknote, 
  MapPin, 
  Bike, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";

export default function HomePage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FFD700] text-[#1A1A1A] font-sans pb-24">
      <main className="flex flex-col items-center px-6 py-12 text-center max-w-md mx-auto">
        
        <div className="w-24 h-24 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white/20">
          <Bike size={48} className="text-[#FFD700]" />
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 leading-none">
          JBird Bike Shop
        </h1>
        
        <p className="text-xl font-medium italic mb-10 opacity-90 leading-tight">
          ...the Place to Be <br />
          If You're Looking for...
        </p>

        <div className="space-y-6 w-full mb-12">
          
          {/* SERVICE */}
          <Card className="bg-white/95 border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => setOpen(open === 'svc' ? null : 'svc')}>
                <Wrench className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                <h2 className="text-2xl font-bold mb-1 uppercase tracking-tight">Service & Maintenance</h2>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                  <span>{open === 'svc' ? 'Close' : 'Find Out More'}</span>
                  {open === 'svc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {open === 'svc' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-4">
                   <p className="text-lg font-bold mb-4 italic text-green-700">Free Diagnostic</p>
                   <div className="space-y-2 mb-6 text-lg font-bold">
                      <div className="flex justify-between border-b pb-1"><span>Single Repair</span><span>$65+</span></div>
                      <div className="flex justify-between border-b pb-1"><span>Flat</span><span>$30+</span></div>
                      <div className="flex justify-between border-b pb-1"><span>Full Tune-Up</span><span>$95</span></div>
                   </div>
                   <Button className="w-full bg-[#1A1A1A] text-white font-black py-6">CONTACT US</Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* SALES */}
          <Card className="bg-white/95 border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => setOpen(open === 'sale' ? null : 'sale')}>
                <ShoppingCart className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                <h2 className="text-2xl font-bold mb-1 uppercase tracking-tight">Quality eBikes</h2>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                  <span>{open === 'sale' ? 'Close' : 'Find Out More'}</span>
                  {open === 'sale' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {open === 'sale' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-4 text-lg font-bold">
                  <p className="mb-2">• New ebikes, Fully Assembled</p>
                  <p className="mb-2">• Our Exclusive JBird Build</p>
                  <p className="mb-6">• UL Listed</p>
                  <Button className="w-full bg-[#1A1A1A] text-white font-black py-6">CONTACT US</Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* ASSEMBLY */}
          <Card className="bg-[#1A1A1A] text-white border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => setOpen(open === 'asm' ? null : 'asm')}>
                <h2 className="text-xl font-black uppercase mb-1 text-[#FFD700]">Buy an eBike Online?</h2>
                <p className="text-lg font-bold">We Assemble It</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#FFD700] mt-2">
                  <span>{open === 'asm' ? 'Close' : 'Find Out More'}</span>
                  {open === 'asm' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {open === 'asm' && (
                <div className="px-6 pb-6 text-left border-t border-white/10 pt-4">
                  <p className="text-xl font-black mb-6 text-[#FFD700]">Full Assembly: $135</p>
                  <Button className="w-full bg-[#FFD700] text-[#1A1A1A] font-black py-6">CONTACT US</Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* INCENTIVE */}
          <Card className="bg-white/95 border-2 border-[#1A1A1A] shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => setOpen(open === 'nola' ? null : 'nola')}>
                <Banknote className="mx-auto mb-3 text-green-600" size={32} />
                <h2 className="text-xl font-bold uppercase leading-tight italic">Get Up to $1,200 <br />To Buy Your eBike!</h2>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60 mt-3">
                  <span>{open === 'nola' ? 'Close' : 'Find Out More'}</span>
                  {open === 'nola' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {open === 'nola' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-4 text-lg font-bold">
                  <p className="text-xs uppercase mb-1 opacity-60">Official Retailer:</p>
                  <p className="mb-4 text-xl font-black uppercase tracking-tighter leading-none">NOLA eBike <br />Incentive Program</p>
                  <ul className="space-y-2 mb-6 text-base opacity-80">
                    <li>• Availability is Limited</li>
                    <li>• Register Now for the Program</li>
                    <li>• We Handle All the Paperwork</li>
                  </ul>
                  <Button className="w-full bg-[#1A1A1A] text-white font-black py-6">CONTACT US</Button>
                </div>
              )}
            </CardContent>
          </Card>

        </div>

        {/* GUARANTEE */}
        <div className="w-full mt-4">
          <Card className="bg-transparent border-2 border-[#1A1A1A]/10 shadow-none overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 cursor-pointer" onClick={() => setOpen(open === 'why' ? null : 'why')}>
                <h3 className="text-lg font-black uppercase tracking-widest">Why Choose JBird?</h3>
                <div className="flex justify-center mt-1">
                  {open === 'why' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {open === 'why' && (
                <div className="px-6 pb-6 text-left border-t border-black/10 pt-4 text-lg font-bold">
                   <p className="text-sm uppercase mb-4 text-center text-blue-700 font-black">10-Point Quality Guarantee</p>
                   <ul className="space-y-1 mb-6 text-base opacity-80">
                    <li>• Full Safety Inspection</li>
                    <li>• Brake Calibration</li>
                    <li>• Drivetrain Tuning</li>
                    <li>• Battery Street Test</li>
                    <li>• Test Ride Verified</li>
                    <li>• and more...</li>
                   </ul>
                   <Button className="w-full bg-[#1A1A1A] text-white font-black py-6">CONTACT US</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* TEST RIDE */}
        <section className="w-full py-10 px-6 bg-white rounded-3xl shadow-xl text-center border-4 border-[#1A1A1A] mt-12">
          <h2 className="text-3xl font-black uppercase mb-2">Test-Ride <br /> Get $20</h2>
          <p className="text-sm font-bold opacity-70 mb-8 italic text-red-600 uppercase tracking-widest">Limited Time Offer</p>
          <Button className="w-full py-8 text-2xl font-black uppercase bg-green-600 text-white shadow-lg">Claim It!</Button>
        </section>

        {/* ADDRESS */}
        <footer className="mt-16 pb-8 flex flex-col items-center">
          <div className="flex items-center gap-2 font-black text-xl mb-2">
            <MapPin size={24} />
            <span>2336 St. Louis Street</span>
          </div>
          <p className="text-[10px] font-black bg-[#1A1A1A] text-[#FFD700] px-4 py-1 rounded-full uppercase tracking-widest">Directly on the Lafitte Greenway</p>
        </footer>

      </main>
    </div>
  );
}
