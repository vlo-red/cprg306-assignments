import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>CPRG 306-C: Weekly Assignments</h1>
      <ul>
        <li>
          Go to Week-2 Assignment:{' '}
          <Link href="/week-2">Week-2 Page</Link>
        </li>
        <li>
          Go to Week-3 Assignment:{' '}
          <Link href="/week-3">Week-3 Page</Link>
        </li>
        <li>
          Go to Week-4 Assignment:{' '}
          <Link href="/week-4">Week-4 Page</Link>
        </li>
        <li>
          Go to Week-5 Assignment:{' '}
          <Link href="/week-5">Week-5 Page</Link>
        </li>
        <li>
          Go to Week-6 Assignment:{' '}
          <Link href="/week-6">Week-6 Page</Link>
        </li>
        <li>
          Go to Week-7 Assignment:{' '}
          <Link href="/week-7">Week-7 Page</Link>
        </li>
        <li>
          Go to Week-8 Assignment:{' '}
          <Link href="/week-8">Week-8 Page</Link>
        </li>
        <li>
          Go to Week-9 Assignment:{' '}
          <Link href="/week-9">Week-9 Page</Link>
        </li>
        <li>
          Go to Week-10 Assignment:{' '}
          <Link href="/week-10">Week-10 Page</Link>
        </li>
      </ul>
    </main>
  );
}