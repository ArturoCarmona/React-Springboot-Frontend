import React from 'react';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import Table from './components/TableEmployees';
import AddEmployees from './components/AddEmployees';
import EditEmployee from './components/EditEmployee';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Table></Table>}></Route>
          <Route exact path="/add-employee" element={<AddEmployees></AddEmployees>}></Route>
          <Route exact path="/edit-employee/:id" element={<EditEmployee></EditEmployee>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
