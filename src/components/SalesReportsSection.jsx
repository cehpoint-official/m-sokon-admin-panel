import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom"; // Import useHistory to handle redirection

const SalesReportsSection = () => {
    const navigate = useNavigate();
//   const history = useHistory(); // Initialize useHistory

  const handleGenerateReport = () => {
    // Logic to generate sales report based on selected dates
    // You can implement your own logic here
  };

  const handleGoBack = () => {
    // history.push("/analytics"); // Redirect to the analytics section
    navigate("/analytics-reporting");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Generate Sales Reports
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" style={{ marginBottom: 16 }}>
                    Select Date Range
                  </Typography>
                  <form>
                    <TextField
                      label="Start Date"
                      type="date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{ marginBottom: 16 }}
                    />
                    <TextField
                      label="End Date"
                      type="date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleGenerateReport}
                      style={{ marginTop: 16 }}
                    >
                      Generate Report
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={handleGoBack}
                      style={{ marginTop: 16, marginLeft: 16 }}
                    >
                      Go Back
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesReportsSection;
