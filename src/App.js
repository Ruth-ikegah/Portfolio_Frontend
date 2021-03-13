import React from 'react'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Layout from './containers/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Detailed from './pages/Detailed'
import Home from './pages/Home'
import Speaking from './pages/Speaking'
import Work from './pages/Work'
import './App.css'
import ScrollRestore from './components/ScrollRestore'
const App = () => {
  return (
  <>
  <Router>
<Layout>
<ScrollRestore/>
<Switch>

<Route path="/" component={Home} exact/>
<Route path="/contact" component={Contact} exact/>
<Route path="/speaking" component={Speaking} exact/>
<Route path="/work" component={Work} exact/>
<Route path="/about" component={About} exact/>
<Route path="/speaking/:slug" component={Detailed} exact/>
<Route path="/work/slug" component={Detailed} exact/>
</Switch>


</Layout>
  </Router>
  </>
  )
}

export default App
