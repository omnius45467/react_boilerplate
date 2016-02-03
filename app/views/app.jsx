import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import '~/app/assets/styles/app'
import Nav from './components/nav'
import Content from './components/content'
import Footer from './components/footer'

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <Nav/>
                <Content/>
                { children }
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
