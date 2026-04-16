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
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function HomePage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FFD700] text-[#1A1A1A] font-sans pb-24">
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center max-w-md mx-auto">
        
        <div className="w-24 h-24 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white/20">
          <Bike size={48} className="text-[#FFD700]" />
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 leading-none">
          JBird Bike Shop
        </h1>
        
        <p className="text-xl font-medium italic mb-10 opacity-90 leading-tight">
          Sales & Service <br />
          On the Lafitte Greenway
        </p>

        <div className="space-y-6 w-full mb-12">
          
          {/* 1. SERVICE & MAINTENANCE */}
          <Card className="bg-white/95 border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => toggle('service')}>
                <Wrench className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                <h2 className="text-2xl font-black uppercase tracking-tight mb-1">Repairs & Maintenance</h2>
                <p className="text-lg font-bold text-green-700 mb-2">Free Diagnostic</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                  <span>View Rates</span>
                  {expanded === 'service' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'service' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-6 animate-in slide-in-from-top-2">
                  <p className="text-lg font-bold mb-4 leading-tight">We Repair & Maintain ALL Bicycles and eBikes.</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-lg border-b border-black/5 pb-2">
                      <span className="font-bold">Single Repair</span>
                      <span className="font-black text-xl">$65 + parts</span>
                    </div>
                    <div className="flex justify-between items-center text-lg border-b border-black/5 pb-2">
                      <span className="font-bold">Flat Tire</span>
                      <span className="font-black text-xl">$30 + parts</span>
                    </div>
                    <div className="flex justify-between items-center text-lg border-b border-black/5 pb-2">
                      <span className="font-bold">Full Tune-Up</span>
                      <span className="font-black text-xl">$95</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#1A1A1A] text-white font-black uppercase py-6">Contact Us <ArrowRight className="ml-2" size={16} /></Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 2. QUALITY EBIKES */}
          <Card className="bg-white/95 border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => toggle('sales')}>
                <ShoppingCart className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                <h2 className="text-2xl font-black uppercase tracking-tight mb-1">Quality eBikes</h2>
                <p className="text-lg font-bold text-green-700 mb-2">Fully Assembled</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                  <span>See Features</span>
                  {expanded === 'sales' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'sales' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-6">
                  <p className="text-lg font-black mb-4 uppercase text-center">New ebikes, Fully Assembled</p>
                  <ul className="space-y-3 mb-6 text-lg font-bold">
                    <li>• Our Exclusive JBird Build</li>
                    <li>• UL Listed for Safety</li>
                    <li>• Many Extra Features Included</li>
                    <li>• Professional Service</li>
                  </ul>
                  <Button className="w-full bg-[#1A1A1A] text-white font-black uppercase py-6">Contact Us <ArrowRight className="ml-2" size={16} /></Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 3. ONLINE ASSEMBLY */}
          <Card className="bg-[#1A1A1A] text-white border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => toggle('assembly')}>
                <h2 className="text-xl font-black uppercase mb-2 text-[#FFD700]">Buy an eBike Online?</h2>
                <p className="text-lg font-bold">We Assemble & Build It</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#FFD700] mt-2">
                  <span>Get Details</span>
                  {expanded === 'assembly' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'assembly' && (
                <div className="px-6 pb-6 text-left border-t border-white/10 pt-6">
                  <div className="bg-[#FFD700] text-[#1A1A1A] p-4 rounded-lg font-black text-xl mb-6 text-center">
                    Full Assembly: $135
                  </div>
                  <p className="text-lg font-bold mb-6">Online bikes ship 85% assembled. We complete the critical 15%—tuning gears and stress-testing the battery.</p>
                  <Button className="w-full bg-[#FFD700] text-[#1A1A1A] font-black uppercase py-6">Contact Us <ArrowRight className="ml-2" size={16} /></Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 4. INCENTIVE SECTION */}
          <Card className="bg-white/95 border-4 border-[#1A1A1A] shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 cursor-pointer" onClick={() => toggle('nola')}>
                <Banknote className="mx-auto mb-3 text-green-600" size={36} />
                <h2 className="text-2xl font-black uppercase tracking-tight mb-1">Get Up to $1,200</h2>
                <p className="text-lg font-bold uppercase italic">To Buy Your eBike!</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60 mt-4">
                  <span>How to Apply</span>
                  {expanded === 'nola' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'nola' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-6">
                  <div className="bg-[#1A1A1A] text-white p-4 rounded-lg mb-6 text-center">
                    <p className="text-xs uppercase font-black tracking-widest opacity-70 mb-1">Official Retailer</p>
                    <p className="text-xl font-black uppercase text-[#FFD700]">NOLA eBike Incentive Program</p>
                  </div>
                  <ul className="space-y-4 mb-6 text-lg font-bold">
                    <li>• Availability is Limited</li>
                    <li>• Register now for the City Program</li>
                    <li>• We handle the paperwork for you</li>
                  </ul>
                  <Button className="w-full bg-[#1A1A1A] text-white font-black uppercase py-6">Contact Us <ArrowRight className="ml-2" size={16} /></Button>
                </div>
              )}
            </CardContent>
          </Card>

        </div>

        {/* WHY CHOOSE JBIRD (10-POINT GUARANTEE) */}
        <div className="w-full mt-10">
          <Card className="bg-white/50 border-2 border-[#1A1A1A]/10 shadow-none overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 cursor-pointer" onClick={() => toggle('why')}>
                <h3 className="text-lg font-black uppercase tracking-widest">Why Choose JBird?</h3>
                <div className="flex items-center justify-center gap-2 text-xs font-bold opacity-50 mt-1">
                  {expanded === 'why' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </div>
              </div>
              {expanded === 'why' && (
                <div className="px-6 pb-6 text-left border-t border-black/10 pt-6">
                   <p className="text-md font-black uppercase tracking-widest mb-4 text-center text-blue-700 underline decoration-2">Our 10-Point Quality Guarantee:</p>
                   <ul className="space-y-3 mb-6 text-lg font-bold">
                    <li className="flex items-center gap-2"><CheckCircle2 size={18} /> Full Safety Inspection</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18} /> Brake Calibration</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18} /> Drivetrain Tuning</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18} /> Battery Street Test</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18} /> Test Ride Verified</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18} /> and more...</li>
                   </ul>
                   <Button className="w-full bg-[#1A1A1A] text-white font-black uppercase py-6">Contact Us</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* TEST RIDE SECTION */}
        <section className="w-full py-10 px-6 bg-white rounded-3xl shadow-2xl text-center border-4 border-[#1A1A1A] mt-12">
          <Badge className="bg-green-600 text-white mb-4 animate-pulse">Limited Time Offer</Badge>
          <h2 className="text-3xl font-black uppercase mb-2">Test-Ride Get $20</h2>
          <p className="text-sm font-bold opacity-70 mb-8 italic">Toward any service or accessory.</p>
          <Button className="w-full py-8 text-2xl font-black uppercase bg-green-600 text-white shadow-lg">Claim It!</Button>
        </section>

        {/* FOOTER */}
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
