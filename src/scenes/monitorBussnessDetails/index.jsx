import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

const MonitorBussnesse = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [approvalStatus, setApprovalStatus] = useState("");
  const [documentApprovalStatus, setDocumentApprovalStatus] = useState({});

  // Demo document list with status and approval information
  const demoDocuments = [
    {
      name: "Demo Document 1.pdf",
      status: "Approved",
      approvalDate: "2023-09-12",
      approvalTime: "10:30 AM",
    },
    {
      name: "Demo Document 1.pdf",
      status: "Approved",
      approvalDate: "2023-09-12",
      approvalTime: "10:30 AM",
    },
    {
      name: "Demo Document 1.pdf",
      status: "Approved",
      approvalDate: "2023-09-12",
      approvalTime: "10:30 AM",
    },
    {
      name: "Demo Document 1.pdf",
      status: "Approved",
      approvalDate: "2023-09-12",
      approvalTime: "10:30 AM",
    },
    {
      name: "Demo Document 2.docx",
      status: "Rejected",
      approvalDate: "2023-09-13",
      approvalTime: "11:45 AM",
    },
    {
      name: "Demo Document 2.docx",
      status: "Rejected",
      approvalDate: "2023-09-13",
      approvalTime: "11:45 AM",
    },
    {
      name: "Demo Document 2.docx",
      status: "Rejected",
      approvalDate: "2023-09-13",
      approvalTime: "11:45 AM",
    },
    {
      name: "Demo Document 3.pdf",
      status: "Pending",
      approvalDate: null,
      approvalTime: null,
    },
    {
      name: "Demo Document 3.pdf",
      status: "Pending",
      approvalDate: null,
      approvalTime: null,
    },
    {
      name: "Demo Document 3.pdf",
      status: "Pending",
      approvalDate: null,
      approvalTime: null,
    },
    {
      name: "Demo Document 3.pdf",
      status: "Pending",
      approvalDate: null,
      approvalTime: null,
    },
    {
      name: "Demo Document 4.doc",
      status: "Pending",
      approvalDate: null,
      approvalTime: null,
    },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Implement file upload logic here, and add uploaded document to the documents list
      setDocuments([
        ...documents,
        { name: selectedFile.name, status: "Pending" },
      ]);
      setSelectedFile(null);
    } else {
      // Display an error message for no file selected
    }
  };

  const handleApprove = (documentName) => {
    // Find the document by name and update its status to "Approved"
    const updatedDocuments = documents.map((doc) => {
      if (doc.name === documentName) {
        return { ...doc, status: "Approved" };
      }
      return doc;
    });
    setDocuments(updatedDocuments);
    // Update approval status for the document
    setDocumentApprovalStatus({
      ...documentApprovalStatus,
      [documentName]: "Approved",
    });
  };

  const handleReject = (documentName) => {
    // Find the document by name and update its status to "Rejected"
    const updatedDocuments = documents.map((doc) => {
      if (doc.name === documentName) {
        return { ...doc, status: "Rejected" };
      }
      return doc;
    });
    setDocuments(updatedDocuments);
    // Update approval status for the document
    setDocumentApprovalStatus({
      ...documentApprovalStatus,
      [documentName]: "Rejected",
    });
  };
  // Filter out pending documents
  const approvedAndRejectedDocuments = demoDocuments.filter(
    (document) =>
      document.status === "Approved" || document.status === "Rejected"
  );

  //   bar chart data
  const chartData = [
    {
      status: "Approved",
      count: demoDocuments.filter((doc) => doc.status === "Approved").length,
    },
    {
      status: "Rejected",
      count: demoDocuments.filter((doc) => doc.status === "Rejected").length,
    },
  ];

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Business Document Monitoring Dashboard
      </Typography>

      {/* Document Upload Section */}
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Document Upload
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input type="file" onChange={handleFileChange} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleUpload}>
              Upload
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Document List Section */}
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Document List
        </Typography>
        <List>
          {demoDocuments
            .filter((document) => document.status === "Pending")
            .map((document, index) => (
              <ListItem
                key={index}
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <ListItemText primary={document.name} />
                {document.status === "Pending" && (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleApprove(document.name)}
                      style={{ marginRight: "10px" }}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleReject(document.name)}
                    >
                      Reject
                    </Button>
                  </>
                )}
                {document.status !== "Pending" && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginLeft: "10px", fontWeight: "bold" }}
                  >
                    Status: {document.status}
                  </Typography>
                )}
              </ListItem>
            ))}
        </List>
      </Paper>

      {/* Approval Workflow Section */}
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Approval Workflow
        </Typography>
        <Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Document</TableCell>
                  <TableCell>Approval Status</TableCell>
                  <TableCell>Approval Date</TableCell>
                  <TableCell>Approval Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {approvedAndRejectedDocuments.map((document, index) => (
                  <TableRow key={index}>
                    <TableCell>{document.name}</TableCell>
                    <TableCell>{document.status}</TableCell>
                    <TableCell>{document.approvalDate}</TableCell>
                    <TableCell>{document.approvalTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
      {/* Bar Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveBar
          data={chartData}
          keys={["count"]}
          indexBy="status"
          margin={{ top: 30, right: 30, bottom: 50, left: 60 }}
          padding={0.7}
          colors={{ scheme: "set2" }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Count",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.9]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 30,
              itemHeight: 30,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          tooltip={({ id, value }) => (
            <strong>
              {id}: {value}
            </strong>
          )}
        />
      </div>
    </Container>
  );
};

export default MonitorBussnesse;
