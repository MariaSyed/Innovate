import React, { Component } from 'react'
import * as firebase from 'firebase'
import NavBar from '../components/NavBar'
import { Grid, Row, Col, Popover, Overlay, OverlayTrigger, ButtonToolbar } from 'react-bootstrap'

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
    show: null
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

  render() {
    const { challenge } = this.state
    return (
      <div>
        <NavBar />
        <Grid style={{ width: '99%'}}>
          <Row className="show-grid">
            <Col md={6} style={styles.titleContainer}>
              <strong><p style={styles.titleText}>{challenge.title}</p></strong>
            </Col>
            <Col md={6} style={{ backgroundColor: '#5e636d' }}>
                <div style={{ height: '80vh' }}>
                  <p style={styles.descriptionText}>{challenge.description}</p>
                  <div style={{ position: 'relative', bottom: 0, textAlign: 'center', marginTop: 40, marginLeft: 'auto', marginRight: 'auto'}}>
                    <button style={styles.button}>Organise</button>
                    <button style={styles.button} onClick={() => this.handleOnVote(this.props.match.params.id, challenge.votes)}><i class="material-icons">thumb_up</i> ( {challenge.votes} ) </button>
                    <button style={styles.button}>Participate</button>
                    <button style={styles.button}>Mentor</button>
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
                      challenge.stakeholders.map((stakeholder) => (
                        <div>
                          <p id={stakeholder.id} style={{ fontFamily: 'Avenir', fontSize: 20,color: 'white', textAlign: 'center' }}>
                            <i id={stakeholder.id} style={{ fontSize: 40, color: 'white', paddingRight: 20 }} class="material-icons">account_circle</i>
                            {stakeholder.name}
                          </p>
                          <p style={{ fontFamily: 'Avenir', fontStyle: 'italic', fontSize: 17, color: 'white', textAlign: 'center'}}>{stakeholder.comment}</p>
                        </div>
                      ))

                    : <p style={{ fontFamily: 'Avenir', fontSize: 20,color: 'white', textAlign: 'center' }}>None yet :( Join!</p>
                }
              </div>
            </Col>
            <Col md={4} style={{ backgroundColor: '#5e636d' }}>
              <div>
                <p style={styles.bottomTitle}>SECTOR</p>
                <div style={{ width: 100, marginLeft:'auto', marginRight: 'auto'}} >
                  <i style={{ textAlign: 'center', fontSize: 100, color: 'rgb(156,208,202)' }} class="material-icons">lightbulb_outline</i>
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
  button: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 10,
    borderRadius: 28,
    fontSize: 18,
    textDecoration: 'none',
    border:'1px solid transparent',
    backgroundColor: '#38c098',
    color: 'white',
    fontFamily: 'Raleway',
    cursor: 'pointer'
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
  }
}

export default ChallengeDetailsContainer
