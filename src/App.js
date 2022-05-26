import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs';
import AddProduct from './pages/Dashboard/AddProduct';
import AllUser from './pages/Dashboard/AllUser';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProduct from './pages/Dashboard/ManageProduct';
import MyOrder from './pages/Dashboard/MyOrder';
import MyProfile from './pages/Dashboard/MyProfile';
import MyReview from './pages/Dashboard/MyReview';
import Payment from './pages/Dashboard/Payment';
import UpdateProfile from './pages/Dashboard/UpdateProfile';
import Home from './pages/Home/Home';
import Navbar from './pages/Home/Navbar/Navbar';
import Purchase from './pages/Home/ProductsSection/Purchase';
import ShowAllProduct from './pages/Home/ProductsSection/ShowAllProduct';
import AllReviews from './pages/Home/ReviewSection./AllReviews';
import ForgotPassword from './pages/Login/ForgotPassword';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import NotFound from './pages/NotFound/NotFound';
import RequireAdmin from './shared/RequireAdmin';
import RequireAuth from './shared/RequireAuth';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>

        }>
          <Route index element={<MyProfile />}></Route>
          <Route path='myOrder' element={<MyOrder />}></Route>
          <Route path='myReview' element={<MyReview />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='user' element={<RequireAdmin><AllUser /></RequireAdmin>}></Route>
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProduct /></RequireAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='forgotpassword' element={<ForgotPassword />}></Route>
        <Route path='purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path='allreviews' element={<AllReviews />}></Route>
        <Route path='/myportfolio' element={<MyPortfolio />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/showallproduct' element={<ShowAllProduct />}></Route>
        <Route path='updateProfile/:id' element={<UpdateProfile />}></Route>


        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
