import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function Reward() {
    return <>


        <div id="layoutSidenav">
            <Sidebar />

            <div id="layoutSidenav_content">
                <div className="container-fluid">
                    <div className="row">
                
                        <div className="col-lg-12">
                             <div className="row mt-4">
                                <h6 className="mt-4">Rewards</h6>
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6>Earnings</h6>
                                            <p>$ :</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6> Rewards</h6>
                                            <p>$ :</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6>Withdraw</h6>
                                             <button class="btn btn-info"> Claim Now </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-12">
                            <div className="card mt-4">
                                <div className="card-header">
                                    <i className="fas fa-gift me-1"></i>
                                    Rewards
                                </div>
                                <div className="card-body">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th> User Address </th>
                                                    <th>User ID</th>
                                                    <th>Package</th>
                                                    <th>Rank </th>
                                                    <th>Join date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td>23323</td>
                                                    <td>Silver</td>
                                                    <td>Gold</td>
                                                    <td>2011/04/25</td>
                                                    <td>Inactiv</td>
                                                </tr>
                                                


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
}
export default Reward;