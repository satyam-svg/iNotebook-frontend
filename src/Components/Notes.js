import React from 'react'
import { useContext } from 'react';
import notecontext from '../Context/notecontext'
import Noteitems from './Noteitems';
export default function Notes() {
  const context=useContext(notecontext)
    const{notes,setNotes}=context;
  return (
    <div className="container my-3">
        <h1>Your Note</h1>
        {notes.map((note)=>{
return <Noteitems title={note.title} description={note.description}/>
        })}
    </div>
  )
}
