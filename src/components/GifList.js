import React, { Component } from 'react'

export default class GifList extends Component {

    render() {
        return (
            <ul>
                {this.props.gifs.map( g => { return <li><img src={g.images.original.url} /></li> })}
            </ul>
        )
    }
}