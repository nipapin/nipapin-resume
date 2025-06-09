import { Box } from "@mui/material";
import Contacts from "./Contacts";
import Personal from "./Personal";

export default function Header() {
  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Personal />
      <Contacts />
    </Box>
  );
}
