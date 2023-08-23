import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  useMediaQueryDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Dialog,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProducts, mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useState } from "react";

const Reviews = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for mobile devices
  // State to manage the modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const handleReviewClick = (review) => {
    setSelectedReview(review);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedReview(null);
  };
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    // {
    //   field: "phone",
    //   headerName: "Phone Number",
    //   flex: 1,
    // },
    {
      field: "review",
      headerName: "Review",
      flex: 1,
      renderCell: ({ row }) => (
        <Typography
          style={{ cursor: "pointer" }}
          onClick={() => handleReviewClick(row.review)}
        >
          {row.review}
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row: { action } }) => {
        return (
          <Box
            width={isMobile ? "100%" : "60%"} // Adjust width based on device
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              action === "delete"
                ? colors.greenAccent[600]
                : // : action === "manager"
                  // ? colors.greenAccent[700]
                  colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {action === "delete" && <DeleteIcon />}
            {/* {action === "manager" && <SecurityOutlinedIcon />}
            {action === "user" && <LockOpenOutlinedIcon />} */}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {action}
            </Typography>
            <Dialog
              open={modalOpen}
              onClose={handleCloseModal}
              BackdropProps={{
                classes: {
                  root: "blurred-backdrop", // Apply a custom class
                },
              }}
            >
              <DialogTitle>Review Details</DialogTitle>
              <DialogContent>
                <Typography>{selectedReview}</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseModal} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Feedback and Reviews"
        subtitle="Managing the Feedback and Reviews"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataProducts}
          columns={columns}
          components={{
            NoRowsOverlay: isMobile ? MobileNoRowsOverlay : null,
          }}
        />
      </Box>
    </Box>
  );
};
const MobileNoRowsOverlay = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Typography>No rows</Typography>
    </div>
  );
};
export default Reviews;
