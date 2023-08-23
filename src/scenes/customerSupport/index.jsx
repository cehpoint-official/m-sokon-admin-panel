import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

// Component for handling customer inquiries and complaints
const CustomerSupport = () => {
  const [ticket, setTicket] = useState("");

  const handleTicketChange = (event) => {
    setTicket(event.target.value);
  };

  const submitTicket = () => {
    // Code to submit the customer's inquiry or complaint
    console.log("Submitted Ticket:", ticket);
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
            value={ticket}
            onChange={handleTicketChange}
            multiline
            rows={4}
            variant="outlined"
          />
          <Button variant="contained" color="primary" onClick={submitTicket}>
            Submit Ticket
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomerSupport;
