import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StreamingService } from '../types';
import { ServiceCard } from '../components/ServiceCard';

interface ServiceListProps {
  services: StreamingService[];
}

export const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map(service => (
        <div 
          key={service.slug} 
          onClick={() => navigate(`/service/${service.slug}`)}
          className="cursor-pointer"
        >
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
};