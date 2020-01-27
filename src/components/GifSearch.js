import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        inputValue: ""
    }

    handleInput = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        // console.log(this.state.inputValue)
        return (
            <form onSubmit={ e => this.props.submit(e) }>
                <input type="text" name="inputValue" value={this.state.inputValue} onChange={ e => this.handleInput(e) }></input>
                <input type="submit" />
            </form>
        )
    }

}