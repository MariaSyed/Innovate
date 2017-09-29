import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div style={styles.titleContainer}>
        <p style={styles.title}>INNOV8</p>
      </div>
      <div style={styles.linksContainer}>
        <Link to='/' style={styles.link}>Home</Link>
        <Link to='/challenges' style={styles.link}>Challenges</Link>
        <Link to='/post-challenge' style={styles.link}>Post Your Challenge</Link>
      </div>
    </div>
  )
}

const styles = {
  titleContainer: {
    textAlign: 'center'
  },
  title: {
    fontSize: 30,
    fontFamily: 'Raleway',
    fontWeight: '800',
    color: '#42484f'
  },
  linksContainer: {
    backgroundColor: '#42484f',
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center'
  },
  link: {
    color: 'white',
    paddingLeft: 10,
    textAlign: 'center',
    fontFamily: 'Raleway',
    textDecoration: 'none'
  }
}

export default NavBar
