import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = theme === 'dark' || (!theme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            Benard Mukiri Maina
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('writing')}
                className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
              >
                Writing
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
