import React, { useState } from "react";
import InputMask from "react-input-mask";
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
import { useForm } from "react-hook-form";
function AddUser(props) {
  const navigate = useNavigate();

  let history = createBrowserHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",

  });
  const { name, email, contact,  address } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await axios.post("http://localhost:3000/user", user);
    history.push();
    navigate("/");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="App">
      <Grid>
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
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    {...register}
                  />

                  {errors.name && <p>Please check the First Name</p>}
                </Grid>

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
                <Grid item xs={12} >
              
                 <InputMask style={{width:"25.5rem", height:"4rem", border:"1px solid #d4d4d4", borderRadius:"5px "}}
                    mask='(+1) 999 999 9999' 
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

export default AddUser;
