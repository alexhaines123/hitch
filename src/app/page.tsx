import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1>HITCH</h1>
      <Link href="/journeys">
        <Button>Login</Button>
      </Link>
    </main>
  );
}
