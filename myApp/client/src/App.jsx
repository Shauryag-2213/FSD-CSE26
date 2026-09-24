import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Counter from './components/Counter'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>home</h1>}/>
        <Route path="/counter"element={<Counter/>}/>
        <Route path="*" element={<h1>404 not found</h1>}/>
        <Route path="/about" element={<h1>about us</h1>}/>
        <Route path="/profile" element={<h1>profile</h1>}/>
        <Route path="/cart" elemnt={<h1>my cart</h1>}/>
        <Route path="/login" element={<h1>login page</h1>}/>
        <Route path="/logout" element={<h1>Logout</h1>}/>
        <Route path="*" element={<h1>Error:Page not Found</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
