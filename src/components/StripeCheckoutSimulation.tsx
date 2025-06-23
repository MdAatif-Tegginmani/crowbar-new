
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CreditCard, Trophy } from "lucide-react";

const StripeCheckoutSimulation = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { toast } = useToast();

  const handleEnterRaffle = async () => {
    setIsProcessing(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 2500, // $25.00 in cents
          currency: "usd",
          description: "Raffle Entry - CrowbarLtd Industrial Lottery",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Simulate Stripe checkout redirect
        if (data.checkoutUrl) {
          window.open(data.checkoutUrl, '_blank');
        } else {
          // For demo purposes, show success modal after delay
          setTimeout(() => {
            setShowSuccessModal(true);
            toast({
              title: "Entry Successful!",
              description: "You've been entered into the raffle. Good luck!",
            });
          }, 2000);
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error processing raffle entry:", error);
      
      // For demo purposes, simulate success after delay
      setTimeout(() => {
        setShowSuccessModal(true);
        toast({
          title: "Demo Mode",
          description: "Simulated successful raffle entry for demonstration.",
        });
      }, 2000);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Card className="industrial-shadow border-2 border-secondary">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-2xl font-bold flex items-center justify-center">
            <Trophy className="mr-3 h-6 w-6 text-secondary" />
            Enter Industrial Raffle
          </CardTitle>
          <CardDescription className="font-body text-muted-foreground">
            Join the CrowbarLtd raffle for a chance to win industrial-grade prizes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-primary text-primary-foreground p-6 industrial-shadow text-center">
            <div className="font-headline text-4xl font-bold text-secondary mb-2">
              $25.00
            </div>
            <div className="font-body text-sm">
              Entry Fee
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-background p-4 industrial-shadow border-2 border-muted">
                <div className="font-headline text-2xl font-bold text-secondary">
                  $50K+
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  Prize Pool
                </div>
              </div>
              <div className="bg-background p-4 industrial-shadow border-2 border-muted">
                <div className="font-headline text-2xl font-bold text-secondary">
                  1:247
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  Current Odds
                </div>
              </div>
            </div>

            <Button
              onClick={handleEnterRaffle}
              disabled={isProcessing}
              size="lg"
              className="w-full industrial-shadow bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold text-lg py-6"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing Payment...
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-5 w-5" />
                  Enter Raffle
                </>
              )}
            </Button>
          </div>

          <div className="text-center">
            <p className="font-body text-xs text-muted-foreground">
              Secure payment processing via Stripe. No subscription required.
            </p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="industrial-shadow border-2 border-secondary">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl font-bold text-center flex items-center justify-center">
              <Trophy className="mr-3 h-6 w-6 text-secondary" />
              Raffle Entry Confirmed!
            </DialogTitle>
            <DialogDescription className="font-body text-center text-lg">
              You've successfully entered the CrowbarLtd Industrial Raffle
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-primary text-primary-foreground p-6 industrial-shadow text-center">
              <div className="font-mono text-sm text-secondary mb-2">
                ENTRY ID
              </div>
              <div className="font-headline text-xl font-bold">
                RAF-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </div>
            </div>
            <div className="text-center space-y-2">
              <p className="font-body text-sm">
                Draw Date: <span className="font-mono text-secondary">January 15, 2024</span>
              </p>
              <p className="font-body text-xs text-muted-foreground">
                Good luck! Winners will be notified via email.
              </p>
            </div>
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="w-full industrial-shadow bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-semibold"
            >
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StripeCheckoutSimulation;
