import React from 'react'

export default function Alert(props) {

    return (
        <div className="alert alert-danger d-flex align-items-center jusify-content-center mx-2 my-2" role="alert" style={{zIndex:"100"}}>
            <div>
                {props.alert}
            </div>
        </div>
    )
}
