// import TextField from "@material-ui/core/TextField/TextField";
import { TextField } from "@material-ui/core";

export default function SearchBar() {
  return (
    <div className="w-full">
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      fullWidth={true}
    />
    </div>
  );
}
