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
  ChevronUp 
} from "lucide-react";

export default function HomePage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  return (
    <div className="min-h-screen bg-[#FFD700] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#FFD700] pb-24">
      
      {/* SECTION 1: HERO & LOGO */}
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center max-w-md mx-auto">
        
        <div className="w-24 h-24 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white/20">
          <Bike size={48} className="text-[#FFD700]" />
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 leading-none">
          JBird Bike Shop
        </h1>
        
        <p className="text-xl font-medium italic mb-10 opacity-90">
          ...the Place to Be <br />
          If You're Looking for...
        </p>

        {/* CORE OFFER CARDS */}
        <div className="space-y-6 w-full mb-12">
          
          {/* SALES CARD */}
          <Card className="bg-white/95 border-none shadow-lg transform active:scale-95 transition-transform overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6" onClick={() => toggle('sales')}>
                <ShoppingCart className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                <h2 className="text-2xl font-bold mb-1 leading-tight">
                  Quality eBikes <br /> Affordable Prices
                </h2>
                <p className="text-lg font-semibold text-green-700 mb-2">Starting at $350</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                  <span>Find Out More</span>
                  {expanded === 'sales' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'sales' && (
                <div className="px-6 pb-6 text-sm text-left border-t border-black/5 pt-4 animate-in slide-in-from-top-2">
                  <p className="font-bold mb-2 uppercase tracking-tighter">Current Selection Includes:</p>
                  <ul className="list-disc pl-4 space-y-1 opacity-80">
                    <li>Commuter Bikes (Lectric/Gotrax)</li>
                    <li>Folding eBikes for easy storage</li>
                    <li>Fat-Tire Off-road models</li>
                    <li>Financing options available on-site</li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* SERVICE CARD */}
          <Card className="bg-white/95 border-none shadow-lg transform active:scale-95 transition-transform overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6" onClick={() => toggle('service')}>
                <Wrench className="mx-auto mb-3 text-[#1A1A1A]" size={32} />
                <h2 className="text-2xl font-bold mb-1">Service & Maintenance</h2>
                <p className="text-lg opacity-80 uppercase tracking-wide font-bold mb-2">Bicycles & eBikes</p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                  <span>Find Out More</span>
                  {expanded === 'service' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'service' && (
                <div className="px-6 pb-6 text-sm text-left border-t border-black/5 pt-4">
                   <div className="flex justify-between items-center mb-2">
                      <span className="font-bold uppercase tracking-tighter">Standard Tune-up</span>
                      <span className="font-black">$65</span>
                   </div>
                   <div className="flex justify-between items-center mb-4">
                      <span className="font-bold uppercase tracking-tighter">Flat Tire Repair</span>
                      <span className="font-black">$25 + Tube</span>
                   </div>
                   <p className="opacity-80">Expert care for all brands. We handle the technical stuff so you can enjoy the ride.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* ASSEMBLY CARD */}
          <Card className="bg-[#1A1A1A] text-white border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6" onClick={() => toggle('assembly')}>
                <h2 className="text-xl font-bold mb-2 text-[#FFD700]">Buy an eBike Online?</h2>
                <p className="text-lg leading-tight mb-2">
                  We Assemble & Build It <br /> 
                  <span className="text-sm opacity-80 italic font-medium">So you don't have to.</span>
                </p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#FFD700]">
                  <span>Find Out More</span>
                  {expanded === 'assembly' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'assembly' && (
                <div className="px-6 pb-6 text-sm text-left border-t border-white/10 pt-4">
                  <p className="font-bold mb-2 text-[#FFD700] uppercase tracking-tighter text-center italic">Ride with Peace of Mind</p>
                  <p className="opacity-80">Online bikes often ship 85% assembled. We complete the critical 15%—tuning gears, torquing bolts, and stress-testing the battery for your safety.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* INCENTIVE CARD */}
          <Card className="bg-white/95 border-2 border-[#1A1A1A] shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6" onClick={() => toggle('nola')}>
                <Banknote className="mx-auto mb-3 text-green-600" size={32} />
                <h2 className="text-xl font-bold mb-2">Get Up to $1,200 to Buy an eBike</h2>
                <p className="text-sm font-bold my-2 opacity-70 italic leading-none">Official Retailer:</p>
                <p className="text-lg font-black uppercase tracking-tight leading-none mb-3">
                  NOLA EBIKE <br /> 
                  <span className="text-2xl">INCENTIVE PROGRAM</span>
                </p>
                <div className="flex items-center justify-center gap-2 text-sm font-bold opacity-60">
                  <span>Find Out More</span>
                  {expanded === 'nola' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              {expanded === 'nola' && (
                <div className="px-6 pb-6 text-sm text-left border-t border-black/5 pt-4">
                  <p className="opacity-80">We are an authorized partner for the City of New Orleans eBike program. We can help you navigate the application and get the maximum discount on your new ride.</p>
                </div>
              )}
            </CardContent>
          </Card>

        </div>

        {/* SECTION 2: TEST RIDE & VOUCHER */}
        <section className="w-full py-10 px-6 bg-white rounded-3xl shadow-2xl text-center border-4 border-[#1A1A1A]">
          <Badge className="bg-green-600 text-white mb-4 animate-pulse">Limited Time Offer</Badge>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2 leading-none">
            Test-Ride a Bike <br /> <span className="text-2xl">Get a $20 Voucher</span>
          </h2>
          <p className="text-sm font-bold opacity-70 mb-8 italic">
            Valid toward any service or accessory.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { name: "XPeak 2.0" },
              { name: "Alpine Fat Tire" },
              { name: "XPpedition" },
              { name: "Gotrax Ranger" }
            ].map((bike, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full aspect-square bg-slate-100 rounded-xl mb-2 flex items-center justify-center">
                   <Bike className="opacity-20 text-[#1A1A1A]" size={40} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter leading-none">{bike.name}</span>
              </div>
            ))}
          </div>

          <Button 
            className="w-full py-8 text-xl font-black uppercase tracking-widest bg-green-600 text-white hover:bg-green-700 shadow-lg active:scale-95 transition-all"
          >
            Claim My $20 Voucher
          </Button>
        </section>

        {/* FOOTER & LOCATION */}
        <footer className="mt-16 pb-8 flex flex-col items-center">
          <div className="flex items-center gap-2 font-bold text-lg mb-2">
            <MapPin size={24} />
            <span>2336 St. Louis Street</span>
          </div>
          <p className="text-xs font-black bg-[#1A1A1A] text-[#FFD700] px-4 py-1 rounded-full uppercase tracking-widest">
            Directly on the Lafitte Greenway
          </p>
        </footer>

        {/* PERSISTENT CTA */}
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
