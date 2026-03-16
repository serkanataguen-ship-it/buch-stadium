import CategoryPageLayout from "@/components/CategoryPageLayout";
import ImageGallery, { GalleryItem } from "@/components/ImageGallery";

// Heimspiele with LS heim cover images across decades
const heimspiele70er: GalleryItem[] = [
  "image041", "image042", "image043", "image044", "image045", "image046",
  "image047", "image048", "image049", "image050", "image051", "image052",
  "image053", "image054", "image055", "image056", "image057", "image058",
  "image059", "image060", "image061", "image062", "image063", "image064",
  "image065", "image066", "image067", "image068",
].map((name, i) => ({
  src: `/LS-heim-cover-1970-bis-1979-Dateien/${name}.jpg`,
  title: `Heimspiel ${i + 1}`,
  subtitle: "1970er Jahre",
}));

const heimspiele80er: GalleryItem[] = [
  "image013", "image014", "image015", "image016", "image017", "image018",
  "image019", "image020", "image021", "image022", "image023", "image024",
  "image025", "image026", "image027", "image028", "image029", "image030",
  "image031", "image032",
].map((name, i) => ({
  src: `/LS-heim-cover-1980-bis-1989-Dateien/${name}.jpg`,
  title: `Heimspiel ${i + 1}`,
  subtitle: "1980er Jahre",
}));

const heimspiele90er: GalleryItem[] = [
  "image001", "image003", "image004", "image005", "image006", "image026",
  "image035", "image036", "image039", "image040", "image041", "image042",
  "image043", "image044", "image045", "image046", "image047", "image048",
  "image051", "image056", "image061", "image064", "image071", "image072",
  "image073", "image074", "image075", "image077", "image079", "image080",
  "image081", "image082", "image083", "image084", "image085", "image088",
  "image089", "image090", "image091",
].map((name, i) => ({
  src: `/LS heim cover 1990 bis 1999-Dateien/${name}.jpg`,
  title: `Heimspiel ${i + 1}`,
  subtitle: "1990er Jahre",
}));

const heimspiele2000er: GalleryItem[] = [
  "image002", "image005", "image006", "image007", "image008", "image009",
  "image010", "image011", "image012", "image013", "image014", "image015",
  "image016", "image017", "image018", "image019", "image038", "image039",
  "image040", "image041", "image042", "image043", "image044", "image045",
  "image046", "image047", "image048", "image049", "image050", "image078",
].map((name, i) => ({
  src: `/LS heim cover 2000 bis heute-Dateien/${name}.jpg`,
  title: `Heimspiel ${i + 1}`,
  subtitle: "2000er Jahre",
}));

const Heimspiele = () => {
  return (
    <CategoryPageLayout
      title="Heimspiele"
      subtitle="Die Programmhistorie der Münchner Löwen"
      breadcrumbs={[
        { label: "Sammlung", href: "/sammlung" },
        { label: "Programme", href: "/sammlung/programme" },
        { label: "Heimspiele" },
      ]}
    >
      <div className="space-y-10 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
        <div className="bg-card border border-border rounded-sm p-6">
          <p className="text-sm font-body text-foreground leading-relaxed">
            Die Geschichte der Spielprogramme des TSV 1860 München reicht weit zurück.
            Bereits in den frühen Jahren des Vereins wurden zu besonderen Anlässen
            Programme gedruckt, die heute begehrte Sammlerstücke sind.
            Klicken Sie auf ein Bild für eine vergrößerte Ansicht.
          </p>
        </div>

        <section>
          <h3 className="text-xl font-display text-accent mb-4">1970er Jahre</h3>
          <ImageGallery items={heimspiele70er} columns={5} />
        </section>

        <section>
          <h3 className="text-xl font-display text-accent mb-4">1980er Jahre</h3>
          <ImageGallery items={heimspiele80er} columns={5} />
        </section>

        <section>
          <h3 className="text-xl font-display text-accent mb-4">1990er Jahre</h3>
          <ImageGallery items={heimspiele90er} columns={5} />
        </section>

        <section>
          <h3 className="text-xl font-display text-accent mb-4">2000er Jahre bis heute</h3>
          <ImageGallery items={heimspiele2000er} columns={5} />
        </section>
      </div>
    </CategoryPageLayout>
  );
};

export default Heimspiele;
