// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>IMS new project</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Home from "./components/home/Home"
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import CarCreate from './components/car-create/CarCreate';
import Footer from './components/footer/Footer.jsx';
import AssistantList from './components/assistantList/AssistantList';
import CarList from './components/carList/CarList';
import Header from './components/header/Header';
import CarDetails from './components/car-details/CarDetails';

function App() {


  return (
<AuthProvider>
<div id="box">
      <Header />
      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path={Path.Assistants} element={<AssistantList />} />
        <Route path={Path.Cars} element={<CarList />} />
        <Route path="/cars/:carId" element={<CarDetails />} />
        <Route path={Path.Logout} element={<Logout />} />
        <Route path={Path.Create} element={<CarCreate />} />

      </Routes>


      <Footer />
    </div>
</AuthProvider>
  )
}

export default App
