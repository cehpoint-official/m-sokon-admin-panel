import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Link,
} from "@mui/material";
import SalesReportsSection from "../../components/SalesReportsSection";

const AnalyticsReporting = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ marginLeft: 16 }}>
        Analytics and Reporting
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card style={{ marginLeft: 16 }}>
            <CardContent>
              <Link href="/sales-reports" underline="none">
                <Typography variant="h6" color="secondary">
                  Generate Sales Reports
                </Typography>
              </Link>
              {/* Add your content for sales reports */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ marginLeft: 16 }}>
            <CardContent>
              <Link href="/user-engagement" underline="none">
                <Typography variant="h6" color="secondary">
                  Monitor User Engagement and Retention
                </Typography>
              </Link>
              {/* Add your content for user engagement and retention */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ marginLeft: 16 }}>
            <CardContent>
              <Link href="/popular-products" underline="none">
                <Typography variant="h6" color="secondary">
                  Track Popular Products and Categories
                </Typography>
              </Link>
              {/* Add your content for popular products and categories */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ marginLeft: 16 }}>
            <CardContent>
              <Link href="/revenue-trends" underline="none">
                <Typography variant="h6" color="secondary">
                  Analyze Revenue and Profit Trends
                </Typography>
              </Link>
              {/* Add your content for revenue and profit trends */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AnalyticsReporting;
