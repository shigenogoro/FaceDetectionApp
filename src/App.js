import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from './components/myParticles/Particles'
import './App.css';





class App extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    onInputChange = (events) => {
        console.log(events.target.value);
    }
    
    onButtonSubmit = (events) => {
        console.log('Click');
    }

    render() {
        return(
            <div>
                <Particles />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onButtonSubmit={this.onButtonSubmit}
                />
            </div>
        )
    }
}
export default App;

