import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';

import { Metadata } from 'next';
import { Mdx } from '@/components/mdx-components';

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

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
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className='py-6 prose dark:prose-invert dark:text-gray text-lg md:text-[1.2rem]'>
      <h1 className='mb-2 text-primary dark:text-secondary'>{post.title}</h1>
      {/* {post.description && (
        <p className="text-xl mt-0 text-stone-700 dark:text-stone-200">
          {post.description}
        </p>
      )} */}

      <Mdx code={post.body.code} />
    </article>
  );
}
