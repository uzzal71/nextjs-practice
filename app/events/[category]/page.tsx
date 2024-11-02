import React from 'react';

interface IProps {
  params: {
    category: string;
  }; 
}

const EventCategory: React.FC<IProps> = async ({ params }) => {
  const {category} = await params;

  return (
    <div>
      <h1>Parent: {category}</h1>
    </div>
  );
};

export default EventCategory;
