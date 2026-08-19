
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Xi'an Guide",
    "url": "https://www.xi-an-china.com/",
    "inLanguage": "en",
    "description": "Independent travel guide to Xi'an, China. Practical, honest advice from locals.",
    "publisher": { "@type": "Organization", "name": "Xi'an Guide", "url": "https://www.xi-an-china.com/" }
  };
}

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Xi'an Guide",
    "url": "https://www.xi-an-china.com/",
    "description": "Independent travel guide to Xi'an, China. Practical, honest advice from locals.",
    "logo": "https://www.xi-an-china.com/favicon.svg",
    "foundingDate": "2026",
    "sameAs": [
      "https://www.linkedin.com/company/xian-guide",
      "https://www.facebook.com/XianGuide",
      "https://www.instagram.com/xianguide",
      "https://www.pinterest.com/xianguide"
    ]
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Xi'an Guide Team",
    "url": "https://www.xi-an-china.com/about/",
    "jobTitle": "Travel Writers & Local Researchers",
    "worksFor": { "@type": "Organization", "name": "Xi'an Guide" },
    "sameAs": [
      "https://www.xi-an-china.com/about/"
    ]
  };
}

export function blogItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://www.xi-an-china.com/blog/terracotta-warriors-photography/",
        "name": "Photographing the Terracotta Warriors: An Expert Guide"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://www.xi-an-china.com/blog/xian-4-seasons/",
        "name": "Xi'an in Four Seasons: What to Expect Month by Month"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://www.xi-an-china.com/blog/xian-hidden-gems/",
        "name": "Xi'an Hidden Gems: 10 Spots Most Tourists Miss"
      }
    ]
  };
}
