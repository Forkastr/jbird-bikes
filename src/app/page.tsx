"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, ShoppingCart, MapPin, ArrowRight, Menu, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* The Correct Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/JBird Bikes Front.jpg" 
          alt="JBird Bikes Shop Front" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
      </div>

      {/* Your Original Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-8">
        <div className="text-3xl font-black italic tracking-tighter text-white">JBIRD</div>
        <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/10">
          <Menu size={28} className="text-white" />
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center px-6 pt-8 pb-24 max-w-md mx-auto">
        {/* Hero Branding */}
        <div className="text-center mb-10">
          <h1 className="text-7xl font-black uppercase tracking-tighter mb-2 leading-[0.8] text-white drop-shadow-2xl">
            JBIRD<br/>BIKES
          </h1>
          <p className="text-lg font-bold italic opacity-80 text-white tracking-tight mt-4">
            Sales & Service <br /> On the Lafitte Greenway
          </p>
        </div>

        {/* Call/Text CTA */}
        <a href="tel:5045216997" className="w-full mb-10 bg-white text-black py-5 rounded-2xl flex items-center justify-center gap-4 shadow-2xl hover:scale-[1.02] transition-transform">
          <Phone size={24} fill="black" />
          <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1 opacity-50">Call / Text</p>
            <p className="text-2xl font-black leading-none">(504) 521-6997</p>
          </div>
        </a>

        {/* The Modules (Surgically Fixed: No Accordions) */}
        <div className="space-y-4 w-full">
          {[
            { id: 'service', icon: Wrench, title: 'Repairs & Maintenance', sub: 'Free Diagnostic', url: '/repairs.html' },
            { id: 'sales', icon: ShoppingCart, title: 'Quality eBikes', sub: 'Authorized Gotrax Dealer', url: '/sales.html' },
            { id: 'assembly', icon: ArrowRight, title: 'eBike Assembly', sub: 'Flat Rate $135', url: '/assembly.html' },
            { id: 'incentive', icon: MapPin, title: 'NOLA Incentive', sub: 'Up to $1,200 Off', url: '/nola-incentive.html' }
          ].map((item) => (
            <a key={item.id} href={item.url} className="block group">
              <Card className="bg-black/30 backdrop-blur-xl border border-white/10 group-hover:border-white/40 transition-all duration-300">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <item.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black uppercase tracking-tight text-white leading-none mb-1">{item.title}</h2>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                  <div className="bg-white text-black p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={20} />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <footer className="mt-16 text-center opacity-40">
          <div className="flex items-center justify-center gap-2 font-black text-sm mb-1">
            <MapPin size={16} />
            <span className="uppercase tracking-widest">2336 St. Louis Street</span>
          </div>
          <p className="text-[10px] font-bold italic">New Orleans, LA — Greenway Access</p>
        </footer>
      </main>
    </div>
  );
}
