import React from 'react'

const Accounts = () => {
    return (
        <div className="container">
            <div className="header">
                <h2>Accounts</h2>
                <button className="btn btn-primary" onClick={()=>{window.location.pathname = '/create-account'}}>Create account</button> 
            </div>
        </div>
    )
}

export default Accounts;