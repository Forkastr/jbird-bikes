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
  CheckCircle2
} from "lucide-react";

export default function HomePage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  const ContactButton = () => (
    <Button className="w-full mt-4 bg-[#1A1A1A] text-white font-bold uppercase tracking-widest text-xs py-4 hover:bg-black">
      Contact Us <ArrowRight className="ml-2" size={14} />
    </Button>
  );

  return (
    <div className="min-h-screen bg-[#FFD700] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#FFD700] pb-24">
      
      {/* SECTION 1: HERO */}
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center max-w-md mx-auto">
        
        <div className="w-24 h-24 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white/20">
          <Bike size={48} className="text-[#FFD700]" />
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 leading-none">
          JBird Bike Shop
        </h1>
        
        <p className="text-xl font-medium italic mb-10 opacity-90 leading-tight">
          The Place to Be <br />
          If You're Looking for...
        </p>

        {/* CORE OFFER CARDS */}
        <div className="space-y-6 w-full mb-12">
          
          {/* 1. SERVICE CARD (NOW FIRST) */}
          <Card className="bg-white/95 border-none shadow-lg transform active:scale-95 transition-transform overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 text-center" onClick={() => toggle('service')}>
                <Wrench className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                <h2 className="text-2xl font-black uppercase tracking-tight mb-1">Repairs & Maintenance</h2>
                <p className="text-lg font-bold text-green-700 mb-2">Free Diagnostic</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                  <span>Find Out More</span>
                  {expanded === 'service' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'service' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-4 animate-in slide-in-from-top-2">
                  <p className="text-lg font-bold mb-4 leading-tight">We Repair & Maintain ALL Bicycles and eBikes.</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center text-lg border-b border-black/5 pb-1">
                      <span className="font-bold">Single Repair</span>
                      <span className="font-black">$65+</span>
                    </div>
                    <div className="flex justify-between items-center text-lg border-b border-black/5 pb-1">
                      <span className="font-bold">Flat Tire</span>
                      <span className="font-black">$30+</span>
                    </div>
                    <div className="flex justify-between items-center text-lg border-b border-black/5 pb-1">
                      <span className="font-bold">Full Tune-Up</span>
                      <span className="font-black">$95</span>
                    </div>
                  </div>
                  <p className="text-sm font-bold opacity-70 italic mb-2">Other Services Available</p>
                  <ContactButton />
                </div>
              )}
            </CardContent>
          </Card>

          {/* 2. SALES CARD */}
          <Card className="bg-white/95 border-none shadow-lg transform active:scale-95 transition-transform overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 text-center" onClick={() => toggle('sales')}>
                <ShoppingCart className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                <h2 className="text-2xl font-black uppercase tracking-tight mb-1 leading-tight">Quality eBikes</h2>
                <p className="text-lg font-bold text-green-700 mb-2">Fully Assembled</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                  <span>Find Out More</span>
                  {expanded === 'sales' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'sales' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-4 animate-in slide-in-from-top-2">
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-2 text-lg font-bold leading-tight">
                      <CheckCircle2 size={20} className="text-green-600 mt-1 shrink-0" />
                      <span>Our Exclusive JBird Build</span>
                    </li>
                    <li className="flex items-start gap-2 text-lg font-bold leading-tight">
                      <CheckCircle2 size={20} className="text-green-600 mt-1 shrink-0" />
                      <span>UL Listed Components</span>
                    </li>
                    <li className="flex items-start gap-2 text-lg font-bold leading-tight">
                      <CheckCircle2 size={20} className="text-green-600 mt-1 shrink-0" />
                      <span>Many Extra Features Included</span>
                    </li>
                    <li className="flex items-start gap-2 text-lg font-bold leading-tight">
                      <CheckCircle2 size={20} className="text-green-600 mt-1 shrink-0" />
                      <span>Professional Support</span>
                    </li>
                  </ul>
                  <ContactButton />
                </div>
              )}
            </CardContent>
          </Card>

          {/* 3. ASSEMBLY CARD */}
          <Card className="bg-[#1A1A1A] text-white border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 text-center" onClick={() => toggle('assembly')}>
                <h2 className="text-xl font-black uppercase tracking-tight mb-2 text-[#FFD700]">Buy an eBike Online?</h2>
                <p className="text-lg leading-tight font-bold mb-2">We Assemble & Build It</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#FFD700]">
                  <span>Find Out More</span>
                  {expanded === 'assembly' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'assembly' && (
                <div className="px-6 pb-6 text-left border-t border-white/10 pt-4 animate-in slide-in-from-top-2">
                  <div className="bg-[#FFD700] text-[#1A1A1A] p-3 rounded-lg font-black text-lg mb-4 text-center">
                    Full Assembly with Extra Features: $135
                  </div>
                  <p className="text-lg font-bold leading-tight opacity-90 mb-4">
                    Online bikes often ship 85% assembled. We complete the critical 15%—tuning gears, torquing bolts, and stress-testing the battery for your safety.
                  </p>
                  <Button className="w-full bg-[#FFD700] text-[#1A1A1A] font-bold uppercase tracking-widest text-xs py-4 hover:bg-yellow-400">
                    Contact Us <ArrowRight className="ml-2" size={14} />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 4. INCENTIVE CARD */}
          <Card className="bg-white/95 border-2 border-[#1A1A1A] shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 text-center" onClick={() => toggle('nola')}>
                <Banknote className="mx-auto mb-3 text-green-600" size={32} />
                <h2 className="text-xl font-black uppercase tracking-tight mb-1 leading-none">
                  Get Up to $1,200 <br /> <span className="text-sm opacity-70 italic">To Buy Your eBike!</span>
                </h2>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60 mt-4">
                  <span>Find Out More</span>
                  {expanded === 'nola' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'nola' && (
                <div className="px-6 pb-6 text-left border-t border-black/5 pt-4 animate-in slide-in-from-top-2">
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-2 text-lg font-bold leading-tight">
                      <CheckCircle2 size={20} className="text-green-600 mt-1 shrink-0" />
                      <span>Availability is Limited</span>
                    </li>
                    <li className="flex items-start gap-2 text-lg font-bold leading-tight">
                      <CheckCircle2 size={20} className="text-green-600 mt-1 shrink-0" />
                      <span>Register Now for the Program</span>
                    </li>
                    <li className="flex items-start gap-2 text-lg font-bold leading-tight">
                      <CheckCircle2 size={20} className="text-green-600 mt-1 shrink-0" />
                      <span>We Handle All the Paperwork</span>
                    </li>
                  </ul>
                  <ContactButton />
                </div>
              )}
            </CardContent>
          </Card>

        </div>

        {/* TEST RIDE SECTION */}
        <section className="w-full py-10 px-6 bg-white rounded-3xl shadow-2xl text-center border-4 border-[#1A1A1A]">
          <Badge className="bg-green-600 text-white mb-4 animate-pulse">Limited Time Offer</Badge>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2 leading-none">
            Test-Ride <br /> <span className="text-2xl">Get $20</span>
          </h2>
          <p className="text-sm font-bold opacity-70 mb-8 italic">
            Toward any service or accessory.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {["XPeak 2.0", "Alpine Fat Tire", "XPpedition", "Gotrax Ranger"].map((name, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full aspect-square bg-slate-100 rounded-xl mb-2 flex items-center justify-center border border-black/5">
                   <Bike className="opacity-10 text-[#1A1A1A]" size={40} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter leading-none">{name}</span>
              </div>
            ))}
          </div>

          <Button 
            className="w-full py-8 text-2xl font-black uppercase tracking-widest bg-green-600 text-white hover:bg-green-700 shadow-lg active:scale-95 transition-all"
          >
            Claim It!
          </Button>
        </section>

        {/* WHY CHOOSE JBIRD (ACCORDION) */}
        <div className="w-full mt-10">
          <Card className="bg-transparent border-2 border-[#1A1A1A]/20 shadow-none overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 text-center" onClick={() => toggle('why')}>
                <h3 className="text-lg font-black uppercase tracking-widest">Why Choose JBird?</h3>
                <div className="flex items-center justify-center gap-2 text-xs font-bold opacity-50 mt-1">
                  {expanded === 'why' ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </div>
              </div>
              {expanded === 'why' && (
                <div className="px-6 pb-6 text-left border-t border-black/10 pt-4 animate-in slide-in-from-top-2">
                  <p className="text-md font-bold italic leading-tight opacity-80 mb-4">
                    "Our principle is simple: we invite our customers to come and test our ebikes, and purchase only after being satisfied."
                  </p>
                  <ul className="space-y-2 text-sm font-bold">
                    <li>• One-year warranty on all bikes sold</li>
                    <li>• Curated for reliability and quality</li>
                    <li>• Serving the Greenway community</li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* FOOTER */}
        <footer className="mt-16 pb-8 flex flex-col items-center">
          <div className="flex items-center gap-2 font-bold text-lg mb-2">
            <MapPin size={24} />
            <span>2336 St. Louis Street</span>
          </div>
          <p className="text-xs font-black bg-[#1A1A1A] text-[#FFD700] px-4 py-1 rounded-full uppercase tracking-widest">
            Directly on the Lafitte Greenway
          </p>
        </footer>

        {/* STICKY CONTACT */}
        <div className="w-full pt-8">
          <Button 
            className="w-full py-10 text-2xl font-black uppercase tracking-widest bg-[#1A1A1A] text-white hover:bg-black shadow-2xl group active:scale-[0.98] transition-all"
          >
            Contact Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

      </main>
    </div>
  );
}
