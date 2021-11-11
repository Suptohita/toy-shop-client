import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch,Route, Link } from 'react-router-dom';
import AllProducts from './components/AllProducts/AllProducts';
import Purchase from './components/Purchase/Purchase';
import AboutUs from './components/AboutUs/AboutUs';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/DashBoard/MyOrders/MyOrders';
import GiveReview from './components/DashBoard/GiveReview/GiveReview';
import Pay from './components/DashBoard/Pay/Pay';


function App() {
  return (
    <div className="App">

       <AuthProvider>
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

             <PrivateRoute path='/purchase/:purchaseId'>
               <Purchase></Purchase>
             </PrivateRoute>

             <Route path='/about'>
               <AboutUs></AboutUs>
             </Route>

             <PrivateRoute path='/dashboard'>
               <DashBoard></DashBoard>
             </PrivateRoute>
             
             <PrivateRoute path='/dashboard/myOrders'>
               <MyOrders></MyOrders>
             </PrivateRoute>

             <PrivateRoute path='/dashboard/review'>
               <GiveReview></GiveReview>
             </PrivateRoute>

             <PrivateRoute path='/dashboard/pay'>
               <Pay></Pay>
             </PrivateRoute>


             <Route path='/login'>
               <Login></Login>
             </Route>

             <Route path='/register'>
               <Register></Register>
             </Route>

             <Route path='*'>
               <h1 className='text-danger m-5'>Page Not Found !!!</h1>
               <Link to='/home'><button className='btn btn-warning'>Back To Home</button></Link>
             </Route>
             
           </Switch>
         </Router>
       </AuthProvider>

    </div>
  );
}

export default App;
