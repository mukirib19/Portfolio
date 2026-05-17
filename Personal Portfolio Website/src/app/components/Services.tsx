import { useState } from 'react';
import { Modal } from './Modal';
import { Pen, CheckCircle, Zap, FileText } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    id: '1',
    title: 'AI Content Writing',
    icon: <Pen className="w-6 h-6" />,
    description: 'Writing clear, accurate articles and content about AI topics',
    details: [
      'I create comprehensive, accessible content that explains artificial intelligence and emerging technologies to diverse audiences. My writing breaks down complex concepts into clear, engaging narratives that readers can understand and apply.',
      'Services include blog posts, articles, whitepapers, case studies, and educational content. Each piece is thoroughly researched and fact-checked to ensure accuracy while maintaining readability.',
      'I specialize in translating technical AI concepts into language that resonates with non-technical audiences, whether you need content for marketing, education, or thought leadership.',
      'Every project receives careful attention to tone, audience, and objectives. I work collaboratively to ensure the final content aligns with your brand voice and strategic goals.'
    ]
  },
  {
    id: '2',
    title: 'Response Evaluation',
    icon: <CheckCircle className="w-6 h-6" />,
    description: 'Reviewing and rating AI-generated responses for quality and accuracy',
    details: [
      'I evaluate AI-generated content across multiple dimensions: factual accuracy, relevance, coherence, helpfulness, and safety. This service helps companies improve their AI systems and ensure quality outputs.',
      'My evaluation process combines technical understanding with human judgment. I assess whether responses correctly answer questions, provide appropriate context, and avoid harmful or misleading information.',
      'I provide detailed feedback on AI performance, identifying patterns in strengths and weaknesses. This analysis helps teams understand where their models excel and where they need improvement.',
      'With experience evaluating responses from various AI systems, I bring insights into industry standards and best practices. My evaluations help organizations build more reliable and trustworthy AI products.'
    ]
  },
  {
    id: '3',
    title: 'Prompt Engineering',
    icon: <Zap className="w-6 h-6" />,
    description: 'Crafting effective prompts that produce better AI outputs',
    details: [
      'Effective prompts make the difference between mediocre and exceptional AI outputs. I design prompts that consistently produce high-quality results, whether for content generation, analysis, or problem-solving.',
      'My approach combines understanding of how language models work with practical testing and iteration. I create prompt templates and frameworks that teams can use to get better results from their AI tools.',
      'Services include developing prompt libraries for specific use cases, training teams on prompt engineering best practices, and optimizing existing prompts for better performance.',
      'I work across various AI platforms and models, understanding the nuances of each system. This expertise ensures prompts are tailored to work optimally with your specific tools and objectives.'
    ]
  },
  {
    id: '4',
    title: 'Technical Writing',
    icon: <FileText className="w-6 h-6" />,
    description: 'Translating complex technical concepts into simple, readable content',
    details: [
      'I transform complex technical information into clear, user-friendly documentation. Whether you need API documentation, user guides, or technical specifications, I create content that users can actually understand and use.',
      'My background in web development gives me deep familiarity with technical concepts and terminology. I understand the challenges developers and technical teams face and can communicate effectively with both technical and non-technical stakeholders.',
      'Services include writing documentation, creating tutorials, developing knowledge base articles, and producing technical blog content. Each piece is structured logically with clear examples and practical applications.',
      'I focus on audience-appropriate language and progressive disclosure of complexity. Beginners get the clarity they need to get started, while advanced users can find the detailed information they require.'
    ]
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section id="services" className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="p-6 bg-background border border-border rounded-lg cursor-pointer transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      >
        {selectedService && (
          <div>
            <div className="w-16 h-16 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-6">
              {selectedService.icon}
            </div>
            <h2 className="text-3xl font-bold mb-6">{selectedService.title}</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              {selectedService.details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
