// 
import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Component/Bars/Navbar';
import HomeScreen from './Component/HomeScreen/HomeScreen';
import SmartPhone from './Component/CategoryPage/SmartPhone';
import Laptop_Tabs from './Component/CategoryPage/Laptop_Tabs';
import Furniture from './Component/CategoryPage/Furniture';
import Perfumes from './Component/CategoryPage/Perfumes';
import Clothes from './Component/CategoryPage/Clothes';
import SkinCare from './Component/CategoryPage/SkinCare';
import HomeDecor from './Component/CategoryPage/HomeDecor';
import ProductDetail from './Component/Product/ProductScreen/ProductDetail';
// import Signup from './Component/Page/Register';
// import Login from './Component/Page/Login';
// import firebase from 'firebase/compat/app';
import SignupModal from './Component/Page/SignModal';
import AddCart from './Component/Page/AddCart/AddCart';
import Payment from './Component/Page/Payment';


export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [showSignupModal, setShowSignupModal] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (you might have your own logic for this)
    const isLoggedIn = checkIfUserIsLoggedIn(); // Implement this function
    setUserLoggedIn(isLoggedIn);

    // Fetch data if the user is logged in
    if (isLoggedIn) {
      fetchData();
    } else {
      // Show signup modal if the user is not logged in
      setShowSignupModal(true);
    }
  }, []);

  // Function to check if the user is logged in (you can implement your own logic)
  const checkIfUserIsLoggedIn = () => {
    // Example logic: Check if there is a token in localStorage
    const token = localStorage.getItem('userData');
    console.log(token);
    return !!token; // Convert token to boolean
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3003/data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen data={data} />} />

        <Route path="/Checkout" element={<Payment/>} />
        <Route path="/Cart" element={<AddCart />} />
        <Route path="/SmartPhones" element={<SmartPhone />} />
        <Route path="/Laptops" element={<Laptop_Tabs />} />
        <Route path="/Furniture" element={<Furniture />} />
        <Route path="/Perfumes" element={<Perfumes />} />
        <Route path="/Clothes" element={<Clothes />} />
        <Route path="/SkinCare" element={<SkinCare />} />
        <Route path="/HomeAppliances" element={<HomeDecor />} />
        <Route path="/product/:id" element={<ProductDetail data={data} />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
        {/* Protected routes */}
        {userLoggedIn ? (
          <>
            {/* Your protected routes */}
          </>
        ) : null}
      </Routes>
      {showSignupModal && <SignupModal />}
    </div>
  );
}
