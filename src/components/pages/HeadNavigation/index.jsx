import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";

import axios from 'axios';

import { FaThList, FaCaretDown, FaUserCog, FaSignOutAlt } from "react-icons/fa";

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const index = ({ collapseSidebar, setAuth }) => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleProfile = (e) => {
    alert('Profile');
    setAnchorEl(null);
  }

  const handleLogout = async (e) => {
    alert('Logout');
    setAnchorEl(null);
  }

  return (
    <>
      <div className='bg-white shadow-sm'>
        <div fixed style={{ height: '4em', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '98%', margin: 'auto' }}>
          <div>
            <FaThList className='text-blue-600 text-xl cursor-pointer' onClick={() => collapseSidebar()} />
          </div>
          <div>
            <Button
              className='text-blue-600'
              size='small'
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              // variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<FaCaretDown />}
            >
              glenilagan@llibi.com
            </Button>
            <Menu
              PaperProps={{ sx: { width: '12em' } }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem className='justify-between items-center' onClick={e => handleProfile(e)}>Profile <FaUserCog fontSize={'1.2em'} className='text-gray-600' /></MenuItem>
              <MenuItem className='justify-between items-center' onClick={e => handleLogout(e)}>Logout <FaSignOutAlt fontSize={'1.2em'} className='text-gray-600' /></MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </>
  )
}

export default index