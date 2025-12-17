import { useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { allSlides, type AllSlides, type FaqSlide } from "@/data/faqSlides";

type CategoryKey = keyof AllSlides;

const storageKey = "faq-dashboard-data-v1";
const sessionKey = "faq-dashboard-authed";

const categories: { key: CategoryKey; label: string }[] = [
  { key: "faqSlides", label: "Mots-clés" },
  { key: "semanticSlides", label: "Sémantique & Arborescence" },
  { key: "netlinkingSlides", label: "Netlinking & Maillage interne" },
  { key: "auditSlides", label: "Audit SEO" },
  { key: "crawlSlides", label: "Crawling & Indexation" },
  { key: "contentSlides", label: "Contenu On-page" },
  { key: "extensionsSlides", label: "Extensions Chrome" },
  { key: "redactionSlides", label: "Rédaction SEO" },
  { key: "analyseSlides", label: "Analyse SEO" },
  { key: "uxSlides", label: "UI & UX" },
  { key: "ecommerceSlides", label: "E-commerce" },
  { key: "localSlides", label: "SEO Local" },
  { key: "automationSlides", label: "Automatisation" },
  { key: "designSlides", label: "Design" },
  { key: "webSlides", label: "Web (CMS & Structure)" },
];

const quillModules = {
  toolbar: [
    [{ header: [2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    ["link"],
    ["clean"],
  ],
};

const AdminDashboard = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [data, setData] = useState<AllSlides>(allSlides);
  const [category, setCategory] = useState<CategoryKey>("faqSlides");
  const [status, setStatus] = useState<string | null>(null);

  const adminPassword = useMemo(() => import.meta.env.VITE_ADMIN_PASSWORD || "admin", []);

  useEffect(() => {
    const remembered = sessionStorage.getItem(sessionKey);
    if (remembered === "true") {
      setIsAuthed(true);
    }
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as AllSlides;
        setData(parsed);
      }
    } catch (error) {
      console.warn("Impossible de charger les données admin :", error);
    }
  }, []);

  const currentSlides = data[category];

  const handleLogin = () => {
    if (password === adminPassword) {
      setIsAuthed(true);
      sessionStorage.setItem(sessionKey, "true");
      setStatus(null);
    } else {
      setStatus("Mot de passe invalide");
    }
  };

  const updateSlide = (index: number, field: keyof FaqSlide, value: string) => {
    setData(prev => ({
      ...prev,
      [category]: prev[category].map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const addSlide = () => {
    const newItem: FaqSlide = {
      slug: `nouveau-${Date.now()}`,
      question: "Nouvelle question",
      answer: "<p>Réponse...</p>",
      tag: "",
      level: "h2",
      titleTag: "",
      metaDescription: "",
    };
    setData(prev => ({
      ...prev,
      [category]: [...prev[category], newItem],
    }));
  };

  const deleteSlide = (index: number) => {
    setData(prev => ({
      ...prev,
      [category]: prev[category].filter((_, idx) => idx !== index),
    }));
  };

  const saveLocal = () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(data));
      setStatus("Données enregistrées (localStorage). La page FAQ les lira automatiquement.");
    } catch (error) {
      setStatus("Erreur lors de l'enregistrement local.");
    }
  };

  const exportJson = async () => {
    const json = JSON.stringify(data, null, 2);
    try {
      await navigator.clipboard.writeText(json);
      setStatus("JSON copié dans le presse-papiers.");
    } catch {
      setStatus("Impossible de copier, JSON disponible dans la console.");
      console.log(json);
    }
  };

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Accès administrateur</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Mot de passe</Label>
              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Mot de passe admin"
              />
            </div>
            <Button className="w-full" onClick={handleLogin}>
              Se connecter
            </Button>
            {status && <p className="text-sm text-destructive">{status}</p>}
            <p className="text-xs text-muted-foreground">
              Le mot de passe peut être défini via VITE_ADMIN_PASSWORD (fallback: "admin").
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-10 space-y-8">
      <div className="flex flex-wrap items-center gap-4 justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-black">Dashboard FAQ</h1>
          <p className="text-sm text-muted-foreground">
            Modifiez questions, slugs, titres, métas et réponses enrichies (bold, H2/H3) avec React
            Quill. Les données sont stockées en localStorage.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={exportJson}>
            Exporter JSON
          </Button>
          <Button onClick={saveLocal}>Enregistrer</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Catégories</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Button
              key={cat.key}
              variant={category === cat.key ? "default" : "outline"}
              onClick={() => setCategory(cat.key)}
              size="sm"
            >
              {cat.label}
            </Button>
          ))}
          <Badge variant="outline">Entrées : {currentSlides.length}</Badge>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {currentSlides.map((item, index) => (
          <Card key={`${item.slug}-${index}`} className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-2">
                <span dangerouslySetInnerHTML={{ __html: item.question }} />
                <Badge variant="outline">{item.tag || "Tag"}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Question (HTML)</Label>
                  <ReactQuill
                    theme="snow"
                    value={item.question}
                    onChange={val => updateSlide(index, "question", val)}
                    modules={quillModules}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Slug (URL)</Label>
                  <Input value={item.slug} onChange={e => updateSlide(index, "slug", e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tag</Label>
                  <Input value={item.tag || ""} onChange={e => updateSlide(index, "tag", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Niveau (H2/H3)</Label>
                  <select
                    className="w-full rounded-md border border-border bg-background px-3 py-2"
                    value={item.level || "h2"}
                    onChange={e => updateSlide(index, "level", e.target.value as FaqSlide["level"])}
                  >
                    <option value="h2">H2</option>
                    <option value="h3">H3</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Réponse (HTML)</Label>
                <ReactQuill
                  theme="snow"
                  value={item.answer}
                  onChange={val => updateSlide(index, "answer", val)}
                  modules={quillModules}
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Titre (balise &lt;title&gt;)</Label>
                <Input
                  value={item.titleTag || ""}
                  onChange={e => updateSlide(index, "titleTag", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Méta description</Label>
                <Textarea
                  rows={3}
                  value={item.metaDescription || ""}
                  onChange={e => updateSlide(index, "metaDescription", e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center">
                <Badge variant="outline">Index : {index + 1}</Badge>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => addSlide()}>
                    Dupliquer/Ajouter
                  </Button>
                  <Button variant="destructive" onClick={() => deleteSlide(index)}>
                    Supprimer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        <div className="flex gap-3">
          <Button onClick={addSlide}>Ajouter une question</Button>
          <Button variant="outline" onClick={saveLocal}>
            Enregistrer toutes les modifications
          </Button>
        </div>
        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </div>
    </div>
  );
};

export default AdminDashboard;
