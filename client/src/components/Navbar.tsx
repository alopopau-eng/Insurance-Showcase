import { Link } from "wouter";
import { Shield, Menu, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <Link href="/" className="text-foreground/80 hover:text-primary transition-colors font-medium font-arabic">
        الرئيسية
      </Link>
      <Link href="#products" className="text-foreground/80 hover:text-primary transition-colors font-medium font-arabic">
        خدماتنا
      </Link>
      <Link href="#offers" className="text-foreground/80 hover:text-primary transition-colors font-medium font-arabic">
        العروض
      </Link>
      <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium font-arabic">
        تواصل معنا
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rtl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 font-arabic">
            أمانك
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:920000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-arabic">
            <Phone className="h-4 w-4" />
            <span>٩٢٠٠٠٠٠٠٠</span>
          </a>
          <Button variant="default" className="font-arabic gap-2 rounded-full shadow-lg shadow-primary/20">
            <User className="h-4 w-4" />
            تسجيل الدخول
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] rtl font-arabic">
            <div className="flex flex-col gap-8 mt-10">
              <NavItems />
              <div className="h-px bg-border my-4" />
              <Button className="w-full gap-2">
                <User className="h-4 w-4" />
                تسجيل الدخول
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
