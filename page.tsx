"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, ShoppingCart, MapPin, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-24">
      <main className="flex flex-col items-center justify-center px-6 py-12 text-center max-w-md mx-auto">
        
        <div className="mb-8 w-full flex justify-center px-2">
          <img 
            src="/JBird Bikes Front.jpg" 
            alt="JBird Bikes Front" 
            className="w-full max-w-sm h-64 object-cover rounded-2xl shadow-2xl border-4 border-black/5" 
          />
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 leading-none">JBird Bikes</h1>
        <p className="text-xl font-medium italic mb-6 opacity-60 leading-tight">Sales & Service <br /> On the Lafitte Greenway</p>

        <a href="tel:5045216997" className="mb-10 inline-block bg-black text-white px-8 py-4 rounded-xl shadow-lg transform active:scale-95 transition-transform">
          <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-70">Call / Text</p>
          <p className="text-2xl font-black">(504) 521-6997</p>
        </a>

        {/* Updated Modules Section */}
        <div className="space-y-6 w-full mb-12 text-left">
          {[
            { id: 'service', icon: Wrench, title: 'Repairs & Maintenance', sub: 'Free Diagnostic', url: '/repairs.html' },
            { id: 'sales', icon: ShoppingCart, title: 'Quality eBikes', sub: 'Gotrax Inventory', url: '/sales.html' },
            { id: 'assembly', icon: ArrowRight, title: 'eBike Assembly', sub: 'Flat Rate $135', url: '/assembly.html' },
            { id: 'incentive', icon: MapPin, title: 'NOLA Incentive', sub: 'Up to $1,200 Off', url: '/nola-incentive.html' }
          ].map((item) => (
            <Card key={item.id} className="bg-white border-2 border-black/5 shadow-sm overflow-hidden hover:border-black/20 transition-colors">
              <CardContent className="p-0">
                <a href={item.url} className="p-6 block no-underline">
                  <item.icon className="mb-3 opacity-80 text-black" size={32} />
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-1 text-black">{item.title}</h2>
                  <p className="text-lg font-bold text-black/60 mb-4">{item.sub}</p>
                  <div className="inline-block bg-black text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest">
                    Find Out More
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="mt-16 pb-8 flex flex-col items-center opacity-40">
          <div className="flex items-center gap-2 font-black text-xl mb-2">
            <MapPin size={24} /> 
            <span>2336 St. Louis Street</span>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest">Directly on the Lafitte Greenway</p>
        </footer>

      </main>
    </div>
  );
}
