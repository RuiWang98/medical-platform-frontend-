import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logOut, selectUserLogIn } from "../features/auth/userLogInSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { roleToPosition } from "../constants/PositionRoleMap";
import { Stack } from "@mui/system";
import { UserData } from "../types/UserDataType";
import personnelStatus from "../constants/PersonnelStatus";

interface PropsType {
  users: UserData[] | null;
  handleAssessmentButtonClick: (userData: UserData) => void;
  handleAccept: (userData: UserData) => void;
  handleReject: (userData: UserData) => void;
}

export default function PersonnelList(props: PropsType) {
  const { users, handleAssessmentButtonClick, handleAccept, handleReject } =
    props;

  return (
    <List>
      {users &&
        users.map((user) => (
          <ListItem key={user.id}>
            <Box width={"100%"}>
              <Card sx={{ boxShadow: 3, marginTop: 1 }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                  {/* <Box > */}
                  <Stack direction={"row"}>
                    <ListItemAvatar sx={{ display: "flex" }}>
                      <Avatar alt={user.name} src="" sx={{ alignSelf: "center" }} />
                    </ListItemAvatar>
                    <Stack direction={"column"}>
                      <Typography>{user.name}</Typography>
                      <Typography>{`Email: ${user.email}`}</Typography>
                    </Stack>
                  </Stack>
                  <Stack direction={"row"}>
                    <Button
                      variant="outlined"
                      onClick={() => handleAssessmentButtonClick(user)}
                      sx={{ marginRight: 2 }}
                    >
                      See-Infomation
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleAccept(user);
                      }}
                      disabled={user.status === personnelStatus.verified}
                      sx={{ marginRight: 2 }}
                    >
                      {user.status === personnelStatus.verified
                        ? "Accepted"
                        : "Accept"}
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        handleReject(user);
                      }}
                      disabled={user.status === personnelStatus.declined}
                      sx={{ marginRight: 2 }}
                    >
                      {user.status === personnelStatus.declined
                        ? "Rejected"
                        : "Reject"}
                    </Button>
                  </Stack>
                  {/* </Box> */}
                </CardContent>
              </Card>
            </Box>
          </ListItem>
        ))
      }
    </List >
  );
}
