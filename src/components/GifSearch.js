import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        inputValue: ""
    }

    // handleInput = (e) => {
    //     this.setState({
    //         inputValue: e.target.value
    //     })
    // }

    handleSubmit = e => {
        e.preventDefault()
        this.props.submit(this.state.inputValue)
    }

    render() {
        // console.log(this.state.inputValue)
        return (
            <form onSubmit={ this.handleSubmit }>
                <input type="text" name="inputValue" value={this.state.inputValue} onChange={ e => this.setState({ inputValue: e.target.value }) }></input>
                <input type="submit" />
            </form>
        )
    }

}