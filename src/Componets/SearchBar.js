import React, { useState } from 'react'

export default function SearchBar(props) {
    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        console.log("Handle changed");
        setText(event.target.value);
    }

    return (
        <div>
            <div className="card-header" >
                <form className="d-flex" onSubmit={props.sendDataToNav(text)}>
                    <input
                        className="form-control me-2"
                        placeholder={`Search your ${props.title}`}   
                        value={text}
                        onChange={handleOnChange}
                        style={{width:"100%"}}
                    />
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
            </div>
        </div>
    )
}
