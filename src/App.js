import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch,Route, Link } from 'react-router-dom';
import AllProducts from './components/AllProducts/AllProducts';
import Purchase from './components/Purchase/Purchase';
import About from './components/Home/About/About';
import AboutUs from './components/AboutUs/AboutUs';
import DashBoard from './components/DashBoard/DashBoard';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path='/'>
             <Home></Home>
           </Route>
           <Route path='/home'>
             <Home></Home>
           </Route>
           <Route path='/allProducts'>
             <AllProducts></AllProducts>
           </Route>
           <Route path='/purchase'>
             <Purchase></Purchase>
           </Route>
           <Route path='/about'>
             <AboutUs></AboutUs>
           </Route>
           <Route path='/dashboard'>
             <DashBoard></DashBoard>
           </Route>
           <Route path='/login'>
             <Login></Login>
           </Route>
           <Route path='*'>
             <h1 className='text-danger m-5'>Page Not Found !!!</h1>
             <Link to='/home'><button className='btn btn-warning'>Back To Home</button></Link>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
