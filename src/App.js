import React from "react";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import PwSkillsblog from "./pages/pwSkillsBlog/PwSkillsBlog";
import ReadBlog from "./pages/pwSkillsBlog/ReadBlog";
import Todo from '../src/pages/todoApp/Todo'
import MoviSearch from '../src/pages/moviSearchApp/MoviSearch'
import ReactWalkThroughP_2 from "./instaForm/ReactWalkThroughP_2";
import Counter from "./instaForm/Counter";
function App() {
  return (
    <BrowserRouter>
       <Routes>

         <Route path='/' element={<ReactWalkThroughP_2/>}/>
         <Route path='/counterApp' element={<Counter/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
