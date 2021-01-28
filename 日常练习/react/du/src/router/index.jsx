import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import App from '../App'
import Table from '../pages/table'

export default class FBHRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route exact path='/' component={App}></Route>
                <Route path='/table' component={Table}></Route>
            </HashRouter>
        )
    }
}
