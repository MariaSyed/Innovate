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
  <MenuItem key={3} value={'ed-tech'} primaryText="Ed-Tech" />,
  <MenuItem key={4} value={'art'} primaryText="Art" />,
  <MenuItem key={4} value={'environment'} primaryText="Environment" />,
  <MenuItem key={4} value={'social'} primaryText="Social" />,
  <MenuItem key={4} value={'other'} primaryText="Other" />,
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
    name: '',
    email: '',
    title: '',
    description: '',
    category: null
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

  handleTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit() {
    this.setState({ loading: true })
    // const filteredRoleIds = Object.keys(this.state.roles).reduce((p, c) => {
    //   if (this.state.roles[c]) p.push(c);
    //   return p;
    // }, [])
    // const filteredRoles = roles.filter((role) => filteredRoleIds.indexOf(role.id) > -1 )
    console.log('this is state', this.state)
    const newChallenge = {
      creator: this.state.name,
      email: this.state.email,
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      votes: 0,
    }
    const pushKey = firebase.database().ref('/challenges').push()
    pushKey.set(newChallenge).then(() => {
      this.setState({ loading: false, redirect: true })
    })
  }

  // updateCheck(roleId) {
  //  this.setState((oldState) => {
  //    oldState.roles[roleId] = !oldState.roles[roleId]
  //    return oldState
  //  })
  // }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/challenges'/>;
     }

    return (
      <div>
        <NavBar title='Post your challenge'/>
        <Paper style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', padding: 20, marginTop: 50 }}>
        {
          this.state.loading &&
          <LinearProgress mode="indeterminate"/>
        }
        {/* <p style={{ fontFamily: 'Raleway', fontSize: 25, fontWeight: '500'}}>Create a Challenge</p> */}
        <TextField
          style={{ marginTop: 10, width: '60%' }}
          hintText="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleTextChange}
        /><br />
        <TextField
          style={{ marginTop: 10, width: '60%' }}
          hintText="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleTextChange}
        /><br />
        <TextField
          style={{ marginTop: 10, width: '60%' }}
          hintText="Title"
          name="title"
          value={this.state.title}
          onChange={this.handleTextChange}
        /><br />
        <TextField
          style={{ marginTop: 10, width: '60%' }}
          hintText="Description"
          name="description"
          multiLine={true}
          rows={5}
          value={this.state.description}
          onChange={this.handleTextChange}
        /><br />
        <SelectField
          style={{ marginTop: 10, width: '60%' }}
          value={this.state.category}
          onChange={this.handleCategoryChange.bind(this)}
          floatingLabelText="Pick Category"
        >
          {items}
        </SelectField>
        <br />
        {/* {
          Object.values(roles).map((role, index) => (
            <Checkbox
              key={index}
              style={{ marginBottom: 10 }}
              label={role.title + ' - ' + role.description}
              checked={this.state.roles[role.id]}
              onCheck={() => this.updateCheck(role.id)}
            />
          ))
        } */}
        <RaisedButton style={{ marginTop: 20 }} disabled={this.state.loading} label="Submit" primary={true} onClick={this.handleOnSubmit.bind(this)}/>
        </Paper>
      </div>
    )
  }
}

export default CreateChallengeForm
