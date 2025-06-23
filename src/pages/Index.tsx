
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SubmitLoreForm from "@/components/SubmitLoreForm";
import RaffleStatusChecker from "@/components/RaffleStatusChecker";
import StripeCheckoutSimulation from "@/components/StripeCheckoutSimulation";

const Index = () => {
  const services = [
    {
      title: "Micro-Services Infrastructure",
      description: "Robust, scalable micro-services architecture built for enterprise-grade reliability.",
      features: ["High Availability", "Auto-Scaling", "Load Balancing", "Service Mesh"]
    },
    {
      title: "Digital Operations",
      description: "Comprehensive digital operations platform powering your business processes.",
      features: ["Process Automation", "Monitoring", "Analytics", "Workflow Management"]
    },
    {
      title: "Raffle Infrastructure",
      description: "Advanced raffle and lottery systems with transparent, auditable results.",
      features: ["Fair Distribution", "Real-time Results", "Audit Trail", "Compliance Ready"]
    },
    {
      title: "Industrial Solutions",
      description: "Purpose-built solutions designed for industrial strength and reliability.",
      features: ["24/7 Uptime", "Disaster Recovery", "Security First", "Performance Optimized"]
    }
  ];

  const stats = [
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Response Time", value: "<50ms" },
    { label: "Services Deployed", value: "500+" },
    { label: "Enterprise Clients", value: "150+" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Digital-Ops Shell Powering{" "}
              <span className="text-secondary">Micro-Services</span>
            </h1>
            <p className="font-body text-xl lg:text-2xl mb-8 text-muted-foreground animate-fade-in">
              Standing for reliability, efficiency, and industrial strength. 
              Your infrastructure backbone for mission-critical operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                asChild 
                size="lg" 
                className="industrial-shadow bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold"
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="industrial-shadow border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-body font-semibold"
              >
                <Link to="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground p-6 industrial-shadow mb-4">
                  <div className="font-headline text-3xl lg:text-4xl font-bold text-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm font-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold mb-4">
              Interactive <span className="text-secondary">Platform</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our industrial-strength platform through interactive features 
              designed for community engagement and raffle management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <RaffleStatusChecker />
            </div>
            <div className="lg:col-span-1">
              <StripeCheckoutSimulation />
            </div>
            <div className="lg:col-span-1">
              <SubmitLoreForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold mb-4">
              Industrial-Strength <span className="text-secondary">Services</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Built from the ground up for reliability, our services provide the backbone 
              for your digital operations with enterprise-grade performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="industrial-shadow border-2 hover:border-secondary transition-colors">
                <CardHeader>
                  <CardTitle className="font-headline text-xl font-bold flex items-center">
                    <div className="w-4 h-4 bg-secondary industrial-shadow-orange mr-3"></div>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-body text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="font-body text-sm flex items-center">
                        <div className="w-2 h-2 bg-secondary mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold mb-4">
            Ready to Build Something <span className="text-secondary">Industrial?</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the companies that trust CrowbarLtd for their mission-critical infrastructure.
          </p>
          <Button 
            asChild 
            size="lg"
            className="industrial-shadow bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold"
          >
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
