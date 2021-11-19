import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';

function Buypackages() {
    return (
        <>
            <div id="layoutSidenav">
            <Sidebar />

            <div id="layoutSidenav_content">
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        
                        <div className="row mt-3">
                            <div className="col-lg-6">
                            <h6 className="mt-4">Buy Packages</h6>
                                <div className="card shadow-lg">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 text-right">
                                                <h5 className="text-warning">Select Package </h5>
                                            </div>

                                            <div className="col-12 d-flex mt-2">
                                                <select className="form-select bg-tran w-100" aria-label="Default select example">
                                                    <option selected>$25</option>
                                                   
                                                       
                                                        <option value="1">$50</option>
                                                        <option value="2">$100</option>
                                                        <option value="5">$300</option>
                                                        <option value="6">$1200</option>
                                                </select>
                                                
                                            
                                            </div>

                                            <div className="col-12 text-center m-auto py-3">
                                            <button className="btn btn-outline-secondary  w-100 " type="button" id="button-addon2">Buy</button>
                                                
                                            
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                            <h6 className="mt-4">Packages List</h6>
                                <div className="card shadow-lg">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 text-right p-2">
                                                
                                                  <ul className="packag">
                                                      <li>01. Member Package    <span>$25</span> </li>
                                                      <li>02. Distributor Package <span>$50</span> </li>
                                                      <li>03. Bronze Package  <span>$100</span></li>
                                                      <li>04. Silver Package  <span>$300</span> </li>
                                                      <li>05. Glod Package   <span>$1200</span></li>
                                                      
                                                  </ul>
                                            </div>

                                            <div className="col-12 d-flex mt-2">
                                             
                                                
                                            
                                            </div>

                                           
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        


                        {/* <div className="row">
                            <div className="col-lg-12">
                                <div className="card mt-4">
                                    <div className="card-header">
                                        <i className="fas fa-table me-1"></i>
                                        DataTable
                                    </div>
                                    <div className="card-body">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Office</th>
                                                        <th>Age</th>
                                                        <th>Start date</th>
                                                        <th>Salary</th>
                                                    </tr>
                                                </thead>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Buypackages
