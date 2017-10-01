import React from 'react'
import NavBar from '../components/NavBar'
import { Grid, Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div style={styles.carouselDiv}>
        <div style={styles.centeredDiv}>
          <p style={styles.subheading}>Innovation Space for You</p>
          <p style={styles.mainHeading}>INNOV8</p>
        </div>
      </div>

      <div>
        <Grid style={styles.grid}>
          <Row>
            <Col md={6} style={styles.leftGrid}>
              <p style={styles.leftText}>Organise.</p>
              <p style={styles.leftText}>Mentor.</p>
              <p style={styles.leftText}>Solve.</p>
            </Col>
            <Col md={6} style={styles.rightGrid}>
              <p style={styles.rightTop}>WHAT?</p>
              <p style={styles.rightText}>Find a challenge</p>
              <p style={styles.rightText}>Organise a hackathon</p>
              <p style={styles.rightText}>Book a space</p>
              <p style={styles.rightText}>Mentor it!</p>
              <div style={styles.rightButtonContainer}>
                <button style={styles.rightButton}>LEARN MORE</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} style={{ paddingTop: 100, height: '65vh', backgroundColor: '#000' }}>
              <p style={styles.phaseTitle}>PHASE 1</p>
              <p style={styles.phaseSubTitle}>Create a Challenge</p>
            </Col>
            <Col md={4} style={{ paddingTop: 100, height: '65vh', backgroundColor: '#5e636a' }}>
              <p style={styles.phaseTitle}>PHASE 2</p>
              <p style={styles.phaseSubTitle}>Organize a Hackathon</p>
            </Col>
            <Col md={4} style={{ paddingTop: 100, height: '65vh', backgroundColor: 'white' }}>
              <p style={Object.assign({},styles.phaseTitle, { color: 'black'})}>PHASE 3</p>
              <p style={Object.assign({},styles.phaseSubTitle, { color: 'black'})}>Implement your Solution</p>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  )
}

const styles = {
  carouselDiv: {
    width: '100%',
    height: '70vh',
    backgroundColor: '#38c098',
    paddingTop: '20vh'
  },
  centeredDiv: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 80,
    paddingBottom: 70,
    backgroundColor: 'white',
    textAlign: 'center',
    fontFamily: 'Avenir',
  },
  mainHeading: {
    fontSize: 80,
    fontWeight: '500',
    color: '#43484f',
    margin: 0,
    marginTop: 20
  },
  subheading: {
    fontSize: 30,
    color: '#43484f',
    margin: 0
  },
  grid: {
    width: '98vw'
  },
  leftText: {
    fontSize: 80,
    fontFamily: 'Avenir',
    color: 'black',
    margin: 0,
    fontWeight: '700',
    textAlign: 'right',
  },
  leftGrid: {
    height: 600,
    backgroundColor: '#f9f907',
    paddingTop: 100,
    paddingRight: 100
  },
  rightGrid: {
    height: 600,
    backgroundColor: 'black'
  },
  rightTop: {
    color: 'white',
    fontSize: 60,
    letterSpacing: 10,
    fontWeight: '900',
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
  rightText: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 10
  },
  rightButton: {
    textDecoration: 'none',
    border:'1px solid transparent',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 16,
    cursor: 'pointer'
  },
  rightButtonContainer: {
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 180
  },
  phaseTitle: {
    fontFamily: 'Avenir',
    letterSpacing: 8,
    fontSize: 50,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  },
  phaseSubTitle: {
    fontFamily: 'Avenir',
    fontSize: 25,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center'
  },
  phaseButton: {
    textDecoration: 'none',
    border:'1px solid transparent',
    boxRadius: 25
  }
}

export default Home
