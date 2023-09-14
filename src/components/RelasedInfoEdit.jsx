import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const RelasedInfoEdit = () => {
  const [selectedCategory, setSelectedCategory] = useState("Product");

  // Sample data for products, services, and properties
  const releases = {
    Product: [
      {
        title: "Product Release 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Product Release 2",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    Service: [
      {
        title: "Service Release 1",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      },
    ],
    Property: [
      {
        title: "Property Release 1",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
  };

  const categoryOptions = ["Product", "Service", "Property"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      {/* Category Select */}
      <Grid container spacing={2}>
        {categoryOptions.map((category) => (
          <Grid item key={category}>
            <Button
              variant="contained"
              color="info"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Display Releases */}
      <Typography
        variant="h4"
        style={{
          marginBottom: "16px",
          marginTop: "32px",
          fontSize: "24px",
          color: "#ff5722", // Change the text color
        }}
      >
        {selectedCategory} Releases
      </Typography>
      {releases[selectedCategory].map((release, index) => (
        <Card
          key={index}
          variant="outlined"
          style={{
            marginBottom: "16px",
            padding: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
            backgroundColor: "#fff", // Change the background color
            borderLeft: "4px solid #ff5722", // Add a colored border
          }}
        >
          <CardContent>
            <Typography
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#333", // Change the title text color
              }}
            >
              {release.title}
            </Typography>
            <Typography style={{ fontSize: "1rem", color: "#666" }}>
              {release.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "16px", backgroundColor: "#ff5722" }} // Change the button color
            >
              Edit
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default RelasedInfoEdit;
