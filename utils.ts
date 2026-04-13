@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 45 20% 97%;
    --foreground: 160 30% 10%;
    --card: 0 0% 100%;
    --card-foreground: 160 30% 10%;
    --popover: 0 0% 100%;
    --popover-foreground: 160 30% 10%;
    --primary: 158 64% 32%;
    --primary-foreground: 0 0% 100%;
    --secondary: 35 90% 52%;
    --secondary-foreground: 0 0% 100%;
    --muted: 160 20% 92%;
    --muted-foreground: 160 15% 40%;
    --accent: 35 90% 52%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 160 15% 85%;
    --input: 160 15% 85%;
    --ring: 158 64% 32%;
    --radius: 0.75rem;
  }

  .dark {
    --background: 160 30% 6%;
    --foreground: 45 20% 95%;
    --card: 160 25% 10%;
    --card-foreground: 45 20% 95%;
    --popover: 160 25% 10%;
    --popover-foreground: 45 20% 95%;
    --primary: 158 64% 42%;
    --primary-foreground: 0 0% 100%;
    --secondary: 35 90% 52%;
    --secondary-foreground: 0 0% 100%;
    --muted: 160 20% 15%;
    --muted-foreground: 160 15% 65%;
    --accent: 35 90% 52%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --border: 160 15% 20%;
    --input: 160 15% 20%;
    --ring: 158 64% 42%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'Outfit', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
  }
  .mono {
    font-family: 'Space Mono', monospace;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .gradient-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary;
  }

  .gradient-bg {
    @apply bg-gradient-to-br from-primary/10 via-background to-secondary/10;
  }

  .glass {
    @apply bg-white/80 backdrop-blur-lg;
  }

  .section-padding {
    @apply py-20 md:py-28 lg:py-32;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--muted));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--primary));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.8);
}

/* Animated underline */
.animated-underline {
  position: relative;
}

.animated-underline::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: hsl(var(--secondary));
  transition: width 0.3s ease;
}

.animated-underline:hover::after {
  width: 100%;
}

/* Noise texture overlay */
.noise-overlay {
  position: relative;
}

.noise-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}
