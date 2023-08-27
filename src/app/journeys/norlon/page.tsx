'use client';
import { formatISOStringDate, formatISOStringTime } from '@/utils/date';
import dynamic from 'next/dynamic';
import Button from '@/components/Button';

const data: Interfaces.Journey = {
  firstName: 'Sam',
  origin: { name: 'Norwich', lat: 52.6293, long: 1.2979 },
  destination: { name: 'London', lat: 51.5072, long: 0.1276 },
  date: new Date().toString(),
};

export default function Page() {
  const Map = dynamic(async () => await import('@/components/Map'), {
    ssr: false,
  });

  return (
    <main className="flex flex-col items-center">
      <section className="grid">
        <h2 className='mb-2'>
          {data.firstName} is going from {data.origin.name} to{' '}
          {data.destination.name} on the {formatISOStringDate(data.date)} at{' '}
          {formatISOStringTime(data.date)}
        </h2>
        <Button addClassName="mb-2">Request to share</Button>
      </section>
      <div className="w-full">
        <div className="w-full h-96">
          <Map
            routing={{ origin: data.origin, destination: data.destination }}
          ></Map>
        </div>
      </div>
    </main>
  );
}
