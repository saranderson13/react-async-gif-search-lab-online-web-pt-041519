import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: [],
        query: ""
    }

    submitHandler = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=tOyYDK5hDiJvVwv2ROG8QuEF65B4wz6X&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    gifs: data.data
                })
            })
    }

    render() {
        return (
            <div id="container">
                 <GifSearch submit={e => this.submitHandler(e)}/>
                 <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    // componentDidMount() {
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=tOyYDK5hDiJvVwv2ROG8QuEF65B4wz6X&rating=g&limit=3`)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             this.setState({
    //                 gifs: data.data
    //             })
    //         })
    // }

}

export default GifListContainer