import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from '../config/axios.config';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 50,
  },

  From: {
    width: '25ch',
  },
  Field: {
    width: 350,
    padding: theme.spacing(1),
  },

  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
  console.log(userUpdate);
  return (
    <div className={classes.root}>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
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

              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SettingPage;
