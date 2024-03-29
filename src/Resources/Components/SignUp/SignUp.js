import React from "react";
import { Typography } from "@material-ui/core";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import amazonLogo from "..//images/amazonLogoBlack.png";
import {setSignedIn} from '../../Reducers/SignedInReducer'
import {setUser} from '../../Reducers/setUserReducer'
const useStyles = makeStyles({
  upperDiv: {
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    paddingBottom: "1rem",
  },
  image: {
    width: "8.2rem",
    height: "2.6rem",
  },
  formDiv: {
    height: "23.5rem",
    width: "19rem",
    margin: "1rem",
    padding: "1rem 2rem",
    border: "0.1rem solid rgba(148, 148, 148, 0.5)",
    borderRadius: "0.3rem",
  },
  label: {
    fontWeight: "bold",
    fontSize: "0.85rem",
    letterSpacing: "0.05rem",
  },
  input: {
    width: "18.5rem",
    height: "1.5rem",
    border: "0.1rem solid #949494",
    margin: "0.3rem 0 0.7rem 0",
    padding: "0.2rem",
    fontSize: "0.85rem",
    borderRadius: "0.2rem",
    outline: "none",
    "&:focus": {
      boxShadow: "0 0 0.2rem 0.1rem #D18637 ",
      border: "1px solid orange",
    },
    "&::placeholder": {
      fontSize: "0.85rem",
    },
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  submitBtn: {
    background: "linear-gradient(to bottom,#F7DDA0,#F0C14B)",
    border: "0.1rem solid #A88734",
    borderRadius: "0.2rem",
    fontSize: "0.9rem",
    marginTop: "1rem",
    width: "19rem",
    height: "1.8rem",
    cursor: "pointer",
    "&:hover": {
      background: "linear-gradient(to top,#EEB934,#F4D485)",
    },
  },
  conditions: {
    fontSize: "0.8rem",
    margin: "1rem 0",
  },
  link: {
    textDecoration: "none",
    color: "#0066C0",
    fontSize: "0.8rem",
    "&:hover": {
      color: "#C45500",
      textDecoration: "underline",
    },
  },
  divider: {
    width: "23rem",
    fontSize: "0.8rem",
    color: "#767676",
    padding: 0,
  },
  createNewAccountbutton: {
    width: "23rem",
    height: "1.8rem",
    fontSize: "0.9rem",
    border: "0.1rem solid #8D9096",
    marginTop: "1rem",
    borderRadius: "0.2rem",
    cursor: "pointer",
    background: "linear-gradient(to top,#E7E9EC,#FBFCFD)",
    "&:hover": {
      background: "linear-gradient(to top,#DADDE2,#F5F7F9)",
    },
  },
  lowerDiv: {
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    height: "4.5rem",
    borderTop: "0.15rem solid #d9d7d7",
  },
  footerConditionsDiv: {
    width: "20%",
    display: "flex",
    justifyContent: "space-around",
  },
  copyright: {
    fontSize: "0.75rem",
    color: "#555555",
    marginTop: "0.5rem",
  },
  errorMessage:{
    color: "#ff0000",
    fontSize: "0.8rem",
    marginTop:"-0.5rem",
    marginBottom:"0.5rem"
  }
});

function SignUp() {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (username.trim() === '') {
      newErrors.username = 'Name is required';
      isValid = false;
    }

   
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
 const createNewAccount=(e)=>{
    e.preventDefault()
    if (validate()) {
      console.log('Form submitted successfully');
    }
    let user={displayName:username,email}
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(setUser(user));
    dispatch(setSignedIn(true));
    navigate('/')
  }
  return (
    <div className={classes.main}>
      <div className={classes.upperDiv}>
        <Link to="/">
          <img src={amazonLogo} alt="" className={classes.image} />
        </Link>
        <div className={classes.formDiv}>
          <Typography className={classes.heading}>Sign up</Typography>
          <form id="form" onSubmit={createNewAccount}>
            <Typography className={classes.label}>Display Name</Typography>
            <input
              id="name"
              type="text"
              maxLength="10"
              className={classes.input}
              required
              placeholder="Enter your name ( Max length is 10 characters )"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            {errors.username && <p className="errorMessage">{errors.username}</p>}

            <Typography className={classes.label}>
              Email
            </Typography>
            <input
              type="email"
              id="email"
              className={classes.input}
              required
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errors.email && <p className="errorMessage">{errors.email}</p>}

            <Typography className={classes.label}>Password</Typography>
            <input
              type="password"
              id="password"
              required
              className={classes.input}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errors.password && <p className="errorMessage">{errors.password}</p>}

            <button
              type="submit"
              className={classes.submitBtn}
            >
              Create your Amazon account
            </button>
          </form>
          <Typography className={classes.conditions}>
            By continuing, you agree to Amazon's{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200545940"
              target="blank"
              className={classes.link}
            >
              Conditions of Use
            </a>{" "}
            and{" "}
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200534380"
              target="blank"
              className={classes.link}
            >
              Privacy Notice
            </a>
            .
          </Typography>
        </div>
        <Divider
          className={classes.divider}
          textAlign="center"
          sx={{ borderBottomWidth: "50px" }}
        >
          Already a Member?
        </Divider>
        <Link to="/Login">
          <button className={classes.createNewAccountbutton}>Sign In</button>
        </Link>
      </div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Oops😢 an Error Occured"}</DialogTitle>
        {/* <DialogContent>
          <Typography style={{ whiteSpace: "pre-line" }}>{error}</Typography>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
      <div className={classes.lowerDiv}>
        <div className={classes.footerConditionsDiv}>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200545940"
            target="blank"
            className={classes.link}
          >
            Conditions of Use
          </a>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200534380"
            target="blank"
            className={classes.link}
          >
            Privacy Notice
          </a>
          <a
            href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=508510"
            target="blank"
            className={classes.link}
          >
            Help
          </a>
        </div>
        <Typography className={classes.copyright}>
          © 1996-2022, Amazon.com, Inc. or its affiliates
        </Typography>
      </div>
    </div>
  );
}

export default SignUp;

const createNewAccount = async (e) => {
  e.preventDefault();
  if (validate()) {
    try {
      // Make API call for user registration/authentication
      // Update user information in the Redux store upon successful registration
      // Dispatch actions: setSignedIn(true), setUser(userDetails)
    } catch (error) {
      console.error("Error during user registration:", error);
      // Handle errors, display appropriate messages
    }
  }
  navigate('/');
}