
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import './lib/i18n';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* TODO: Add other routes */}
            <Route path="/arms" element={<div className="container mx-auto px-4 py-12"><h1 className="text-4xl font-bold">Arms - Coming Soon</h1></div>} />
            <Route path="/solutions" element={<div className="container mx-auto px-4 py-12"><h1 className="text-4xl font-bold">Solutions - Coming Soon</h1></div>} />
            <Route path="/blog" element={<div className="container mx-auto px-4 py-12"><h1 className="text-4xl font-bold">Blog - Coming Soon</h1></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
