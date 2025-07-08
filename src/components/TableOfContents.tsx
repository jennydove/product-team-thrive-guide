
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Section {
  id: string;
  title: string;
  color: string;
  indentLevel?: number;
}

const sections: Section[] = [
  { id: "introduction", title: "Why band-aid solutions fail", color: "rouge", indentLevel: 0 },
  { id: "systems-overview", title: "Six Systems Overview", color: "navy", indentLevel: 0 },
  { id: "infrastructure", title: "Build Infrastructure", color: "crystal", indentLevel: 1 },
  { id: "self-improvement", title: "Self-Improvement", color: "moss", indentLevel: 1 },
  { id: "human-connection", title: "Human Connection", color: "sunflower", indentLevel: 1 },
  { id: "decision-frameworks", title: "Decision Frameworks", color: "navy", indentLevel: 1 },
  { id: "strategic-focus", title: "Strategic Focus", color: "rouge", indentLevel: 1 },
  { id: "customer-centricity", title: "Customer Centricity", color: "crystal", indentLevel: 1 },
  { id: "conclusion", title: "Build Your Team", color: "navy", indentLevel: 0 },
  { id: "about", title: "About Jenny", color: "crystal", indentLevel: 0 },
];

interface TableOfContentsProps {
  className?: string;
}

export default function TableOfContents({ className = "" }: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionsOnPage = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sectionsOnPage.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-30 transition-all duration-300 ${className}`}>
      <Card className="bg-white/95 backdrop-blur-sm border shadow-lg max-w-xs">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              Table of Contents
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-6 w-6 p-0"
            >
              {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </Button>
          </div>

          {isExpanded ? (
            <nav className="space-y-1 max-h-96 overflow-y-auto">
              {sections.map((section) => {
                // calculate padding-left: base 2 (pl-2) + 4 * indentLevel
                const level = section.indentLevel ?? 0;
                const padding = 2 + level * 4;
                const indentClass = `pl-${padding}`;

                const isActive = activeSection === section.id;
                const baseClasses = `w-full text-left p-2 ${indentClass} rounded text-xs transition-all duration-200 hover:bg-gray-50`;
                const activeClasses = isActive
                  ? `bg-${section.color}-50 text-${section.color}-700 border-l-2 border-${section.color}-500`
                  : `text-gray-600 hover:text-gray-900`;

                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`${baseClasses} ${activeClasses}`}
                  >
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          isActive ? `bg-${section.color}-500` : 'bg-gray-300'
                        }`}
                      />
                      <span className="leading-tight">{section.title}</span>
                    </div>
                  </button>
                );
              })}
            </nav>
          ) : activeSection ? (
            <div className="text-xs text-gray-500 truncate">
              {sections.find((s) => s.id === activeSection)?.title}
            </div>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
