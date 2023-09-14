import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Button,
  Rating,
} from "@mui/material";

const ServiceListing = () => {
  // Sample data for service listings with descriptions for reviews
  const serviceListings = [
    {
      title: "Service Listing 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sellerName: "John Doe",
      reviewDescription: "Excellent service with great communication.",
      sellerType: "Service Seller",
    },
    {
      title: "Service Listing 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      sellerName: "Jane Smith",
      reviewDescription: "Good service, but could improve response time.",
      sellerType: "Product Seller",
    },
    {
      title: "Service Listing 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      sellerName: "Alice Johnson",
      reviewDescription: "Outstanding service. Highly recommended.",
      sellerType: "Service Seller",
    },
    {
      title: "Service Listing 4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sellerName: "Bob Wilson",
      reviewDescription: "Top-notch service. No complaints whatsoever.",
      sellerType: "Product Seller",
    },
  ];

  const handleAddSeller = () => {
    // Implement the logic for adding a new seller here
    console.log("Add Seller clicked");
  };

  const handleUpdateSeller = () => {
    // Implement the logic for updating the seller here
    console.log("Update Seller clicked");
  };

  const handleBanSeller = () => {
    // Implement the logic for banning the seller here
    console.log("Ban Seller clicked");
  };

  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: "32px" }}>
        Service Listings
      </Typography>

      <Grid container spacing={2}>
        {serviceListings.map((listing, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined" style={{ marginBottom: "16px" }}>
              <CardContent style={{ padding: "16px" }}>
                <Typography variant="h5" gutterBottom>
                  {listing.title}
                </Typography>
                <Typography
                  style={{ marginBottom: "16px", fontSize: "1.1rem" }}
                >
                  {listing.description}
                </Typography>
                <Typography variant="h3" color="textSecondary">
                  Seller: {listing.sellerName}
                </Typography>
                <br />
                <Typography variant="h5" color="textSecondary">
                  Reviews: {listing.reviewDescription}
                </Typography>
                <br />
                <Typography variant="h4" color="textSecondary">
                  Seller Type: {listing.sellerType}
                </Typography>
                <div style={{ marginTop: "8px", fontSize: "1.2rem" }}>
                  <Rating
                    name="seller-rating"
                    value={4} // Replace with the actual rating value
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div style={{ marginTop: "16px" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "8px", fontSize: "1rem" }}
                    onClick={handleAddSeller}
                  >
                    Add Seller
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginRight: "8px", fontSize: "1rem",  }}
                    onClick={handleUpdateSeller}
                  >
                    Update Seller
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    style={{ fontSize: "1rem",marginTop:"16px" }}
                    onClick={handleBanSeller}
                  >
                    Ban Seller
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceListing;
