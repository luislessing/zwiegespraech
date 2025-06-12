import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  schema?: object;
  appleIcon?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage = '/images/og-default.jpg',
  keywords,
  schema,
  appleIcon = '/apple-touch-icon.png'
}: SEOProps) {
  const siteUrl = 'https://zwiegespräch-theater.de';
  const fullTitle = title.includes('Zwiegespräch') ? title : `${title} | Zwiegespräch Theater`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Zwiegespräch Theater" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Zwiegespräch Theater" />
      <meta property="og:locale" content="de_DE" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Local SEO */}
      <meta name="geo.region" content="DE-NW" />
      <meta name="geo.placename" content="Paderborn" />
      
      {/* Schema.org JSON-LD */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}