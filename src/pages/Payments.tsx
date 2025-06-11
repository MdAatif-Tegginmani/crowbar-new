
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CreditCard, Shield, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Payments = () => {
  const { toast } = useToast();

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small projects and development",
      price: "$99",
      period: "/month",
      features: [
        "Up to 5 micro-services",
        "Basic monitoring",
        "Email support",
        "99.5% SLA",
        "Standard security",
        "Community documentation"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and teams",
      price: "$299",
      period: "/month",
      features: [
        "Up to 25 micro-services",
        "Advanced monitoring & alerts",
        "Priority support",
        "99.8% SLA",
        "Enhanced security",
        "Private documentation",
        "Custom integrations",
        "Load balancing"
      ],
      popular: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "For large-scale industrial operations",
      price: "$999",
      period: "/month",
      features: [
        "Unlimited micro-services",
        "24/7 dedicated monitoring",
        "White-glove support",
        "99.9% SLA",
        "Enterprise security",
        "Custom documentation",
        "Dedicated account manager",
        "Custom deployment",
        "Disaster recovery",
        "Compliance reporting"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  const paymentFeatures = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Enterprise-grade security with end-to-end encryption"
    },
    {
      icon: CreditCard,
      title: "Multiple Methods",
      description: "Support for cards, bank transfers, and digital wallets"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Real-time payment processing and instant activation"
    }
  ];

  const handlePayment = (planName: string, price: string) => {
    // Simulate payment processing
    toast({
      title: "Payment Processing",
      description: `Processing payment for ${planName} plan (${price}/month)...`,
    });

    // In a real application, this would integrate with Stripe or another payment processor
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: `Welcome to the ${planName} plan. Your services are being provisioned.`,
      });
    }, 2000);
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-headline text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-secondary">Industrial-Strength</span> Pricing
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your digital operations. All plans include 
              our core infrastructure with varying levels of scale and support.
            </p>
          </div>

          {/* Payment Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {paymentFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary p-4 w-16 h-16 mx-auto mb-4 industrial-shadow-orange flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-headline text-lg font-bold mb-2">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`industrial-shadow border-2 relative ${
                  plan.popular ? "border-secondary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground font-body font-semibold px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="font-body">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="font-headline text-4xl font-bold">{plan.price}</span>
                    <span className="font-body text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="font-body text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handlePayment(plan.name, plan.price)}
                    className={`w-full industrial-shadow font-body font-semibold ${
                      plan.popular 
                        ? "bg-secondary hover:bg-secondary/90" 
                        : "bg-primary hover:bg-primary/90"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Methods */}
          <Card className="industrial-shadow border-2 mb-16">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl font-bold">Accepted Payment Methods</CardTitle>
              <CardDescription className="font-body">
                We support multiple secure payment options for your convenience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="bg-primary text-primary-foreground p-4 industrial-shadow">
                    <CreditCard className="h-8 w-8 mx-auto" />
                  </div>
                  <span className="font-body text-sm font-semibold">Credit Cards</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-primary text-primary-foreground p-4 industrial-shadow">
                    <CreditCard className="h-8 w-8 mx-auto" />
                  </div>
                  <span className="font-body text-sm font-semibold">Debit Cards</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-primary text-primary-foreground p-4 industrial-shadow">
                    <CreditCard className="h-8 w-8 mx-auto" />
                  </div>
                  <span className="font-body text-sm font-semibold">Bank Transfer</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-primary text-primary-foreground p-4 industrial-shadow">
                    <CreditCard className="h-8 w-8 mx-auto" />
                  </div>
                  <span className="font-body text-sm font-semibold">Digital Wallets</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Contact */}
          <div className="bg-primary text-primary-foreground p-8 industrial-shadow text-center">
            <h2 className="font-headline text-2xl font-bold mb-4">
              Need a <span className="text-secondary">Custom Solution?</span>
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              For large-scale deployments, custom integrations, or specialized requirements, 
              our enterprise team can design a solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="industrial-shadow bg-secondary hover:bg-secondary/90 font-body font-semibold"
              >
                Contact Enterprise Sales
              </Button>
              <Button 
                variant="outline"
                className="industrial-shadow border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-body font-semibold"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payments;
