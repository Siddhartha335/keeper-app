import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateNote from "./CreateNote";

const App = ()=> {
    const [add, setAdd] = useState([]);

    const addNote = (details)=> {
        setAdd((prevData)=> {
            return (
                [...prevData, details]
            )
        });
    }

    const onDelete = (id)=> {
        setAdd((oldData)=> {
             return oldData.filter((val, index)=> {
                return index!==id;
            })
        })
    }

    return (
        <>
            <Header />
            <CreateNote 
                passNote={addNote}
            />
            {add.map((val,index)=> {
                return <Note 
                key={index}
                id={index}
                title={val.title}
                content={val.note}
                deleteItem ={onDelete}
                 />
            })}
            <Footer />
        </>
    )
}

export default App;