import React, { Component } from 'react';
import './Styles/Quote.css';

const inputStyle = {
    width: 235,
    margin: 5,
    textTransform: "capitalize",
    backgroundColor: "black",
    padding: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
};

const Styles = {
    textTransform: "capitalize",
    border: "none",

}
class Testing6 extends Component {
    constructor(props) {
        super(props);
        this.quotes = [
            'Never worry too much, no be only you de alive',
            'chase your dreams, but make sure you de chop and sleep well',
            'if your hustle no de pay you, find new hustle',
            'the hustle too much weh de kill person, no de worth am',
            'no go spoil your mind because of money e fit make you commit crime',
            'yahoo no be hustle',
            'if crocodile no de smile, e no mean say e no go chop person',
            'no food sweet pass your mama food',
            'no need to run after fly with helicopter',
            'no bone too hard for mortar, no flesh too tough for knife',
            'person weh no sabi wetin go bite am de run from ant',
            'one tree no fit make forest',
            'no throw stone for market if you de sell glass',
            'man weh de inside house no de get cold',
            'sharp mouth no fit cook soup',
            'eyes no get wall ask your brother who talk am',
            'tomorrow no too far, de whine yourself',
            'no gree for anybody no mean say we no go beat you if you fuck up',
            'long hand fit enter pot, but e no fit carry all the soup',
            'no put hand for pot weh de hot',
            'person weh de sleep no de know wetin happen for night',
            'no use hand de count another person money'
        ];
        this.state = {
            randomText: ''
        };
        this.Randomquotes = this.Randomquotes.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    Randomquotes() {
             const randomIndex = Math.floor(Math.random() * this.quotes.length);
            this.setState({
            randomText: this.quotes[randomIndex]
            });
        }

componentDidMount() {
    this.Randomquotes();
}


    render() {

        const Button = ['change quote'];
        return (
            <div className='main' style={inputStyle}>
                <h1 className='header'>pidgin gospel</h1>
                <br/>
                <button id='btn' onClick={this.Randomquotes}>{Button}</button>
                <br/>
                <p id='text'>{this.state.randomText}</p>
                <p id='txt'>oknown</p>
            </div>
        );
    }
}

export default Testing6;