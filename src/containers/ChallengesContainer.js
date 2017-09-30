import React, {Component} from 'react'
import * as firebase from 'firebase'
import NavBar from '../components/NavBar'
import styles from '../styles/ChallengesContainerStyles'

class About extends Component {
  state = {
    challenges: []
  }

  componentDidMount() {
    firebase.database().ref('/challenges').on('value', (snapshot) => {
      const challenges = snapshot.val()
      this.setState({ challenges: Object.values(challenges)})
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1 style={styles.title}>CHALLENGES</h1>
        {
          this.state.challenges.map((challenge, i) => (
            <div style={{ border: '10px solid blue' }} key={i}>
              <p>{challenge.title}</p>
              <p>{challenge.description}</p>
              <p>Reserved roles</p>
              {
                challenge.reservedRoles &&
                Object.values(challenge.reservedRoles).map((role) => (
                  <div key={role.id}>
                    <p>{role.title}</p>
                    <p>{role.description}</p>
                    <p>Reserved by: {role.organiser.displayName}</p>
                  </div>
                ))
              }
              <p>Vacant Roles</p>
              {
                challenge.vacantRoles &&
                Object.values(challenge.vacantRoles).map((role) => (
                  <div key={role.id}>
                    <p>{role.title}</p>
                    <p>{role.description}</p>
                  </div>
                ))
              }
              <p>{challenge.category}</p>
              <p>{challenge.votes}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default About
