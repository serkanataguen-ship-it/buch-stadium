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

          {/* Collection grid with actual images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <CollectionCard
              title="Länderspiele"
              href="/sammlung/programme/landerspiele/deutschland"
              imageSrc="/1935_England-deutschland.jpg"
              delay={300}
            />
            <CollectionCard
              title="DFB Pokal Endspiele"
              href="/sammlung/programme/dfb-pokal-endspiele"
              imageSrc="/DFB Pokal Endspiele-Dateien/image001.jpg"
              delay={400}
            />
            <CollectionCard
              title="Heimspiele"
              href="/sammlung/programme/heimspiele"
              imageSrc="/LS heim cover 1990 bis 1999-Dateien/image001.jpg"
              delay={500}
            />
            <CollectionCard
              title="50 Jahre 1860"
              href="/sammlung"
              imageSrc="/50_Jahre_Mainz.jpg"
              delay={600}
            />
            <CollectionCard
              title="WM 1954 Uruguay"
              href="/sammlung/programme/landerspiele/deutschland"
              imageSrc="/1954_Uruquay.jpg"
              delay={700}
            />
            <CollectionCard
              title="Die Blaue"
              href="/sammlung/programme/die-blaue"
              imageSrc="/1860 Auswaerts 2000 cover-Dateien/image001.jpg"
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
