import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";

export default function SearchBar() {
    return (
        <Box
        // component="form"
        // sx={{
        //   '& > :not(style)': { m: 1, width: '25ch' },
        // }}
        // noValidate
        // autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    );
  }