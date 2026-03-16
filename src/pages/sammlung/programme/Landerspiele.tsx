import CategoryPageLayout from "@/components/CategoryPageLayout";
import ImageGallery, { GalleryItem } from "@/components/ImageGallery";
import CollectionCard from "@/components/CollectionCard";

const countries = [
  { title: "Deutschland", imageLabel: "Deutschland", href: "/sammlung/programme/landerspiele/deutschland" },
  { title: "Schweiz", imageLabel: "Schweiz", href: "/sammlung/programme/landerspiele/schweiz" },
  { title: "DDR", imageLabel: "DDR", href: "/sammlung/programme/landerspiele/ddr" },
  { title: "Österreich", imageLabel: "Österreich", href: "/sammlung/programme/landerspiele/oesterreich" },
  { title: "Liechtenstein", imageLabel: "Liechtenstein", href: "/sammlung/programme/landerspiele/liechtenstein" },
];

// Preview items for the overview page
const previewItems: GalleryItem[] = [
  { src: "/1935_England-deutschland.jpg", title: "England - Deutschland 1935" },
  { src: "/1938_England.jpg", title: "England 1938" },
  { src: "/1954_Uruquay.jpg", title: "Uruguay 1954" },
  { src: "/1990_Schweiz_2.jpg", title: "Schweiz 1990" },
  { src: "/2006_Irland_80.jpg", title: "Irland 2006" },
];

const Landerspiele = () => {
  return (
    <CategoryPageLayout
      title="Länderspiele"
      subtitle="Programm-Sammlung internationaler Begegnungen"
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Programme", href: "/sammlung/programme" },
        { label: "Länderspiele" },
      ]}
    >
      <div className="space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {countries.map((country, i) => (
            <CollectionCard
              key={country.title}
              title={country.title}
              href={country.href}
              imageLabel={country.imageLabel}
              delay={200 + i * 100}
            />
          ))}
        </div>

        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "700ms" }}>
          <h3 className="text-xl font-display text-accent mb-4">Highlights aus der Sammlung</h3>
          <ImageGallery items={previewItems} columns={5} />
        </div>
      </div>
    </CategoryPageLayout>
  );
};

export default Landerspiele;
