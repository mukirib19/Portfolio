export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              I Write About AI So Humans Can Understand It
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Translating complex AI concepts into clear, accessible content. Combining deep technical knowledge with precise evaluation skills and web development expertise.
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-border">
              <img
                src="https://i.postimg.cc/3wrpkQbL/image-4f60cb2b-(1).png"
                alt="Benard Mukiri Maina"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
