import React, { Component } from 'react';
import * as firebase from 'firebase'
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    )
  }
}

export default App;
