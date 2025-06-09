import { Box, IconButton, Link, Typography } from "@mui/material";
import { cardBoxStyle, linkStyle } from "./styles";
import { GitHub, Mail, Phone, Telegram } from "@mui/icons-material";

const contactsItems = [
  {
    id: "mail",
    icon: <Mail />,
    href: "mailto:nipapin@mail.ru",
  },
  {
    id: "telegram",
    icon: <Telegram />,
    href: "https://t.me/ni_papin",
  },
  {
    id: "github",
    icon: <GitHub />,
    href: "https://github.com/nipapin?tab=repositories",
  },
];

export default function Contacts() {
  return (
    <Box sx={{ ...cardBoxStyle, flexDirection: "column" }}>
      {contactsItems.map(({ icon, href, id }) => {
        return (
          <IconButton
            key={id}
            onClick={() => {
              window.open(href, "_blank");
            }}
          >
            {icon}
          </IconButton>
        );
      })}
    </Box>
  );
}
