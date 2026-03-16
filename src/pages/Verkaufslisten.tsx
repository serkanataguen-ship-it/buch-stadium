import Sidebar from "@/components/Sidebar";
import Banner from "@/components/Banner";

const Verkaufslisten = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeItem="/verkaufslisten" />

      <div className="flex-1 flex flex-col">
        <Banner />

        <main className="flex-1 px-6 md:px-12 py-8 max-w-4xl mx-auto w-full">
          <div className="text-center mb-10 opacity-0 animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-display text-foreground mb-2">
              Verkaufslisten
            </h2>
            <p className="text-sm md:text-base font-heading text-muted-foreground">
              Stöbern Sie in meinen aktuellen Verkaufsangeboten
            </p>
          </div>

          <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="border border-border rounded-sm bg-card p-6">
              <h3 className="text-lg font-display text-accent mb-3">Kontakt</h3>
              <div className="text-sm font-heading text-foreground leading-relaxed space-y-1">
                <p><strong>Oliver Buch</strong></p>
                <p>Parsbergstr. 16</p>
                <p>82239 Alling</p>
                <p>Tel: 08141-524442</p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:OBuFamily@aol.com"
                    className="text-accent hover:underline"
                  >
                    OBuFamily@aol.com
                  </a>
                </p>
              </div>
            </div>

            <div className="border border-border rounded-sm bg-card p-6">
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground">
                <strong>
                  Stöbern Sie in meinen Verkaufslisten mit zahlreichen seltenen Sport Büchern
                  der vergangenen 100 Jahre.
                </strong>
              </p>
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground mt-3">
                Fussball und Olympia bilden den Schwerpunkt — aber nicht den kompletten Bestand.
                Stöbern Sie in Programmen, Eintrittskarten, Souvenirs und Andenken.
              </p>
              <p className="text-sm md:text-base font-heading leading-relaxed text-muted-foreground mt-3">
                Bei Interesse kontaktieren Sie mich bitte direkt per E-Mail oder Telefon.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Verkaufslisten;
