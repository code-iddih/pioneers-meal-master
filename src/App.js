import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import CategoryList from "./components/CategoryList";
import CategoryDetail from "./components/CategoryDetail";
import Recipe from "./components/Recipe";
import UserProfile from "./components/UserProfile";
import MealPlan from "./components/MealPlan";
import Login from "./components/Login";
import Search from "./components/Search";
import FeedbackForm from "./components/FeedbackForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/:idCategory" element={<CategoryDetail />} />
        <Route path="/recipe/:idMeal" element={<Recipe />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/meal-plan" element={<MealPlan />} />
        <Route path="/search" element={<Search />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </div>
  );
}

export default App;
