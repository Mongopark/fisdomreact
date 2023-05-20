import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
import Nav from './components/Nav'
import Personal from './components/Personal'
import Choose from './components/Choose'
import Take from './components/Take'
import Building from './components/Building'
import World from './components/World'
import Let from './components/Let'
import Trusted from './components/Trusted'
import Happy from './components/Happy'
import Every from './components/Every'
import Featured from './components/Featured'
import Fisdomcart from './components/Fisdomcart'
import Footer from './components/Footer'
import Nopage from './components/Nopage'




function App() {
  return (
    <Router>
    <div>
    {/* <Header title={"i got ops"}/> */}
    <Nav />

    <Routes>
    <Route path="/" exact element={
<>
    <Personal />
    <Choose />
    <Take />
    <Building />
    <World />
    <Let />
    <Trusted />
    <Happy />
    <Every />
    <Featured />
    <Fisdomcart/>
    <Footer/>
</>
    } />
    <Route path="/about" element={
<>
      <Take />
      <Building />
      <Fisdomcart/>
    <Footer/>
</>
  } />
<Route path="/partners" element={
<>
      <Trusted/>
      <Featured/>
      <Fisdomcart/>
    <Footer/>
</>
  } />
<Route path="/instructors" element={
<>
      <World/>
      <Every/>
      <Fisdomcart/>
    <Footer/>
</>
  } />
  <Route path="*" element={<Nopage/>} />
    </Routes>
 
    
    
      </div>
     </Router>
  );
}


export default App;