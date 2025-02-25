import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("http://localhost:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));

    fetch("http://localhost:5000/api/2nd")
      .then((response) => response.json())
      .then((data2) => setMessage2(data2.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <AppBar className={"appbar"}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography>{message}</Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </List>
      </Drawer>

      <div>
        <h1>React + Express App</h1>
        TEST
        <AppBar className={"appbar"}></AppBar>
        <p>{message}</p>
        <p>{message2}</p>
      </div>
    </>
  );
}

export default App;
