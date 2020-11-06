import './App.css';
import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'

const app = new Clarifai.App({
  apiKey: 'e7ca315d8799496bb20a8fe7a4a0f386'
});

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1000,
      }
    }
  }
}

// 

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      celebrity: '',
      // route: 'signin',
      // isSignedIn: 'false',
    };
  }

  findCelebrity = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].data.concepts[0].name;
    // const image = document.getElementById('inputimage');
    return clarifaiFace;
  }

  displayCelebrity = (celebrity) => {
    this.setState({celebrity:celebrity})
    console.log(celebrity);
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
      app.models
        .predict(
          Clarifai.CELEBRITY_MODEL,
          this.state.input)
        .then(response => this.displayCelebrity(this.findCelebrity(response)))
    }

  // onRouteChange = (route) => {
  //   if (route === 'signout') {
  //     this.setState({isSignedIn: false})
  //   }else if (route === 'home'){
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route: route});
  // }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
                  params={particlesOptions}
       />
        {/* <Navigation/> */}
        <Logo />
        {/* <Rank/> */}
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} celebrity={this.state.celebrity}/> 
      </div>
    );
}
}
export default App;
