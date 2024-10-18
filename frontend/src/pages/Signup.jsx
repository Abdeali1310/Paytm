/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Inputbox from "../components/Inputbox";
import Button from "../components/Button";
import WarningButton from "../components/WarningButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="m-auto h-screen w-screen flex justify-center items-center">
      <div className="mx-4 py-5 rounded-lg bg-slate-100">
        <Heading title="Sign Up" />
        <Subheading title="Enter your credentials to create an account" />
        <Inputbox
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          name="firstname"
          type="text"
          label="First Name"
          placeholder="Jane"
        />
        <Inputbox
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          name="lastname"
          type="text"
          label="Last Name"
          placeholder="Doe"
        />
        <Inputbox
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name="email"
          type="email"
          label="Email"
          placeholder="Jane@yandex.com"
        />
        <Inputbox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
          label="Password"
          placeholder="jane@1234"
        />
        <div className="mt-5 px-4">
          <Button
            onClick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    firstName,
                    lastName,
                    username,
                    password,
                  }
                );

                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              } catch (error) {
                console.error("Error during signup:", error);
              }
            }}
            title="Sign Up"
          />

          <WarningButton
            label="Already have an account? "
            to="/signin"
            buttonText="Sign in"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
