import React from 'react'
import App from "./App";
import './App.css';
import Stakes from './componentss/Stakes';
import Dashboard from './componentss/Dashboard';
import Wallets from './componentss/Wallets';
import Profile from './componentss/Profile';
import Status from './componentss/Status';
import Header from './componentss/Header';
import TotalIncome from './componentss/TotalIncome';
import LevelIncome from './componentss/LevelIncome';
import DirectIncome from './componentss/DirectIncome';
import Reward from './componentss/Reward';
import Tree from './componentss/Tree';
import Sidebar from './componentss/Sidebar'
import { Link, Switch, Route } from 'react-router-dom'
class Front extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
        }
        this.updateState = this.updateState.bind(this)
    }
    async updateState(state: any) {
        this.setState(state)
        console.log("logging state", this.state)
    }
    public render = () => {
        return (
            <div>
                
                <Switch>
                   
           
                    <Route exact path="/">
                        <App updateState={this.updateState} />
                    </Route>
                    <Route exact path="/Dashboard">
             
                    <Header />
                    <Dashboard appstate={this.state} />
                    </Route>

                    <Route exact path="/Profile">
                    <Header />
                        <Profile />
                    </Route>

                    <Route exact path="/Stakes">
                    <Header />
                        <Stakes />
                    </Route>

                    <Route exact path="/wallets">
                    <Header />
                      <Wallets />
                    </Route>

                    <Route exact path="/Tree">
                    <Header />
                      <Tree />
                    </Route>

                    <Route exact path="/Status">
                    <Header />
                      <Status/>
                    </Route>

                    <Route exact path="/TotalIncome">
                    <Header />
                      <TotalIncome />
                    </Route>

                    <Route exact path="/LevelIncome">
                    <Header />
                      <LevelIncome />
                    </Route>

                    <Route exact path="/DirectIncome">
                    <Header />
                      <DirectIncome />
                    </Route>

                    <Route exact path="/Reward">
                    <Header />
                      <Reward />
                    </Route>
                  
                

                </Switch>


            </div>
        )
    }
}
export default Front;