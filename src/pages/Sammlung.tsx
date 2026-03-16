import Sidebar from "@/components/Sidebar";
import Banner from "@/components/Banner";
import CollectionCard from "@/components/CollectionCard";

const categories = [
  { title: "Programme", imageLabel: "Programme", href: "/sammlung/programme" },
  { title: "Eintrittskarten", imageLabel: "Eintrittskarten", href: "/sammlung/eintrittskarten" },
  { title: "Bücher & Magazine", imageLabel: "Bücher", href: "/sammlung/buecher" },
  { title: "Sammelbilder", imageLabel: "Sammelbilder", href: "/sammlung/sammelbilder" },
  { title: "Autogrammkarten", imageLabel: "Autogrammkarten", href: "/sammlung/autogrammkarten" },
  { title: "Postkarten", imageLabel: "Postkarten", href: "/sammlung/postkarten" },
  { title: "Sonstiges", imageLabel: "Sonstiges", href: "/sammlung/sonstiges" },
];

const Sammlung = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeItem="/sammlung" />

      <div className="flex-1 flex flex-col">
        <Banner />

        <main className="flex-1 px-6 md:px-12 py-8 max-w-4xl mx-auto w-full">
          <div className="text-center mb-10 opacity-0 animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-display text-foreground mb-2">
              Sammlung 1860 München
            </h2>
            <p className="text-sm md:text-base font-heading text-muted-foreground">
              Stöbern Sie durch die verschiedenen Sammelgebiete
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <CollectionCard
                key={cat.title}
                title={cat.title}
                href={cat.href}
                imageLabel={cat.imageLabel}
                delay={200 + i * 100}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sammlung;
