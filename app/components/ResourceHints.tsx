export default function ResourceHints() {
  return (
    <>
      {/* Preload critical resources */}
      <link
        rel="preload"
        href="https://oabk6vpcyt3tfpux.public.blob.vercel-storage.com/meta-McN0j2H9cDvZZNHlXeehrc8IteQeII.webp"
        as="image"
      />
      
      {/* Prefetch likely next resources */}
      <link
        rel="prefetch"
        href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
      />
      
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//vercel-storage.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
    </>
  );
}