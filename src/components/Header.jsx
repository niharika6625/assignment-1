import React from "react";
import "./header.css";
import Logo from "../images/Preciselylogo.png";
import Avatarimage from "../images/avatar.jpg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

export default function Header() {
  return (
    <div className="header-wrap">
      <div className="header-image">
        <img width="50%" src={Logo} alt="logo" />
      </div>
      <div className="header-links">
        <Link href="/" underline="hover" color="black" variant="h5">
          Home
        </Link>
        <Link
          href="/customer"
          underline="hover"
          color="black"
          variant="h5"
          sx={{ ml: "50px" }}
        >
          Customers
        </Link>
        <Link
          href="/contract"
          underline="hover"
          color="black"
          variant="h5"
          sx={{ ml: "50px" }}
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
