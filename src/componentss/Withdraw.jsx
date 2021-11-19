import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import "../App.css"

class Withdraw extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            users: null
        }
        console.log("props", this.props)
        this.resetApp = this.resetApp.bind(this)
    }
    componentDidMount() {
        // fetch('https://9161be863bbe.ngrok.io/total').then((resp) => {
        //     resp.json().then((result) => {
        //         console.log(result)
        //         // console.log(result.differntial)
        //         this.setState({ data: result })
        //     })
        // })
    }

    async resetApp() {
        const { web3 } = this.props;
        if (web3 && web3.currentProvider && web3.currentProvider.close) {
            await web3.currentProvider.close();
        }
    }
    render() {
        let { connected, address, chainId } = this.props
        return <>
            <div id="layoutSidenav">

                <Sidebar />

                <div id="layoutSidenav_content">
                    <div id="page-content-wrapper">
                        <div className="container-fluid px-4">
                            <div className="row">
                                <div className="col-6"> <h5>Withdraw</h5></div>
                                <div className="col-6 text-end">

                                </div>
                            </div>
                            


                            
                            

                            

                            

                            <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-table me-1"></i>
                            DataTable
                        </div>
                        <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Address</th>
                                        <th>Wallet</th>
                                        
                                        <th>Withdraw date</th>
                                        <th>Total </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
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


        </>

    }

}

export default Withdraw;
