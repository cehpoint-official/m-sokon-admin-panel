import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ProductForm = ({ selectedProduct, onClose }) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setProductName(selectedProduct.name);
      setCategory(selectedProduct.category);
      setPrice(selectedProduct.price);
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to save/update the product
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <FormControl fullWidth required margin="normal">
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
          {/* Add more categories */}
        </Select>
      </FormControl>
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <Button type="submit" color="primary" variant="contained">
        {selectedProduct ? "Update" : "Add"} Product
      </Button>
    </form>
  );
};

export default ProductForm;
