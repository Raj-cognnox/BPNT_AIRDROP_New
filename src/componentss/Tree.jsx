import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function Stscking() {
    return <>
        <div id="layoutSidenav">

            <Sidebar />

            <div id="layoutSidenav_content">
                <div id="page-content-wrapper">
                    <div className="container-fluid px-4">
                            <div className="row mb-4">
                            <h6 className="mt-2">Tree</h6>

                            <div className="col-lg-12">
                                <div className="card mt-4">
                                    <div className="card-header">
                                        <i className="fas fa-users me-1"></i>
                                        User Downline
                                    </div>
                                    <div className="card-body">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>Address</th>
                                                        <th>User ID</th>
                                                        <th>Referral ID</th>
                                                        <th>Rank </th>
                                                        <th>Join date</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
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
                </div>
       
    </>
}
export default Stscking;