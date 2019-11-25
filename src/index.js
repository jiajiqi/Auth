import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import HomePage from './HomePage/homepage';
import Login from './pages/Login/login';
import Admin from './pages/Admin/admin';

class IndexPage extends React.Component{
    render(){
        return(
            <div>
               <BrowserRouter>
               <Switch>
               <Route path="/homepage" exact component={HomePage}></Route>
               <Route path="/auth/login"   component={Login}></Route>
               <Route path="/home"   component={HomePage}></Route>
               <Route path="/"   component={Admin}></Route>
               <Redirect to="/homepage"></Redirect> 
               </Switch>
               </BrowserRouter>
            </div>
        )
    }
}


ReactDOM.render(<IndexPage />, document.getElementById('root'));


serviceWorker.unregister();
