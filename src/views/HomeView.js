/** @jsxImportSource @emotion/react */
import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// MUI Components
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Self defined
import {
  notifyError,
  notifyInfo,
  notifySuccess,
  notifyWarning,
} from "../features/notifications/notificationsSlice";

const HomeView = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <Paper>
      <Typography>{t('app_description')}</Typography>
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
