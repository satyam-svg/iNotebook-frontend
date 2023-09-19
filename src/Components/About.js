import React, { useContext } from 'react';
import notecontext from '../Context/notecontext';

export default function About() {
  let a = useContext(notecontext);

  return (
    <div className="container">
      <h1>This is about {a.class}</h1>
    </div>
  );
}
