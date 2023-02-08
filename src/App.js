import { useState } from "react";
import "./App.css";
import ClientPanel from "./components/client/ClientPanel";
import EmployeePanel from "./components/employee/EmployeePanel";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservationCreate from "./components/client/ReservationCreate";
import ReservationsList from "./components/employee/ReservationsList";
import ReservationAdd from "./components/employee/ReservationAdd";
import ReservationEdit from "./components/employee/ReservationEdit";
import ReservationEditForm from "./components/employee/ReservationEditForm";
import EmployeeLogin from "./components/employee/EmployeeLogin";
import ClientLogin from "./components/client/ClientLogin";
import ClientRegister from "./components/client/ClientRegister";

function App() {
  const [view, setView] = useState("");

  return (
    <div className="app">
      <Dashboard>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="panel/client" element={<ClientPanel />} />
       {/*      <Route path="panel/client/login" element={<ClientLogin />} /> */}
            <Route path="panel/employee" element={<EmployeePanel />} />
            <Route path="panel/employee/login" element={<EmployeeLogin />} />
            <Route path="panel/client/login" element={<ClientLogin />} />
            <Route path="panel/client/register" element={<ClientRegister />} />
            <Route path="reservations/create" element={<ReservationCreate />} />
            <Route path="reservations/all" element={<ReservationsList />} />
            <Route path="reservations/add" element={<ReservationAdd /> } />
            <Route path="reservations/edit" element={<ReservationEdit /> } />
            <Route path="reservations/edit/:id" element={<ReservationEditForm /> } />
          </Routes>
        </BrowserRouter>
      </Dashboard>
    </div>
  );
}

export default App;
