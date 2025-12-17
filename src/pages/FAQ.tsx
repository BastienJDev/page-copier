import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";
import { allSlides, type AllSlides, type FaqSlide } from "@/data/faqSlides";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  const params = useParams();
  const navigate = useNavigate();
  const storageKey = "faq-dashboard-data-v1";
  const [slidesData, setSlidesData] = useState<AllSlides>(allSlides);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi2, setCarouselApi2] = useState<CarouselApi | null>(null);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [carouselApi3, setCarouselApi3] = useState<CarouselApi | null>(null);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [carouselApi4, setCarouselApi4] = useState<CarouselApi | null>(null);
  const [activeIndex4, setActiveIndex4] = useState(0);
  const [carouselApi5, setCarouselApi5] = useState<CarouselApi | null>(null);
  const [activeIndex5, setActiveIndex5] = useState(0);
  const [carouselApi6, setCarouselApi6] = useState<CarouselApi | null>(null);
  const [activeIndex6, setActiveIndex6] = useState(0);
  const [carouselApi7, setCarouselApi7] = useState<CarouselApi | null>(null);
  const [activeIndex7, setActiveIndex7] = useState(0);
  const [carouselApi8, setCarouselApi8] = useState<CarouselApi | null>(null);
  const [activeIndex8, setActiveIndex8] = useState(0);
  const [carouselApi9, setCarouselApi9] = useState<CarouselApi | null>(null);
  const [activeIndex9, setActiveIndex9] = useState(0);
  const [carouselApi10, setCarouselApi10] = useState<CarouselApi | null>(null);
  const [activeIndex10, setActiveIndex10] = useState(0);
  const [carouselApi11, setCarouselApi11] = useState<CarouselApi | null>(null);
  const [activeIndex11, setActiveIndex11] = useState(0);
  const [carouselApi12, setCarouselApi12] = useState<CarouselApi | null>(null);
  const [activeIndex12, setActiveIndex12] = useState(0);
  const [carouselApi13, setCarouselApi13] = useState<CarouselApi | null>(null);
  const [activeIndex13, setActiveIndex13] = useState(0);
  const [carouselApi14, setCarouselApi14] = useState<CarouselApi | null>(null);
  const [activeIndex14, setActiveIndex14] = useState(0);
  const [carouselApi15, setCarouselApi15] = useState<CarouselApi | null>(null);
  const [activeIndex15, setActiveIndex15] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as AllSlides;
        setSlidesData(parsed);
      } else {
        setSlidesData(allSlides);
      }
    } catch (error) {
      console.warn("Impossible de charger les données FAQ depuis le stockage local :", error);
      setSlidesData(allSlides);
    }
  }, []);

  const {
    faqSlides,
    semanticSlides,
    netlinkingSlides,
    auditSlides,
    crawlSlides,
    contentSlides,
    extensionsSlides,
    redactionSlides,
    analyseSlides,
    uxSlides,
    ecommerceSlides,
    localSlides,
    automationSlides,
    designSlides,
    webSlides,
  } = slidesData;

  const decodeHtml = (html: string) => {
    if (typeof window === "undefined") return html;
    const textarea = window.document.createElement("textarea");
    textarea.innerHTML = html;
    return textarea.value;
  };

  const stripTags = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const toPlainText = (html: string) => stripTags(decodeHtml(html));

  const SlideContent = ({ item }: { item: FaqSlide }) => {
    const questionText = toPlainText(item.question);
    return (
      <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-200 hover:shadow-md hover:border-primary/60 flex flex-col">
        {item.level === "h3" ? (
          <h3 className="text-[19px] md:text-[19px] font-semibold text-primary leading-snug">{questionText}</h3>
        ) : (
          <h2 className="text-[19px] md:text-[19px] font-bold text-foreground leading-snug">{questionText}</h2>
        )}
        <Separator className="my-4" />
        <div className="text-muted-foreground leading-relaxed whitespace-pre-line flex-1">
          {(() => {
            const plainAnswer = toPlainText(item.answer);
            const shouldTruncate = plainAnswer.length > 200;
            const preview = shouldTruncate ? `${plainAnswer.slice(0, 180)}…` : plainAnswer;
            return (
              <>
                <p>{preview}</p>
                {shouldTruncate && item.slug && (
                  <Link
                    to={`/faq/${item.slug}`}
                    className="mt-3 inline-flex self-end items-center text-primary font-semibold hover:underline"
                  >
                    Voir la suite
                  </Link>
                )}
              </>
            );
          })()}
        </div>
      </div>
    );
  };

  const initialIndex = useMemo(() => {
    if (!params.slug) return 0;
    const idx = faqSlides.findIndex(item => item.slug === params.slug);
    return idx >= 0 ? idx : 0;
  }, [params.slug, faqSlides]);

  useEffect(() => {
    if (!carouselApi) return;
    if (initialIndex !== carouselApi.selectedScrollSnap()) {
      carouselApi.scrollTo(initialIndex, true);
    }
  }, [carouselApi, initialIndex]);

  useEffect(() => {
    if (!carouselApi) return;

    const handleSelect = () => {
      const index = carouselApi.selectedScrollSnap();
      setActiveIndex(index);
    };

    handleSelect();
    carouselApi.on("select", handleSelect);

    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi, faqSlides]);

  useEffect(() => {
    if (!carouselApi2) return;

    const handleSelect = () => {
      const index = carouselApi2.selectedScrollSnap();
      setActiveIndex2(index);
    };

    handleSelect();
    carouselApi2.on("select", handleSelect);

    return () => {
      carouselApi2.off("select", handleSelect);
    };
  }, [carouselApi2]);

  useEffect(() => {
    if (!carouselApi3) return;

    const handleSelect = () => {
      const index = carouselApi3.selectedScrollSnap();
      setActiveIndex3(index);
    };

    handleSelect();
    carouselApi3.on("select", handleSelect);

    return () => {
      carouselApi3.off("select", handleSelect);
    };
  }, [carouselApi3]);

  useEffect(() => {
    if (!carouselApi4) return;

    const handleSelect = () => {
      const index = carouselApi4.selectedScrollSnap();
      setActiveIndex4(index);
    };

    handleSelect();
    carouselApi4.on("select", handleSelect);

    return () => {
      carouselApi4.off("select", handleSelect);
    };
  }, [carouselApi4]);

  useEffect(() => {
    if (!carouselApi5) return;

    const handleSelect = () => {
      const index = carouselApi5.selectedScrollSnap();
      setActiveIndex5(index);
    };

    handleSelect();
    carouselApi5.on("select", handleSelect);

    return () => {
      carouselApi5.off("select", handleSelect);
    };
  }, [carouselApi5]);

  useEffect(() => {
    if (!carouselApi6) return;

    const handleSelect = () => {
      const index = carouselApi6.selectedScrollSnap();
      setActiveIndex6(index);
    };

    handleSelect();
    carouselApi6.on("select", handleSelect);

    return () => {
      carouselApi6.off("select", handleSelect);
    };
  }, [carouselApi6]);

  useEffect(() => {
    if (!carouselApi7) return;

    const handleSelect = () => {
      const index = carouselApi7.selectedScrollSnap();
      setActiveIndex7(index);
    };

    handleSelect();
    carouselApi7.on("select", handleSelect);

    return () => {
      carouselApi7.off("select", handleSelect);
    };
  }, [carouselApi7]);

  useEffect(() => {
    if (!carouselApi8) return;

    const handleSelect = () => {
      const index = carouselApi8.selectedScrollSnap();
      setActiveIndex8(index);
    };

    handleSelect();
    carouselApi8.on("select", handleSelect);

    return () => {
      carouselApi8.off("select", handleSelect);
    };
  }, [carouselApi8]);

  useEffect(() => {
    if (!carouselApi9) return;

    const handleSelect = () => {
      const index = carouselApi9.selectedScrollSnap();
      setActiveIndex9(index);
    };

    handleSelect();
    carouselApi9.on("select", handleSelect);

    return () => {
      carouselApi9.off("select", handleSelect);
    };
  }, [carouselApi9]);

  useEffect(() => {
    if (!carouselApi10) return;

    const handleSelect = () => {
      const index = carouselApi10.selectedScrollSnap();
      setActiveIndex10(index);
    };

    handleSelect();
    carouselApi10.on("select", handleSelect);

    return () => {
      carouselApi10.off("select", handleSelect);
    };
  }, [carouselApi10]);

  useEffect(() => {
    if (!carouselApi11) return;

    const handleSelect = () => {
      const index = carouselApi11.selectedScrollSnap();
      setActiveIndex11(index);
    };

    handleSelect();
    carouselApi11.on("select", handleSelect);

    return () => {
      carouselApi11.off("select", handleSelect);
    };
  }, [carouselApi11]);

  useEffect(() => {
    if (!carouselApi12) return;

    const handleSelect = () => {
      const index = carouselApi12.selectedScrollSnap();
      setActiveIndex12(index);
    };

    handleSelect();
    carouselApi12.on("select", handleSelect);

    return () => {
      carouselApi12.off("select", handleSelect);
    };
  }, [carouselApi12]);

  useEffect(() => {
    if (!carouselApi13) return;

    const handleSelect = () => {
      const index = carouselApi13.selectedScrollSnap();
      setActiveIndex13(index);
    };

    handleSelect();
    carouselApi13.on("select", handleSelect);

    return () => {
      carouselApi13.off("select", handleSelect);
    };
  }, [carouselApi13]);

  useEffect(() => {
    if (!carouselApi14) return;

    const handleSelect = () => {
      const index = carouselApi14.selectedScrollSnap();
      setActiveIndex14(index);
    };

    handleSelect();
    carouselApi14.on("select", handleSelect);

    return () => {
      carouselApi14.off("select", handleSelect);
    };
  }, [carouselApi14]);

  useEffect(() => {
    if (!carouselApi15) return;

    const handleSelect = () => {
      const index = carouselApi15.selectedScrollSnap();
      setActiveIndex15(index);
    };

    handleSelect();
    carouselApi15.on("select", handleSelect);

    return () => {
      carouselApi15.off("select", handleSelect);
    };
  }, [carouselApi15]);

  const activeSlide = faqSlides[activeIndex] ?? faqSlides[0];
  const canonicalHref = `/faq/${activeSlide?.slug ?? ""}`;
  const metaTitle = activeSlide?.titleTag ?? "FAQ | monlien.fr";
  const metaDescription = activeSlide
    ? toPlainText(activeSlide.metaDescription ?? activeSlide.answer ?? "")
    : "";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{metaTitle}</title>
        {metaDescription && <meta name="description" content={metaDescription} />}
        <link rel="canonical" href={canonicalHref} />
        <meta property="og:title" content={metaTitle} />
        {metaDescription && <meta property="og:description" content={metaDescription} />}
        <meta property="og:url" content={canonicalHref} />
      </Helmet>
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-12 space-y-10 pt-28 md:pt-32">
        <section className="space-y-3 text-center">
          <Badge className="mx-auto inline-flex items-center gap-2 text-white border-0 shadow-sm" style={{ background: "linear-gradient(110deg, #4885f4 0%, #4e73c5 100%)" }}>
            <Sparkles className="h-4 w-4" />
            FAQ
          </Badge>
          <h1
            className="text-[19px] md:text-[19px] font-black tracking-tight text-foreground"
            style={{
              fontFamily: "'Varela', sans-serif",
              background: "linear-gradient(110deg, rgb(72, 133, 244) 0%, rgb(68, 96, 158) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Foire aux questions
          </h1>
        </section>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Mots-clés
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: faqSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi}
          >
            <CarouselContent>
              {faqSlides.map((item, index) => (
                <CarouselItem key={item.slug} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {faqSlides.map((item, index) => (
              <button
                key={item.slug}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
        </div>
      </main>

      <section className="mx-auto max-w-5xl px-6 pb-12 space-y-10">
        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Sémantique & Arborescence
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: semanticSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi2}
          >
            <CarouselContent>
              {semanticSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-secondary`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {semanticSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot2`}
                onClick={() => carouselApi2?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex2 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="mt-10">
            <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
          </div>
        </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Netlinking & Maillage interne
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: netlinkingSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi3}
          >
            <CarouselContent>
              {netlinkingSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-netlinking`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {netlinkingSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot3`}
                onClick={() => carouselApi3?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex3 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
        </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Audit SEO
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: auditSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi4}
          >
            <CarouselContent>
              {auditSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-audit`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {auditSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot4`}
                onClick={() => carouselApi4?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex4 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="mt-10">
            <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
          </div>
        </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Crawling & Indexation
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: crawlSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi5}
          >
            <CarouselContent>
              {crawlSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-crawl`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {crawlSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot5`}
                onClick={() => carouselApi5?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex5 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
        </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Contenu On-page
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: contentSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi6}
          >
            <CarouselContent>
              {contentSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-content`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {contentSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot6`}
                onClick={() => carouselApi6?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex6 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="mt-10">
            <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
          </div>
        </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Extensions Chrome
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: extensionsSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi7}
          >
            <CarouselContent>
              {extensionsSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-ext`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {extensionsSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot7`}
                onClick={() => carouselApi7?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex7 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
        </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Rédaction SEO
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: redactionSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi8}
          >
            <CarouselContent>
              {redactionSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-redaction`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {redactionSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot8`}
                onClick={() => carouselApi8?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex8 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
        </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Analyse SEO
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: analyseSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi9}
          >
            <CarouselContent>
              {analyseSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-analyse`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {analyseSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot9`}
                onClick={() => carouselApi9?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex9 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
        </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            UI & UX
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: uxSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi10}
          >
            <CarouselContent>
              {uxSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-ux`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {uxSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot10`}
                onClick={() => carouselApi10?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex10 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
            <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
          </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            E-commerce
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: ecommerceSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi11}
          >
            <CarouselContent>
              {ecommerceSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-ecommerce`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {ecommerceSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot11`}
                onClick={() => carouselApi11?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex11 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
        </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            SEO Local
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: localSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi12}
          >
            <CarouselContent>
              {localSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-local`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {localSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot12`}
                onClick={() => carouselApi12?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex12 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
            <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
          </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Automatisation
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: automationSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi13}
          >
            <CarouselContent>
              {automationSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-automation`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {automationSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot13`}
                onClick={() => carouselApi13?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex13 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
        </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Design
          </h2>
        </section>

        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Carousel
            opts={{ align: "start", loop: designSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi14}
          >
            <CarouselContent>
              {designSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-design`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {designSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot14`}
                onClick={() => carouselApi14?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex14 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
            <div className="h-[1.1px] w-full bg-[#1c2f66]" aria-hidden="true" />
          </div>

        <section className="text-center space-y-2">
          <h2
            className="inline-flex items-center gap-2 px-[0.8rem] py-[0.25rem] rounded-[8px] text-[19px] md:text-[19px] font-black uppercase tracking-wide border border-[#587cca] shadow-[1px_2px_5px_1px_#527bd5] transition-all duration-150 hover:shadow-none hover:translate-x-[1px] hover:translate-y-[2px]"
            style={{ fontFamily: "'Varela', sans-serif", color: "#527bd5", background: "#ffffff" }}
          >
            Web (CMS & Structure)
          </h2>
        </section>

        <div className="relative">
          <Carousel
            opts={{ align: "start", loop: webSlides.length > 1 }}
            className="w-full"
            setApi={setCarouselApi15}
          >
            <CarouselContent>
              {webSlides.map((item, index) => (
                <CarouselItem key={`${item.slug}-web`} className="md:basis-full lg:basis-full">
                  <SlideContent item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-6 hidden md:flex top-1/2 -translate-y-1/2 !h-10 !w-10 text-primary border-primary/30 hover:bg-primary hover:text-white" />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-2">
            {webSlides.map((item, index) => (
              <button
                key={`${item.slug}-dot15`}
                onClick={() => carouselApi15?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex15 ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="pb-12" />
      <Footer />
    </div>
  );
};

export default FAQ;
