import { ExpandLess, ExpandMore, Info } from "@mui/icons-material";
import {
  Box,
  Collapse,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import BlockHeader from "./BlockHeader";
import { cardBoxStyle } from "./styles";

const items = [
  { text: "Служба в армии:служил" },
  { text: "Наличие водительских прав (категории):B" },
  {
    text: "Занятия в свободное время:Играю в рок-группе",
    link: "https://music.yandex.ru/artist/17424791",
  },
  {
    text: "Личные качества:Энергичность, инициативность, самостоятельность, ответственность, коммуникабельность, быстрая обучаемость",
  },
];

export default function AddInfo() {
  const [showInfo, setShowInfo] = useState(true);
  const toggle = () => setShowInfo(!showInfo);

  return (
    <Box
      sx={{
        ...cardBoxStyle,
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <BlockHeader
        text="Дополнительная информация"
        icon={<Info />}
        sx={{ m: 0 }}
        action={
          <IconButton onClick={toggle} sx={{ ml: "auto" }}>
            {showInfo ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        }
      />
      <Collapse in={showInfo} unmountOnExit>
        <List>
          {items.map(({ text, link }) => {
            const [title, info] = text.split(":");
            return (
              <ListItem key={title} sx={{ borderLeft: "1px solid #90caf9" }}>
                <ListItemText
                  primary={title}
                  secondary={link ? <Link href={link}>{info}</Link> : info}
                ></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </Box>
  );
}
