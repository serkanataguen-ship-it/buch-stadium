import CategoryPageLayout from "@/components/CategoryPageLayout";
import CollectionCard from "@/components/CollectionCard";

const items = [
  { title: "Heimspiele TSV 1860", imageLabel: "Heimspiele", href: "/sammlung/eintrittskarten/heimspiele" },
  { title: "Auswärtsspiele TSV 1860", imageLabel: "Auswärtsspiele", href: "/sammlung/eintrittskarten/auswaertsspiele" },
  { title: "Pokal & EC", imageLabel: "Pokal & EC", href: "/sammlung/eintrittskarten/pokal-ec" },
  { title: "Länderspiele", imageLabel: "Länderspiele", href: "/sammlung/eintrittskarten/landerspiele" },
];

const Eintrittskarten = () => {
  return (
    <CategoryPageLayout
      title="Eintrittskarten"
      subtitle="Tickets und Eintrittskarten aus der Geschichte von 1860 München"
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Eintrittskarten" },
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

export default Eintrittskarten;
