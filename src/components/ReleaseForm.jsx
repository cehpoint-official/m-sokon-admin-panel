import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const ReleaseForm = () => {
  const [category, setCategory] = useState("Product");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here
    console.log("Category:", category);
    console.log("Title:", title);
    console.log("Description:", description);
    // Reset the form fields
    setCategory("Product");
    setTitle("");
    setDescription("");
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Release Form
      </Typography>

      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                required
                label="Category"
                variant="outlined"
                value={category}
                onChange={handleCategoryChange}
              >
                <MenuItem value="Product">Product</MenuItem>
                <MenuItem value="Service">Service</MenuItem>
                <MenuItem value="Property">Property</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Title"
                variant="outlined"
                color="info"
                value={title}
                onChange={handleTitleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                label="Description"
                variant="outlined"
                color="info"
                value={description}
                onChange={handleDescriptionChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="info"
                fullWidth
              >
                Release
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ReleaseForm;
