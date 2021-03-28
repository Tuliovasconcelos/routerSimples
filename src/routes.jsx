import React, { Component } from 'react'
import { Router, Route, Redirect, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'

export default props => (
    <HashRouter>
        <Route path="/home" component={Home}></Route>
        <Route path="/user" component={User}></Route>
        <Redirect from='*' to='/home'></Redirect>
    </HashRouter>
)