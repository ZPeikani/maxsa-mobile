import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React from 'react';
import TechnicalDetails from './technicalDetaile';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label=" Technical Details" {...a11yProps(0)} sx={{fontSize:"18px",fontWeight:"light",  textTransform: "none"}} />
          <Tab label="Similar Products" {...a11yProps(1)} sx={{fontSize:"18px",fontWeight:"light",  textTransform: "none"}} />
          <Tab label="Comments" {...a11yProps(2)} sx={{fontSize:"18px",fontWeight:"light",  textTransform: "none"}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TechnicalDetails/>
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      </CustomTabPanel> */}
    </Box>
  );
}