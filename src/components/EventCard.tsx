import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  isPast?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, image, isPast = false }) => {
  return (
    <div className={`bg-white bg-opacity-10 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 ${isPast ? 'opacity-80' : ''}`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-blue-300 mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <p className="text-gray-300">{description}</p>
        {!isPast && (
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Register Now
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;