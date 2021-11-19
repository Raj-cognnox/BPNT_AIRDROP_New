import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.UserName = { props: "Admin" };
    this.userID = { props: "DF1323" };
    this.Userimg = { props: "https://image.flaticon.com/icons/png/512/149/149071.png" };
    this.kill = this.kill.bind(this)
  }
  async kill() {
    console.log("killin g", this.props)
    await this.props.killSession()
  }
  render() {
    return <>
      <div className="topbars">
        <div className="row">
          <div className="col-md-3">
            <div className="sb-topnav00">
              <button className="btn btn-link_2 btn-sm" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            </div>
          </div>
          <div className="col-md-9 text-end">
            <button onClick={this.kill} >Kill Session </button>
          </div>
        </div>
      </div>
   
    </>

  }
}

export default Header;


