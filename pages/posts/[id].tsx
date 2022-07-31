import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Author {
  id: number;
  name: string;
}

interface PageProps {
  post: Post;
  author: Author;
}

const Post = ({ post, author }: PageProps) => {
  return (
    <div className="container">
      <div
        style={{
          marginTop: '2rem',
          marginBottom: '1rem'
        }}>
        <Link href="/" passHref>
          <a
            className="link"
            style={{
              fontWeight: 'bold'
            }}>
            &larr; Back to all posts
          </a>
        </Link>
      </div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p
        style={{
          fontStyle: 'italic',
          marginTop: '2rem',
          textAlign: 'right'
        }}>
        Post by <strong>{author.name}</strong>
      </p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  const paths = posts.map((post: Post) => ({
    params: {
      id: String(post.id)
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
  const post: Post = await postResponse.json();
  const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  const author: Author = await authorResponse.json();

  return {
    props: {
      post,
      author
    }
  };
};

export default Post;
