import React, { Component } from 'react'

export default class Box extends Component {
    render() {
        return (
            <div>
                <span>我里面有啥：</span>
                <br />
                {this.props.children}
            </div>
        )
    }
}
