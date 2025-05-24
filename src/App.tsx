import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { scrollToSection } from "./utils/scrollToSection";

const queryClient = new QueryClient();

// ScrollToTop component to ensure page scrolls to top on route change
// and handles hash navigation
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Extract hash without the # symbol
    const hash = location.hash.replace('#', '');
    
    if (hash) {
      // If there's a hash, scroll to the section after a small delay
      setTimeout(() => {
        scrollToSection(hash);
      }, 300); // Slightly longer delay to ensure content is loaded
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add redirect for old or invalid hash routes */}
            <Route path="/#:section" element={<Navigate to="/" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
