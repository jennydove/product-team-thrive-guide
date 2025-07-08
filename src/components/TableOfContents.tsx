import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Section {
  id: string;
  title: string;
  color: string;
}

const sections: Section[] = [
  { id: "introduction", title: "Why band-aid solutions fail", color: "rouge" },
  { id: "systems-overview", title: "Six Systems Overview", color: "navy" },
  { id: "infrastructure", title: "Build Infrastructure", color: "crystal" },
  { id: "self-improvement", title: "Self-Improvement", color: "moss" },
  { id: "human-connection", title: "Human Connection", color: "sunflower" },
  { id: "decision-frameworks", title: "Decision Frameworks", color: "navy" },
  { id: "strategic-focus", title: "Strategic Focus", color: "rouge" },
  { id: "customer-centricity", title: "Customer Centricity", color: "crystal" },
  { id: "conclusion", title: "Build Your Team", color: "navy" },
  { id: "about", title: "About Jenny", color: "crystal" },
];

interface TableOfContentsProps {
  className?: string;
}

export default function TableOfContents({ className = "" }: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-30 transition-all duration-300 ${className}`}>
      <Card className="bg-white/95 backdrop-blur-sm border shadow-lg max-w-xs">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              Contents
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-6 w-6 p-0"
            >
              {isExpanded ? (
                <ChevronUp className="h-3 w-3" />
              ) : (
                <ChevronDown className="h-3 w-3" />
              )}
            </Button>
          </div>

          {isExpanded && (
            <nav className="space-y-1 max-h-96 overflow-y-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left p-2 rounded text-xs transition-all duration-200 hover:bg-gray-50 ${
                    activeSection === section.id 
                      ? `bg-${section.color}-50 text-${section.color}-700 border-l-2 border-${section.color}-500` 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      activeSection === section.id ? `bg-${section.color}-500` : 'bg-gray-300'
                    }`} />
                    <span className="leading-tight">
                      {section.title}
                    </span>
                  </div>
                </button>
              ))}
            </nav>
          )}

          {!isExpanded && activeSection && (
            <div className="text-xs text-gray-500 truncate">
              {sections.find(s => s.id === activeSection)?.title}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}