import React, { useState } from "react";
import notecontext from "./notecontext"; 
const NoteState = (props) => {
  const notesinitial=
    [
        {
          "_id": "6505c7496e32cea96fded7c4",
          "user": "64ff7134757d54e3a2b4e111",
          "title": "routine",
          "description": "wake up gyzz",
          "tag": "personal",
          "date": "2023-09-16T15:18:33.528Z",
          "__v": 0
        },
        {
          "_id": "6505c7496e32cea96fded7c6",
          "user": "64ff7134757d54e3a2b4e111",
          "title": "routine",
          "description": "wake up gyzz",
          "tag": "personal",
          "date": "2023-09-16T15:18:33.882Z",
          "__v": 0
        },
        {
          "_id": "6505c74a6e32cea96fded7c8",
          "user": "64ff7134757d54e3a2b4e111",
          "title": "routine",
          "description": "wake up gyzz",
          "tag": "personal",
          "date": "2023-09-16T15:18:34.106Z",
          "__v": 0
        },
        {
          "_id": "6505c7c700acd8b04d1dfd98",
          "user": "64ff7134757d54e3a2b4e111",
          "title": "routine",
          "description": "wake up gyzz",
          "tag": "personal",
          "date": "2023-09-16T15:20:39.698Z",
          "__v": 0
        },
        {
          "_id": "6505e178014ade3e583e0500",
          "user": "64ff7134757d54e3a2b4e111",
          "title": "party",
          "description": "go to party at 5 pm",
          "tag": "personal",
          "date": "2023-09-16T17:10:16.876Z",
          "__v": 0
        }
      ]
const [notes,setNotes]=useState(notesinitial)
  return (
    <notecontext.Provider value={{notes,setNotes}}>
      {props.children}
    </notecontext.Provider>
  );
};

export { notecontext, NoteState };
