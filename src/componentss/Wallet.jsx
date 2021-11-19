import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';




class Wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userAdmin: "Admin",

        }
       

    }
    render() {

        return  <div id="layoutSidenav">
            <Sidebar />
        <div id="layoutSidenav_content">
                <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row mt-3 p-3">
                
                        <h6 className="mt-4">Wallets</h6>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>LIVE PRICE DFPW</h6>
                                <p>$0.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>BNB BALANCE</h6>
                                <p>0 BNB</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h6>LIVE PRICE BNB</h6>
                                <p>$0.00</p>
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
export default Wallet;