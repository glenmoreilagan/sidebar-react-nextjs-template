import React, { createContext, useRef, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import Link from "next/link";
import { useRouter } from "next/router";

import { FaCalendarAlt, FaRestroom } from "react-icons/fa";
// import Container from '@mui/material/Container';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import HeadNav from "../HeadNavigation/index";
import ExtraNavLabelComponent from "./extras";

const index = ({ children, setAuth }) => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const router = useRouter();

  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar backgroundColor={"rgb(255, 255, 255, 1)"}>
            <div className="flex justify-center items-center py-5">
              <span className="font-bold text-2xl">LOGO HERE</span>
            </div>
            <ExtraNavLabelComponent label={"General"} collapsed={collapsed} />
            <Menu
              menuItemStyles={{
                button: {
                  [`&.${"ps-disabled"}`]: {},
                  "&:hover": {
                    backgroundColor: "rgb(219 234 254)",
                    // color: '#fff',
                  },
                },
              }}
            >
              <MenuItem
                icon={<FaCalendarAlt className="text-blue-600 text-xl" />}
                component={<Link href="/Schedules"></Link>}
                className={router.pathname == "/Schedules" && "bg-blue-100"}
              >
                {" "}
                Schedules
              </MenuItem>
              <SubMenu
                icon={<FaRestroom className="text-blue-600 text-xl" />}
                label="Classes"
              >
                <MenuItem
                  component={<Link href="/Instructions"></Link>}
                  className={
                    router.pathname == "/Instructions" && "bg-blue-100"
                  }
                >
                  {" "}
                  Instructions
                </MenuItem>
                <MenuItem> Subjects</MenuItem>
                <MenuItem> Online Learners</MenuItem>
                <MenuItem> Online Learners Record</MenuItem>
                <MenuItem> Modular Learners</MenuItem>
              </SubMenu>

              <ExtraNavLabelComponent
                label={"Extra"}
                collapsed={collapsed}
                marginTop={"32px"}
              />
              <MenuItem
                icon={<FaCalendarAlt className="text-blue-600 text-xl" />}
                component={<Link href="/others"></Link>}
                className={router.pathname == "/others" && "bg-blue-100"}
              >
                {" "}
                Others
              </MenuItem>
            </Menu>
          </Sidebar>
        </div>
        <div className="_content" style={{ width: "100%" }}>
          <HeadNav collapseSidebar={collapseSidebar} />
          <div className="p-5">
            <LocalizationProvider dateAdapter={AdapterMoment}>
              {children}
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export const AuthContext = createContext();
export default index;
