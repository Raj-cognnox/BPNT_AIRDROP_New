import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.TotalAmounts = {props: "$ 0"};
        this.Price = {props: "0"}; 
        this.publicAddress = {props: "0%20Service%3A%20cc%40tokemakinwabeauty.com"}; 
      }
      
    render() {
        return ( <>
            <div className="card shadow-lg">
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <i className="fa fa-cube fa-2x text-warning"></i>
                        </div>
                        <div className="col-8 text-right">
                            <h5 className="text-warning">{this.TotalAmounts.props}</h5>
                            <h6>{this.Price.props}</h6>
                        </div>
                    </div>

                </div>

            </div>

            {/* <div className="card shadow-lg">
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <i className="fa fa-cube fa-2x text-warning"></i>
                        </div>
                        <div className="col-8 text-right">
                            <p>{this.Address.props}</p>
                            <h5 className="text-warning">{this.TotalAmoun.props}</h5>
                            <h6>{this.Price.props}</h6>
                        </div>
                    </div>

                </div>

            </div> */}
        </>
        )

    }
};


export default Card;