import React from 'react'
import App from "./App";
import './App.css';
import Dashboard from "./componentss/Dashboard"
import Wallets from "./componentss/Wallets"
import Profile from './componentss/Profile';
import TotalIncome from './componentss/TotalIncome';
import LevelIncome from './componentss/LevelIncome';
import DirectIncome from './componentss/DirectIncome';
import Stakes from './componentss/Stakes';
import Tree from './componentss/Tree';
import Reward from './componentss/Reward';

import {Switch, Link, Route} from 'react-router-dom'
class Front extends React.Component< any, any>{
    constructor (props:any)
    {
        super(props)
        this.state={
        }
        this.updateState = this.updateState.bind(this)
    }
    async updateState(state: any){
        this.setState(state)
        console.log("logging state", this.state)
    }
    public render = () => {
            return(
                <Switch>
                    <Route exact path="/">
                        <div>
                            <App updateState={this.updateState}/>
                        </div>
                    </Route>
                    <Route exact path="/wallets">
                        <Wallets state={this.state}/>
                    </Route>

                    <Route exact path="/Dashboard">
                        <Dashboard state={this.state}/>
                    </Route>

                    <Route exact path="/Profile">
                    <Profile state={this.state}/>
                   
                    </Route>
                    <Route exact path="/Stakes">
                  
                      <Stakes />
                    </Route>

                    <Route exact path="/Tree">
                        <Tree />
                    </Route>

                    <Route exact path="/TotalIncome">
                     <TotalIncome />
                    </Route>

                    
                    <Route exact path="/LevelIncome">
                
                      <LevelIncome />
                    </Route>

                    <Route exact path="/DirectIncome">
                        <DirectIncome />
                    </Route>

                    <Route exact path="/Reward">
                        <Reward />
                    </Route>


                </Switch>
            )
    }
}
export default Front