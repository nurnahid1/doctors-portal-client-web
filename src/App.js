import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './Pages/Dashbord/Dashbord';
import MyAppointments from './Pages/Dashbord/MyAppointments';
import MyReviews from './Pages/Dashbord/MyReviews';
import MyHistory from './Pages/Dashbord/MyHistory';
import Users from './Pages/Dashbord/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashbord/AddDoctor';
import ManageDoctors from './Pages/Dashbord/ManageDoctors';
import Payment from './Pages/Dashbord/Payment';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashbord' element={
          <RequireAuth>
            <Dashbord></Dashbord>
          </RequireAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={
          <RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
          <Route path='addDoctor' element={
          <RequireAdmin>
            <AddDoctor/>
          </RequireAdmin>}></Route>
          <Route path='manageDoctor' element={
          <RequireAdmin>
            <ManageDoctors/>
          </RequireAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
