import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const CustomerSupport = () => {
  const [ticket, setTicket] = useState("");
  const [assignedStaff, setAssignedStaff] = useState(""); // State to store assigned staff member
  const [inquiries, setInquiries] = useState([
    {
      content: "I have an issue with my order.",
      assignedStaff: "staff1",
      status: "Pending",
    },
    {
      content: "I need assistance with my account.",
      assignedStaff: "staff2",
      status: "Pending",
    },
    {
      content: "I received a damaged product.",
      assignedStaff: "staff3",
      status: "Resolved",
    },
  ]); // State to store customer inquiries
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleTicketChange = (event) => {
    setTicket(event.target.value);
  };

  const handleAssignedStaffChange = (event) => {
    setAssignedStaff(event.target.value);
  };

  const submitTicket = () => {
    const newInquiry = {
      content: ticket,
      assignedStaff,
      status: "Pending",
    };

    setInquiries([...inquiries, newInquiry]);
    setTicket("");
    setAssignedStaff("");
  };

  const resolveInquiry = (index) => {
    const updatedInquiries = [...inquiries];
    updatedInquiries[index].status = "Resolved";
    setInquiries(updatedInquiries);
  };

  const openEditModal = (inquiry) => {
    setSelectedInquiry(inquiry);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedInquiry(null);
    setEditModalOpen(false);
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Customer Support</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <TextField
            label="Customer Inquiry or Complaint"
            color="info"
            value={ticket}
            onChange={handleTicketChange}
            multiline
            rows={4}
            variant="outlined"
          />
          <FormControl variant="outlined">
            <InputLabel id="assigned-staff-label">Assign Staff</InputLabel>
            <Select
              labelId="assigned-staff-label"
              color="info"
              id="assigned-staff"
              value={assignedStaff}
              onChange={handleAssignedStaffChange}
              label="Assign Staff"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="staff1">Staff 1</MenuItem>
              <MenuItem value="staff2">Staff 2</MenuItem>
              <MenuItem value="staff3">Staff 3</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="secondary" onClick={submitTicket}>
            Submit Ticket
          </Button>
        </Box>
        <Typography variant="h6" mt={4}>
          Customer Inquiries
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Inquiry</TableCell>
                <TableCell>Assigned Staff</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inquiries.map((inquiry, index) => (
                <TableRow key={index}>
                  <TableCell>{inquiry.content}</TableCell>
                  <TableCell>{inquiry.assignedStaff}</TableCell>
                  <TableCell>{inquiry.status}</TableCell>
                  <TableCell>
                    {inquiry.status === "Pending" && (
                      <>
                        <Button
                          variant="outlined"
                          color="info"
                          onClick={() => resolveInquiry(index)}
                        >
                          Resolve
                        </Button>
                        <Button
                          variant="outlined"
                          color="secondary"
                          style={{marginLeft:"16px"}}
                          onClick={() => openEditModal(inquiry)}
                        >
                          Edit
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Inquiry Details Modal */}
        <Dialog
          open={isEditModalOpen}
          onClose={closeEditModal}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Inquiry Details</DialogTitle>
          <DialogContent>
            {selectedInquiry && (
              <TextField
                label="Inquiry"
                value={selectedInquiry.content}
                multiline
                rows={4}
                variant="outlined"
                color="info"
                style={{marginTop:"10px"}}
                fullWidth
                // disabled
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={closeEditModal} color="warning">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default CustomerSupport;
