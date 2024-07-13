import React from 'react';
import { useParams, Link } from 'react-router-dom';

const facts = {
  1: "Harry's birthday is on July 31st.",
  2: "Harry's parents were James and Lily Potter.",
  3: "Harry is known as 'The Boy Who Lived'."
};

const Fact = () => {
  const { factId } = useParams();
  const fact = facts[factId];

  return (
    <div>
      <h1>Fact</h1>
      {fact ? <p>{fact}</p> : <p>Fact not found.</p>}
      <p><Link to="/">Home</Link></p>
    </div>
  );
};

export default Fact;