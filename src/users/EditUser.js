import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom";


function EditUser() {
  const navigate = useNavigate();

  let history = createBrowserHistory();

  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e)
    await axios.put(`http://localhost:3000/user/${id}`, user);
    history.push();
    navigate("/");
  };

  const GetData = async () => {
    const data = await axios.get(`http://localhost:3000/user/${id}`, user);
    setUser(data.data);
  };
  useEffect(() => {
    GetData();
  }, []);


  //validation
 
  // const onSubmit = async data => { console.log(data); };
  return (
    <div className="App">
      <Grid>
        <Button onClick={() => navigate("/")}>Back</Button>
        <Card
          style={{ maxWidth: 450, padding: "20px 5px", margin: "7rem auto" }}
        >
          <CardContent style={{ margin: "auto" }}>
            <Typography gutterBottom variant="h5">
              Add User
            </Typography>

            <form onSubmit={(e) => onSubmit(e)}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Entername"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                 
                  />
                  
                   
                </Grid>
                <h1>hii </h1>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="contact"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                    name="contact"
                    value={contact}
                    onChange={(e) => onInputChange(e)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Enter your Address"
                    multiline
                    rows={4}
                    placeholder="Enter your Address"
                    variant="outlined"
                    fullWidth
                    name="address"
                    value={address}
                    onChange={(e) => onInputChange(e)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    color=""
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default EditUser;
