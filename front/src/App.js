import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './components/Index'

function App() {
  return (
    <Router>
      {/* <Header>
      </Header> */}
      <main className='py-3'>
        <Route path='/' component={Index} exact />
      </main>
      {/* <Footer>
      </Footer> */}
    </Router>
  );
}
export default App;

