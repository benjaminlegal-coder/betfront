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

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={`https://www.hotelcentromar.com/blog/${data.slug}`} />
      </Head>
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <div className="text-gray-600 text-sm mb-6">{data.date}</div>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}
