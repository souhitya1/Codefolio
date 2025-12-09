import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleclose = () => {
    setAnchorEl(null);
    window.location.href = "http://localhost:5173/";
  }
  function handleroad(){
    window.location.href= "/roadmap";
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
            marginLeft: "70px",
            marginTop: "20px",
            backgroundColor: "#4A90E2",
            color: "#FFFFFF"
        }}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleclose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleclose}>Go to Home</MenuItem>
        <MenuItem onClick={handleroad}>Roadmap</MenuItem>
      </Menu>
    </div>
  );
}