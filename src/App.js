import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import VideoItemDetails from './components/VideoItemDetails'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {activeTab: 'Home', isDarkTheme: false, savedVideos: []}

  componentDidMount() {
    // this.setThemeInLocalStorage()
    this.getThemeFromLocalStorage()
  }

  getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('isDarkTheme')
    this.setState({isDarkTheme: JSON.parse(theme)})
  }

  //   setThemeInLocalStorage = () => {
  //     const {isDarkTheme} = this.state
  //     const theme = JSON.stringify(isDarkTheme)
  //     localStorage.setItem('isDarkTheme', theme)
  //   }

  toggleTheme = () => {
    const theme = localStorage.getItem('isDarkTheme')
    if (theme === null) {
      localStorage.setItem('isDarkTheme', JSON.stringify(false))
    }
    localStorage.setItem('isDarkTheme', JSON.stringify(!JSON.parse(theme)))
    this.setState({isDarkTheme: !JSON.parse(theme)})
  }

  changeTab = tabName => {
    this.setState({activeTab: tabName})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {activeTab, isDarkTheme, savedVideos} = this.state
    console.log(isDarkTheme)
    return (
      <ThemeAndVideoContext.Provider
        value={{
          activeTab,
          isDarkTheme,
          savedVideos,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
