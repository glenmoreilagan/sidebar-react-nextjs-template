import React, { createContext, useRef, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

import Link from 'next/link';
import { useRouter } from "next/router";

import { FaCalendarAlt, FaRestroom } from "react-icons/fa";
// import Container from '@mui/material/Container';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import HeadNav from '../HeadNavigation/index'

const index = ({ children, setAuth }) => {
  const { collapseSidebar } = useProSidebar();
  const router = useRouter();

  return (
    <>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar>
            <Menu>
              <MenuItem icon={<FaCalendarAlt className='text-blue-900 text-xl' />} component={<Link href='/Schedules'></Link>} className={router.pathname == "/Schedules" ? "bg-gray-100" : ""}> Schedules</MenuItem>
              <SubMenu icon={<FaRestroom className='text-blue-900 text-xl' />} label="Classes">
                <MenuItem component={<Link href='/Instructions'></Link>} className={router.pathname == "/Instructions" ? "bg-gray-100" : ""}> Instructions</MenuItem>
                <MenuItem> Subjects</MenuItem>
                <MenuItem> Online Learners</MenuItem>
                <MenuItem> Online Learners Record</MenuItem>
                <MenuItem> Modular Learners</MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>
        <div className='_conten' style={{ width: '100%' }}>
          <HeadNav collapseSidebar={collapseSidebar} />
          <div className='p-5'>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              {children}
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </>
  );
}


export const AuthContext = createContext();
export default index