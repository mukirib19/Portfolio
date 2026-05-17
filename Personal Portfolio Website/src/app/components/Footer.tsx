export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-semibold mb-2">Benard Mukiri Maina</p>
        <p className="text-sm text-muted-foreground">
          Copyright {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
