import Journey from '@/components/Journey';
import { Interfaces } from '@/types/interfaces';
import Link from 'next/link';

const data: Interfaces.Journey[] = [
  {
    firstName: 'Sam',
    origin: 'Norwich',
    destination: 'London',
    date: new Date().toString(),
  },
  {
    firstName: 'Alex',
    origin: 'London',
    destination: 'Norwich',
    date: new Date().toISOString(),
  },
  {
    firstName: 'Harry',
    origin: 'Walfomstow',
    destination: 'Eaton',
    date: new Date().toISOString(),
  },
  {
    firstName: 'Nik',
    origin: 'Thetford',
    destination: 'Cambridge',
    date: new Date().toISOString(),
  },
];

export default function Page() {
  return (
    <>
      <h1>Journeys</h1>
      <div className="w-full">
        {data.map((i) => (
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
