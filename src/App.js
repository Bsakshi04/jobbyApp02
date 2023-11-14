import {Route, Switch, Redirect} from 'react-router-dom'
import loginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import AboutJobItem from './components/AboutJobItem'
import AllJobs from './components/AllJobs'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" components={LoginForm} />
    <ProtectedRoute exact path="/" components={Home} />
    <ProtectedRoute exact path="/jobs" components={AllJobs} />
    <ProtectedRoute exact path="/jobs/:" components={AboutJobItem} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
