
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Fade in animation component
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className 
}: { 
  children: ReactNode; 
  delay?: number; 
  duration?: number; 
  className?: string; 
}) => {
  return (
    <div 
      className={cn("animate-fade-in", className)}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

// Slide up animation component
export const SlideUp = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className 
}: { 
  children: ReactNode; 
  delay?: number; 
  duration?: number; 
  className?: string; 
}) => {
  return (
    <div 
      className={cn("animate-slide-up", className)}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

// Stagger children animation wrapper
export const StaggerChildren = ({ 
  children, 
  staggerDelay = 0.1, 
  className 
}: { 
  children: ReactNode[]; 
  staggerDelay?: number; 
  className?: string; 
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <FadeIn key={index} delay={index * staggerDelay}>
          {child}
        </FadeIn>
      ))}
    </div>
  );
};

// Hover lift component
export const HoverLift = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string; 
}) => {
  return (
    <div className={cn("hover-lift", className)}>
      {children}
    </div>
  );
};

// Gentle pulse component
export const GentlePulse = ({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string; 
}) => {
  return (
    <div className={cn("animate-gentle-pulse", className)}>
      {children}
    </div>
  );
};
