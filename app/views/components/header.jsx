import React from 'react'
import Nav from './nav'

export default class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Nav/>
            </div>
        )
    }
}