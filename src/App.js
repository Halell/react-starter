import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './assets/styles/main.scss'

import Header from './cmps/header'
import MainPage from './views/main-page'
import XXXEdit from './views/xxx-edit'
//login ?
//about

// import { XXXDetails } from './views/XXXDetails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className='container'>
          <Routes>
            {/* <Route path="/xxx/edit/:id?" component={ XXXEdit } /> */ }
            <Route path="/" element={ <MainPage /> } />
          </Routes>
        </main>
        {/* <footer>
          <section className='container'>
            xxxRights 2022 &copy;
          </section>
        </footer> */}
      </div>
    </Router>
  )

}

export default App
