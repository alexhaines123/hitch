import Journey from '@/components/Journey';
import Link from 'next/link';
import { testJourneys } from '@/data/testData';

export default function Page() {
  return (
    <>
      <div className="w-full">
        <h1>Journeys</h1>
        {testJourneys.map((i) => (
          <div key={i.firstName} className="mb-2">
            <Link href="/journeys/norlon">
              <Journey journey={i} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
