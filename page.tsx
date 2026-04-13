"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Bike,
  Wrench,
  Settings,
  Gift,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  DollarSign,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 bg-primary rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
              <Bike className="w-8 h-8 text-white -rotate-3 group-hover:rotate-0 transition-transform" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tighter text-white block leading-none">JBIRD</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Bike Shop</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#ebikes" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">eBikes</a>
            <a href="#repairs" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">Repairs</a>
            <a href="#nola" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">NOLA Program</a>
            <Button className="rounded-full px-6">Visit Shop</Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <Badge className="mb-4 py-1 px-4 text-sm bg-primary/20 text-primary border-primary/30">
            Now Open on the Lafitte Greenway
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
            NEW ORLEANS' <span className="text-primary italic">PREMIUM</span> E-BIKE SHOP
          </h1>
          <p className="text-xl text-white/60 mb-8 max-w-xl leading-relaxed">
            Your neighborhood experts for eBike sales, expert repairs, and certified NOLA eBike Voucher fulfillment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full">
              Book a Repair
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/10 hover:bg-white/5">
              Browse Inventory
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navigation />
      <main>
        <Hero />
      </main>
      
      <footer className="bg-black py-12 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Bike className="w-8 h-8 text-primary" />
                <span className="text-2xl font-black text-white italic">JBIRD</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Premium electric bikes and expert service on the Lafitte Greenway.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#ebikes" className="hover:text-primary transition-colors">eBikes</a></li>
                <li><a href="#repairs" className="hover:text-primary transition-colors">Expert Repairs</a></li>
                <li><a href="#nola" className="hover:text-primary transition-colors">NOLA Program</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Visit Us</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Lafitte Greenway, New Orleans, LA</li>
                <li>(504) 555-BIKE</li>
                <li>hello@jbirdbikes.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/40 text-xs">© 2024 JBird Bike Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
