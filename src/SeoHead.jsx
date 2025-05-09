import React from 'react';
import { Helmet } from 'react-helmet';

export default function SeoHead() {
  return (
    <Helmet>
      <title>A & M Audio — Custom Sound, Personal Touch</title>
      <meta property="og:title" content="A & M Audio — Custom Sound, Personal Touch" />
      <meta
        property="og:description"
        content="Professional car audio installs—from head units to full-system overhauls. Click to book your service!"
      />
      <meta property="og:image" content={'https://am-audio.netlify.app/hero.png'} />
      <meta property="og:url" content={'https://am-audio.netlify.app/'} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}