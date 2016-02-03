import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import '~/app/assets/styles/app'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </div>
      </div>
    )
  }
}
render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>

        </Route>
    </Router>
), document.getElementById('app'));
