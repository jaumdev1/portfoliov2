import React from "react";
import {HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Header from "../components/Header";
import Projects from "../pages/Projects";
import Login from "../pages/Login";
import Article from "../pages/Article";
import CreateArticle from "../pages/CreateArticle";
import ProtectedRoute from './ProtectRoute';
import ArticleView from '../pages/ArticleView';
import EditArticle from "../pages/EditArticle";



const RoutesFC: React.FC = () => {
  return (
    <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/articles" element={<Article />} /> 
          <Route path="/article/:id" element={<ArticleView />} /> 


          <Route path="/article/create" element={<ProtectedRoute element={<CreateArticle />}  />} />
          <Route path="/article/edit/:id" element={<ProtectedRoute element={<EditArticle />}  />} />  
        </Routes>
   
      
  </Router>
  );
};

export default RoutesFC;
