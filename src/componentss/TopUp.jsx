import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';

function TopUp () {
    return (
        <>
            <div id="layoutSidenav">
            <Sidebar />

            <div id="layoutSidenav_content">
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        
                            <div className="row mt-3">

                                <div className="col-lg-6 ">
                                    <h6 className="mt-4">Upgrade Packages</h6>
                                    <div className="card shadow-lg">
                                        <div className="card-body">
                                            <div className="row">


                                                <div className="col-12 d-flex mt-2">
                                             </div>

                                                <div className="col-12 text-center m-auto pt-2">
                                                    <h4> Current Package   : <span>$25 </span></h4>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                          
                            <div className="col-lg-6 ">
                                <h6 className="mt-4">Upgrade Packages</h6>
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
                                                    <option value="4">$500</option>
                                                    <option value="5">$1200</option>
                                                   
                                                </select>


                                            </div>

                                            <div className="col-12 text-center m-auto pt-2">
                                                <button className="btn btn-outline-secondary  w-100" type="button" id="button-addon2">Upgrade </button>


                                            </div>

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
    )
}

export default TopUp
