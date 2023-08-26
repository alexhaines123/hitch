import React, { FC } from 'react';
import { Interfaces } from '@/types/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { formatISOStringDate, formatISOStringTime } from '@/utils/date';

interface Props {
  journey: Interfaces.Journey;
}

const Journey: React.FC<Props> = ({ journey }) => {
  return (
    <div className="grid border rounded-md p-2">
      <p className="mb-4">
        {journey.firstName} is leaving on {formatISOStringDate(journey.date)} at {formatISOStringTime(journey.date)}
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <FontAwesomeIcon icon={faMapPin} />
          {journey.origin}
        </div>
        <div className="flex flex-col justify-start">
          <FontAwesomeIcon icon={faMapPin} />
          {journey.destination}
        </div>
      </div>
    </div>
  );
};

export default Journey;
