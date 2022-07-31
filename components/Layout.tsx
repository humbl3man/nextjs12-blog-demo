import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header
        style={{
          backgroundColor: '#eee',
          padding: '2rem 0',
          marginBottom: '3rem'
        }}>
        <div className="container">
          <h1
            style={{
              margin: 0
            }}>
            <Link href="/posts">NextJS blog</Link>
          </h1>
        </div>
      </header>
      <main>{children}</main>
      <footer
        style={{
          borderTop: '1px solid #ccc',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          marginTop: '4rem'
        }}>
        <div className="container">
          <p
            style={{
              textAlign: 'center'
            }}>
            {new Date().getFullYear()} NextJS Blog.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
