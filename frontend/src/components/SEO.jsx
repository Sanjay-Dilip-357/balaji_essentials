import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | Balaji Essentials` 
      : 'Balaji Essentials | Essentials for People. Industry. Planet.';
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}
