import React from 'react';

interface IProps {
  params: {
    id: string;
    category:  string;
  }; 
}

const Event: React.FC<IProps> = async ({ params }) => {
  const {id, category} = await params;

  return (
    <div>
      <h1>Children: {id} - {category}</h1>
    </div>
  );
};

export default Event;
