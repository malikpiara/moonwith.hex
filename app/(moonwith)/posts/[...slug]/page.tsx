import { notFound } from 'next/navigation';
import { allPosts } from 'content-collections';
import { MDXContent } from '@content-collections/mdx/react';
import { Metadata } from 'next';
import { Sidenote } from '@/components/moonwith/sidenote';

/* interface PostProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params.slug;
  const post = allPosts.find((post) => post.slug == params.slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: 'Malik Piara', url: 'https://moonwith.com/' }],
    creator: 'Malik Piara',
  };
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }));
} */

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post.slug == params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className='py-6 prose dark:prose-invert dark:text-gray text-lg md:text-[1.2rem]'>
      <h1 className='mb-2 text-primary dark:text-secondary'>{post.title}</h1>

      <MDXContent code={post.body} />
    </article>
  );
}
