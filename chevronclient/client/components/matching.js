import React from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react"; 
const uuidV1 = require('uuid/v1');

@observer
export default class matching extends React.Component{

    render(){

        //get objects from store
        const {matchingData} = this.props.route.data;

        switch(matchingData.promiseState) {
            case 'pending':
                return <div> Loading... </div>

            case 'fulfilled':
                //group item categories
                function getTable(){
                    var data = [];
                    const matchingTable = Object.keys(matchingData.data).forEach(function (key) {
                        
                        if(key !== "DealStatus"){
                            var statusClass = (matchingData.data[key].Match === true) ? "btn btn-success" : "btn btn-warning",
                                status = (matchingData.data[key].Match === true) ? "Yes" : "No"
                            data.push(<tr key={uuidV1()}>
                                <td>{key}</td>
                                <td>{matchingData.data[key].ValA}</td>
                                <td>{matchingData.data[key].ValB}</td>
                                <td>{matchingData.data[key].Match}<button type="button" className={statusClass}>{status}</button></td>
                            </tr>) 
                        }
                    });

                    return data;
                }
                
                //render html
                return <div>
                    <h2>Deal Matching</h2>
                    <div className="well">
                        <span className="pull-left"> <strong>Deal Status</strong> </span> 
                        <span className="pull-right"> <button type="button" className="btn btn-success">Matched</button> </span>
                    </div>
                    <table className="table table-striped table-responsive">
                        <thead>
                            <tr>
                                <th>Type</th>  
                                <th>Seller</th>
                                <th>Buyer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getTable()}
                        </tbody>
                    </table>
                </div>
             case 'rejected':
                return <div > No trades available. </div>
        }

    }
}