import React from 'react'

export default function Loading() {
    return (
        <div className="container" style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div className="spinner-border d-flex justify-content-center align-items-center my-2" style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
