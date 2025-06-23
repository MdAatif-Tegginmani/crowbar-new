
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, RefreshCw } from "lucide-react";

interface RaffleStatus {
  status: string;
  nextDrawTime?: string;
  totalEntries?: number;
  prizePool?: string;
  drawId?: string;
}

const RaffleStatusChecker = () => {
  const [raffleData, setRaffleData] = useState<RaffleStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const fetchRaffleStatus = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/raffle-status");
      
      if (response.ok) {
        const data = await response.json();
        setRaffleData(data);
        toast({
          title: "Status Updated",
          description: "Raffle status has been refreshed.",
        });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching raffle status:", error);
      // Mock data for demo purposes
      const mockData: RaffleStatus = {
        status: "Active",
        nextDrawTime: "2024-01-15 18:00:00 UTC",
        totalEntries: 1247,
        prizePool: "$50,000",
        drawId: "DRAW-2024-001"
      };
      setRaffleData(mockData);
      
      toast({
        title: "Demo Mode",
        description: "Showing mock raffle data for demonstration.",
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
          Raffle Status
        </CardTitle>
        <CardDescription className="font-body text-muted-foreground">
          Check the current status of active raffles
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Button
          onClick={fetchRaffleStatus}
          disabled={isLoading}
          className="w-full industrial-shadow bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Checking Status...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Check Raffle Status
            </>
          )}
        </Button>

        {raffleData && (
          <div className="bg-primary text-primary-foreground p-6 industrial-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <div className="font-headline text-sm font-bold text-secondary mb-1">
                    STATUS
                  </div>
                  <div className="font-mono text-lg">
                    {raffleData.status}
                  </div>
                </div>
                
                {raffleData.nextDrawTime && (
                  <div>
                    <div className="font-headline text-sm font-bold text-secondary mb-1">
                      NEXT DRAW
                    </div>
                    <div className="font-mono text-sm">
                      {raffleData.nextDrawTime}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                {raffleData.totalEntries && (
                  <div>
                    <div className="font-headline text-sm font-bold text-secondary mb-1">
                      TOTAL ENTRIES
                    </div>
                    <div className="font-mono text-lg">
                      {raffleData.totalEntries.toLocaleString()}
                    </div>
                  </div>
                )}
                
                {raffleData.prizePool && (
                  <div>
                    <div className="font-headline text-sm font-bold text-secondary mb-1">
                      PRIZE POOL
                    </div>
                    <div className="font-mono text-lg">
                      {raffleData.prizePool}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {raffleData.drawId && (
              <div className="mt-4 pt-4 border-t border-secondary">
                <div className="font-headline text-sm font-bold text-secondary mb-1">
                  DRAW ID
                </div>
                <div className="font-mono text-sm">
                  {raffleData.drawId}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RaffleStatusChecker;
