import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import HistoryIcon from "@mui/icons-material/History";
import UserActivityLog from "../../components/UserActivityLog";

const UserManagement = () => {
  const [users, setUsers] = useState([]); // Store user data
  const [selectedUser, setSelectedUser] = useState(null);
  const [openActivityDialog, setOpenActivityDialog] = useState(false);

  useEffect(() => {
    const sampleUsers = [
      {
        id: 1,
        username: "user1",
        role: "user",
        isActive: true,
        isBanned: false,
      },
      {
        id: 2,
        username: "user2",
        role: "admin",
        isActive: true,
        isBanned: true,
      },
      // ... more users
    ];
    setUsers(sampleUsers);
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    // Open user profile edit dialog
  };

  const handleBlockUser = (userId) => {
    // Implement logic to block or suspend user
  };

  const handleViewActivity = (user) => {
    setSelectedUser(user);
    setOpenActivityDialog(true);
  };

  const handleActivityDialogClose = () => {
    setOpenActivityDialog(false);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        User Management
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  {user.isBanned
                    ? "Banned"
                    : user.isActive
                    ? "Active"
                    : "Inactive"}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleEditUser(user)}
                    aria-label="Edit"
                  >
                    <EditIcon />
                  </IconButton>
                  {user.isBanned ? (
                    <Tooltip title="Unblock">
                      <IconButton
                        onClick={() => handleBlockUser(user.id)}
                        color="secondary"
                      >
                        <AccountCircleIcon />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Block">
                      <IconButton
                        onClick={() => handleBlockUser(user.id)}
                        color="secondary"
                      >
                        <BlockIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  <IconButton
                    onClick={() => handleViewActivity(user)}
                    aria-label="View Activity"
                  >
                    <IconButton
                      onClick={() => handleViewActivity(user)}
                      aria-label="View Activity"
                    >
                      <HistoryIcon />
                    </IconButton>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* User Activity Dialog */}
      <Dialog
        open={openActivityDialog}
        onClose={handleActivityDialogClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>User Activity Log</DialogTitle>
        <DialogContent>
          <UserActivityLog user={selectedUser} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleActivityDialogClose} color="info">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserManagement;
