
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!newsletterEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // Simulate newsletter signup
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Subscribed!",
      description: "You've been successfully subscribed to our newsletter.",
    });
    
    setNewsletterEmail("");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@crowbarltd.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+971 4 123 4567",
      description: "UAE business hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Dubai, UAE",
      description: "Digital operations center"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-headline text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="text-secondary">Touch</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to build something industrial? Let's discuss your project requirements 
              and how CrowbarLtd can power your digital operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="industrial-shadow border-2">
                <CardHeader>
                  <CardTitle className="font-headline text-xl font-bold">Contact Information</CardTitle>
                  <CardDescription className="font-body">
                    Reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-secondary p-2 industrial-shadow-orange">
                        <info.icon className="h-4 w-4 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-headline font-semibold text-sm">{info.title}</h3>
                        <p className="font-mono text-sm font-medium">{info.details}</p>
                        <p className="font-body text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="industrial-shadow border-2 border-secondary">
                <CardHeader>
                  <CardTitle className="font-headline text-xl font-bold">Newsletter</CardTitle>
                  <CardDescription className="font-body">
                    Stay updated with our latest insights and services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="newsletter-email" className="font-body font-semibold">Email Address</Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="your@email.com"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="industrial-shadow border-2 font-mono"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full industrial-shadow bg-secondary hover:bg-secondary/90 font-body font-semibold"
                    >
                      Subscribe to Newsletter
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="industrial-shadow border-2">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl font-bold">Send us a Message</CardTitle>
                  <CardDescription className="font-body">
                    Tell us about your project and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="first-name" className="font-body font-semibold">First Name *</Label>
                        <Input
                          id="first-name"
                          type="text"
                          placeholder="John"
                          className="industrial-shadow border-2 font-mono"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="last-name" className="font-body font-semibold">Last Name *</Label>
                        <Input
                          id="last-name"
                          type="text"
                          placeholder="Doe"
                          className="industrial-shadow border-2 font-mono"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="font-body font-semibold">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          className="industrial-shadow border-2 font-mono"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="font-body font-semibold">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+971 50 123 4567"
                          className="industrial-shadow border-2 font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="font-body font-semibold">Company</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your Company Name"
                        className="industrial-shadow border-2 font-mono"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" className="font-body font-semibold">Service Interest</Label>
                      <Select>
                        <SelectTrigger className="industrial-shadow border-2 font-mono">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="micro-services">Micro-Services Infrastructure</SelectItem>
                          <SelectItem value="digital-ops">Digital Operations</SelectItem>
                          <SelectItem value="raffle">Raffle Infrastructure</SelectItem>
                          <SelectItem value="industrial">Industrial Solutions</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-body font-semibold">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        className="min-h-[120px] industrial-shadow border-2 font-mono"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto industrial-shadow bg-secondary hover:bg-secondary/90 font-body font-semibold px-8"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
