import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginComponent from '../HomePage/LoginComponent';
import SiginComponent from '../HomePage/SigninComponent';
import AccountComponent from '../ProfilePage/AccountComponent';
import BankComponent from '../ProfilePage/BankComponent';
import CreateAccountComponent from '../ProfilePage/CreateAccountComponent';
import ProfileComponent from '../ProfilePage/ProfileComponent';


export  default function RoutingComponent() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='login' element={<LoginComponent></LoginComponent>}></Route>
        <Route path='signin' element={<SiginComponent></SiginComponent>}></Route>
        <Route path='bank' element={<BankComponent></BankComponent>}>
        <Route path='profile' element={<ProfileComponent></ProfileComponent>}></Route>
        <Route path='createaccount' element={<CreateAccountComponent></CreateAccountComponent>}></Route>
        <Route path='accounts' element={<AccountComponent></AccountComponent>}></Route>
        </Route>
        {/* Add more routes as needed */}
        
    </Routes>
    </BrowserRouter>
</div>
  );
  
}