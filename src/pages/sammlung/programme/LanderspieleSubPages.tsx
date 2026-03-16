import CategoryPageLayout from "@/components/CategoryPageLayout";
import ImageGallery, { GalleryItem } from "@/components/ImageGallery";

interface LanderspielPageProps {
  title: string;
  subtitle?: string;
  items?: GalleryItem[];
  content?: React.ReactNode;
}

const LanderspielPage = ({ title, subtitle, items, content }: LanderspielPageProps) => {
  return (
    <CategoryPageLayout
      title={title}
      subtitle={subtitle}
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Programme", href: "/sammlung/programme" },
        { label: "Länderspiele", href: "/sammlung/programme/landerspiele" },
        { label: title },
      ]}
    >
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
        {content}
        {items && items.length > 0 ? (
          <ImageGallery items={items} columns={5} />
        ) : !content ? (
          <div className="bg-card border border-border rounded-sm p-8 text-center">
            <p className="text-muted-foreground font-heading">
              Inhalte werden in Kürze hinzugefügt.
            </p>
          </div>
        ) : null}
      </div>
    </CategoryPageLayout>
  );
};

const deutschlandItems: GalleryItem[] = [
  { src: "/1908_Schweiz_400.jpg", title: "Schweiz 1908", subtitle: "Frühes Länderspiel" },
  { src: "/1922_Ungarn_0206_klein.jpg", title: "Ungarn 1922", subtitle: "02.06.1922" },
  { src: "/1923_Schweiz.jpg", title: "Schweiz 1923" },
  { src: "/1930_Schweiz.jpg", title: "Schweiz 1930" },
  { src: "/1930_Ungarn.jpg", title: "Ungarn 1930" },
  { src: "/1930_england.jpg", title: "England 1930" },
  { src: "/1931_Osterreich.jpg", title: "Österreich 1931" },
  { src: "/1931_daenemark.jpg", title: "Dänemark 1931" },
  { src: "/1932_Everton.jpg", title: "Everton 1932", subtitle: "Freundschaftsspiel" },
  { src: "/1932_Schweiz.jpg", title: "Schweiz 1932" },
  { src: "/1933_Glasgow_2805_klein.jpg", title: "Glasgow 1933", subtitle: "28.05.1933" },
  { src: "/1935_CSSR.jpg", title: "ČSSR 1935" },
  { src: "/1935_D_vs._Finnland_180835.jpg", title: "D vs. Finnland", subtitle: "18.08.1935" },
  { src: "/1935_England-deutschland.jpg", title: "England - Deutschland 1935" },
  { src: "/1935_Finnland.jpg", title: "Finnland 1935" },
  { src: "/1935_Schweiz.jpg", title: "Schweiz 1935" },
  { src: "/1936_Italien.jpg", title: "Italien 1936" },
  { src: "/1936_Norwegen.jpg", title: "Norwegen 1936" },
  { src: "/1936_luxemburg_1.jpg", title: "Luxemburg 1936" },
  { src: "/1937_Belgien_2504.jpg", title: "Belgien 1937", subtitle: "25.04.1937" },
  { src: "/1937_Holland.jpg", title: "Holland 1937" },
  { src: "/1937_Norwegen.jpg", title: "Norwegen 1937" },
  { src: "/1937_Schweiz_0205.jpg", title: "Schweiz 1937", subtitle: "02.05.1937" },
  { src: "/1937_daenemark.jpg", title: "Dänemark 1937" },
  { src: "/1937_finnland-deutschland_400.jpg", title: "Finnland - Deutschland 1937" },
  { src: "/1937_lettland-deutschland_400.jpg", title: "Lettland - Deutschland 1937" },
  { src: "/1937_schweden_gross.jpg", title: "Schweden 1937" },
  { src: "/1938_Aston_Villa.jpg", title: "Aston Villa 1938" },
  { src: "/1938_England.jpg", title: "England 1938" },
  { src: "/1938_Polen.jpg", title: "Polen 1938" },
  { src: "/1938_Portugal_2404.jpg", title: "Portugal 1938", subtitle: "24.04.1938" },
  { src: "/1938_Ungarn_2003.jpg", title: "Ungarn 1938", subtitle: "20.03.1938" },
  { src: "/1939_daenemark-deutschland_400.jpg", title: "Dänemark - Deutschland 1939" },
  { src: "/1939_jugoslawien.jpg", title: "Jugoslawien 1939" },
  { src: "/1939_norwegen-deutschland_400.jpg", title: "Norwegen - Deutschland 1939" },
  { src: "/1940_D_vs._Jugoslawien_14.4.jpg", title: "D vs. Jugoslawien", subtitle: "14.04.1940" },
  { src: "/1940_Finnland.jpg", title: "Finnland 1940" },
  { src: "/1940_Ungarn_gross.jpg", title: "Ungarn 1940" },
  { src: "/1940_Yu_vs._D_0311.jpg", title: "Jugoslawien vs. D", subtitle: "03.11.1940" },
  { src: "/1940_bulgarien_Blaue.jpg", title: "Bulgarien 1940" },
  { src: "/1941_Danemark.jpg", title: "Dänemark 1941" },
  { src: "/1941_Schweiz.jpg", title: "Schweiz 1941" },
  { src: "/1941_Slowakei.jpg", title: "Slowakei 1941" },
  { src: "/1941_rumaenien-deutschland_400.jpg", title: "Rumänien - Deutschland 1941" },
  { src: "/1941_schweden-deutschland_400.jpg", title: "Schweden - Deutschland 1941" },
  { src: "/1941_schweiz-deutschland_400.jpg", title: "Schweiz - Deutschland 1941" },
  { src: "/1942_D_vs_SWE_20.9.jpg", title: "D vs. Schweden", subtitle: "20.09.1942" },
  { src: "/1942_Kroatien.jpg", title: "Kroatien 1942" },
  { src: "/1942_Schweden.jpg", title: "Schweden 1942" },
  { src: "/1942_Spanien.jpg", title: "Spanien 1942" },
  { src: "/1942_bulgarien-deutschland_400.jpg", title: "Bulgarien - Deutschland 1942" },
  { src: "/1942_rumaenien.jpg", title: "Rumänien 1942" },
  { src: "/1950_Holland.jpg", title: "Holland 1950" },
  { src: "/1950_Schweden.jpg", title: "Schweden 1950" },
  { src: "/1951_Deutschland.jpg", title: "Deutschland 1951" },
  { src: "/1951_Italien.jpg", title: "Italien 1951" },
  { src: "/1952_Osterreich.jpg", title: "Österreich 1952" },
  { src: "/1952_Ungarn.jpg", title: "Ungarn 1952" },
  { src: "/1953_Belgien.jpg", title: "Belgien 1953" },
  { src: "/1953_Danemark.jpg", title: "Dänemark 1953" },
  { src: "/1953_Turkei.jpg", title: "Türkei 1953" },
  { src: "/1954_Deutschland.jpg", title: "Deutschland 1954" },
  { src: "/1954_Holland.jpg", title: "Holland 1954" },
  { src: "/1954_Uruquay.jpg", title: "Uruguay 1954" },
  { src: "/1955_Frankreich_0910.jpg", title: "Frankreich 1955", subtitle: "09.10.1955" },
  { src: "/1955_Osterreich.jpg", title: "Österreich 1955" },
  { src: "/1955_Spanien.jpg", title: "Spanien 1955" },
  { src: "/1955_Ungarn.jpg", title: "Ungarn 1955" },
  { src: "/1956_CSSR.jpg", title: "ČSSR 1956" },
  { src: "/1956_Italien.jpg", title: "Italien 1956" },
  { src: "/1956_ch_Holland.jpg", title: "Holland 1956" },
  { src: "/1957_Spanien.jpg", title: "Spanien 1957" },
  { src: "/1958_Belgien.jpg", title: "Belgien 1958" },
  { src: "/1959_Portugal.jpg", title: "Portugal 1959" },
  { src: "/1959_ch_Jugoslawien.jpg", title: "Jugoslawien 1959" },
  { src: "/1990_Schweiz_2.jpg", title: "Schweiz 1990" },
  { src: "/1990_Uruguay_2.jpg", title: "Uruguay 1990" },
  { src: "/1998_Brasilien-2.jpg", title: "Brasilien 1998" },
  { src: "/2005_China.jpg", title: "China 2005" },
  { src: "/2005_Russland.jpg", title: "Russland 2005" },
  { src: "/2006_Irland_80.jpg", title: "Irland 2006" },
];

