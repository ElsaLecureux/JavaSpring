import EmployeesPage from './EmployeesPage';
import DepartmentsPage from './DepartmentsPage';
import './Layout.css';
import { Link, Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
        <header className='header'>
            <h2 className='appTitle'>Employee Management System</h2>
            <nav>
                <ul className='navBar'>
                    <li className='navItem'>
                        <Link className='link' to="/employees">Employees</Link>
                    </li>
                    <li className='navItem'>
                        <Link className='link' to="/departments">Departments</Link>
                    </li>
                </ul>
            </nav>        
        </header>
        <Outlet></Outlet>
        <footer className='footer'>m2i</footer>
  </div>
  )
};

export default Layout;

