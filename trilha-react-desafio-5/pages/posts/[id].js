import { getGlobalData } from '../../utils/global-data';
import { getPostById } from '../../utils/posts';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';


const components = {
  a: CustomLink,
};

export default function PostPage({ post, globalData }) {
  return (
    <Layout>
      <SEO
        title={`${post.title} - ${globalData.name}`}
        description={post.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {post.title}
          </h1>
          {post.created_at && (
            <p className="uppercase mb-4 font-bold opacity-60 text-center">
              {new Intl.DateTimeFormat('es', {
                dateStyle: 'long',
              }).format(new Date(post.created_at))}
            </p>
          )}
          {post.description && (
            <p className="text-xl mb-4">{post.description}</p>
          )}
        </header>
        <main>
          <div className="prose dark:prose-dark">
            <MDXRemote {...post.content} components={components} />
          </div>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const post = await getPostById(params.id);

  if (!post) {
    return { notFound: true };
  }

  const content = await serialize(post.body, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      globalData,
      post: {
        ...post,
        content,
      },
    },
  };
};
