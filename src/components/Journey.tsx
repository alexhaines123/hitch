import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

interface Props {
  journey: Interfaces.Journey;
}

const Journey: React.FC<Props> = ({ journey }) => {

  return (
    <div className="border rounded-md p-2 bg-pri-light text-grey font-bold">
      <p className="mb-4 text-lg">
        {journey.firstName} is going from {journey.origin.name} to{' '}
        {journey.destination.name}
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <FontAwesomeIcon icon={faMapPin} size="xl" />
          {journey.origin.name}
        </div>
        <div className="flex flex-col items-end">
          <FontAwesomeIcon icon={faMapPin} size="xl" />
          {journey.destination.name}
        </div>
      </div>
    </div>
  );
};

export default Journey;
