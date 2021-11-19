import React from 'react';
import { Link } from "react-router-dom";
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.UserName = { props: "Admin" };
    this.userID = { props: "DF1323" };
    this.Userimg = { props: "https://image.flaticon.com/icons/png/512/149/149071.png" };
}

  sidebarToggle(){
    document.body.classList.toggle('sb-sidenav-toggled');
  }
  render() {
    return <>
     <div className="sidebaer" id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading bg-c-yellow pt-2">
              <div className="sb-topnav00 text-end">
            <button className="btn btn-link_2 btn-sm" onClick={this.sidebarToggle} id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            </div>
              </div>
              <br />

              <Link className="nav-link" to="/Dashboard">
                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                Dashboard
              </Link>

              <Link className="nav-link" to="/profile">
                <div className="sb-nav-link-icon"><i className="fas fa-user"></i></div>
                Profile
              </Link>

              <Link className="nav-link" to="/Wallet">
                <div className="sb-nav-link-icon"><i className="fas fa-wallet"></i></div>
                Wallet
              </Link>
              <Link className="nav-link" to="/Buypackages">
                <div className="sb-nav-link-icon"><i className="fas fa-wallet"></i></div>
                Buy Packages
              </Link>

              <Link className="nav-link" to="/Referral">
                <div className="sb-nav-link-icon"><i className="fas fa-wallet"></i></div>
                Referral
              </Link>

              <Link className="nav-link" to="/Withdraw">
                <div className="sb-nav-link-icon"><i className="fas fa-wallet"></i></div>
                Withdraw
              </Link>


              <Link className="nav-link" to="/Stakes">
                <div className="sb-nav-link-icon"><i className="fas fa-chart-bar"></i></div>
                Stakes
              </Link>


              <Link className="nav-link" to="/topup">
                <div className="sb-nav-link-icon"><i className="fas fa-user"></i></div>
                Top - Up Package
              </Link>

              <Link className="nav-link" to="/Tree">
                <div className="sb-nav-link-icon"><i className="fas fa-user"></i></div>
               Users List
              </Link>

              <Link className="nav-link" to="/Reward">
                <div className="sb-nav-link-icon"><i className="fas fa-user"></i></div>
              Reward
              </Link>
              <Link className="nav-link" to="/TotalIncome">
                <div className="sb-nav-link-icon"><i className="fas fa-user"></i></div>
                Incomes Details
              </Link>

              
              <Link className="nav-link" to="/ranks">
                <div className="sb-nav-link-icon"><i className="fas fa-user"></i></div>
                User Rank
              </Link>

              
            



            </div>
          </div>

        </nav>
      </div>







      {/* <div className="border-right" id="sidebar-wrapper">
      <div className="sidebar-heading logo">
      
        <a href="#">Bit Bull Chain</a></div>
      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action" to="/"> Dashboard</Link>
        <Link className="list-group-item list-group-item-action" to="/Profile"> Profile</Link>
        <Link className="list-group-item list-group-item-action" to="/Stakes"> Stakes</Link>
        <Link className="list-group-item list-group-item-action" to="/Wallet"> Wallet</Link>
        <Link className="list-group-item list-group-item-action" to="/Events"> Events</Link>

        <Link className="list-group-item list-group-item-action" to="/Status">Status</Link>

      </div>
    </div> */}
    </>
  }

}
export default Sidebar;