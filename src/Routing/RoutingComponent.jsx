import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginComponent from '../HomePage/LoginComponent';
import SiginComponent from '../HomePage/SigninComponent';


export  default function RoutingComponent() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='login' element={<LoginComponent></LoginComponent>}></Route>
        <Route path='signin' element={<SiginComponent></SiginComponent>}></Route>
        {/* Add more routes as needed */}
        
    </Routes>
    </BrowserRouter>
</div>
  );
  
}