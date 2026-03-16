import Sidebar from "@/components/Sidebar";
import Banner from "@/components/Banner";

const ObuFamily = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeItem="/obu-family" />

      <div className="flex-1 flex flex-col">
        <Banner />

        <main className="flex-1 px-6 md:px-12 py-8 max-w-3xl mx-auto w-full">
          <div className="text-center mb-10 opacity-0 animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-display text-foreground mb-2">
              Die OBu Family
            </h2>
          </div>

          <article className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <section>
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground">
                Die Sammlung vom verrückten Alten der OBu Family habt ihr ja nun zur Genüge
                durchkämmt. Und da einige immer wissen wollen, wer denn nun hinter all dem Kram
                steckt, tue ich euch den Gefallen und stelle auch noch ein paar Bildchen ins Netz
                und plauder dazu noch ein bisschen aus dem Nähkästchen.
              </p>
            </section>

            <section className="border-t border-border pt-6">
              <h3 className="text-lg md:text-xl font-display text-accent mb-3">
                Meine bessere Hälfte
              </h3>
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground">
                Zuerst sei meine bessere Hälfte und standesamtliche Zuteilung Christine erwähnt.
                Ein Zürcher Großstadtmädel, dass mich nun schon seit 1987 auf allen Wegen begleitet
                und mit dem ich seit Juli 1991 verheiratet bin. Sie hat's bestimmt nicht leicht mit
                einem Fußball Narrischen wie mir, aber sie nimmt's immer noch gelassen. Selbst ist
                sie natürlich auch Fan der Löwen, wenn auch nicht mehr so aktiv wie früher. Irgendwie
                hat SIE den Absprung noch rechtzeitig geschafft.
              </p>
            </section>

            <section className="border-t border-border pt-6">
              <h3 className="text-lg md:text-xl font-display text-accent mb-3">
                Unsere beiden Taschenbücher
              </h3>
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground">
                Sohn Nummer Eins heißt Patrick, seit 17. Juli 1995 Mitglied in unserem kleinen Verein
                und genauso lange auch schon bei den Löwen registriert. Aktiv spielt er selbst beim
                TSV Alling und wann immer es möglich ist, begleitet er mich zu den Sechzger Spielen
                ins Stadion. In seinen jungen Jahren bringt er es schon auf über 200 live gesehene
                Löwenspiele. Plus das ganze andere Zeug was so anfällt wenn Vater und Sohn on Tour sind.
                Zuletzt ein Zwei-Tages-Trip zum Länderspiel nach Slowenien.
              </p>
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground mt-3">
                Sohn Nummer Zwei wurde am 29. Oktober 2001 verpflichtet. Florian ist also das
                Nesthäkchen und verbringt die Zeit während der Spiele noch bei der Oma. Er wird noch
                früh genug lernen was es heißt, mit den Löwen zu leiden.
              </p>
            </section>

            <section className="border-t border-border pt-6">
              <h3 className="text-lg md:text-xl font-display text-accent mb-3">
                Kleiner Steckbrief von mir
              </h3>
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground">
                Seit Oktober 1967 auf diesem Planeten zu Hause, war es mein Vater, der mich 1979 zu
                meinem ersten 60er Spiel mitnahm. Gegen Saarbrücken im Olympiastadion war das. Die
                Löwen gewannen 3:1 und stiegen in die Bundesliga auf. Wenn man so will, wurde an
                diesem Tag ein Erfolgsfan geboren. Allerdings war das auch schon für lange Jahre der
                letzte Erfolg, den ich mit den Löwen feierte.
              </p>
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground mt-3">
                Quasi meine ganze Fan-Jugend verbrachte ich in der Bayernliga. Andere erkundeten Europa
                und der junge OBu tingelte mit den Löwen über die bayerischen Dörfer. Eine geile Zeit,
                die ich nie missen möchte. Da kommt keine Bundesliga und kein Länderspiel mit.
              </p>
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground mt-3">
                Seit 1984 habe ich nun schon eine Jahreskarte bei 1860. Auch Auswärts wird verfolgt
                was geht und ging. Und es ging viel in den letzten 20 Jahren. Seit 1991 musste ich
                lediglich bei zwei Pflichtspielen (2003 in Lautern und 2004 in Cottbus) die Segel
                streichen.
              </p>
            </section>

            <section className="border-t border-border pt-6">
              <h3 className="text-lg md:text-xl font-display text-accent mb-3">
                Intensives Sammeln
              </h3>
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground">
                Zum intensiven Sammeln kam ich wahrscheinlich wie jeder andere Sammler auch. Erst das
                einfache Aufheben der im Stadion erhaltenen Souvenirs. Dann das Interesse an älteren
                Sachen. Später das Glück, von einem alten Fan eine Riesensammlung kaufen zu können.
                Und am Ende steht der Ausbau anderer Sammelgebiete, da für das Ursprüngliche nichts
                mehr aufzutreiben ist.
              </p>
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground mt-3">
                Mittlerweile umfasst die Programmsammlung neben den Programmen, Vereinsheften, Büchern
                und Memorabilien des TSV 1860 München, auch noch die Länderspielhefte der deutschen
                Nationalmannschaft und die Heimprogramme der anderen deutschsprachigen Länder.
                Österreich, Schweiz und Liechtenstein. Dazu noch die Endspiele im DFB Pokal und um die
                deutsche Meisterschaft. Die EC Endspiele im Landesmeister-, Pokalsieger- und Uefa Pokal.
                Und wenn mir eine schöne Vereins-Chronik über den Weg läuft, dann wird die auch noch
                aufgenommen.
              </p>
            </section>

            <section className="border-t border-border pt-6 pb-4">
              <p className="text-sm md:text-base font-heading leading-relaxed text-foreground">
                So, das soll es gewesen sein. Wer mehr wissen will, meldet sich einfach und trifft sich
                mit mir auf ein Bierchen zu einem Ratsch über Fußball, Sechzig und Sammeln. Und wem noch
                was anderes einfällt, der kann sich das ja dann aufschreiben und zu Hause mit seiner
                Parkuhr besprechen.
              </p>
              <p className="text-base md:text-lg font-display text-accent mt-6 text-center">
                auf die Löwen — Euer Olly
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
};

export default ObuFamily;
