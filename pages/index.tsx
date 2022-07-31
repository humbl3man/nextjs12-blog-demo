import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS Blog Demo</title>
        <meta name="description" content="NextJS Blog Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh'
        }}>
        <div>
          <h1
            style={{
              margin: '0 0 2rem'
            }}>
            NextJS Blog Demo
          </h1>
          <Link href="/posts" passHref>
            <a
              style={{
                color: '#fff',
                fontWeight: 700,
                background: '#078f9c',
                padding: '1.2rem',
                borderRadius: '8px',
                maxWidth: 200,
                display: 'block',
                textAlign: 'center',
                margin: 'auto'
              }}>
              See Posts
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
