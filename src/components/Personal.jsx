import { Avatar, Box, IconButton, Typography } from "@mui/material";
import me from "../assets/me.jpg";
import { cardBoxStyle } from "./styles";
import { GitHub, Telegram } from "@mui/icons-material";

export default function Personal() {
  return (
    <Box sx={{ ...cardBoxStyle, flex: 3 }}>
      <Avatar src={me} sx={{ minWidth: "96px", minHeight: "96px" }} />
      <Box sx={{ ml: "16px" }}>
        <Typography sx={{ fontSize: "1.5em", fontWeight: "bold" }}>
          Папин Никита Александрович
        </Typography>
        <Typography>Frontend-Developer</Typography>
        <Typography>г. Калининград</Typography>
      </Box>
    </Box>
  );
}
