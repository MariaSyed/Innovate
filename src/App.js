import React, { Component } from 'react';
import * as firebase from 'firebase'

class App extends Component {
  state = {
    challenges: {}
  }

  componentWillMount() {
  }

  componentDidMount() {
    console.log('component Did mount!')
    firebase.database().ref('/challenges').on('value', (snapshot) => {
      console.log('recieved snapshot!')
      const challenges = snapshot.val()
      this.setState({ challenges: challenges })
    })
  }

  render() {
    return (
      <div>{
        Object.values(this.state.challenges).map((challenge) => (
          <li>{challenge}</li>
        ))
      }</div>
    )
  }
}

export default App;
