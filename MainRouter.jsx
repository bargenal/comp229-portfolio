import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home.jsx'
import About from './src/about.jsx'
import Contact from './src/contact.jsx'
import Education from './src/education.jsx'
import Project from './src/projects.jsx'
import Layout  from './components/layout.jsx'


const MainRouter = () => {
    return (<div>
        <Layout/>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/education' element={<Education/>} />
            <Route exact path='/projects' element={<Project/>} />
            <Route exact path='/layout' element={<Layout/>} />
        </Routes>
    </div>)

}
export default MainRouter