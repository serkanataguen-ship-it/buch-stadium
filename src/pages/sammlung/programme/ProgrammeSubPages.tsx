import CategoryPageLayout from "@/components/CategoryPageLayout";
import ImageGallery, { GalleryItem } from "@/components/ImageGallery";

interface PlaceholderSubPageProps {
  title: string;
  subtitle?: string;
  parentLabel?: string;
  parentHref?: string;
  items?: GalleryItem[];
  introText?: string;
}

const ProgrammeSubPage = ({
  title,
  subtitle,
  parentLabel = "Programme",
  parentHref = "/sammlung/programme",
  items,
  introText,
}: PlaceholderSubPageProps) => {
  return (
    <CategoryPageLayout
      title={title}
      subtitle={subtitle}
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: parentLabel, href: parentHref },
        { label: title },
      ]}
    >
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
        {introText && (
          <div className="bg-card border border-border rounded-sm p-6 mb-6">
            <p className="text-sm font-body text-foreground leading-relaxed">{introText}</p>
          </div>
        )}
        {items && items.length > 0 ? (
          <ImageGallery items={items} columns={4} />
        ) : (
          <div className="bg-card border border-border rounded-sm p-8 text-center">
            <p className="text-muted-foreground font-heading">
              Inhalte werden in Kürze hinzugefügt.
            </p>
          </div>
        )}
      </div>
    </CategoryPageLayout>
  );
};

// DFB Pokal Endspiele with images
const dfbPokalEndspieleItems: GalleryItem[] = [
  { src: "/DFB-Pokal-Endspiele-Dateien/image001.jpg", title: "DFB Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image044.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image049.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image050.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image051.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image052.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image053.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image054.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image055.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image056.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image057.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image058.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image059.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image060.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image061.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image062.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image063.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image064.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image065.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image066.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image067.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image068.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image069.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image070.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image071.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image073.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/image076.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/a_image076.jpg", title: "Pokal Endspiel" },
  { src: "/DFB-Pokal-Endspiele-Dateien/a_image078.jpg", title: "Pokal Endspiel" },
];

// 1860 Auswärtsspiele 2004 items
const auswaerts2004Items: GalleryItem[] = [
  { src: "/1860-Auswaerts-2004-cover-Dateien/image004.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image006.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image008.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image010.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image012.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image014.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image016.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image018.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image020.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image022.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image024.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image026.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image028.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image030.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image032.jpg", title: "Auswärtsspiel" },
  { src: "/1860-Auswaerts-2004-cover-Dateien/image034.jpg", title: "Auswärtsspiel" },
];

export const Liga = () => (
  <ProgrammeSubPage
    title="Liga"
    subtitle="Ligaspiel-Programme des TSV 1860 München"
    introText="Auswärtsprogramme aus verschiedenen Saisons der Liga-Geschichte des TSV 1860 München."
    items={auswaerts2004Items}
  />
);

export const DfbPokal = () => (
  <ProgrammeSubPage
    title="DFB Pokal"
    subtitle="Programme aus DFB-Pokalspielen"
  />
);

export const DfbPokalEndspiele = () => (
  <ProgrammeSubPage
    title="DFB Pokal Endspiele"
    subtitle="Endspiel-Programme des DFB-Pokals"
    introText="Eine umfangreiche Sammlung von Programmen der DFB-Pokal-Endspiele aus verschiedenen Jahrzehnten. Klicken Sie auf ein Bild für eine vergrößerte Ansicht."
    items={dfbPokalEndspieleItems}
  />
);

export const DmEndspiele = () => (
  <ProgrammeSubPage
    title="DM Endspiele"
    subtitle="Programme der Deutschen Meisterschafts-Endspiele"
  />
);

export const EuropaPokal = () => (
  <ProgrammeSubPage
    title="Europa Pokal"
    subtitle="Programme europäischer Pokalwettbewerbe"
  />
);

export const EuropaPokalEndspiele = () => (
  <ProgrammeSubPage
    title="Europa Pokal Endspiele"
    subtitle="Endspiel-Programme europäischer Pokalwettbewerbe"
  />
);

export const EcSpiele = () => (
  <ProgrammeSubPage
    title="EC Spiele"
    subtitle="Europapokal-Spiele des TSV 1860 München"
  />
);

// Die Blaue with 1860 Auswärts 2000 images
const dieBlaueItems: GalleryItem[] = Array.from({ length: 37 }, (_, i) => ({
  src: `/1860-Auswaerts-2000-cover-Dateien/image${String(i + 1).padStart(3, "0")}.jpg`,
  title: `Ausgabe ${i + 1}`,
}));

export const DieBlaue = () => (
  <ProgrammeSubPage
    title="Die Blaue"
    subtitle="Das Fanzine der Münchner Löwen"
    introText="'Die Blaue' ist das legendäre Fanzine der Fans des TSV 1860 München. Hier finden Sie Cover-Abbildungen verschiedener Ausgaben."
    items={dieBlaueItems}
  />
);

export const PrivateAusgaben = () => (
  <ProgrammeSubPage
    title="Private Ausgaben"
    subtitle="Privat herausgegebene Programmhefte"
  />
);
