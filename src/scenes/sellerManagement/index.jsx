import React, { useState } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const SellerManagement = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(0);

  const sellers = [
    { id: 1, name: "Seller 1", status: "Pending", commission: "10" },
    { id: 2, name: "Seller 2", status: "Approved", commission: "10" },
    { id: 3, name: "Seller 3", status: "Approved", commission: "10" },
    // ... more sellers
  ];

  const handleEditSeller = (seller) => {
    setSelectedSeller(seller);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setSelectedSeller(null);
    setOpenDialog(false);
  };

  const handleMonitorPerformance = (sellerId) => {
    // Implement logic to navigate to a page for monitoring performance and compliance
  };

  const handleCommissionAndPayment = () => {
    setPaymentDialogOpen(true);
  };

  const handlePaymentDialogClose = () => {
    setPaymentDialogOpen(false);
  };

  return (
    <div style={{ marginLeft: "16px" }}>
      <h1>Seller Management</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>commission</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellers.map((seller) => (
              <TableRow key={seller.id}>
                <TableCell>{seller.id}</TableCell>
                <TableCell>{seller.name}</TableCell>
                <TableCell
                  style={{
                    color: seller.status === "Approved" ? "green" : "inherit",
                  }}
                >
                  {seller.status}
                </TableCell>
                <TableCell>{seller.commission}%</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleEditSeller(seller)}
                    aria-label="Edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                  {seller.status === "Pending" && (
                    <Button variant="outlined" color="secondary">
                      Approve
                    </Button>
                  )}

                  <Button
                    variant="outlined"
                    color="secondary"
                    style={{ marginLeft: "16px" }}
                    onClick={() => handleMonitorPerformance(seller.id)}
                  >
                    Monitor Performance
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        style={{ marginTop: "16px" }}
      >
        Add Seller
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCommissionAndPayment} // Add this onClick handler
        style={{ marginTop: "16px", marginLeft: "16px" }}
      >
        Set Commission and Process Payment
      </Button>

      {/* Edit Seller Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit Seller</DialogTitle>
        <DialogContent>
          {/* Add form fields to edit seller details here */}
          {/* For example: */}
          <TextField
            label="Seller Name"
            fullWidth
            defaultValue={selectedSeller?.name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDialogClose} color="secondary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        {/* ... DialogTitle, DialogContent, and DialogActions ... */}
      </Dialog>

      {/* Payment and Commission Dialog */}
      <Dialog open={paymentDialogOpen} onClose={handlePaymentDialogClose}>
        <DialogTitle>Payment Processing & Commission Rate</DialogTitle>
        <DialogContent>
          <TextField
            label="Commission Rate (%)"
            type="number"
            value={commissionRate}
            onChange={(e) => setCommissionRate(e.target.value)}
            fullWidth
          />
          {/* Add more payment processing components here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePaymentDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handlePaymentDialogClose} color="secondary">
            Process Payment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SellerManagement;
