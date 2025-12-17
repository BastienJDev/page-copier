import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Helmet } from "react-helmet-async";
import { allSlides, type AllSlides, type FaqSlide } from "@/data/faqSlides";

const storageKey = "faq-dashboard-data-v1";
const flattenSlides = (): FaqSlide[] => {
  let source: AllSlides = allSlides;
  if (typeof window !== "undefined") {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        source = JSON.parse(raw);
      }
    } catch {
      // ignore parse/localStorage errors and fall back to defaults
    }
  }

  return Object.values(source).flat();
};

const decodeHtml = (html: string) => {
  if (typeof window === "undefined") return html;
  const textarea = window.document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};

const stripTags = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const toPlainText = (html: string) => stripTags(decodeHtml(html));

const FAQDetail = () => {
  const params = useParams();
  const slides = useMemo(() => flattenSlides(), []);
  const entry = slides.find(item => item.slug === params.slug);
  const relatedSlides = useMemo(
    () =>
      entry
        ? slides.filter(slide => slide.slug !== entry.slug && slide.tag === entry.tag).slice(0, 3)
        : [],
    [entry, slides]
  );

  const metaTitle = entry?.titleTag || "FAQ | monlien.fr";
  const metaDescription = entry ? toPlainText(entry.metaDescription ?? entry.answer ?? "") : "";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{metaTitle}</title>
        {metaDescription && <meta name="description" content={metaDescription} />}
        <link rel="canonical" href={`/faq/${params.slug ?? ""}`} />
        <meta property="og:title" content={metaTitle} />
        {metaDescription && <meta property="og:description" content={metaDescription} />}
        <meta property="og:url" content={`/faq/${params.slug ?? ""}`} />
      </Helmet>

      <Header />

      <main className="mx-auto max-w-4xl px-6 py-16 space-y-8 pt-28 md:pt-32">

        {entry ? (
          <article className="space-y-6">
            <nav className="text-base md:text-lg font-semibold text-[#6b789c] flex items-center gap-2 justify-center">
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
              <span>&gt;</span>
              <span dangerouslySetInnerHTML={{ __html: entry.question }} />
            </nav>
            <div
              className="text-xl md:text-2xl font-black leading-tight"
              style={{
                background: "linear-gradient(110deg, rgb(72, 133, 244) 0%, rgb(78, 115, 197) 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              dangerouslySetInnerHTML={{ __html: entry.question }}
            />
            <div
              className="text-muted-foreground leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: entry.answer }}
            />
            <div className="pt-6 border-t border-[#4a5a8b] flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-[#d7deee] flex items-center justify-center text-[#4a5a8b] text-sm font-semibold">
                  Photo
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold text-[#1f2b4a]">Alexis Chretinat</p>
                  <p className="text-lg font-semibold text-[#4a5a8b]">Business Strategist</p>
                </div>
              </div>
              <div className="border-t border-[#4a5a8b] pt-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#1f2b4a] text-center">
                  Vous avez toujours des questions?
                </h2>
                {relatedSlides.length > 0 && (
                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {relatedSlides.map(slide => (
                      <Link
                        key={slide.slug}
                        to={`/faq/${slide.slug}`}
                        className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition duration-200"
                      >
                        <p className="font-semibold text-foreground mb-2">
                          {toPlainText(slide.question)}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {toPlainText(slide.answer)}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ) : (
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm text-center space-y-2">
            <p className="text-lg font-semibold">Question introuvable</p>
            <p className="text-muted-foreground">Le slug demandé ne correspond à aucune entrée.</p>
            <Link to="/faq" className="text-primary font-semibold hover:underline">
              Retour à la FAQ
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default FAQDetail;
