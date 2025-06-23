
import Layout from "@/components/Layout";
import SubmitLoreForm from "@/components/SubmitLoreForm";
import RaffleStatusChecker from "@/components/RaffleStatusChecker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Interactive = () => {
  const { toast } = useToast();
  const [isProcessingRaffle, setIsProcessingRaffle] = useState(false);

  const handleRaffleEntry = async () => {
    setIsProcessingRaffle(true);
    
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 2500, // $25.00 in cents
          currency: "usd",
          description: "CrowbarLtd Industrial Raffle Entry",
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/cancelled`,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data.checkoutUrl) {
          // Redirect to Stripe Checkout
          window.location.href = data.checkoutUrl;
        } else {
          throw new Error("No checkout URL received");
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      
      // For demo purposes, simulate checkout redirect
      toast({
        title: "Demo Mode",
        description: "Simulating Stripe checkout redirect...",
      });
      
      setTimeout(() => {
        window.location.href = "/success";
      }, 1500);
    } finally {
      setIsProcessingRaffle(false);
    }
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-headline text-4xl lg:text-5xl font-bold mb-4">
              Interactive <span className="text-secondary">Platform</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our industrial-strength platform through interactive features 
              designed for community engagement and raffle management.
            </p>
          </div>

          {/* Enter Raffle Section */}
          <Card className="industrial-shadow border-2 border-secondary mb-16">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl font-bold flex items-center justify-center">
                <Trophy className="mr-3 h-8 w-8 text-secondary" />
                CrowbarLtd Industrial Raffle
              </CardTitle>
              <CardDescription className="font-body text-lg">
                Enter our exclusive raffle for a chance to win industrial-grade prizes and equipment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="bg-primary text-primary-foreground p-8 industrial-shadow text-center">
                <div className="font-headline text-5xl font-bold text-secondary mb-2">
                  $25.00
                </div>
                <div className="font-body text-lg">
                  Entry Fee
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-6 industrial-shadow border-2 border-muted text-center">
                  <div className="font-headline text-3xl font-bold text-secondary mb-2">
                    $50,000+
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    Total Prize Pool
                  </div>
                </div>
                <div className="bg-background p-6 industrial-shadow border-2 border-muted text-center">
                  <div className="font-headline text-3xl font-bold text-secondary mb-2">
                    1:247
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    Current Odds
                  </div>
                </div>
                <div className="bg-background p-6 industrial-shadow border-2 border-muted text-center">
                  <div className="font-headline text-3xl font-bold text-secondary mb-2">
                    Jan 15
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    Next Draw
                  </div>
                </div>
              </div>

              <Button
                onClick={handleRaffleEntry}
                disabled={isProcessingRaffle}
                size="lg"
                className="w-full h-16 industrial-shadow bg-charcoal hover:bg-secondary text-white font-headline font-bold text-xl transition-colors"
              >
                {isProcessingRaffle ? (
                  <>
                    <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Trophy className="mr-3 h-6 w-6" />
                    Enter Raffle
                  </>
                )}
              </Button>

              <div className="text-center">
                <p className="font-body text-sm text-muted-foreground">
                  Secure payment processing. Winners will be notified via email.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Features - Now using 2 columns to fill space */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <RaffleStatusChecker />
            </div>
            <div>
              <SubmitLoreForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Interactive;
