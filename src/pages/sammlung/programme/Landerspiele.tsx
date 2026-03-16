import CategoryPageLayout from "@/components/CategoryPageLayout";
import CollectionCard from "@/components/CollectionCard";

const countries = [
  { title: "Deutschland", imageLabel: "Deutschland", href: "/sammlung/programme/landerspiele/deutschland" },
  { title: "Schweiz", imageLabel: "Schweiz", href: "/sammlung/programme/landerspiele/schweiz" },
  { title: "DDR", imageLabel: "DDR", href: "/sammlung/programme/landerspiele/ddr" },
  { title: "Österreich", imageLabel: "Österreich", href: "/sammlung/programme/landerspiele/oesterreich" },
  { title: "Liechtenstein", imageLabel: "Liechtenstein", href: "/sammlung/programme/landerspiele/liechtenstein" },
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
    </CategoryPageLayout>
  );
};

export default Landerspiele;
