import React from 'react';

//interface cho props
interface GreetingProps {
  name: string;
  age?: number; // optional prop
}

const ComponentProps: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      {age && <p>Your age is {age}.</p>}
    </div>
  );
};

export default ComponentProps;
