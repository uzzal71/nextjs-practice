import React from 'react';

interface PageProps {
  params: {
    id: string;
  }; 
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const {id} = await params;

  return (
    <div>
      <h1>Children: {id}</h1>
    </div>
  );
};

export default Page;
