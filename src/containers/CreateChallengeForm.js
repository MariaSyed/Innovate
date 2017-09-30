import React, { Component } from 'react'
import * as firebase from 'firebase'
import { Redirect } from 'react-router-dom'

import NavBar from '../components/NavBar'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import LinearProgress from 'material-ui/LinearProgress';

const items = [
  <MenuItem key={1} value={'health'} primaryText="Health" />,
  <MenuItem key={2} value={'technology'} primaryText="Technology" />,
  <MenuItem key={3} value={'education'} primaryText="Education" />,
  <MenuItem key={4} value={'skill'} primaryText="Skill" />,
]

const roles = [
  {
    id: 'catering',
    title: 'Catering',
    description: 'bla bl alb al'
  },
  {
    id: 'icebreaker',
    title: 'Ice-Breaker',
    description: 'bla bl alb al'
  },
  {
    id: 'speakers',
    title: 'Speakers',
    description: 'bla bl alb al'
  },
  {
    id: 'funding',
    title: 'Funding',
    description: 'bla bl alb al'
  },
  {
    id: 'marketting',
    title: 'Marketting',
    description: 'bla bl alb al'
  },
]

class CreateChallengeForm extends Component {
  state = {
    redirect: false,
    loading: false,
    title: '',
    description: '',
    category: null,
    roles: {
      catering: false,
      iceBreaker: false,
      speakers: false,
      funding: false,
      marketting: false
    }
  }

  handleCategoryChange = (event, index, value) => this.setState({ category: value })

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleOnSubmit() {
    this.setState({ loading: true })
    const filteredRoleIds = Object.keys(this.state.roles).reduce((p, c) => {
      if (this.state.roles[c]) p.push(c);
      return p;
    }, [])
    const filteredRoles = roles.filter((role) => filteredRoleIds.indexOf(role.id) > -1 )
    const newChallenge = {
      title: this.state.title,
      description: this.state.description,
      vacantRoles: filteredRoles,
      votes: 0,
      creator: 'mariauid',
    }
    const pushKey = firebase.database().ref('/challenges').push()
    pushKey.set(newChallenge).then(() => {
      this.setState({ loading: false, redirect: true })
    })
  }

  updateCheck(roleId) {
   this.setState((oldState) => {
     oldState.roles[roleId] = !oldState.roles[roleId]
     return oldState
   })
  }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/challenges'/>;
     }

    return (
      <div>
        <NavBar />
        <Paper style={{ width: '40%', marginLeft: 'auto', marginRight: 'auto', padding: 20, marginTop: 50 }}>
        {
          this.state.loading &&
          <LinearProgress mode="indeterminate"/>
        }
        <p style={{ fontFamily: 'Raleway', fontSize: 25, fontWeight: '500'}}>Create a Challenge</p>
        <TextField
          style={{ marginTop: 10, width: '60%' }}
          hintText="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        /><br />
        <TextField
          style={{ marginTop: 10, width: '60%' }}
          hintText="Description"
          multiLine={true}
          rows={5}
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        /><br />
        <SelectField
          style={{ marginTop: 10, width: '60%' }}
          value={this.state.category}
          onChange={this.handleCategoryChange.bind(this)}
          floatingLabelText="Pick Category"
        >
          {items}
        </SelectField>
        <p>Select roles needed</p>
        {
          Object.values(roles).map((role, index) => (
            <Checkbox
              key={index}
              style={{ marginBottom: 10 }}
              label={role.title + ' - ' + role.description}
              checked={this.state.roles[role.id]}
              onCheck={() => this.updateCheck(role.id)}
            />
          ))
        }
        <RaisedButton style={{ marginTop: 20 }} disabled={this.state.loading} label="Submit" primary={true} onClick={this.handleOnSubmit.bind(this)}/>
        </Paper>
      </div>
    )
  }
}

export default CreateChallengeForm
