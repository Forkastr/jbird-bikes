"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, ShoppingCart, MapPin, ArrowRight, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-24">
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center max-w-md mx-auto">
        
        {/* Hero Image Section */}
        <div className="mb-8 w-full flex justify-center px-2">
          <img 
            src="/JBird Bikes Front.jpg" 
            alt="JBird Bikes Front" 
            className="w-full max-w-sm h-72 object-cover rounded-2xl shadow-2xl border-4 border-black/5" 
          />
        </div>

        {/* Branding */}
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-2 leading-none">JBird Bikes</h1>
        <p className="text-xl font-medium italic mb-8 opacity-60 leading-tight">
          Sales & Service <br /> On the Lafitte Greenway
        </p>

        {/* Contact CTA */}
        <a href="tel:5045216997" className="mb-12 w-full max-w-xs flex items-center justify-center gap-3 bg-black text-white px-6 py-5 rounded-2xl shadow-xl transform active:scale-95 transition-all hover:bg-zinc-800">
          <Phone size={24} fill="white" />
          <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1 opacity-70">Call or Text</p>
            <p className="text-xl font-black leading-none">(504) 521-6997</p>
          </div>
        </a>

        {/* Navigation Modules */}
        <div className="space-y-4 w-full text-left">
          {[
            { id: 'service', icon: Wrench, title: 'Repairs & Maintenance', sub: 'Free Diagnostic', url: '/repairs.html' },
            { id: 'sales', icon: ShoppingCart, title: 'Quality eBikes', sub: 'Authorized Gotrax Dealer', url: '/sales.html' },
            { id: 'assembly', icon: ArrowRight, title: 'eBike Assembly', sub: 'Professional Flat Rate', url: '/assembly.html' },
            { id: 'incentive', icon: MapPin, title: 'NOLA Incentive', sub: 'Up to $1,200 Off', url: '/nola-incentive.html' }
          ].map((item) => (
            <a key={item.id} href={item.url} className="block group">
              <Card className="bg-white border-2 border-black/5 shadow-sm overflow-hidden group-hover:border-black/20 group-hover:shadow-md transition-all duration-200">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <item.icon className="mb-3 opacity-80 text-black" size={28} />
                    <h2 className="text-xl font-black uppercase tracking-tight mb-0.5 text-black">{item.title}</h2>
                    <p className="text-sm font-bold text-black/40">{item.sub}</p>
                  </div>
                  <div className="bg-black text-white h-10 px-4 flex items-center rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Find Out More
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Location Footer */}
        <footer className="mt-20 pb-10 flex flex-col items-center opacity-30">
          <div className="flex items-center gap-2 font-black text-lg mb-1">
            <MapPin size={20} /> 
            <span>2336 St. Louis Street</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">Directly on the Greenway</p>
        </footer>

      </main>
    </div>
  );
}
