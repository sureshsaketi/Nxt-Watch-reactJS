import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'

import VideoItemDetails from './components/VideoItemDetails'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {activeTab: 'Home'}

  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={TrendingVideos} />
        <ProtectedRoute exact path="/gaming" component={GamingVideos} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
      </Switch>
    )
  }
}

export default App
