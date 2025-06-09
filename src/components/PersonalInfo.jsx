import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const personalies = [
  "Гражданство:Российская Федерация",
  "Образование:Высшее неполное",
  "Дата рождения:2 мая 1995 (28 лет)",
  "Пол:Мужской",
  "Семейное положение:Холост",
];

export default function PersonalInfo() {
  return (
    <Box>
      <List>
        {personalies.map((item) => {
          const [title, text] = item.split(":");
          return (
            <ListItem key={title} sx={{ borderLeft: "1px solid #90caf9" }}>
              <ListItemText primary={title} secondary={text}></ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

//sx={{ p: "8px", width: "100%" }}
