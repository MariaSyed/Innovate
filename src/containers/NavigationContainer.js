import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './HomeContainer'
import Challenges from './ChallengesContainer'
import CreateChallengeForm from './CreateChallengeForm'
import ChallengeDetails from './ChallengeDetailsContainer'

const Navigator = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/challenges" component={Challenges}/>
      <Route path="/post-challenge" component={CreateChallengeForm} />
      <Route path="/challenge/:id" component={ChallengeDetails} />
    </div>
  </Router>
)

export default Navigator
