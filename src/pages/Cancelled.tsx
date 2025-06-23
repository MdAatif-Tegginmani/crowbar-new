
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle, ArrowLeft, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cancelled = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="industrial-shadow border-2 border-muted">
            <CardHeader className="text-center">
              <div className="bg-muted p-4 w-20 h-20 mx-auto mb-6 industrial-shadow flex items-center justify-center">
                <XCircle className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardTitle className="font-headline text-3xl font-bold text-muted-foreground mb-2">
                Payment Cancelled
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-center">
              <div className="bg-background p-6 border-2 border-muted">
                <h2 className="font-headline text-xl font-bold mb-4">
                  Your raffle entry was not completed
                </h2>
                <p className="font-body text-muted-foreground">
                  No charges were made to your payment method. You can try again anytime 
                  before the raffle closes.
                </p>
              </div>

              <div className="bg-primary text-primary-foreground p-6 industrial-shadow">
                <div className="flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-secondary mr-2" />
                  <h3 className="font-headline text-xl font-bold">
                    Still Want to Enter?
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="font-body text-sm text-secondary mb-1">
                      ENTRY FEE
                    </div>
                    <div className="font-mono text-2xl font-bold">
                      $25.00
                    </div>
                  </div>
                  <div>
                    <div className="font-body text-sm text-secondary mb-1">
                      DRAW DATE
                    </div>
                    <div className="font-mono text-lg">
                      January 15, 2024
                    </div>
                  </div>
                  <div>
                    <div className="font-body text-sm text-secondary mb-1">
                      PRIZE POOL
                    </div>
                    <div className="font-mono text-lg">
                      $50,000+
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={() => navigate("/payments")}
                  size="lg"
                  className="w-full industrial-shadow bg-secondary hover:bg-secondary/90 font-body font-semibold"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Try Again - Enter Raffle
                </Button>
                
                <Button
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="w-full industrial-shadow border-2 border-muted font-body font-semibold"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Home
                </Button>
              </div>

              <div className="text-center pt-4 border-t">
                <p className="font-body text-sm text-muted-foreground">
                  Need help? Contact us at support@crowbarltd.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Cancelled;
