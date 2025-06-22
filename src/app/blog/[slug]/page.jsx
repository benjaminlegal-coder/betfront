import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import { marked } from 'marked';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(postsDir);
  return files.map((file) => {
    const { data } = matter(fs.readFileSync(path.join(postsDir, file), 'utf-8'));
    return { slug: data.slug };
  });
}

export default function BlogPost({ params }) {
  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const filePath = path.join(postsDir, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const html = marked(content);
  const url = `https://tastegarden.shop/blog/${data.slug}`;
  const image = '/restaurant-preview.webp'; // Dilerseniz her yazıya özel görsel ekleyebilirsiniz

  const allPosts = fs.readdirSync(postsDir).map((file) => {
    const { data } = matter(fs.readFileSync(path.join(postsDir, file), 'utf-8'));
    return data;
  });
  const relatedPosts = allPosts.filter((p) => p.slug !== data.slug).slice(0, 3);

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={url} />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={image} />
        {/* Article Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "${data.title}",
          "description": "${data.description}",
          "datePublished": "${data.date}",
          "author": { "@type": "Person", "name": "Editör" },
          "mainEntityOfPage": { "@type": "WebPage", "@id": "${url}" },
          "image": "${image}"
        }` }} />
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Blog", "item": "https://tastegarden.shop/blog"},
            {"@type": "ListItem", "position": 2, "name": "${data.title}", "item": "${url}"}
          ]
        }` }} />
      </Head>
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <div className="text-gray-600 text-sm mb-6">{data.date}</div>
        <article dangerouslySetInnerHTML={{ __html: html }} />
        {/* Benzer Yazılar */}
        {relatedPosts.length > 0 && (
          <section className="mt-12 border-t pt-8">
            <h2 className="text-xl font-semibold mb-4">Benzer Yazılar</h2>
            <ul className="space-y-2">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <a href={`/blog/${post.slug}`} className="text-orange-600 hover:underline">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}
