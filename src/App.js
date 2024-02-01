import React from 'react';
import MainLayout from './MainLayout';
import DashboardCard from './DashboardCard';
import Content from './Content';
import Header from './Header';
import SearchBar from './component/SearchComponent';
// import Sidebar from './component/SidebarMenu';
import UserInfo from './';
import SidebarMenu from './component/SidebarMenu';
import tailwindConfig from './tailwind.config';
import SearchComponent from './component/SearchComponent';
import AvailabilityWidget from './component/AvailabilityWidget';
import TotalEmp from './component/EmployeeStats';
import AnnouncementComponent from './component/AnnouncementComponent';

const App = () => {
  return (
    <MainLayout>
      {/* Main application content using reusable components */}
      
      <div>
      
      <SearchComponent></SearchComponent>
      </div>
      <div>
        <AvailabilityWidget></AvailabilityWidget>
        
      </div>
      <div>
        <TotalEmp></TotalEmp>
      </div>
      
      <div>
        
      </div>

      
      {/* ... other components */}
      
    </MainLayout>
  );
};

export default App;
