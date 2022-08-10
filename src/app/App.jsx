import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Contacts from './components/Contacts'
import Home from './components/Home'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import Posts from './components/Posts'
import SingIn from './components/SingIn'
import SomePost from './components/SomePost'

const App = () => {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/singin' component={SingIn} />
        <Redirect from='/lk' to='singin' />
        <Route path='/posts/some-post' component={SomePost} />
        <Route path='/posts/:postID?' component={Posts} />
        <Route path='/contacts' component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
