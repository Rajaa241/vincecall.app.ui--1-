import { Close, SearchRounded } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Box,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { doSearch } from "../actions/Actions";

export default function SearchPicker(props) {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (searchTerm && searchTerm.length > 1) {
      const data = {
        searchType: props.type,
        searchTerm: searchTerm
      };
      doSearch(data, handleSuccess, handleFailure, handleLoading);
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  const handleSelect = (element) => {
    props.onSelect(element);
    console.log(element);

  };

  const handleClear = () => { };

  const handleSuccess = (data) => {
    setData(data);
  };
  console.log(data);

  const handleFailure = (err) => {
    // props.onError(err);
  };

  const handleLoading = (state) => {
    setLoading(state);
  };

  return (
    <Box className="userpicker-box">
      <TextField
        label="Search by Username"
        fullWidth
        sx={{ marginTop: ".75rem" }}
        onChange={handleChange}
        value={searchTerm}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRounded fontSize="medium" sx={{ color: "#1C243C" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Close
                fontSize="small"
                sx={{ color: "#1C243C" }}
                onClick={(e) => {
                  setSearchTerm("");
                  setData([]);
                  handleClear();
                }}
              />
            </InputAdornment>
          ),
        }}
      />
      {data && data.length > 0 ? (
        <List
          component="div"
          disablePadding
          style={{
            backgroundColor: "aliceblue",
            zIndex: 999,
            maxHeight: "200px",
            overflow: "auto",
          }}
        >
          {data.map((element, key) => {
            return (
              <ListItemButton
                key={key}
                onClick={() => {
                  handleSelect(element);
                  setSearchTerm("");
                  setData([]);
                }}
              >
                <ListItemIcon>
                  <Avatar alt={element?.username } color="primary" src={element?.logo}/>
                </ListItemIcon>
                <ListItemText primary={element?.username ? (element?.firstname + " " + element?.lastname) : element?.title} />
              </ListItemButton>
            );
          })}
        </List>
      ) : (
        <></>
      )}
      {searchTerm.length > 1 && data.length === 0 && (
        <Alert severity="warning">
          No records found for given email {searchTerm}
        </Alert>
      )}
    </Box>
  );
}
