import React from "react";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "../pages/Home";
import FoodItem from "../pages/FoodItem";
import Layout from '../layout/Layout';
function AppRoutes(props){

    return (
        <div>
            <Router>
            
                <Layout>
                <Routes>
                
                    <Route path="/"  element={<Home />} />
                    <Route path="/:id"  element={<FoodItem />} />
                 </Routes>
                 
                 </Layout>
            
            </Router>
        </div>
    )
}

export default AppRoutes;