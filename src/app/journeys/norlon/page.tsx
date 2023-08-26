'use client'
import { Interfaces } from '@/types/interfaces';
import { formatISOStringDate, formatISOStringTime } from '@/utils/date';
import dynamic from 'next/dynamic';


const data: Interfaces.Journey = {
  firstName: 'Sam',
  origin: 'Norwich',
  destination: 'London',
  date: new Date().toString(),
};

export default function Page() {
  const Map = dynamic(async () => await import('@/components/Map'), { ssr: false });
  return (
    <main className="flex flex-col items-center">
      <h2>
        {data.firstName} is going from {data.origin} to {data.destination} on
        the {formatISOStringDate(data.date)} at {formatISOStringTime(data.date)}
      </h2>
      <div className="w-full">
        <div className="w-full h-96">
          <Map></Map>
        </div>
      </div>
    </main>
  );
}
