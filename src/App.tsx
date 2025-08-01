
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import News from "./pages/News";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Payments from "./pages/Payments";
import Interactive from "./pages/Interactive";
import Success from "./pages/Success";
import Cancelled from "./pages/Cancelled";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news" element={<News />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/interactive" element={<Interactive />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancelled" element={<Cancelled />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
