const skills = [
  'Writing',
  'Research',
  'AI Evaluation',
  'Prompt Engineering',
  'Web Development',
  'Communication',
  'Attention to Detail'
];

export function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 bg-secondary border border-border rounded-lg text-foreground"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
