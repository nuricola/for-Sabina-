import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AnimationPage from "./pages/AnimationPage";
import MemoriesPage from "./pages/MemoriesPage";
import MusicPage from "./pages/MusicPage";
import FinalPage from "./pages/FinalPage";
import SecretPage from "./pages/SecretPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/animation" element={<AnimationPage />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/final" element={<FinalPage />} />
          <Route path="/secret" element={<SecretPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
