import React, {Component} from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Chat from './containers/Chat'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import './style.scss'

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Chat} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={LogIn} />
                </Switch>
            </HashRouter>
        )
    }
}