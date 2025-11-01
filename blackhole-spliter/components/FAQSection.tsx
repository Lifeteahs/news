import React from 'react';

export default function FAQSection() {
  const faqs = [
    {
      question: 'Is Blackhole Spliter really free?',
      answer: 'Yes, Blackhole Spliter is completely free to download and use. It is distributed as freeware with no hidden costs or subscription fees.',
    },
    {
      question: 'What operating systems are supported?',
      answer: 'Blackhole Spliter is compatible with Windows 10/11, macOS 10.15 or later, and major Linux distributions including Ubuntu, Fedora, and Debian.',
    },
    {
      question: 'Does it work with existing projects?',
      answer: 'Absolutely! Blackhole Spliter can import and work with existing web projects. It supports all major frameworks and technologies.',
    },
    {
      question: 'Is there a mobile version available?',
      answer: 'While the full desktop application offers the most features, companion mobile apps for iOS and Android are available for basic project management and monitoring.',
    },
    {
      question: 'How often is the software updated?',
      answer: 'Blackhole Spliter receives regular updates with new features, security patches, and bug fixes. Major updates are released quarterly, with minor updates as needed.',
    },
    {
      question: 'Can I use it for commercial projects?',
      answer: 'Yes, the freeware license allows you to use Blackhole Spliter for both personal and commercial projects without any restrictions.',
    },
    {
      question: 'Is technical support available?',
      answer: 'Community support is available through forums and documentation. Premium support options are available for enterprise users.',
    },
    {
      question: 'Does it require an internet connection?',
      answer: 'Most features work offline, but some cloud-based features like collaboration and template downloads require an internet connection.',
    },
    {
      question: 'What are the system requirements?',
      answer: 'Minimum requirements: 4GB RAM, 2GB free disk space, and a modern processor. 8GB RAM recommended for optimal performance.',
    },
    {
      question: 'Can I customize the interface?',
      answer: 'Yes, Blackhole Spliter offers extensive customization options including themes, layouts, and keyboard shortcuts to match your workflow.',
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">FAQ</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
            <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.question}</h3>
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
