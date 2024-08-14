import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import CategoryList from './components/CategoryList';
import CategoryDetail from './components/CategoryDetail';
import Recipe from './components/Recipe';
import UserProfile from './components/UserProfile';
import MealPlan from './components/MealPlan';
import Login from './components/Login';
import Search from './components/Search';
import FeedbackForm from './components/FeedbackForm';
import { AuthProvider, AuthContext, ProtectedRoute } from './components/AuthContext';
import { useContext } from 'react';


// Private Route component
const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/categories" element={<ProtectedRoute element={<CategoryList />} />} />
          <Route path="/categories/:idCategory" element={<ProtectedRoute element={<CategoryDetail />} />} />
          <Route path="/recipe/:idMeal" element={<ProtectedRoute element={<Recipe />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<UserProfile />} />} />
          <Route path="/meal-plan" element={<ProtectedRoute element={<MealPlan />} />} />
          <Route path="/search" element={<ProtectedRoute element={<Search />} />} />
          <Route path="/feedback" element={<ProtectedRoute element={<FeedbackForm />} />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
