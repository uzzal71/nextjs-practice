import React from 'react';

interface PageProps {
  params: {
    category: string;
  }; 
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const {category} = await params;

  return (
    <div>
      <h1>Parent: {category}</h1>
    </div>
  );
};

export default Page;
