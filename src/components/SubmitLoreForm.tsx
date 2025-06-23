
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  loreText: string;
}

const SubmitLoreForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    loreText: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/submit-lore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your lore has been submitted successfully.",
        });
        setFormData({ name: "", email: "", loreText: "" });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting lore:", error);
      toast({
        title: "Error",
        description: "Failed to submit lore. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="industrial-shadow border-2 border-primary">
      <CardHeader>
        <CardTitle className="font-headline text-2xl font-bold flex items-center">
          <div className="w-4 h-4 bg-secondary industrial-shadow-orange mr-3"></div>
          Submit Your Lore
        </CardTitle>
        <CardDescription className="font-body text-muted-foreground">
          Share your story with the CrowbarLtd community
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-body font-semibold">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="industrial-shadow border-2 border-muted font-mono"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-body font-semibold">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="industrial-shadow border-2 border-muted font-mono"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loreText" className="font-body font-semibold">
              Your Lore
            </Label>
            <Textarea
              id="loreText"
              name="loreText"
              value={formData.loreText}
              onChange={handleInputChange}
              required
              rows={6}
              className="industrial-shadow border-2 border-muted font-mono resize-none"
              placeholder="Tell us your story, your experience, or share your industrial wisdom..."
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full industrial-shadow bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Lore"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SubmitLoreForm;
