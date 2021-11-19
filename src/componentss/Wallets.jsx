import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import Sidebar from './Sidebar';
import Header from './Header';

class Wallets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userAdmin: "Admin",

        }
        this.UserName = { props: "Admin" };
        this.LivePrice = { props: "BNB 0" };

    }
    render() {

        return  <div id="layoutSidenav">

        <Sidebar />

        <div id="layoutSidenav_content">
        <Sidebar />
            <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row mt-3 p-3">
                
                        <h6 className="mt-4">Wallets</h6>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>LIVE PRICE</h6>
                                <p>ewqwe</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>BNB BALANCE</h6>
                                <p>wew</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>LIVE PRICE</h6>
                                <p>wewe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>


    }

}



export default Wallets;