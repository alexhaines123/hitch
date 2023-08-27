import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { formatISOStringDate, formatISOStringTime } from '@/utils/date';

interface Props {
  journey: Interfaces.Journey;
}

const Journey: React.FC<Props> = ({ journey }) => {
  return (
    <div className="border rounded-md p-2 bg-ter ">
      <p className="mb-4">
        {journey.firstName} is leaving on {formatISOStringDate(journey.date)} at {formatISOStringTime(journey.date)}
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <FontAwesomeIcon icon={faMapPin} />
          {journey.origin.name}
        </div>
        <div className="flex flex-col justify-start">
          <FontAwesomeIcon icon={faMapPin} />
          {journey.destination.name}
        </div>
      </div>
    </div>
  );
};

export default Journey;
