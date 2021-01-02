import React from 'react'
import './association.css';
import {BiAddToQueue} from 'react-icons/bi';

const Association = () =>{
    return (
        <div className="container">
            <div className="header">
                <h2>Associations</h2>
                <button className="btn btn-primary" onClick={()=>{window.location.pathname ="/add-association"}}><strong><BiAddToQueue/></strong>Add Association</button>
            </div>
            
            <div className="crud-table">
                <table className="table">
                <thead>
                        <tr>
                            <th scope="col">Associations</th>
                            <th scope="col">Created</th>
                            <th scope="col">Action</th>
                        </tr>
                </thead>
            </table>
            </div>
            
        </div>
    )
}

export default Association;