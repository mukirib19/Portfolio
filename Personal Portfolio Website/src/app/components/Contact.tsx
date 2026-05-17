import { Mail, Phone, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Looking for clear, accurate AI content or expert evaluation services? Let's discuss how I can help with your next project.
        </p>
        
        <div className="space-y-6">
          <a
            href="mailto:mukirib19@gmail.com"
            className="flex items-center gap-4 p-5 bg-background border border-border rounded-lg hover:border-primary transition-colors cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-primary/90 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="font-medium mb-1">Email</div>
              <div className="text-muted-foreground">mukirib19@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+254714813814"
            className="flex items-center gap-4 p-5 bg-background border border-border rounded-lg hover:border-primary transition-colors cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-primary/90 transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="font-medium mb-1">Phone</div>
              <div className="text-muted-foreground">+254 714 813 814</div>
            </div>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-background border border-border rounded-lg hover:border-primary transition-colors cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-primary/90 transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <div className="font-medium mb-1">LinkedIn</div>
              <div className="text-muted-foreground">Connect on LinkedIn</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
