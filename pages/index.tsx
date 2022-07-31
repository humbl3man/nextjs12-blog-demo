import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
}

interface PageProps {
  posts: Post[];
}

const Posts = ({ posts }: PageProps) => {
  return (
    <div className="container">
      <h1>Posts</h1>
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
        {posts.map((post) => {
          return (
            <li
              key={post.id}
              style={{
                marginBottom: '1rem'
              }}>
              <Link href={`/posts/${post.id}`} passHref>
                <a
                  className="link"
                  style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    textDecoration: 'underline'
                  }}>
                  {post.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();

  return {
    props: {
      posts
    }
  };
};

export default Posts;
