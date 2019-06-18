import Link from 'next/link';

function Home() {
  return (
    <div>
      <style jsx>{`
        a,
        h2 {
          margin: 3.5rem auto;

          color: #9ac6c9;
          text-align: center;
          transition: all 500ms ease;
          text-shadow: 0 2px 3px rgba(246, 73, 167, 0.5);
        }
        a:hover,
        h2:hover {
          color: #f649a7;
          cursor: pointer;
          text-shadow: 0 2px 10px rgba(246, 73, 167, 0.9);
        }
      `}</style>
      <h2>Welcome to Next.js!</h2>

      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default Home;
