import React from 'react'
import SearchBar from './SearchBar'
// import { useState } from 'react'

export default function Navbar(props) {

    const handleDataFromChild = (text) => {
        props.sendDataToApp(text)
      };
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <SearchBar title={"movie"} sendDataToNav={handleDataFromChild} />
                </div>
            </nav>
        </div>
    )
}
