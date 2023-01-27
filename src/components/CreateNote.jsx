import React ,{useState} from "react";

const CreateNote = (props)=> {

    const [expand,setExpand] = useState(false);

    const [details, setDetails] = useState({
        title:"",
        note:""
    });

    const showDetails = (event)=> {
        // setDetails(event.target.value)
        // const value = event.target.value;
        // const name = event.target.name;
        const {value,name} = event.target;
        setDetails((prevData)=> {
            return (
                {
                    ...prevData,
                    [name]:value

                }
            )
        })
    }

    const addEvent = ()=> {
        props.passNote(details);
        setDetails({
            title:"",
            note:""
        });
    }


    const refreshPage = (event)=> {
        event.preventDefault();
    }

    const expandIt = ()=> {
        setExpand(true);
    }

    return (
        <div className="notes">
            <form className="mb-3" onSubmit={refreshPage}>
                {
                    expand &&
                    <input 
                        className="form-control"
                        type="text" 
                        name="title"
                        placeholder="Title" autoComplete="off"
                        value={details.title}
                        onChange={showDetails}
                    /> 
                }

                <textarea 
                className="form-control"
                rows="5" column="" 
                name="note"
                placeholder="Write a note..."
                onChange={showDetails} 
                value={details.note}
                onClick={expandIt}
                >    
                </textarea>

                {expand && <button onClick={addEvent} className="btn btn-primary">Add</button>}
            </form>
        </div>
    )
}

export default CreateNote;