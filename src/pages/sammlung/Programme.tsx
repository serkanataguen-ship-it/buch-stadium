import CategoryPageLayout from "@/components/CategoryPageLayout";
import CollectionCard from "@/components/CollectionCard";

const subcategories = [
  { title: "Heimspiele", imageLabel: "Heimspiele", href: "/sammlung/programme/heimspiele" },
  { title: "Liga", imageLabel: "Liga", href: "/sammlung/programme/liga" },
  { title: "DFB Pokal", imageLabel: "DFB Pokal", href: "/sammlung/programme/dfb-pokal" },
  { title: "DFB Pokal Endspiele", imageLabel: "Endspiele", href: "/sammlung/programme/dfb-pokal-endspiele" },
  { title: "DM Endspiele", imageLabel: "DM Endspiele", href: "/sammlung/programme/dm-endspiele" },
  { title: "Europa Pokal", imageLabel: "Europa Pokal", href: "/sammlung/programme/europa-pokal" },
  { title: "Europa Pokal Endspiele", imageLabel: "EC Endspiele", href: "/sammlung/programme/europa-pokal-endspiele" },
  { title: "EC Spiele", imageLabel: "EC Spiele", href: "/sammlung/programme/ec-spiele" },
  { title: "Die Blaue", imageLabel: "Die Blaue", href: "/sammlung/programme/die-blaue" },
  { title: "Länderspiele", imageLabel: "Länderspiele", href: "/sammlung/programme/landerspiele" },
  { title: "Offizielle Ausgaben", imageLabel: "Offiziell", href: "/sammlung/programme/offizielle-ausgaben" },
  { title: "Private Ausgaben", imageLabel: "Privat", href: "/sammlung/programme/private-ausgaben" },
];

const Programme = () => {
  return (
    <CategoryPageLayout
      title="Programme"
      subtitle="Spielprogramme und Stadionhefte"
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Programme" },
      ]}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subcategories.map((cat, i) => (
          <CollectionCard
            key={cat.title}
            title={cat.title}
            href={cat.href}
            imageLabel={cat.imageLabel}
            delay={200 + i * 80}
          />
        ))}
      </div>
    </CategoryPageLayout>
  );
};

export default Programme;
