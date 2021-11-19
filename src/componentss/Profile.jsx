import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import Sidebar from './Sidebar';
import Header from './Header';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userAdmin: "Admin",
            userId: "DF13323",
            userImg: "https://example.com/favicoin.ico"
        }
        this.UserName = { props: "Admin" };
        this.Userimg = { props: "https://image.flaticon.com/icons/png/512/149/149071.png" };
    }
    render() {

        return <>
            <div id="layoutSidenav">
                <Sidebar />

                <div id="layoutSidenav_content">
                    <div id="page-content-wrapper">
                        <div className="container-fluid px-4">

                            <h4 className="mt-4">Profile</h4>
                            <div className="row mt-3 p-3 detils">

                                <div className="col-lg-2 col-md-2">
                                    <div className="user_edit_img">
                                        <img src={this.Userimg.props}></img>
                                    </div>
                                   
                                </div>
                                <div className="col-lg-7 col-md-7 my-1 brder_r">
                                    <div className="row">
                                        <div className="col-md-5 my-1">
                                            <h6> ID ( Wallet Address):</h6>
                                        </div>
                                        <div className="col-md-7 my-1">
                                            <small></small>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-5 my-1">
                                            <h6> Referrer Id  :</h6>
                                        </div>
                                        <div className="col-md-7 my-1">
                                            <small></small>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5 my-1">
                                            <h6> Package Name :</h6>
                                        </div>
                                        <div className="col-md-7 my-1">
                                            <small></small>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-5 my-1">
                                            <h6> Rank Level :</h6>
                                        </div>
                                        <div className="col-md-7 my-1">
                                            <small></small>
                                        </div>
                                    </div>



                                </div>

                                <div className="col-lg-3 col-md-3 text-center mt-5">


                                    <button class="btn btn-success">Update Profile</button>

                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </>
    }

}



export default Profile;