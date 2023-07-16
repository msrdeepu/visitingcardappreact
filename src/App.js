import "./App.css";
import "./components/cardlayout.css";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import DownloadButton from "./components/Buttondesign";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function App() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setemail] = useState("");
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");

  const nameHandleChange = (e) => {
    setName(e.target.value);
  };
  const contactHandleChange = (e) => {
    setContact(e.target.value);
  };
  const emailHandleChange = (e) => {
    setemail(e.target.value);
  };
  const professionHandleChange = (e) => {
    setProfession(e.target.value);
  };
  const addressHandleChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <Box className="App">
        <Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontFamily: "Roboto",
                padding: "12px",
                backgroundColor: "purple",
                borderStyle: "solid",
                borderColor: "white",
                fontSize: { xs: "18px", md: "40px" },
              }}
            >
              Create Your Digital Visiting Card
            </Typography>
          </Box>
          <Box>
            <form className="form">
              <TextField
                type="text"
                onChange={nameHandleChange}
                id="standard-basic"
                label="Name"
                variant="standard"
                sx={{ margin: "8px", maxWidth: "100%", color: "white" }}
              />
              <TextField
                type="number"
                onChange={contactHandleChange}
                id="standard-basic"
                label="Contact No:"
                variant="standard"
                sx={{ margin: "8px", maxWidth: "100%" }}
              />
              <TextField
                type="email"
                onChange={emailHandleChange}
                id="standard-basic"
                label="Email"
                variant="standard"
                sx={{ margin: "8px", maxWidth: "100%" }}
              />
              <TextField
                type="text"
                onChange={professionHandleChange}
                id="standard-basic"
                label="Profession"
                variant="standard"
                sx={{ margin: "8px", maxWidth: "100%" }}
              />
              <TextField
                type="text"
                onChange={addressHandleChange}
                id="standard-basic"
                label="Address"
                variant="standard"
                sx={{ margin: "8px", maxWidth: "100%" }}
              />
              <br />
              <DownloadButton />
            </form>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginTop: { xs: "20%", md: "5%" },
          }}
          className="card"
        >
          <h1>{name}</h1>
          <p>{profession}</p>
          <div class="contact-info">
            <h2>Contact Information</h2>

            <p>
              <strong>Phone:</strong> {contact}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Address:</strong> {address}
            </p>
          </div>
          <div class="separator">
            <Typography>
              Designed by{" "}
              <Typography variant="span" color={"orange"}>
                M. SANDEEP REDDY
              </Typography>
            </Typography>
          </div>
        </Box>

        <Typography>
          Copyright &copy;{" "}
          <Typography variant="span" color={"orange"}>
            M. SANDEEP REDDY
          </Typography>
        </Typography>
      </Box>
    </>
  );
}

export default App;
