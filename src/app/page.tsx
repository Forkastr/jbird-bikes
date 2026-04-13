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
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <Bike className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">JBird</span>
              <span className="text-xs text-primary font-semibold -mt-1">BIKE SHOP</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#ebikes" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              eBikes
            </a>
            <a href="#repairs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Repairs
            </a>
            <a href="#assembly" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Assembly
            </a>
            <a href="#nola" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              NOLA Program
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <TestRideDialog />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a href="#ebikes" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                eBikes
              </a>
              <a href="#repairs" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Repairs
              </a>
              <a href="#assembly" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Assembly
              </a>
              <a href="#nola" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                NOLA Program
              </a>
              <TestRideDialog />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Test Ride Dialog Component
function TestRideDialog() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="gap-2">
          <Calendar className="w-4 h-4" />
          Test Ride
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Schedule Your Test Ride</DialogTitle>
          <DialogDescription>
            Come try before you buy! Test ride any of our eBikes at our shop on the Lafitte Greenway.
          </DialogDescription>
        </DialogHeader>
        {!submitted ? (
          <form
            className="space-y-4 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First Name" required />
              <Input placeholder="Last Name" required />
            </div>
            <Input type="email" placeholder="Email Address" required />
            <Input type="tel" placeholder="Phone Number" required />
            <Input type="date" required />
            <select className="flex h-12 w-full rounded-xl border-2 border-input bg-background px-4 py-2 text-base shadow-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option value="">Which bike interests you?</option>
              <option value="any">Any available bike</option>
              <option value="specific">Specific model</option>
            </select>
            <Textarea placeholder="Any questions or preferences?" />
            <Button type="submit" className="w-full" size="lg">
              Schedule Test Ride
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Request Received!</h3>
            <p className="text-muted-foreground">
              We will contact you shortly to confirm your test ride appointment.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Diagnostic Dialog Component
function DiagnosticDialog() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          Schedule Diagnostic
          <ArrowRight className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Schedule Your Free Diagnostic</DialogTitle>
          <DialogDescription>
            Bring your bike or eBike in for a free diagnostic. We'll identify the issue and provide a detailed estimate.
          </DialogDescription>
        </DialogHeader>
        {!submitted ? (
          <form
            className="space-y-4 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <Input placeholder="Name" required />
            <Input type="email" placeholder="Email Address" required />
            <Input type="tel" placeholder="Phone Number" required />
            <select className="flex h-12 w-full rounded-xl border-2 border-input bg-background px-4 py-2 text-base shadow-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option value="">Bike Type</option>
              <option value="ebike">eBike</option>
              <option value="regular">Regular Bike</option>
            </select>
            <Textarea placeholder="Describe the issue or what needs attention" required />
            <Button type="submit" className="w-full" size="lg">
              Request Diagnostic
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Request Received!</h3>
            <p className="text-muted-foreground">
              We'll contact you to schedule your free diagnostic.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Assembly Dialog Component
function AssemblyDialog() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="gap-2">
          Check Eligibility
          <ArrowRight className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>eBike Assembly Eligibility</DialogTitle>
          <DialogDescription>
            Tell us about your bike and we'll let you know if we can assemble it professionally.
          </DialogDescription>
        </DialogHeader>
        {!submitted ? (
          <form
            className="space-y-4 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <Input placeholder="Name" required />
            <Input type="email" placeholder="Email Address" required />
            <Input type="tel" placeholder="Phone Number" required />
            <Input placeholder="Bike Brand & Model" required />
            <Input placeholder="Where did you purchase it?" />
            <Textarea placeholder="Any additional details about the bike?" />
            <Button type="submit" className="w-full" size="lg">
              Submit for Review
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Request Received!</h3>
            <p className="text-muted-foreground">
              We'll review your bike details and contact you within 24 hours.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// NOLA Program Dialog Component
function NOLADialog() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary" className="gap-2">
          Register Now
          <ArrowRight className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>NOLA eBike Voucher Registration</DialogTitle>
          <DialogDescription>
            Register for the New Orleans eBike Incentive Program. Get $600-$1,200 credit. We handle all the paperwork!
          </DialogDescription>
        </DialogHeader>
        {!submitted ? (
          <form
            className="space-y-4 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <Input placeholder="Full Name" required />
            <Input type="email" placeholder="Email Address" required />
            <Input type="tel" placeholder="Phone Number" required />
            <Input placeholder="New Orleans Address" required />
            <select className="flex h-12 w-full rounded-xl border-2 border-input bg-background px-4 py-2 text-base shadow-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option value="">Household Income Level</option>
              <option value="low">Low Income (up to $1,200 voucher)</option>
              <option value="moderate">Moderate Income (up to $600 voucher)</option>
            </select>
            <Textarea placeholder="Any questions about the program?" />
            <Button type="submit" className="w-full" size="lg">
              Submit Registration
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Registration Submitted!</h3>
            <p className="text-muted-foreground">
              We'll contact you within 48 hours to help complete your NOLA eBike voucher application.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Bike Carousel Component
function BikeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bikes = [
    {
      name: "Urban Commuter",
      price: 450,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=800",
    },
    {
      name: "City Cruiser",
      price: 550,
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=800",
    },
    {
      name: "Compact Folder",
      price: 350,
      image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=800",
    },
    {
      name: "Metro Elite",
      price: 650,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
    },
  ];

  const nextBike = () => {
    setCurrentIndex((prev) => (prev + 1) % bikes.length);
  };

  const prevBike = () => {
    setCurrentIndex((prev) => (prev - 1 + bikes.length) % bikes.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bikes.map((bike, index) => (
            <div key={index} className="min-w-full">
              <div className="relative h-80 group cursor-pointer">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <Badge className="bg-secondary w-fit mb-2">${bike.price}</Badge>
                  <h3 className="text-2xl font-bold text-white">{bike.name}</h3>
                  <p className="text-white/80 text-sm">Click for details →</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevBike}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextBike}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {bikes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-8" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg noise-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-base px-4 py-2">
            <MapPin className="w-4 h-4 mr-2" />
            Directly on the Lafitte Greenway
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
            New Orleans' Expert for
            <br />
            <span className="text-primary">Affordable eBikes & Service</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Professional eBike sales, expert repairs for ALL bikes, and official NOLA voucher program retailer.
            Your complete bike solution in the heart of New Orleans.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <TestRideDialog />
            <Button variant="outline" size="lg" asChild>
              <a href="#nola">
                Learn About NOLA Program
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Affordable eBikes Section
function EBikesSection() {
  return (
    <section id="ebikes" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Bike className="w-4 h-4" />
            SERVICE #1
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Affordable eBikes
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            New eBikes starting at just <span className="text-foreground font-bold text-3xl">$350</span>
          </p>
          <p className="text-lg text-muted-foreground">
            Fully built with professional service included. Quality bikes at prices that won't break the bank.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">Come Test-Ride Your Next eBike!</h3>
          <TestRideDialog />
        </div>

        {/* Bike Carousel */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Test-Ride These Bikes Today</h3>
          <BikeCarousel />
        </div>
      </div>
    </section>
  );
}

// Expert Repairs Section
function RepairsSection() {
  return (
    <section id="repairs" className="section-padding bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Wrench className="w-4 h-4" />
              SERVICE #2
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Repairs
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Full maintenance & repair for <span className="text-foreground font-bold">ALL bicycles and eBikes</span>.
              We fix what others won't! Flats welcome!
            </p>

            <div className="bg-card p-6 rounded-2xl border border-border mb-6">
              <h3 className="text-lg font-bold mb-4">Free Diagnostic Included</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Single Repair: $65 + parts</p>
                    <p className="text-sm text-muted-foreground">Flat fee for any single repair</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Flats: $30 + parts</p>
                    <p className="text-sm text-muted-foreground">Quick turnaround on flat repairs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">What's the secret sauce?</p>
              <Button variant="outline" asChild className="mb-4">
                <a href="/repairs">
                  Our Exclusive 10-Point Quality Service
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            <DiagnosticDialog />
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800"
              alt="Bike Repair"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-2xl shadow-xl">
              <p className="text-sm opacity-90">We Fix What</p>
              <p className="text-2xl font-bold">Others Won't!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Assembly Section
function AssemblySection() {
  return (
    <section id="assembly" className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800"
              alt="eBike Assembly"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
              <p className="text-sm opacity-90">Professional</p>
              <p className="text-2xl font-bold">Assembly</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Settings className="w-4 h-4" />
              SERVICE #3
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              eBike Assembly
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Bought a bike online? We provide <span className="text-foreground font-bold">professional assembly</span> built
              so you can ride safely.
            </p>

            <div className="bg-card p-6 rounded-2xl border border-border mb-6">
              <h3 className="text-lg font-bold mb-3">We Don't Just Assemble It, We Build It</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Complete professional assembly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Safety inspection & testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Proper torque specifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Test ride before pickup</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <Button variant="outline" asChild className="mb-4">
                <a href="/assembly">
                  See What Our Exclusive Build Includes
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            <AssemblyDialog />
          </div>
        </div>
      </div>
    </section>
  );
}

// NOLA Program Section
function NOLASection() {
  return (
    <section id="nola" className="section-padding bg-gradient-to-br from-secondary/10 to-primary/10">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Gift className="w-4 h-4" />
              SERVICE #4
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              NOLA Incentive Program
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Official retailer for the <span className="text-foreground font-bold">NOLA eBike Voucher Program</span>
            </p>
            <p className="text-lg text-muted-foreground">
              Get your <span className="text-secondary font-bold text-2xl">$600–$1,200</span> credit here!
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Up to $1,200 Credit</h3>
                    <p className="text-sm text-muted-foreground">Based on household income eligibility</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">We Do All the Paperwork!</h3>
                    <p className="text-sm text-muted-foreground">Let us handle the application process</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 p-6 rounded-xl mb-6">
                <p className="text-center font-semibold text-lg mb-2">
                  ⚠️ Limited Availability
                </p>
                <p className="text-center text-sm text-muted-foreground">
                  Only <span className="font-bold text-foreground">3,000 applications</span> will be accepted. Register now before spots run out!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NOLADialog />
                <Button variant="outline" size="lg" asChild>
                  <a href="/nola-program">
                    Program Information
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Closing Section
function ClosingSection() {
  return (
    <section className="py-16 bg-foreground text-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Complete Bike Solution in New Orleans
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Whether you're a Greenway commuter, New Orleans bike veteran, or a first-time rider,
            JBird provides the best value and technical support in New Orleans.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="#ebikes">
                Shop eBikes
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-foreground">
              <Phone className="w-4 h-4 mr-2" />
              (504) 555-BIKE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-white/10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Bike className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">JBird</span>
                <span className="text-xs text-primary font-semibold -mt-1">BIKE SHOP</span>
              </div>
            </a>
            <p className="text-white/60 text-sm">
              New Orleans' expert for affordable eBikes and professional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 text-white text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#ebikes" className="text-white/60 hover:text-primary transition-colors">Affordable eBikes</a></li>
              <li><a href="#repairs" className="text-white/60 hover:text-primary transition-colors">Expert Repairs</a></li>
              <li><a href="#assembly" className="text-white/60 hover:text-primary transition-colors">eBike Assembly</a></li>
              <li><a href="#nola" className="text-white/60 hover:text-primary transition-colors">NOLA Program</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 text-white text-sm">Visit Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/60">Lafitte Greenway</li>
              <li className="text-white/60">New Orleans, LA</li>
              <li className="text-white/60">(504) 555-BIKE</li>
              <li className="text-white/60">hello@jbirdbikes.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-white/40 text-sm text-center">
            © 2024 JBird Bike Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <EBikesSection />
        <RepairsSection />
        <AssemblySection />
        <NOLASection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
