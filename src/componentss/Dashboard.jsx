import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import {sendAirdrop} from "../helpers/web3"
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: null,
        address:"",
        referrer:""
        
    }
    console.log("props", this.props);
    this.resetApp = this.resetApp.bind(this);
    this.onNext = this.onNext.bind(this)
   // this.onNext = this.onNext.bind(this);
  }
//   componentDidMount() {
//     fetch('https://1294-124-253-5-10.ngrok.io/twitter-verify').then((resp) => {
//         resp.json().then((result) => {
//             console.log(result)
//             // console.log(result.differntial)
//             this.setState({ data: result })
//         })
//     })
//   }


  async onNext() {
      let userName = document.getElementById("socialUserName")
    console.log("event in set TwitteruserName", userName.value)
    let twitterUserName = userName.value
    this.setState({twitterUserName })
    const TELEGRAM_LINK = `https://backend.bugg.finance/telegram-verify?address=${this.props.address}&uname=${userName.value}`
    const TWITTER_LINK = `https://backend.bugg.finance/twitter-verify?address=${this.props.address}&uname=${userName.value}`
    const telegram = 'https://t.me/bugg_finance'
    const Twitter = 'https://twitter.com/BuggFinance'
    const SOCIAL_FOLLOW_LINK = this.state.twitterVerified ?  telegram : Twitter 
    var url = this.state.twitterVerified ? TELEGRAM_LINK : TWITTER_LINK
    let result = await fetch(url);
    let data = await result.json();
    document.getElementById('demo').innerHTML=data.message 
    console.log("data is",data)
    if(data.status && data.social=="twitter"){  
        this.setState({twitterVerified:true})
        console.log("twitter")
         document.getElementById('socialUserName').value=""       
    }
    else if(data.status && data.social=="telegram"){  
      this.setState({telegramVerified:true})
      console.log("telegarm")
       document.getElementById('socialUserName').value=""       
    }
    else {
       let twitterLink =  `<a href="${SOCIAL_FOLLOW_LINK}">follow us</a>`
       document.getElementById('demo').innerHTML=data.message + twitterLink

    }
    
    if(this.state.twitterVerified && this.state.telegramVerified) {
      console.log("all verified", this.props)
      let response  = await sendAirdrop(this.props.address, this.props.chainId, this.props.web3, this.props.referrer );
    }

  }

  async resetApp() {
    const { web3 } = this.props;
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
  }
  render() {
    let { connected, address, chainId } = this.props;
    return (
      <>
              <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-sm-12 col-md-6 mx-auto  text-center mt-5">
                        <div className="card bg-c-yellow bg-c-yellowt text-white mb-4 py-4">
                      <h5 className="Telegram">{this.state.twitterVerified? <span className="tele">Telegram</span>:<span className="twtter">Twitter</span>} Verification </h5>
                        <div className="card-body">
                            <input type="text" className="form-control" placeholder="Enter User Name"  id="socialUserName"></input>
                                <p id="demo"></p>
                                <button onClick={this.onNext} className="btn btn-primary2">Next</button>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
           
      </>
    );
  }
}

export default Dashboard;
