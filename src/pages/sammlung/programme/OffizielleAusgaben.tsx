import CategoryPageLayout from "@/components/CategoryPageLayout";
import ImageGallery, { GalleryItem } from "@/components/ImageGallery";

// Auswärtsspiele cover images
const awayItems: GalleryItem[] = [
  "image002", "image004", "image006", "image008", "image010", "image011",
  "image013", "image015", "image017", "image019", "image021", "image023",
  "image024", "image026", "image028", "image030", "image032", "image034",
  "image036", "image038", "image040", "image042", "image043", "image044",
  "image045", "image046",
].map((name, i) => ({
  src: `/LS-Away-cover-2000-bis-heute-Dateien/${name}.jpg`,
  title: `Auswärtsspiel ${i + 1}`,
  subtitle: "2000er Jahre",
}));

// Formel 1 items  
const formel1Items: GalleryItem[] = [
  "image002", "image004", "image006", "image008", "image012", "image016",
  "image020", "image024", "image031", "image032", "image033", "image034",
  "image035", "image036", "image037", "image038", "image039", "image040",
].map((name, i) => ({
  src: `/Formel-1-Hefte-Dateien/${name}.jpg`,
  title: `Formel 1 Heft ${i + 1}`,
}));

// Regionalliga-Saison 2003/04 items
const regionalligaItems: GalleryItem[] = [
  { src: "/1_Siegen_2707_36.jpg", title: "Siegen", subtitle: "27.07.2003" },
  { src: "/2_Kassel_1108_32.jpg", title: "Kassel", subtitle: "11.08.2003" },
  { src: "/3_Sandhausen_2408_60.jpg", title: "Sandhausen", subtitle: "24.08.2003" },
  { src: "/4_Burghausen_0809_4.jpg", title: "Burghausen", subtitle: "08.09.2003" },
  { src: "/5_SSVR_2109_48.jpg", title: "SSV Reutlingen", subtitle: "21.09.2003" },
  { src: "/6_Haching_2110_24.jpg", title: "Haching", subtitle: "21.10.2003" },
  { src: "/7_Elversberg_0211.jpg", title: "Elversberg", subtitle: "02.11.2003" },
  { src: "/8_Regensburg_1711_32.jpg", title: "Regensburg", subtitle: "17.11.2003" },
  { src: "/9_KSC_0903_20.jpg", title: "Karlsruher SC", subtitle: "09.03.2004" },
  { src: "/10_Oggersheim_2003_4.jpg", title: "Oggersheim", subtitle: "20.03.2004" },
  { src: "/11_Aalen_0504_12.jpg", title: "Aalen", subtitle: "05.04.2004" },
  { src: "/12_Vfb_Ama_1804_4.jpg", title: "VfB Amateure", subtitle: "18.04.2004" },
  { src: "/13_FSV_FFM_2604_32.jpg", title: "FSV Frankfurt", subtitle: "26.04.2004" },
  { src: "/14_Stuki_0605_48.jpg", title: "Stuttg. Kickers", subtitle: "06.05.2004" },
  { src: "/15_FCI_1705_28.jpg", title: "FC Ingolstadt", subtitle: "17.05.2004" },
  { src: "/16_Pfull_3105_8.jpg", title: "Pfullingen", subtitle: "31.05.2004" },
];

const OffizielleAusgaben = () => {
  return (
    <CategoryPageLayout
      title="Offizielle Ausgaben"
      subtitle="Offizielle Vereinspublikationen und Programmhefte"
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Programme", href: "/sammlung/programme" },
        { label: "Offizielle Ausgaben" },
      ]}
    >
      <div className="space-y-10 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div className="bg-card border border-border rounded-sm p-6">
          <p className="text-sm font-body text-foreground leading-relaxed">
            Die offiziellen Ausgaben umfassen alle vom Verein oder dem DFB herausgegebenen
            Programmhefte und Publikationen. Klicken Sie auf ein Bild für eine vergrößerte Ansicht.
          </p>
        </div>

        <section>
          <h3 className="text-xl font-display text-accent mb-4">
            Regionalliga Süd 2003/04 — Auswärtsprogramme
          </h3>
          <ImageGallery items={regionalligaItems} columns={4} />
        </section>

        <section>
          <h3 className="text-xl font-display text-accent mb-4">
            Auswärtsspiele 2000er
          </h3>
          <ImageGallery items={awayItems} columns={5} />
        </section>

        <section>
          <h3 className="text-xl font-display text-accent mb-4">
            Formel 1 Hefte
          </h3>
          <ImageGallery items={formel1Items} columns={5} />
        </section>
      </div>
    </CategoryPageLayout>
  );
};

export default OffizielleAusgaben;
