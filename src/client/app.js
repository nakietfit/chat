import React, {Component} from 'react'
import Chat from './containers/Chat'
import './style.scss'
import ParseSDK from './helpers/parseSDK'

export default class App extends Component {
    render() {
        const currentUser = ParseSDK.User.current();
        
        return <Chat />
    }
}