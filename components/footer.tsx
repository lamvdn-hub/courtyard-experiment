'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Instagram, Twitter, Play, Send, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { label: 'Membership', href: '#' },
  { label: 'Coaching', href: '#' },
  { label: 'House Rules', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Play, label: 'YouTube', href: '#' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Image
                src="/courtyard_logo.webp"
                alt="Courtyard Pickleball Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-white font-bold text-base tracking-tight">
                COURTYARD PICKLEBALL
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Where serious play meets serious style. Premium indoor pickleball for every level, every day.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Location
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm">27 Thị Xuân Quý</p>
                  <p className="text-slate-400 text-sm">Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam</p>
                </div>
              </div>
              {/*} <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                <span className="text-sm text-white/80 font-medium">Book online, instant confirmation</span>
              </div> */}
              <p className="text-slate-400 text-xs">
                Open Daily: 05:00 - 22:00
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Join the Club
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Get exclusive member rates, event invites, and first access to new courts.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-slate-400/50 rounded-xl h-11 focus-visible:ring-lime/50"
              />
              <Button
                type="submit"
                className="w-full bg-lime text-forest font-semibold hover:bg-lime-dim rounded-xl h-11 transition-all duration-200"
              >
                {subscribed ? (
                  'Welcome to the Club!'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400/60 text-xs">
            &copy; {new Date().getFullYear()} Courtyard Pickleball. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400/60 text-xs hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400/60 text-xs hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
