import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
};

export default function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Meta description
    if (description) {
      let meta = document.querySelector<HTMLMetaElement>(
        "meta[name='description']"
      );

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }

      meta.content = description;
    }

    // Canonical
    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>(
        "link[rel='canonical']"
      );

      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }

      link.href = canonical;
    }
  }, [title, description, canonical]);
}
