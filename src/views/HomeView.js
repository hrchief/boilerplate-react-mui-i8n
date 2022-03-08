/** @jsxImportSource @emotion/react */
import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  notifyError,
  notifyInfo,
  notifySuccess,
  notifyWarning,
} from "../features/notifications/notificationsSlice";

const HomeView = () => {
  const dispatch = useDispatch();
  return (
    <Paper>
      <Typography variant="h3">Home Page</Typography>

      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              dispatch(notifyError("Error notification"));
            }}
          >
            Error
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="warning"
            onClick={() => {
              dispatch(notifyWarning("Warning notification"));
            }}
          >
            Warning
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              dispatch(notifySuccess("Success notification"));
            }}
          >
            Success
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="info"
            onClick={() => {
              dispatch(notifyInfo("Info notification"));
            }}
          >
            Info
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeView;
