"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export const ContactSection = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/xzzeqnev", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Erreur lors de l’envoi");
      router.push("/merci");
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 text-center w-full">
      <div className="w-full max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

        <form
          onSubmit={handleSubmit}
          className="relative space-y-6 text-left"
        >
          {/* Overlay de chargement */}
          {loading && (
            <div className="absolute inset-0 bg-background/75 flex items-center justify-center z-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          <div className={loading ? "opacity-50" : ""}>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              disabled={loading}
            />
          </div>

          <div className={loading ? "opacity-50" : ""}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              disabled={loading}
            />
          </div>

          <div className={loading ? "opacity-50" : ""}>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={loading}
            />
          </div>

          {error && (
            <p className="text-destructive text-sm">{error}</p>
          )}

          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi…
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>

        <div className="flex justify-center flex-wrap gap-4 mt-10">
          <a
            href="https://github.com/Whitemes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/GitHub-Whitemes-181717?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub Badge"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shenron/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://custom-icon-badges.demolab.com/badge/LinkedIn-shenron-0A66C2?logo=linkedin-white&logoColor=fff&style=for-the-badge"
              alt="LinkedIn Badge"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
