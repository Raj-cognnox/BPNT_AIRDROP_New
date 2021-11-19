import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';


class Referral extends React.Component {
    copyCodeToClipboard = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
    }
    constructor(props) {
        super(props);
        let link = `https://Bugg.finance?referrer=${this.props.address}`
       this.state = {
           link
       }


    } 
    compone
    render() {
        return <>
     
     <div id="layoutSidenav">

                <Sidebar />

                <div id="layoutSidenav_content">
                    <div id="page-content-wrapper">
                        <div className="container-fluid px-4">
                            <div className="row mt-3 mb-4">
                                <h5>Dashbord</h5>
                    
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-share me-1"></i>
                                    Referral link
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div>
                                                <input className="form-control" ref={(textarea) => this.textArea = textarea} value={this.state.link} />
                                            </div>

                                        </div>
                                        <div className="col-md-3">
                                            <button className="btn  btn-info btn-info2 w-100" onClick={() => this.copyCodeToClipboard()}>
                                                Copy to Link
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-table me-1"></i>
                            DataTable
                        </div>
                        <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Referral</th>
                                        <th>Wallet</th>
                                        <th>Joing Date </th>
                                        <th>Packages</th>
                                        
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>{this.props.address}</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                       
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

}


    export default Referral
