import Button from '@/components/Button';
import Journey from '@/components/Journey';
import { Interfaces } from '@/types/interfaces';

const data: Interfaces.Journey[] = [
  {
    firstName: 'Sam',
    origin: 'Norwich',
    destination: 'London',
    date: new Date().toISOString(),
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

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1>Journeys</h1>
      <div className="w-full">
        {data.map((i) => (
          <div key={i.firstName} className="mb-2">
            <Journey journey={i} />
          </div>
        ))}
      </div>
    </main>
  );
}
