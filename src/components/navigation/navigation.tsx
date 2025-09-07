"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", href: "/", icon: "🏠" },
  { name: "Dashboard", href: "/dashboard", icon: "📊", requiresAuth: true },
  { name: "Learn", href: "/learn", icon: "📚", requiresAuth: true },
  { name: "Challenges", href: "/challenges", icon: "🎯", requiresAuth: true },
  { name: "Impact", href: "/impact", icon: "🌱", requiresAuth: true },
  { name: "Community", href: "/community", icon: "👥", requiresAuth: true },
  { name: "Leaderboard", href: "/leaderboard", icon: "🏆", requiresAuth: true },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state

  const filteredNavItems = navigationItems.filter(item => 
    !item.requiresAuth || isLoggedIn
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold">
            E
          </div>
          <span className="hidden sm:inline-block font-poppins font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            EcoLearn
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {filteredNavItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "default" : "ghost"}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-colors",
                  pathname === item.href 
                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" 
                    : "hover:bg-emerald-50 hover:text-emerald-700"
                )}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.name}</span>
              </Button>
            </Link>
          ))}
        </nav>

        {/* Auth Buttons & User Info */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  🏆 1,250 Points
                </Badge>
                <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-700">
                  Level 5
                </Badge>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setIsLoggedIn(false)}
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setIsLoggedIn(true)}
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                Login
              </Button>
              <Button 
                onClick={() => setIsLoggedIn(true)}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <div className="flex flex-col space-y-1">
                <div className="h-0.5 w-5 bg-emerald-600"></div>
                <div className="h-0.5 w-5 bg-emerald-600"></div>
                <div className="h-0.5 w-5 bg-emerald-600"></div>
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 mt-8">
              {/* Mobile Logo */}
              <div className="flex items-center space-x-2 px-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold">
                  E
                </div>
                <span className="font-poppins font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  EcoLearn
                </span>
              </div>

              {/* User Info on Mobile */}
              {isLoggedIn && (
                <div className="px-4 py-3 bg-emerald-50 rounded-lg mx-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                        🏆 1,250 Points
                      </Badge>
                      <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-700">
                        Level 5
                      </Badge>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2 px-4">
                {filteredNavItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant={pathname === item.href ? "default" : "ghost"}
                      className={cn(
                        "w-full justify-start flex items-center space-x-3 text-base font-medium",
                        pathname === item.href 
                          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" 
                          : "hover:bg-emerald-50 hover:text-emerald-700"
                      )}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Button>
                  </Link>
                ))}
              </nav>

              {/* Mobile Auth */}
              <div className="px-4 pt-4 border-t">
                {isLoggedIn ? (
                  <Button 
                    variant="outline" 
                    className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                      onClick={() => {
                        setIsLoggedIn(true);
                        setIsOpen(false);
                      }}
                    >
                      Login
                    </Button>
                    <Button 
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                      onClick={() => {
                        setIsLoggedIn(true);
                        setIsOpen(false);
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}