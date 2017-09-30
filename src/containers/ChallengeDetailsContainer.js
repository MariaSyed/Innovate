import React, { Component } from 'react'
import * as firebase from 'firebase'
import NavBar from '../components/NavBar'
import { Grid, Row, Col, Popover, Overlay, OverlayTrigger, ButtonToolbar } from 'react-bootstrap'
import JoinStakeholderDialog from '../components/JoinStakeholderDialog'
import bStyles from '../styles/ChallengesContainerStyles'

// this.props.match.params.id is the push key from firebase
const stakeholders = [
  {
    id: '0001',
    name: 'Tery Mccginnis',
    comment: 'I belive in science',
    facebook: 'www.facebook.com/wix',
    twitter: 'www.twitter.com/wix'
  },
  {
    id: '0002',
    name: 'Tery Mccginnis',
    comment: 'I belive in science too',
    facebook: 'www.facebook.com/wix',
    twitter: 'www.twitter.com/wix'
  }
]

const popover = (
  <Popover id="popover-trigger-hover-focus" title="Popover bottom">
    <div className='container-fluid'>
    <strong>Holy guacamole!</strong> Check this info.
    </div>
  </Popover>
)

class ChallengeDetailsContainer extends Component {
  state = {
    challenge: {},
    show: null,
    openDialog: false
  }

  componentWillMount() {
    firebase.database().ref('/challenges/' + this.props.match.params.id).on('value', (snapshot) => {
      const challenge = snapshot.val()
      this.setState({ challenge })
    })
  }

  handleOnVote = (pushKey, votes) => {
    firebase.database().ref('/challenges/' + pushKey + '/votes').set(votes + 1)
  }

  handleClick = e => {
    console.log('clicked! ', e.target.id)
    this.setState({ target: e.target, show: e.target.id });
  }

  handleOpenDialog = () => {
    console.log('open dialog')
    this.setState({ openDialog: true })
  }

  render() {
    const { challenge } = this.state
    return (
      <div>
        <NavBar />
        <JoinStakeholderDialog
          open={this.state.openDialog}
          handleClose={() => this.setState({ openDialog: false })}
          pushKey={this.props.match.params.id}
        />
        <Grid style={{ width: '99%'}}>
          <Row className="show-grid">
            <Col md={6} style={styles.titleContainer}>
              <strong><p style={styles.titleText}>{challenge.title}</p></strong>
            </Col>
            <Col md={6} style={{ backgroundColor: '#5e636d' }}>
                <div style={{ height: '80vh' }}>
                  <p style={styles.descriptionText}>{challenge.description}</p>
                  <div style={{ position: 'relative', bottom: 0, textAlign: 'center', marginTop: 40, marginLeft: 'auto', marginRight: 'auto'}}>
                    <button style={bStyles.button}>Organise</button>
                    <button style={bStyles.button} onClick={() => this.handleOnVote(this.props.match.params.id, challenge.votes)}>
                      <i className="material-icons" style={{ fontSize: 16 }}>thumb_up</i> ( {challenge.votes} )
                    </button>
                    <button style={bStyles.dButton}>Participate</button>
                    <button style={bStyles.dButton}>Mentor</button>
                  </div>
                </div>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={4} style={{ backgroundColor: 'black' }}>
              <div>
                <p style={styles.bottomTitle}>STAKEHOLDERS</p>
                {
                  challenge.stakeholders
                    ?
                      Object.values(challenge.stakeholders).map((stakeholder) => (
                        <div>
                          <p id={stakeholder.id} style={{ fontFamily: 'Avenir', fontSize: 20,color: 'white', textAlign: 'center' }}>
                            <i id={stakeholder.id} style={{ fontSize: 40, color: 'white', paddingRight: 20 }} className="material-icons">account_circle</i>
                            {stakeholder.name}
                            {
                              stakeholder.facebook &&
                              <a href={stakeholder.facebook} target="_blank">
                                <img src='https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png' height="25" width="25" style={{ marginLeft: 20 }}/>
                              </a>
                            }
                          </p>
                          <p style={{ fontFamily: 'Avenir', fontStyle: 'italic', fontSize: 17, color: 'white', textAlign: 'center'}}>{stakeholder.comments}</p>
                        </div>
                      ))

                    : <p style={{ fontFamily: 'Avenir', fontSize: 20,color: 'white', textAlign: 'center' }}>None yet :( Join!</p>
                }
                <div style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
                  <button onClick={() => this.handleOpenDialog()} style={styles.stakeholderButton}>Join as a stakeholder</button>
                </div>
              </div>
            </Col>
            <Col md={4} style={{ backgroundColor: '#5e636d' }}>
              <div>
                <p style={styles.bottomTitle}>SECTOR</p>
                <div style={{ width: 100, marginLeft:'auto', marginRight: 'auto'}} >
                  <i style={{ textAlign: 'center', fontSize: 100, color: 'rgb(156,208,202)' }} className="material-icons">lightbulb_outline</i>
                </div>
                <p style={{ fontSize: 30, fontFamily: 'Avenir', letterSpacing: 5, textAlign: 'center', color: 'white'}}>{challenge.category && challenge.category.toUpperCase()}</p>
              </div>
            </Col>
            <Col md={4} style={{ backgroundColor: '#38c098' }}>
              <div>
                <p style={styles.tellUsTitle}>TELL US</p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }
}

const styles = {
  titleContainer: {
    backgroundColor: '#91dcc1',
    width: '100%',
    paddingTop: 80,
    paddingRight: 50
  },
  titleText: {
    color: '#4987c6',
    fontWeight:'800',
    fontSize: 80,
    marginRight: 50,
    fontFamily: 'Helvetica',
    letterSpacing: 6,
    textAlign: 'right'
  },
  descriptionText: {
    color: 'white',
    fontStyle: 'italic',
    fontFamily: 'Avenir',
    fontWeight: '300',
    width: '50%',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: 180,
    lineHeight: 1.5,
    fontSize: 17
  },
  bottomTitle: {
    textAlign: 'center',
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: '900',
    fontFamily: 'Avenir',
    color: '#38c098'
  },
  tellUsTitle: {
    textAlign: 'center',
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: '900',
    fontFamily: 'Avenir',
    color: 'black'
  },
  stakeholderButton: {
    fontSize: 18,
    backgroundColor: '#38c098',
    textDecoration: 'none',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    color: 'white',
    fontFamily: 'Avenir',
    border:'1px solid transparent',
    cursor: 'pointer',
    marginTop: 20,
    fontSize: 18,
    marginBottom: 20
  }
}

export default ChallengeDetailsContainer
