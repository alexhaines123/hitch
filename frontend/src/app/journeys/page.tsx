import Journey from '@/components/Journey';
import Link from 'next/link';
import { getApolloClient } from '@/graphql';
import { gql } from '@apollo/client';
import React from 'react';

export const dynamic = 'force-dynamic';

const GET_JOURNEYS = gql`
  query {
    journeys {
      origin,
      destination,
    }
  }
`;

export default async function Page() {
  const { data } = await getApolloClient().query({
    query: GET_JOURNEYS,
  });
  console.log(data)
  return (
    <>
      <div className="w-full">
        <h1>Journeys</h1>
        {data.journeys.map((i) => (
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
