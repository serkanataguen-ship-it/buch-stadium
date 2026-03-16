import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Sammlung from "./pages/Sammlung.tsx";
import Verkaufslisten from "./pages/Verkaufslisten.tsx";
import ObuFamily from "./pages/ObuFamily.tsx";
import NotFound from "./pages/NotFound.tsx";

// Sammlung main categories
import Eintrittskarten from "./pages/sammlung/Eintrittskarten.tsx";
import Programme from "./pages/sammlung/Programme.tsx";
import Buecher from "./pages/sammlung/Buecher.tsx";
import Postkarten from "./pages/sammlung/Postkarten.tsx";
import Sammelbilder from "./pages/sammlung/Sammelbilder.tsx";
import Autogrammkarten from "./pages/sammlung/Autogrammkarten.tsx";
import Sonstiges from "./pages/sammlung/Sonstiges.tsx";

// Programme sub-pages
import Heimspiele from "./pages/sammlung/programme/Heimspiele.tsx";
import OffizielleAusgaben from "./pages/sammlung/programme/OffizielleAusgaben.tsx";
import Landerspiele from "./pages/sammlung/programme/Landerspiele.tsx";
import {
  Liga, DfbPokal, DfbPokalEndspiele, DmEndspiele,
  EuropaPokal, EuropaPokalEndspiele, EcSpiele, DieBlaue, PrivateAusgaben,
} from "./pages/sammlung/programme/ProgrammeSubPages.tsx";

// Länderspiele sub-pages
import {
  Deutschland, Schweiz, DDR, Oesterreich, Liechtenstein,
} from "./pages/sammlung/programme/LanderspieleSubPages.tsx";

// Bücher sub-pages
import {
  Jahrbuecher, KlebeAlben, FussballAbteilung, Gesamtverein,
} from "./pages/sammlung/buecher/BuecherSubPages.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sammlung" element={<Sammlung />} />
          <Route path="/verkaufslisten" element={<Verkaufslisten />} />
          <Route path="/obu-family" element={<ObuFamily />} />

          {/* Sammlung categories */}
          <Route path="/sammlung/eintrittskarten" element={<Eintrittskarten />} />
          <Route path="/sammlung/programme" element={<Programme />} />
          <Route path="/sammlung/buecher" element={<Buecher />} />
          <Route path="/sammlung/postkarten" element={<Postkarten />} />
          <Route path="/sammlung/sammelbilder" element={<Sammelbilder />} />
          <Route path="/sammlung/autogrammkarten" element={<Autogrammkarten />} />
          <Route path="/sammlung/sonstiges" element={<Sonstiges />} />

          {/* Programme sub-pages */}
          <Route path="/sammlung/programme/heimspiele" element={<Heimspiele />} />
          <Route path="/sammlung/programme/liga" element={<Liga />} />
          <Route path="/sammlung/programme/dfb-pokal" element={<DfbPokal />} />
          <Route path="/sammlung/programme/dfb-pokal-endspiele" element={<DfbPokalEndspiele />} />
          <Route path="/sammlung/programme/dm-endspiele" element={<DmEndspiele />} />
          <Route path="/sammlung/programme/europa-pokal" element={<EuropaPokal />} />
          <Route path="/sammlung/programme/europa-pokal-endspiele" element={<EuropaPokalEndspiele />} />
          <Route path="/sammlung/programme/ec-spiele" element={<EcSpiele />} />
          <Route path="/sammlung/programme/die-blaue" element={<DieBlaue />} />
          <Route path="/sammlung/programme/offizielle-ausgaben" element={<OffizielleAusgaben />} />
          <Route path="/sammlung/programme/private-ausgaben" element={<PrivateAusgaben />} />
          <Route path="/sammlung/programme/landerspiele" element={<Landerspiele />} />

          {/* Länderspiele sub-pages */}
          <Route path="/sammlung/programme/landerspiele/deutschland" element={<Deutschland />} />
          <Route path="/sammlung/programme/landerspiele/schweiz" element={<Schweiz />} />
          <Route path="/sammlung/programme/landerspiele/ddr" element={<DDR />} />
          <Route path="/sammlung/programme/landerspiele/oesterreich" element={<Oesterreich />} />
          <Route path="/sammlung/programme/landerspiele/liechtenstein" element={<Liechtenstein />} />

          {/* Bücher sub-pages */}
          <Route path="/sammlung/buecher/jahrbuecher" element={<Jahrbuecher />} />
          <Route path="/sammlung/buecher/klebe-alben" element={<KlebeAlben />} />
          <Route path="/sammlung/buecher/fussball-abteilung" element={<FussballAbteilung />} />
          <Route path="/sammlung/buecher/gesamtverein" element={<Gesamtverein />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
