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
  CheckCircle2,
  Clock
} from "lucide-react";

export default function HomePage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  const ContactButton = () => (
    <Button className="w-full mt-6 bg-[#1A1A1A] text-white font-black uppercase tracking-widest text-base py-7 hover:bg-black shadow-xl active:scale-95 transition-all">
      Contact Us <ArrowRight className="ml-2" size={18} />
    </Button>
  );

  return (
    <div className="min-h-screen bg-[#FFD700] text-[#1A1A1A] font-sans pb-12">
      
      {/* 1. HERO SECTION: REAL SHOP IMAGE */}
      <section className="relative w-full h-[40vh] bg-black overflow-hidden">
        <img 
          src="/shop-front.jpg" 
          alt="JBird Bikes Shop Front" 
          className="w-full h-full object-cover opacity-80"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=1000";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700] via-transparent to-transparent" />
        <div className="absolute bottom-6 left-0 right-0 text-center px-6">
          <h1 className="text-5xl font-black uppercase tracking-tighter leading-none drop-shadow-md">
            JBird Bikes
          </h1>
          <p className="text-lg font-bold italic mt-1 opacity-90">At the Lafitte Greenway</p>
        </div>
      </section>

      {/* 2. CORE OFFERS: ALTERNATING BACKGROUNDS */}
      <main className="max-w-md mx-auto px-6 -mt-4 relative z-10 space-y-8">
        
        {/* REPAIRS (Lighter Yellow Background) */}
        <section className="bg-[#FFF4B0] p-1 rounded-3xl shadow-xl">
          <Card className="bg-white/90 border-none overflow-hidden rounded-[22px]">
            <CardContent className="p-0">
              <div className="p-8 text-center cursor-pointer" onClick={() => toggle('service')}>
                <Wrench className="mx-auto mb-4 text-[#1A1A1A]" size={40} />
                <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Repairs</h2>
                <Badge variant="outline" className="border-green-600 text-green-700 font-bold px-4">Free Diagnostic</Badge>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-40 mt-6 uppercase tracking-widest">
                  {expanded === 'service' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              {expanded === 'service' && (
                <div className="px-8 pb-8 text-left border-t border-black/5 pt-8 animate-in slide-in-from-top-4 duration-300">
                  <p className="text-xl font-bold mb-6 leading-tight">We Maintain ALL Bicycles and eBikes.</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center text-xl border-b-2 border-black/5 pb-2">
                      <span className="font-bold">Single Repair</span>
                      <span className="font-black">$65+</span>
                    </div>
                    <div className="flex justify-between items-center text-xl border-b-2 border-black/5 pb-2">
                      <span className="font-bold">Flat Tire</span>
                      <span className="font-black">$30+</span>
                    </div>
                    <div className="flex justify-between items-center text-xl border-b-2 border-black/5 pb-2">
                      <span className="font-bold">Full Tune-Up</span>
                      <span className="font-black">$95</span>
                    </div>
                  </div>
                  <ContactButton />
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* INCENTIVE SECTION (High Contrast) */}
        <section className="bg-[#1A1A1A] p-1 rounded-3xl shadow-2xl">
          <Card className="bg-[#1A1A1A] text-white border-none overflow-hidden rounded-[22px]">
            <CardContent className="p-0">
              <div className="p-8 text-center cursor-pointer" onClick={() => toggle('nola')}>
                <Banknote className="mx-auto mb-4 text-[#FFD700]" size={40} />
                <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-[#FFD700]">Get $1,200</h2>
                <p className="text-lg font-bold opacity-80 uppercase tracking-tighter">Official NOLA Retailer</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#FFD700] mt-6 uppercase tracking-widest">
                  {expanded === 'nola' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              {expanded === 'nola' && (
                <div className="px-8 pb-8 text-left border-t border-white/10 pt-8 animate-in slide-in-from-top-4">
                  <div className="space-y-5 mb-6">
                    <div className="flex gap-4">
                      <div className="bg-[#FFD700] text-[#1A1A1A] rounded-full w-10 h-10 flex items-center justify-center font-black shrink-0">1</div>
                      <p className="text-xl font-bold leading-tight">Availability is Limited — First Come, First Served.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-[#FFD700] text-[#1A1A1A] rounded-full w-10 h-10 flex items-center justify-center font-black shrink-0">2</div>
                      <p className="text-xl font-bold leading-tight">Register now for the City Program.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-[#FFD700] text-[#1A1A1A] rounded-full w-10 h-10 flex items-center justify-center font-black shrink-0">3</div>
                      <p className="text-xl font-bold leading-tight">We handle all the paperwork.</p>
                    </div>
                  </div>
                  <Button className="w-full bg-[#FFD700] text-[#1A1A1A] font-black uppercase tracking-widest text-base py-7 hover:bg-yellow-400 shadow-xl">
                    Check Eligibility <ArrowRight className="ml-2" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* QUALITY GUARANTEE (Lighter Shade 2) */}
        <section className="bg-[#FFE55C] p-1 rounded-3xl shadow-xl">
          <Card className="bg-white/90 border-none overflow-hidden rounded-[22px]">
            <CardContent className="p-0">
              <div className="p-8 text-center cursor-pointer" onClick={() => toggle('why')}>
                <ShieldCheck className="mx-auto mb-4 text-blue-600" size={40} />
                <h3 className="text-2xl font-black uppercase tracking-widest">10-Point Guarantee</h3>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-40 mt-6 tracking-widest">
                  {expanded === 'why' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              {expanded === 'why' && (
                <div className="px-8 pb-8 text-left border-t border-black/10 pt-8">
                   <div className="grid grid-cols-1 gap-4 mb-6">
                    {[
                      "Full Safety Inspection",
                      "Brake Calibration",
                      "Drivetrain Tuning",
                      "Battery Street Test",
                      "Test Ride Verified"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <CheckCircle2 className="text-green-600 shrink-0" size={24} />
                        <span className="text-xl font-bold leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                  <ContactButton />
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* 3. GOOGLE MAP SECTION */}
        <section className="mt-12 bg-white p-2 rounded-3xl shadow-2xl border-4 border-[#1A1A1A]">
          <div className="p-4 flex items-center gap-3">
             <MapPin className="text-red-600" size={24} />
             <span className="font-black uppercase tracking-tight text-lg">Visit the Shop</span>
          </div>
          <div className="w-full h-64 rounded-2xl overflow-hidden bg-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.666!2d-90.082!3d29.967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620af1e3!2s2336%20St%20Louis%20St%2C%20New%20Orleans%2C%20LA%2070119!5e0!3m2!1sen!2sus!4v1700000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-lg font-black uppercase">2336 St. Louis Street</p>
            <p className="text-sm font-bold opacity-60">New Orleans, LA 70119</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-green-700 font-black uppercase text-xs tracking-widest bg-green-50 py-2 rounded-full">
               <Clock size={14} /> Open Daily for Service
            </div>
          </div>
        </section>

      </main>

      {/* FINAL STICKY CALL TO ACTION */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#FFD700] to-transparent pointer-events-none">
        <Button className="w-full py-8 text-2xl font-black uppercase tracking-widest bg-[#1A1A1A] text-white hover:bg-black shadow-[0_-10px_40px_rgba(0,0,0,0.3)] pointer-events-auto active:scale-95 transition-all">
          Text Us Now
        </Button>
      </div>

    </div>
  );
}
