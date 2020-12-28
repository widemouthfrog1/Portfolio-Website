import React, { createContext, useState } from 'react'

export const NoteData = createContext();
export const BarData = createContext();
export const EditorState = createContext();

export const NoteProvider = (props) => {
  let [notes, setNotes] = useState([]);
  const AddPart = (index) => {

  }
  const AddNote = (part, index, pitch, duration, dots, tiedNotes, relatedNotes) => { //relatedNotes -> like linked quavers or triplets

  }
  return (
    <NodeData.Provider value={{}}>
      {props.children}
    </NodeData.Provider>
  );
}