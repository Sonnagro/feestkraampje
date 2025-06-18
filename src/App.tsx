
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OverOns from "./pages/OverOns";
import Pakketten from "./pages/Pakketten";
import PakketDetail from "./pages/PakketDetail";
import Fotos from "./pages/Fotos";
import Ervaringen from "./pages/Ervaringen";
import Contact from "./pages/Contact";
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
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/pakketten" element={<Pakketten />} />
          <Route path="/pakketten/:id" element={<PakketDetail />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/ervaringen" element={<Ervaringen />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
