import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Tabs,
  Tab,
  Box,
  TextField,
  Button,
  TextareaAutosize,
} from "@mui/material";
import HomepageSection from "../../components/HomepageSection";
import ContentPagesSection from "../../components/ContentPagesSection";
import LegalDocumentsSection from "../../components/LegalDocumentsSection";

const ContentManagement = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Content Management</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Paper square>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="secondary"
          >
            <Tab label="Homepage" />
            <Tab label="Content Pages" />
            <Tab label="Legal Documents" />
          </Tabs>
        </Paper>
        <TabPanel value={selectedTab} index={0}>
          {/* Homepage Banners and Featured Products */}
          {/* Implement the banner and featured products management here */}
          <HomepageSection />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          {/* Content Pages Management */}
          {/* Implement the content pages management here */}
          <ContentPagesSection />
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          {/* Legal Documents Management */}
          {/* Implement the legal documents management here */}
          <LegalDocumentsSection />
        </TabPanel>
      </Container>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default ContentManagement;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Container,
//   Typography,
//   Paper,
//   Grid,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
// } from "@material-ui/core";
// // import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: theme.spacing(3),
//   },
//   section: {
//     marginBottom: theme.spacing(3),
//   },
//   title: {
//     marginBottom: theme.spacing(2),
//   },
//   listItem: {
//     paddingRight: theme.spacing(8),
//   },
// }));

// const ContentManagement = () => {
//   const classes = useStyles();

//   return (
//     <Container className={classes.root}>
//       <Paper elevation={3} className={classes.section}>
//         <Typography variant="h6" className={classes.title}>
//           Manage Homepage Banners and Featured Products
//         </Typography>
//         {/* Your content for managing banners and products */}
//       </Paper>

//       <Paper elevation={3} className={classes.section}>
//         <Typography variant="h6" className={classes.title}>
//           Create and Manage Content Pages
//         </Typography>
//         {/* Your content for managing content pages */}
//       </Paper>

//       <Paper elevation={3} className={classes.section}>
//         <Typography variant="h6" className={classes.title}>
//           Update Terms and Conditions, Privacy Policy, etc.
//         </Typography>
//         {/* Your content for updating terms and policies */}
//       </Paper>

//       <Paper elevation={3} className={classes.section}>
//         <Typography variant="h6" className={classes.title}>
//           Upload Documents
//         </Typography>
//         {/* Your content for uploading documents */}
//       </Paper>
//     </Container>
//   );
// };

// export default ContentManagement;
