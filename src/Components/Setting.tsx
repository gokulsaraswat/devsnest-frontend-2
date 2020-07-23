import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from '../config/axios.config';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 50,
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 1000,
    },
  },

  title: {
    marginTop: '5%',
    fontSize: '300%',
    textAlign: 'center',
    fontWeight: 500,
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },

  From: {
    width: '25ch',
    margin: 'auto',
  },

  Field: {
    width: 370,
    padding: theme.spacing(1),
  },

  list: {
    position: 'absolute',
    padding: theme.spacing(2),
    fontSize: '20px',
    marginLeft: '5%',
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
}));

function SettingPage() {
  const classes = useStyles();

  const [userUpdate, setUserUpdate] = useState({
    name: '',
    email: '',
    aboutMe: '',
    github: '',
    institution: '',
  });

  const handleChange = (event: any) => {
    setUserUpdate({ ...userUpdate, [event.target.name]: event.target.value });
  };

  const submit = async (e: any) => {
    let token: string = localStorage.getItem('Token') || '';
    e.preventDefault();
    if (token != '') {
      const res = await axios.post('/api/users', userUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <div className={classes.title}>Account Setting</div>
          <Paper className={classes.paper}>
            <div className={classes.list}>
              <Box p={3} bgcolor="background.paper">
                Name
              </Box>
              <Box p={3} bgcolor="background.paper">
                Email
              </Box>
              <Box p={3} bgcolor="background.paper">
                AboutMe
              </Box>
              <Box p={3} bgcolor="background.paper">
                Github
              </Box>
              <Box p={3} bgcolor="background.paper">
                Institution
              </Box>
            </div>

            <div>
              <form
                className={classes.From}
                noValidate
                autoComplete="off"
                onSubmit={submit}
              >
                <TextField
                  className={classes.Field}
                  id="name"
                  label="Name"
                  name="name"
                  variant="outlined"
                  defaultValue={userUpdate.name}
                  onChange={handleChange}
                />

                <TextField
                  className={classes.Field}
                  id="outlined-basic"
                  label="email"
                  name="email"
                  variant="outlined"
                  defaultValue={userUpdate.email}
                  onChange={handleChange}
                />
                <TextField
                  className={classes.Field}
                  id="aboutMe"
                  label="aboutMe"
                  name="aboutMe"
                  variant="outlined"
                  defaultValue={userUpdate.aboutMe}
                  onChange={handleChange}
                />
                <TextField
                  className={classes.Field}
                  id="github"
                  label="github"
                  name="github"
                  variant="outlined"
                  defaultValue={userUpdate.github}
                  onChange={handleChange}
                />

                <TextField
                  className={classes.Field}
                  id="institution"
                  label="institution"
                  name="institution"
                  variant="outlined"
                  defaultValue={userUpdate.institution}
                  onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                  UPDATE
                </Button>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SettingPage;
