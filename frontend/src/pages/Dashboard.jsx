/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
      axios
        .get("http://localhost:3000/api/v1/user", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          
          localStorage.setItem("user", response.data.username);
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
          navigate("/signin"); // Navigate to signin on error
        });
    }, [navigate]);
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance />
        <Users />
      </div>
    </div>
  );
};
