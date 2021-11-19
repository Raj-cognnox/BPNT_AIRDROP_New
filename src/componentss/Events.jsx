import React from 'react';

function Events () {
    return <>
        <div id="page-content-wrapper">
            <div className="container-fluid">
                <h4 className="mt-4">Events</h4>
                <div className="row mt-3">
                    <div className="col-lg-6 col-sm-6 col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4">
                                        <i className="fa fa-cube fa-2x text-warning"></i>
                                    </div>
                                    <div className="col-8 text-right">
                                        <h5 className="text-warning">Total Trx</h5>
                                        <h6>: 0.00000</h6>
                                    </div>

                                    <div className="col-12 d-flex mt-2">

                                        <input className="w-100 bg-tran" type="text" placeholder="0.0061" />
                                        <a className="btn btn-warning ml-2" href="#">Sale</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4">
                                        <i className="fa fa-gg-circle fa-2x text-warning"></i>
                                    </div>
                                    <div className="col-8 text-right">
                                        <h5 className="text-warning">Account</h5>
                                        <h6>Trx : 999999</h6>
                                    </div>

                                    <div className="col-12 d-flex mt-2">
                                        <select className="form-select bg-tran w-100" aria-label="Default select example">
                                            <option selected>0.0001</option>
                                            <option value="1">0.0002</option>
                                            <option value="2">0.00045</option>
                                            <option value="3">0.00015565</option>
                                        </select>

                                        
                                        <a className="btn btn-warning ml-2" href="#">Sale</a>
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
export default Events;