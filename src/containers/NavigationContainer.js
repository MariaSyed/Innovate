import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './HomeContainer'
import Challenges from './ChallengesContainer'
import CreateChallengeForm from './CreateChallengeForm'

const Navigator = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/challenges" component={Challenges}/>
      <Route path="/post-challenge" component={CreateChallengeForm} />
    </div>
  </Router>
)

export default Navigator
