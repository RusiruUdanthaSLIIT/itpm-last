import React from 'react';
import CreatePackage from './components/Travel_Packages/AddTravelPackage';
import AllPackages from './components/Travel_Packages/TravelPackages';
import PackageBooking from './components/Travel_Packages/PackageBooking';
import PackageDetailsAdmin from './components/Travel_Packages/TravelPackageDetailsAdmin';
import PackageDetails from './components/Travel_Packages/TravelPackageDetails';
import AllPackagesAdmin from './components/Travel_Packages/TravelPackagesAdmin';
import EditPackage from './components/Travel_Packages/EditTravelPackage';
import DeletePackage from './components/Travel_Packages/DeleteTravelPackage'
import AllBooking from './components/Travel_Packages/BookingAllDetails';
import EditTPackage from './components/Travel_Packages/EditPackage2';
import PayForTP from './components/Payment/PayForTP';
import PaymentConfirm from './components/Payment/PaymentComplete';
import PaymentView from './components/Payment/PayView';
import PaymentDetails from  './components/Payment/PaymentDetails';
import EditPayment from './components/Payment/EditPayment';
import AllPayments from './components/Payment/AllPayments';
import HomePage from './components/Home/HomePage';
import AdminHome from  './components/Home/AdminHome';
import Add_Inquiry from "./components/Inquiry/Add_Inquiry";
import viewInquiry from "./components/Inquiry/View_Inquiry";
import editInquiry from "./components/Inquiry/Edit_Inquiry";
import userReg from "./components/User/User_Reg";
import Login from "./components/User/Login";
import ViewUser from "./components/User/View_user";
import Edituser from "./components/User/Edit_user";

import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <div >
      
      
      

   
     <Route path="/travelpackage/admin/add" exact component ={CreatePackage}></Route>
     <Route path="/travelpackages" exact component = {AllPackages}></Route>
     <Route path="/bookingpackage/:id" exact component = {PackageBooking}></Route>
     <Route path="/travelpackages/admin" exact component = {AllPackagesAdmin}></Route>
     <Route path="/travelpackage/admin/edit/:id" exact component ={EditPackage}></Route>
     <Route path="/travelpackage/admin/delete/:id" exact component = {DeletePackage}></Route>
     <Route path="/travelpackages/travelpackage/:id" exact component ={PackageDetails}></Route>
     <Route path="/travelpackages/travelpackage/admin/:id" exact component ={PackageDetailsAdmin}></Route>
     <Route path="/allbooking" exact component = {AllBooking}></Route>
     <Route path="/edittpackage/:id" component= {EditTPackage}></Route>
     <Route path="/payment/add-package/:id" exact component={PayForTP}/>
     <Route path="/confirm/payment/" exact component={PaymentConfirm}/>
     <Route path="/payment/view/" exact component={PaymentView}/>
     <Route path="/payment/details/:id" exact component={PaymentDetails}/>
     <Route path="/payment/edit/:id" exact component={EditPayment}/>
     <Route path="/payment/" exact component={AllPayments}/>
     <Route path ="/" exact component={HomePage}></Route>
    
     <Route path="/adminhome" exact component={AdminHome}/>
     <Route path="/addInquiry" exact component={Add_Inquiry}/>
     <Route path="/viewInquiry" exact component={viewInquiry}/>
     <Route path="/editInquiry/:id" exact component={editInquiry}/>  
      <Route path="/login" exact component={Login}/> 
      <Route path="/userreg" exact component={userReg}/>  
      <Route path="/Viewuser" exact component={ViewUser}/>  
      <Route path="/Edituser/:id" exact component={Edituser}/>  
       

</div>

</Router>
  );
}

export default App;
