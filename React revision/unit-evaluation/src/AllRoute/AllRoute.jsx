import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminPage } from '../Components/AdminPage'
import { Employees } from '../Components/Employees'
import { HomePage } from '../Components/HomePage'
import { LoginPage } from '../Components/LoginPage'
import { SpecificUser } from '../Components/SpecificUser'

export const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/employee" element={<Employees/>}/>
            <Route path="/employee/:id" element={<SpecificUser/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </div>
  )
}
