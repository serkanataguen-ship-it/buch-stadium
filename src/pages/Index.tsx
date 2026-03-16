import Sidebar from "@/components/Sidebar";
import Banner from "@/components/Banner";
import CollectionCard from "@/components/CollectionCard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeItem="/" />

      <div className="flex-1 flex flex-col">
        <Banner />

        <main className="flex-1 px-6 md:px-12 py-8 max-w-4xl mx-auto w-full">
          {/* Hero heading */}
          <div className="text-center mb-10 opacity-0 animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-display text-foreground mb-2">
              Das Online Archiv von Oliver Buch
            </h2>
            <p className="text-sm md:text-base font-display text-accent">
              tauchen Sie ein in die Welt des Sammelns
            </p>
          </div>

          {/* Sportsammler highlight */}
          <div className="mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <a
              href="/verkaufslisten"
              className="block overflow-hidden rounded-sm border border-border bg-card hover:shadow-lg hover:border-accent transition-all duration-300 max-w-md mx-auto"
            >
              <div className="aspect-[3/2] bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground font-heading uppercase tracking-widest">
                  Sportsammler Briefkopf
                </span>
              </div>
            </a>
          </div>

          {/* Collection grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <CollectionCard
              title="1860 München"
              href="/sammlung"
              imageLabel="1860 Wappen"
              delay={300}
            />
            <CollectionCard
              title="1860 München"
              href="/sammlung"
              imageLabel="1860 Wappen"
              delay={400}
            />
            <CollectionCard
              title="1860 Löwe"
              href="/sammlung"
              imageLabel="1860 Löwe"
              delay={500}
            />
            <CollectionCard
              title="D v. Italien 1939"
              href="/sammlung"
              imageLabel="Länderspiel"
              delay={600}
            />
            <CollectionCard
              title="50 Jahre Buch"
              href="/sammlung"
              imageLabel="Jubiläum"
              delay={700}
            />
            <CollectionCard
              title="WM 1962"
              href="/sammlung"
              imageLabel="WM Programm"
              delay={800}
            />
          </div>

          {/* Description text */}
          <div
            className="text-center max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "900ms" }}
          >
            <p className="text-sm md:text-base font-heading leading-relaxed text-foreground">
              <strong>
                Stöbern Sie in meinen Verkaufslisten mit zahlreichen seltenen Sport Büchern
                der vergangenen 100 Jahre.
              </strong>
            </p>
            <p className="text-sm md:text-base font-heading leading-relaxed text-foreground mt-2">
              <strong>
                Fussball und Olympia bilden den Schwerpunkt — aber nicht den kompletten Bestand.
              </strong>
            </p>
            <p className="text-sm md:text-base font-heading leading-relaxed text-foreground mt-2">
              <strong>
                Stöbern Sie in Programmen, Eintrittskarten, Souvenirs und Andenken.
              </strong>
            </p>
            <p className="text-sm md:text-base font-heading leading-relaxed text-muted-foreground mt-2">
              Zum Appetit holen schauen Sie doch vorher in mein privates Fussball Archiv.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
