import { useState } from 'react';
import { Modal } from './Modal';

interface Article {
  id: string;
  title: string;
  tag: string;
  description: string;
  content: string[];
}

const articles: Article[] = [
  {
    id: '1',
    title: 'AI Tools for Beginners',
    tag: 'AI Basics',
    description: 'A comprehensive guide to getting started with AI tools without technical expertise. Learn which tools to use and how to use them effectively.',
    content: [
      'Artificial intelligence has become increasingly accessible to everyday users, with tools that require no coding experience or technical background. Whether you want to generate images, write content, or automate tasks, there are AI tools designed specifically for beginners.',
      'The key to success with AI tools is understanding what they can and cannot do. Tools like ChatGPT excel at conversational tasks and content creation, while platforms like DALL-E and Midjourney specialize in image generation. Each tool has its strengths, and choosing the right one depends on your specific needs.',
      'Getting started is simpler than most people think. Begin with free versions of popular tools to experiment and learn. Focus on clear, specific prompts that describe exactly what you want. As you gain experience, you will develop an intuition for how to communicate effectively with AI systems.',
      'Remember that AI tools are assistants, not replacements for human creativity and judgment. They work best when combined with your own expertise and critical thinking. Start small, experiment often, and gradually expand your use of AI tools as you become more comfortable with the technology.'
    ]
  },
  {
    id: '2',
    title: 'How Machine Learning Works Simply Explained',
    tag: 'Machine Learning',
    description: 'Demystifying machine learning concepts for non-technical audiences. Understand the fundamentals without the jargon.',
    content: [
      'Machine learning is fundamentally about teaching computers to learn from experience, much like humans do. Instead of programming explicit rules, we provide examples and let the computer discover patterns on its own. This approach allows computers to handle tasks that would be impossible to program manually.',
      'Think of teaching a child to recognize animals. You do not write a detailed rulebook about fur patterns and leg counts. Instead, you show many pictures and say "this is a cat" or "this is a dog." Eventually, the child learns to recognize new animals they have never seen before. Machine learning works the same way.',
      'The process involves feeding large amounts of data into algorithms that adjust themselves to make better predictions. For example, a spam filter learns by examining thousands of emails labeled as spam or not spam. Over time, it recognizes patterns that distinguish unwanted messages from legitimate ones.',
      'Modern machine learning powers many everyday technologies: voice assistants understanding speech, streaming services recommending shows, and navigation apps predicting traffic. As the technology continues to advance, understanding these basics helps us make informed decisions about using and trusting AI systems.'
    ]
  },
  {
    id: '3',
    title: 'The Future of Work and AI',
    tag: 'Future of Work',
    description: 'Exploring how AI is reshaping workplaces and what it means for professionals across industries.',
    content: [
      'Artificial intelligence is not replacing workers wholesale, but it is fundamentally changing how we work. The most successful professionals will be those who learn to collaborate with AI tools, using them to amplify their capabilities rather than viewing them as competitors.',
      'Many routine and repetitive tasks are being automated, freeing humans to focus on work that requires creativity, emotional intelligence, and complex problem-solving. Customer service representatives use AI to handle common questions while focusing on nuanced issues. Writers use AI to draft outlines while concentrating on storytelling and voice.',
      'New jobs are emerging that did not exist five years ago: prompt engineers, AI trainers, ethics specialists, and integration consultants. These roles require understanding both the capabilities of AI systems and the human contexts in which they operate. The demand for people who can bridge this gap continues to grow.',
      'Adapting to this future means embracing continuous learning. The specific tools will change, but the ability to work alongside AI will remain valuable. Focus on developing skills that complement AI: critical thinking, creativity, emotional intelligence, and the ability to ask the right questions. These human capabilities become more valuable, not less, in an AI-augmented workplace.'
    ]
  },
  {
    id: '4',
    title: 'What Large Language Models Actually Do',
    tag: 'LLMs',
    description: 'Understanding the technology behind ChatGPT and similar AI systems in plain language.',
    content: [
      'Large language models like ChatGPT are sophisticated prediction engines trained on vast amounts of text. They do not understand language the way humans do, but they have learned statistical patterns about how words and concepts relate to each other. This allows them to generate remarkably coherent and contextually appropriate responses.',
      'The training process involves analyzing billions of sentences to learn patterns: which words commonly follow others, how ideas connect, and what responses fit different contexts. When you ask a question, the model predicts the most likely sequence of words that would appropriately follow, based on everything it learned during training.',
      'This is why LLMs sometimes produce confident-sounding but incorrect information. They are not retrieving facts from a database or reasoning from first principles. They are generating text that statistically fits the pattern of their training data. Understanding this limitation is crucial for using these tools effectively.',
      'Despite these constraints, LLMs excel at many tasks: drafting content, explaining concepts, analyzing text, brainstorming ideas, and writing code. They work best when you provide clear context, verify important facts, and use them as collaborative tools rather than sources of absolute truth. As the technology evolves, understanding both its power and its limitations ensures we use it wisely.'
    ]
  }
];

export function WritingSamples() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <>
      <section id="writing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Writing Samples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="p-6 bg-card border border-border rounded-lg cursor-pointer transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm mb-3">
                  {article.tag}
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
      >
        {selectedArticle && (
          <div>
            <div className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm mb-4">
              {selectedArticle.tag}
            </div>
            <h2 className="text-3xl font-bold mb-6">{selectedArticle.title}</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
