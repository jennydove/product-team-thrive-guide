import { useState } from "react";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
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
  { id: "infrastructure", title: "Build Infrastructure Beyond Tools", color: "crystal" },
  { id: "self-improvement", title: "Design for Self-Improvement", color: "moss" },
  { id: "human-connection", title: "Prioritize Human Connection", color: "sunflower" },
  { id: "decision-frameworks", title: "Create Clear Decision Frameworks", color: "navy" },
  { id: "strategic-focus", title: "Enable Strategic Focus", color: "rouge" },
  { id: "customer-centricity", title: "Design for Customer Centricity", color: "crystal" },
  { id: "conclusion", title: "Build Your High-Performing Team", color: "navy" },
  { id: "about", title: "About Jenny Wanger", color: "crystal" },
];

interface TableOfContentsProps {
  className?: string;
}

export default function TableOfContents({ className = "" }: TableOfContentsProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`fixed left-0 top-0 h-full z-20 transition-all duration-300 ${isCollapsed ? 'w-12' : 'w-80'} ${className}`}>
      <Card className="h-full bg-white/95 backdrop-blur-sm border-r shadow-lg rounded-none">
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            {!isCollapsed && (
              <h3 className="font-semibold text-navy-900 text-sm">Table of Contents</h3>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="ml-auto"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          {!isCollapsed && (
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 group ${
                    activeSection === section.id ? `bg-${section.color}-50 border-l-4 border-${section.color}-500` : ''
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-${section.color}-500 opacity-70`} />
                    <span className={`text-sm font-medium ${
                      activeSection === section.id ? `text-${section.color}-900` : 'text-gray-700'
                    } group-hover:text-${section.color}-700`}>
                      {section.title}
                    </span>
                  </div>
                </button>
              ))}
            </nav>
          )}
        </div>
      </Card>
    </div>
  );
}