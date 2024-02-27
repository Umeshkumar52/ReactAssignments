import React from "react";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import PwSkillsblog from "./pages/pwSkillsBlog/PwSkillsBlog";
import ReadBlog from "./pages/pwSkillsBlog/ReadBlog";
import Todo from '../src/pages/todoApp/Todo'
import MoviSearch from '../src/pages/moviSearchApp/MoviSearch'
function App() {
  return (
    <BrowserRouter>
       <Routes>

         <Route path='/' element={<PwSkillsblog/>}/>
         <Route path='/readBlog' element={<ReadBlog/>}/>
         <Route path='/todo' element={<Todo/>}/>
         <Route path='/movi' element={<MoviSearch/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
