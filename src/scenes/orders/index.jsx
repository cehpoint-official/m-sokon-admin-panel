import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  FormControl,
  Select,
  MenuItem,
  Modal,
  Box,
  TextField,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Event } from "@mui/icons-material";

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", status: "Processing" },
    { id: 2, customer: "Jane Smith", status: "Shipped" },
    // Add more order data here
  ]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRefundFormOpen, setIsRefundFormOpen] = useState(false);
  const [isGenerateInvoiceVisible, setIsGenerateInvoiceVisible] =
    useState(false);

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleCancelOrder = (orderId) => {
    // Implement cancellation logic here
  };

  const handleRefundOrder = (orderId) => {
    setSelectedOrderId(orderId);

    setIsRefundFormOpen(true);
  };
  const handleCloseRefundForm = () => {
    setSelectedOrderId(null);
    setIsRefundFormOpen(false);
  };
  const handleGenerateInvoice = (orderId) => {
    // Implement invoice generation logic here
  };

  const handleGeneratePackingSlip = (orderId) => {
    // Implement packing slip generation logic here
  };
  const handleViewDetails = (orderId) => {
    setSelectedOrderId(orderId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrderId(null);
    setIsModalOpen(false);
  };
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Order Management
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <FormControl>
                    <Select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                    >
                      <MenuItem value="Processing">Processing</MenuItem>
                      <MenuItem value="Shipped">Shipped</MenuItem>
                      <MenuItem value="Delivered">Delivered</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ marginRight: 2 }}
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleCancelOrder(order.id)}
                  >
                    Cancel Order
                  </Button>
                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() => handleRefundOrder(order.id)}
                  >
                    Refund Order
                  </Button>
                  <Button
                    sx={{ marginLeft: 2, marginRight: 2 }}
                    variant="outlined"
                    color="success"
                    onClick={() => {
                      setIsGenerateInvoiceVisible(!isGenerateInvoiceVisible);
                    }}
                  >
                    Generate Invoice
                  </Button>
                  <Button
                    variant="outlined"
                    color="info"
                    onClick={() => handleGeneratePackingSlip(order.id)}
                  >
                    Generate Packing Slip
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleViewDetails(order.id)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Order Details for Order ID {selectedOrderId}
          </Typography>
          {/* Additional order details */}
          <Typography variant="subtitle1" gutterBottom>
            Customer: John Doe
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Status: Processing
          </Typography>
          {/* Add more order details here */}
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              // Implement edit logic here
            }}
          >
            Edit
          </Button>
        </Box>
      </Modal>
      {/* Clickable area  */}

      {/* Generate Invoice design */}
      {isGenerateInvoiceVisible && (
        <Box mt={2} border={1} p={2} borderColor="primary.main">
          <Typography variant="h6" gutterBottom>
            Generate Invoice
          </Typography>
          <Divider />
          <Box mt={2}>
            <TextField
              label="Invoice Number"
              variant="outlined"
              color="info"
              fullWidth
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Billing Address"
              variant="outlined"
              color="info"
              fullWidth
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Invoice Date"
              type="date"
              variant="outlined"
              color="info"
              fullWidth
              InputLabelProps={{
                shrink: true,
                endAdornment: <Event color="info" />,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <Event color="info" /> {/* Make the icon colorful */}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {/* Add more input fields as needed */}
          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                setIsGenerateInvoiceVisible(false);
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                // Implement invoice generation logic here
              }}
            >
              Generate Invoice
            </Button>
          </Box>
        </Box>
      )}
      {/* refund form */}
      <Box mt={3}>
        {isRefundFormOpen && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Refund Order for Order ID {selectedOrderId}
            </Typography>
            <Button
              variant="outlined"
              style={{ marginTop: "16px", marginBottom: "16px" }}
              color="info"
              onClick={handleCloseRefundForm} // Close the refund form
            >
              Close
            </Button>
            <form>
              <TextField
                label="Refund Amount"
                variant="outlined"
                color="info"
                fullWidth
                // Add necessary input props
              />
              {/* Add more form fields as needed */}
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{ marginTop: "16px" }}
                onClick={(e) => {
                  e.preventDefault();
                  handleRefundOrder();
                }}
              >
                Refund
              </Button>
            </form>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default OrderManagementPage;
