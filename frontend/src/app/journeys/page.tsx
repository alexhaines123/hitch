'use client'

import Journey from '@/components/Journey';
import Link from 'next/link';
import { testJourneys } from '@/data/testData';

import {
  useSelector,
  useDispatch,
  selectJourneys,
  getJourneysAsync,
} from '@/redux';
import { useEffect } from 'react';

export default function Page() {
  const dispatch = useDispatch();
  const journeys = useSelector(selectJourneys);

  useEffect(() => {
    dispatch(getJourneysAsync());
  }, [dispatch]);

  return (
    <>
      <div className="w-full">
        <h1>Journeys</h1>
        {journeys.map((i) => (
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
