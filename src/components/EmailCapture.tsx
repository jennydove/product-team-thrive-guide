
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

interface EmailCaptureProps {
  variant?: "default" | "dark" | "light";
}

const EmailCapture = ({ variant = "default" }: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate email capture
    console.log("Email captured:", email);
    setIsSubmitted(true);
    toast({
      title: "Success!",
      description: "Thank you! Check your email for the complete report.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mb-4">
          <Mail className={`w-16 h-16 mx-auto ${
            variant === "dark" ? "text-crystal-300" : 
            variant === "light" ? "text-sunflower-700" : 
            "text-crystal-600"
          }`} />
        </div>
        <h3 className={`text-2xl font-semibold mb-2 ${
          variant === "dark" ? "text-white" : 
          variant === "light" ? "text-white" : 
          "text-navy-900"
        }`}>
          Thank You!
        </h3>
        <p className={`text-lg ${
          variant === "dark" ? "text-gray-200" : 
          variant === "light" ? "text-white/90" : 
          "text-gray-600"
        }`}>
          Check your email for the complete report on the six systems that help product teams thrive.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className={`text-xl font-semibold mb-2 ${
          variant === "dark" ? "text-white" : 
          variant === "light" ? "text-white" : 
          "text-navy-900"
        }`}>
          Get the Complete Report
        </h3>
        <p className={`${
          variant === "dark" ? "text-gray-200" : 
          variant === "light" ? "text-white/90" : 
          "text-gray-600"
        }`}>
          Enter your email to access the full guide with actionable frameworks and real-world examples.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`w-full text-lg py-3 ${
            variant === "dark" ? "bg-white/10 border-white/20 text-white placeholder:text-white/60" :
            variant === "light" ? "bg-white/20 border-white/30 text-white placeholder:text-white/70" :
            "bg-white border-gray-200"
          }`}
        />
        <Button 
          type="submit" 
          className={`w-full text-lg py-3 font-semibold transition-all duration-300 hover:scale-105 ${
            variant === "dark" ? "bg-crystal-500 hover:bg-crystal-600 text-white" :
            variant === "light" ? "bg-navy-800 hover:bg-navy-900 text-white" :
            "bg-crystal-600 hover:bg-crystal-700 text-white"
          }`}
        >
          Get Your Free Report
        </Button>
      </form>
      <p className={`text-sm text-center mt-3 ${
        variant === "dark" ? "text-gray-300" : 
        variant === "light" ? "text-white/80" : 
        "text-gray-500"
      }`}>
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default EmailCapture;
