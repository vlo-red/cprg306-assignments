import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>CPRG 306-C: Weekly Assignments</h1>
      <p>
        Go to Week-2 Assignment:{' '}
        <Link href="/week-2">Week-2 Page</Link>
      </p>
      <p>
        Go to Week-3 Assignment:{' '}
        <Link href="/week-3">Week-3 Page</Link>
      </p>
    </main>
  );
}