import { AppBar, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");

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
    <div>
      <h1>React + Express App</h1>
      TEST
      <AppBar className={"appbar"}>
        <Toolbar>
          <Typography>{message}</Typography>
        </Toolbar>
      </AppBar>
      <p>{message}</p>
      <p>{message2}</p>
    </div>
  );
}

export default App;
