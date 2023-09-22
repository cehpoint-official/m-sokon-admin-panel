import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const MarketingPromotions = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCampainForm, setShowCampainForm] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [staffUsers, setStaffUsers] = useState(0);
  const [newUsers, setNewUsers] = useState(0);
  const [campaignData, setCampaignData] = useState({
    status: "",
    impressions: "",
    clicks: "",
    ctr: "",
    cpm: "",
    cpc: "",
    date: "",
    spent: "",
  });

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };
  const toggleCampaignFormVisibility = () => {
    setShowCampainForm(!showCampainForm);
  };

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscountPercentage(event.target.value);
  };

  const submitCouponForm = () => {
    // Code to submit the coupon form
    console.log("Coupon Code:", couponCode);
    console.log("Discount Percentage:", discountPercentage);
  };

  const managePromotionalCampaigns = () => {
    // Code to manage promotional campaigns
    toggleCampaignFormVisibility(); // Toggle the form visibility when the button is clicked
  };

  const manageAds = () => {
    // Code to manage ads
  };

  const integrateEmailMarketing = () => {
    // Code to trigger email marketing
  };

  const createNotificationSystem = () => {
    // Code to create a notification
  };

  // Sample campaign data (you can replace this with your actual data)
  const campaigns = [
    {
      id: 1,
      name: "Summer Sale",
      status: "Active",
      impressions: 10000,
      clicks: 500,
      ctr: "5%",
      cpm: "$10",
      cpc: "$0.20",
      date: "2023-08-15",
      spent: "$1000",
    },
    // Add more campaign data as needed
  ];

  const manageCampaigns = () => {
    // Code to manage campaigns
  };

  const handleFieldChange = (field, value) => {
    setCampaignData({
      ...campaignData,
      [field]: value,
    });
  };

  const submitCampaignForm = () => {
    // Code to submit the campaign form
    console.log("Campaign Data:", campaignData);
    // Add logic to save or process the campaign data
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Marketing and Promotions</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          {/* Cool Design for Managing Promotional Campaigns */}
          <div
            style={{
              backgroundColor: "#007bff",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
              color: "#fff",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer", // Make the section clickable
            }}
            onClick={managePromotionalCampaigns} // Clicking on this section triggers campaign management
          >
            <Typography variant="h6" style={{ marginBottom: "8px" }}>
              Managing Promotional Campaigns
            </Typography>
            <Typography>
              Attract users and boost engagement with our exciting campaigns!
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "12px" }}
            >
              Manage Campaigns
            </Button>
          </div>
          {/* Campaign Creation Form */}
          {showCampainForm && (
            <div>
              <TextField
                label="Campaign Status"
                color="info"
                variant="outlined"
                fullWidth
                margin="normal"
                value={campaignData.status}
                onChange={(e) => handleFieldChange("status", e.target.value)}
              />
              <TextField
                label="Impressions"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.impressions}
                onChange={(e) =>
                  handleFieldChange("impressions", e.target.value)
                }
              />
              <TextField
                label="Clicks"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.clicks}
                onChange={(e) => handleFieldChange("clicks", e.target.value)}
              />
              <TextField
                label="CTR (Click-Through Rate)"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.ctr}
                onChange={(e) => handleFieldChange("ctr", e.target.value)}
              />
              <TextField
                label="CPM (Cost Per Mille)"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.cpm}
                onChange={(e) => handleFieldChange("cpm", e.target.value)}
              />
              <TextField
                label="CPC (Cost Per Click)"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.cpc}
                onChange={(e) => handleFieldChange("cpc", e.target.value)}
              />
              <TextField
                label="Date"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                type="date"
                value={campaignData.date}
                onChange={(e) => handleFieldChange("date", e.target.value)}
              />
              <TextField
                label="Spent"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.spent}
                onChange={(e) => handleFieldChange("spent", e.target.value)}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={submitCampaignForm}
              >
                Create Campaign
              </Button>
            </div>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={toggleFormVisibility}
          >
            {showForm ? "Cancel" : "Manage Coupon Codes and Discounts"}
          </Button>
          {showForm && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <TextField
                label="Coupon Code"
                color="info"
                value={couponCode}
                onChange={handleCouponCodeChange}
                variant="outlined"
              />
              <TextField
                label="Discount Percentage"
                color="info"
                value={discountPercentage}
                onChange={handleDiscountChange}
                variant="outlined"
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={submitCouponForm}
              >
                Create Coupon
              </Button>
            </Box>
          )}
          <Button variant="contained" color="primary" onClick={manageAds}>
            Manage Ads within Categories
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={integrateEmailMarketing}
          >
            Integrate Email Marketing
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={createNotificationSystem}
          >
            Create Notification System
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <Typography>Staff Users: {staffUsers}</Typography>
          <Typography>New Users: {newUsers}</Typography>
        </Box>
        {/* Campaign Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Campaign Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Impressions</TableCell>
                <TableCell>Clicks</TableCell>
                <TableCell>CTR</TableCell>
                <TableCell>CPM</TableCell>
                <TableCell>CPC</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Spent</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell>{campaign.name}</TableCell>
                  <TableCell>{campaign.status}</TableCell>
                  <TableCell>{campaign.impressions}</TableCell>
                  <TableCell>{campaign.clicks}</TableCell>
                  <TableCell>{campaign.ctr}</TableCell>
                  <TableCell>{campaign.cpm}</TableCell>
                  <TableCell>{campaign.cpc}</TableCell>
                  <TableCell>{campaign.date}</TableCell>
                  <TableCell>{campaign.spent}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="info"
                      style={{ marginRight: "16px" }}
                    >
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default MarketingPromotions;
