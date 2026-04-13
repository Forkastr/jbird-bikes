"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Bike, ShieldCheck, MapPin, Star, ArrowRight, Play, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <div className="bg-primary text-primary-foreground p-1 rounded-lg">
            <Bike className="size-6" />
          </div>
          <span>JBird Bikes</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#bikes">Bikes</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Services</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-slate-50">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit mb-2 px-4 py-1">Now Open in New Orleans</Badge>
                  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 pb-2">
                    Premium Electric Bikes & Expert Service
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-lg xl:text-xl dark:text-gray-400">
                    Experience the future of urban mobility with JBird Bikes. Premium e-bikes, professional maintenance, and a community of riders.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button size="lg" className="gap-2">
                    Explore Inventory <ArrowRight className="size-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    Book a Service <Play className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-slate-200">
                  <img
                    alt="Premium Electric Bike"
                    className="aspect-video overflow-hidden rounded-2xl object-cover object-center w-full"
                    src="https://images.unsplash.com/photo-1571068316344-75bc76f77894?auto=format&fit=crop&q=80&w=800"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="bikes" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Best Sellers</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hand-picked performance e-bikes for every terrain and lifestyle.
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Urban Commuter Pro", price: "$2,499", range: "60 miles", speed: "28 mph" },
                { name: "Mountain Trail Elite", price: "$3,899", range: "45 miles", speed: "20 mph" },
                { name: "City Foldable X", price: "$1,799", range: "40 miles", speed: "20 mph" }
              ].map((bike, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + index}?auto=format&fit=crop&q=80&w=600`}
                      alt={bike.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-black border-none backdrop-blur shadow-sm">Featured</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-1">{bike.name}</CardTitle>
                        <CardDescription>Performance Hybrid</CardDescription>
                      </div>
                      <span className="font-bold text-primary">{bike.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Range</span>
                        <span className="font-semibold">{bike.range}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Top Speed</span>
                        <span className="font-semibold">{bike.speed}</span>
                      </div>
                    </div>
                    <Button className="w-full group/btn" variant="outline">
                      View Specs <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Built for the Long Ride</h2>
                <div className="space-y-6">
                  {[
                    { title: "Expert Mechanics", desc: "Certified technicians with decades of combined experience.", icon: ShieldCheck },
                    { title: "Premium Parts", desc: "We only use high-quality components from brands you trust.", icon: Star },
                    { title: "Mobile Service", desc: "Can't get to us? We'll bring the bike shop to your front door.", icon: MapPin }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="bg-primary/20 p-3 rounded-xl h-fit">
                        <feature.icon className="size-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                        <p className="text-slate-400">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="size-10 rounded-full border-2 border-slate-800 bg-slate-600 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-300 ml-2">Joined by 500+ local riders</span>
                </div>
                <blockquote className="text-xl italic text-slate-200 mb-6">
                  "JBird Bikes completely changed my commute. The service is fast, friendly, and they really know their electric systems."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold">M</div>
                  <div>
                    <div className="font-bold">Mike Harrison</div>
                    <div className="text-sm text-slate-400">New Orleans Resident</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t bg-slate-50">
        <div className="container px-4 md:px-6 text-center text-xs text-gray-400">
          <p>© 2026 JBird Bikes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
