import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import EmployeesPage from "./Pages/EmployeesPage";
import DepartmentsPage from "./Pages/DepartmentsPage";
import AddUpdateEmployeePage from "./Pages/AddUpdateEmployeePage";
import DeleteEmployeePage from "./Pages/DeletePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/addUpdateEmployee" element={<AddUpdateEmployeePage />} />
          <Route path="/deleteEmployee" element={<DeleteEmployeePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
