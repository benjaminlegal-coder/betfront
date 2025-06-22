import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
  title: 'Blog - Deneme Bonusu Bilgilendirme',
  description: 'Deneme bonusu ve bahis dünyası hakkında güncel, bilgilendirici blog yazıları.'
};

export default function BlogPage() {
  // Blog yazılarını oku
  const postsDir = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(postsDir);
  const posts = files.map((file) => {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);
    return data;
  });

  return (
    <>
      <Head>
        <title>Blog - Deneme Bonusu Bilgilendirme</title>
        <meta name="description" content="Deneme bonusu ve bahis dünyası hakkında güncel, bilgilendirici blog yazıları." />
        <link rel="canonical" href="https://tastegarden.shop/blog" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-b pb-4">
              <Link href={`/blog/${post.slug}`} className="text-xl font-semibold text-orange-600 hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-600 text-sm mt-1">{post.description}</p>
              <span className="text-xs text-gray-400">{post.date}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
