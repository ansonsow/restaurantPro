
import './ManagerView.css';

import Sidebar from './components/Sidebar/SideBar';

import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import CreateEmployee from './components/Employee/CreateEmployee/CreateEmployee';
import EditEmployee from './components/Employee/EditEmployee/EditEmployee';
import EmployeeList from './components/Employee/EmployeeList/EmployeeList';
import AllTask from './components/Tasks/AllTasks/AllTask';
import CreateTask from './components/Tasks/CreateTasks/CreateTask';
import DailyAttendance from './components/Tasks/DailyAttendance/DailyAttendance';
import AssignTask from './components/Tasks/AssignTasks/AssignTask';
import StatisticsPage from './components/StatisticsPage/Statistics/Statistics';
import Home from './components/home/Home';
import LogOut from './components/logout/LogOut';
import Blank from './components/blank/Blank';
import Account from './components/account/Account';
import ChangePassword from './components/account/ChangePassword';

// import LogOut from "../employeeView/components/logout/LogOut";
// import Blank from "../employeeView/components/blank/Blank";

function ManagerView() {
  return (
    <>

    
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/employee" element={<EmployeeList />} />
          <Route path="/tasks" element={<AllTask />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/edit-employee" element={<EditEmployee />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/daily-attendance" element={<DailyAttendance />} />
          <Route path="/assign-task" element={<AssignTask />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/log-out" element={<LogOut />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/change-password" element={<ChangePassword/>} />
        </Routes>

        <Sidebar />
      </Router>
    </>
  );
}

export default ManagerView;