export const Deutschland = () => (
  <LanderspielPage
    title="Deutschland"
    subtitle="Länderspiel-Programme der deutschen Nationalmannschaft"
    items={deutschlandItems}
    content={
      <div className="bg-card border border-border rounded-sm p-6 mb-6">
        <h3 className="text-lg font-heading font-bold text-foreground mb-3">
          Länderspiel-Programme Deutschland
        </h3>
        <p className="text-sm font-body text-foreground leading-relaxed">
          Die Sammlung umfasst Programme von Länderspielen der deutschen Nationalmannschaft
          von 1908 bis in die Gegenwart. Besonders die Vorkriegsprogramme aus den 1930er Jahren
          sind äußerst seltene Sammlerstücke. Klicken Sie auf ein Bild für eine vergrößerte Ansicht.
        </p>
      </div>
    }
  />
);

export const Schweiz = () => <LanderspielPage title="Schweiz" subtitle="Programme der Schweizer Nationalmannschaft" />;
export const DDR = () => <LanderspielPage title="DDR" subtitle="Programme der DDR-Nationalmannschaft" />;
export const Oesterreich = () => <LanderspielPage title="Österreich" subtitle="Programme der österreichischen Nationalmannschaft" />;
export const Liechtenstein = () => <LanderspielPage title="Liechtenstein" subtitle="Programme der Liechtensteiner Nationalmannschaft" />;
