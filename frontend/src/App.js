import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookingScreen from './screens/BookingScreen';
import EditUserScreen from './screens/EditUserScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ServicesScreen from './screens/ServicesScreen';
import EyeGlassesScreens from './screens/EyeGlassesScreens';
import OphthalmologistsScreen from './screens/OphthalmologistsScreen';
import EarSpecialistsScreen from './screens/EarSpecialistsScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import FeedbackFormScreen from './screens/feedbackformScreen';
import ViewRepairmentDetails from './screens/ViewRepairmentDetails';
import UpdateRepairmentDetails from './screens/UpdateRepairmentDetails';


import AddDoctor from './screens/AddDoctor';
import AddRepairmentDetails from './screens/AddRepairmentDetails';
import AddCustomerDetails from './screens/AddCustomerDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RayBan from './components/RayBan';
import Che from './components/Che';
import Chanel from './components/Chanel';
import Tens from './components/Tens';
import RayBanModel from './components/RayBanModel';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import AddHearingAidsScreen from './screens/AddHearingAidsScreen';

import AddSpectacles from './screens/AddSpectacles';

import Doctor from './components/Doctor';

import ViewCustomerDetails from './screens/ViewCustomerDetails';
import AddDoctorAppointmentDetails from './screens/AddDoctorAppointmentDetails';

import ViewDoctorAppointmentDetails from './screens/ViewDoctorAppointmentDetails';
import UpdateCustomerDetails from './screens/UpdateCustomerDetails';

import ViewDoctorDetails from './screens/ViewDoctorDetails';


import CartScreen from './screens/CartScreen';
import ViewSpectaclesDetails from './screens/ViewSpectaclesDetails';

import ViewAllFeedback from './screens/ViewAllFeedback';


import viewfeedback from './screens/viewfeedback';
import UpdateDoctorDetails from './screens/UpdateDoctorDetails';




function App() {

  const DefaultLayout = ({ children }) => (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
  
  return (
    <div>

      <BrowserRouter>
      <Routes>
        {/* Routes inside DefaultLayout will have NavBar and Footer */}
        <Route
          element={<DefaultLayout><HomeScreen /></DefaultLayout>}
          path="/"
        />
          <Route path='/register' element={<DefaultLayout><RegisterScreen /></DefaultLayout>} />
          <Route path='/login' element={<DefaultLayout><LoginScreen /></DefaultLayout>} />
          <Route path='/profile' element={<DefaultLayout><ProfileScreen /></DefaultLayout>} />
          <Route path='/bookings' element={<DefaultLayout><BookingScreen /></DefaultLayout>} />
          <Route path='/editprofile/:userId' element={<DefaultLayout><EditUserScreen /></DefaultLayout>} />
          <Route path='/aboutus' element={<DefaultLayout><AboutUsScreen /></DefaultLayout>} />
          <Route path='/ophthalmologists/:type' element={<DefaultLayout><OphthalmologistsScreen /></DefaultLayout>} />
          <Route path='/EarSpecialistsScreen' element={<DefaultLayout><EarSpecialistsScreen /></DefaultLayout>} />
          <Route path='/services' element={<DefaultLayout><ServicesScreen /></DefaultLayout>} />
          <Route path='/eyeglasses' element={<DefaultLayout><EyeGlassesScreens /></DefaultLayout>} />
          <Route path='/rayban/:brand' element={<DefaultLayout><RayBan /></DefaultLayout>} />
          <Route path='/che/:brand' element={<DefaultLayout><Che /></DefaultLayout>} />
          <Route path='/chanel/:brand' element={<DefaultLayout><Chanel /></DefaultLayout>} />
          <Route path='/tens/:brand' element={<DefaultLayout><Tens /></DefaultLayout>} />
          <Route path='/:brand/:model' element={<DefaultLayout><RayBanModel /></DefaultLayout>} />
          <Route path='/addfeedback' element={<DefaultLayout><FeedbackScreen /></DefaultLayout>} />
          <Route path='/feedbackformScreen' element={<DefaultLayout><FeedbackFormScreen /></DefaultLayout>} />

          <Route path = "/:docID" element={<DefaultLayout>< Doctor/></DefaultLayout>} />

          <Route path='/cart' element={<DefaultLayout>< CartScreen/></DefaultLayout>} />
          <Route path='/viewallfeedback' element={<DefaultLayout>< ViewAllFeedback/></DefaultLayout>} />


        {/* AdminDashboardScreen without NavBar and Footer */}
        <Route path="/admindashboard" element={<AdminDashboardScreen />} />
        <Route path='/adddoctor' element={<AddDoctor />} />

        <Route path='/addrepairmentdetails' element={<AddRepairmentDetails />} />
        <Route path='/viewrepairmentdetails' element={<ViewRepairmentDetails />} />
        <Route path='/updaterepairmentdetails' element={<UpdateRepairmentDetails />} />

        <Route path='/addrepdetails' element={<AddRepairmentDetails />} />

        <Route path='/viewrepairmentdetails' element={<ViewRepairmentDetails />} />

        <Route path='/addcustomerdetails' element={<AddCustomerDetails />} />

        <Route path='/addspectacles' element={<AddSpectacles />} />
        <Route path='/viewcustomerdetails' element={<ViewCustomerDetails />} />
        <Route path='/addappointmentdetails' element={<AddDoctorAppointmentDetails />} />

        <Route path='/addhearingaidsscreen' element={<AddHearingAidsScreen />} />


        <Route path='/viewdoctorappointment' element={<ViewDoctorAppointmentDetails />} />
        
        <Route path='/editcustomerdetails/:userID' element={<UpdateCustomerDetails />} />

        <Route path='/viewdoctordetails' element={<ViewDoctorDetails />} />
        <Route path='/viewspectaclesdetails' element={<ViewSpectaclesDetails />} />


        

        <Route path='/updatedoctordetails/:docID' element={<UpdateDoctorDetails />} />




      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;