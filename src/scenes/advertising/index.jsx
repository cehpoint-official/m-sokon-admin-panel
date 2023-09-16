import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const initialAd = {
  name: "",
  description: "",
  listingDate: "",
  listingPrice: "",
  finalPrice: "",
  time: "",
  isApproved: false, // Add isApproved property
};

const initialDemoAds = [
  {
    name: "Demo Ad 1",
    description: "This is a demo ad",
    listingDate: "2023-09-16",
    listingPrice: "100",
    finalPrice: "80",
    time: "08:00",
    isApproved: true, // Demo ad is approved
  },
  {
    name: "Demo Ad 2",
    description: "Another demo ad",
    listingDate: "2023-09-17",
    listingPrice: "120",
    finalPrice: "90",
    time: "10:30",
    isApproved: false, // Demo ad is not approved
  },
];

const Advertisment = () => {
  const [ads, setAds] = useState(initialDemoAds); // Initialize with demo data
  const [currentAd, setCurrentAd] = useState(initialAd);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentAd({ ...currentAd, [name]: value });
  };

  const handleAddAd = () => {
    setAds([...ads, currentAd]);
    setCurrentAd(initialAd);
  };

  const handleEditAd = (index) => {
    // Implement edit functionality here
    // You can open a dialog/modal to edit the ad details
    // and update the ads array with the edited data
  };

  const handleDeleteAd = (index) => {
    const newAds = [...ads];
    newAds.splice(index, 1);
    setAds(newAds);
  };

   const handleApproveAd = (index) => {
     const newAds = [...ads];
     newAds[index].isApproved = true;
     setAds(newAds);
   };

  return (
    <div>
      <AppBar position="static" style={{ margin: "16px", marginRight: "16px" }}>
        <Toolbar>
          <Typography variant="h2">Ad Management System</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginBottom: "20px" }}>
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h5">Create Ad</Typography>
          <form>
            <TextField
              label="Name"
              name="name"
              color="info"
              value={currentAd.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              color="info"
              value={currentAd.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              //   label="Listing Date"
              name="listingDate"
              type="date"
              color="info"
              value={currentAd.listingDate}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Listing Price"
              name="listingPrice"
              color="info"
              value={currentAd.listingPrice}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Final Price"
              name="finalPrice"
              color="info"
              value={currentAd.finalPrice}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Time"
              name="time"
              type="time"
              color="info"
              value={currentAd.time}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="info" onClick={handleAddAd}>
              Add Ad
            </Button>
          </form>
        </Paper>
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px",marginBottom:"20px" }}>
          <Typography variant="h5">Ad List</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Listing Date</TableCell>
                  <TableCell>Listing Price</TableCell>
                  <TableCell>Final Price</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ads.map((ad, index) => (
                  <TableRow key={index}>
                    <TableCell>{ad.name}</TableCell>
                    <TableCell>{ad.description}</TableCell>
                    <TableCell>{ad.listingDate}</TableCell>
                    <TableCell>{ad.listingPrice}</TableCell>
                    <TableCell>{ad.finalPrice}</TableCell>
                    <TableCell>{ad.time}</TableCell>
                    <TableCell>
                      {!ad.isApproved ? "Not Approved" : "Approved"}
                    </TableCell>
                    <TableCell>
                      <Button
                        style={{ marginRight: "16px" }}
                        variant="outlined"
                        color="info"
                        onClick={() => handleEditAd(index)}
                      >
                        Edit
                      </Button>
                      <Button
                        style={{ marginRight: "16px" }}
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDeleteAd(index)}
                      >
                        Delete
                      </Button>
                      {!ad.isApproved && (
                        <Button
                          variant="outlined"
                          color="success"
                          onClick={() => handleApproveAd(index)}
                        >
                          Approve
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
};

export default Advertisment;
