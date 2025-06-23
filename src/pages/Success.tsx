
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Trophy, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="industrial-shadow border-2 border-green-500">
            <CardHeader className="text-center">
              <div className="bg-green-500 p-4 w-20 h-20 mx-auto mb-6 industrial-shadow flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="font-headline text-3xl font-bold text-green-600 mb-2">
                Payment Successful!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-center">
              <div className="bg-primary text-primary-foreground p-6 industrial-shadow">
                <div className="flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-secondary mr-3" />
                  <h2 className="font-headline text-2xl font-bold">
                    Raffle Entry Confirmed
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-body text-sm text-secondary mb-1">
                      ENTRY ID
                    </div>
                    <div className="font-mono text-lg">
                      RAF-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <div className="font-body text-sm text-secondary mb-1">
                      DRAW DATE
                    </div>
                    <div className="font-mono text-lg">
                      January 15, 2024 - 6:00 PM UTC
                    </div>
                  </div>
                  <div>
                    <div className="font-body text-sm text-secondary mb-1">
                      AMOUNT PAID
                    </div>
                    <div className="font-mono text-lg">
                      $25.00 USD
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-headline text-xl font-bold">
                  What Happens Next?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary mt-2"></div>
                    <p className="font-body">
                      You'll receive a confirmation email with your entry details within 5 minutes.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary mt-2"></div>
                    <p className="font-body">
                      The raffle draw will take place on January 15, 2024 at 6:00 PM UTC.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary mt-2"></div>
                    <p className="font-body">
                      Winners will be notified via email within 24 hours of the draw.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <Button
                  onClick={() => navigate("/")}
                  className="industrial-shadow bg-primary hover:bg-primary/90 font-body font-semibold"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Return to Home
                </Button>
              </div>

              <div className="text-center">
                <p className="font-body text-sm text-muted-foreground">
                  Good luck in the raffle! Questions? Contact us at support@crowbarltd.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
