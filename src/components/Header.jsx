import React from "react";
import "./header.css";
import Logo from "../images/Preciselylogo.png";
import Avatarimage from "../images/avatar.jpg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  return (
    <div className="header-wrap">
      <div className="header-image">
        <img width="50%" src={Logo} alt="logo" />
      </div>
      <div className="header-links">
        <Link
          className={pathname === "/" ? "active" : ""}
          href="/"
          underline="hover"
          color="black"
          variant="h5"
        >
          Home
        </Link>
        <Link
          href="/customer"
          underline="hover"
          color="black"
          variant="h5"
          sx={{ ml: "50px" }}
          className={pathname === "/customer" ? "active" : ""}
        >
          Customers
        </Link>
        <Link
          href="/contract"
          underline="hover"
          color="black"
          variant="h5"
          sx={{ ml: "50px" }}
          className={pathname === "/contract" ? "active" : ""}
        >
          Contracts
        </Link>
      </div>
      <div className="header-welcome">
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Niharika"
            src={Avatarimage}
          />
          Hello, Niharika!
        </Stack>
      </div>
    </div>
  );
}
