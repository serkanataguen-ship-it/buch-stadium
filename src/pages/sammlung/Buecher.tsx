import CategoryPageLayout from "@/components/CategoryPageLayout";
import CollectionCard from "@/components/CollectionCard";

const items = [
  { title: "Jahrbücher", imageLabel: "Jahrbücher", href: "/sammlung/buecher/jahrbuecher" },
  { title: "Klebe-Alben", imageLabel: "Klebe-Alben", href: "/sammlung/buecher/klebe-alben" },
  { title: "Fußball Abteilung", imageLabel: "Fußball", href: "/sammlung/buecher/fussball-abteilung" },
  { title: "Gesamtverein", imageLabel: "Gesamtverein", href: "/sammlung/buecher/gesamtverein" },
];

const Buecher = () => {
  return (
    <CategoryPageLayout
      title="Bücher & Magazine"
      subtitle="Literatur rund um den TSV 1860 München"
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Bücher & Magazine" },
      ]}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <CollectionCard
            key={item.title}
            title={item.title}
            href={item.href}
            imageLabel={item.imageLabel}
            delay={200 + i * 100}
          />
        ))}
      </div>
    </CategoryPageLayout>
  );
};

export default Buecher;
