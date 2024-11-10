
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Home from "./components/home/Home"
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header';
import CarList from './components/carList/CarList';
import CarDetails from './components/car-details/CarDetails.jsx';
import CarCreate from './components/car-create/CarCreate';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import CarEdit from './components/car-edit/CarEdit.jsx';
import MyAccount from "./components/info-user/MyAccount.jsx";



function App() {


  return (
            <AuthProvider>
                <div id="box">
                  <Header />
                  <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                    {/* <Route path={Path.Assistants} element={<AssistantList />} /> */}
                    <Route path={Path.Cars} element={<CarList />} />
                    
                    <Route path={Path.CarDetails} element={<CarDetails />} />
                    <Route path={Path.Create} element={<CarCreate />} />
                    <Route path={Path.CarEdit} element={<CarEdit />} />
                    <Route path={Path.MyAccount} element={<MyAccount />} />
                    <Route path={Path.Logout} element={<Logout />} />
                  </Routes>


                  <Footer />
                </div>
            </AuthProvider>
  )
}

export default App

{/* <Route path="/cars/:carId" element={<CarDetails />} /> */}
