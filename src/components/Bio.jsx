import { ExpandLess, ExpandMore, Person } from "@mui/icons-material";
import { Box, Collapse, IconButton } from "@mui/material";
import { useState } from "react";
import BlockHeader from "./BlockHeader";
import PersonalInfo from "./PersonalInfo";
import { cardBoxStyle } from "./styles";

export default function Bio() {
	const [showInfo, setShowInfo] = useState(true);
	const toggle = () => setShowInfo(!showInfo);
	return (
		<Box
			sx={{
				...cardBoxStyle,
				flexDirection: "column",
				alignItems: "flex-start"
			}}
		>
			<BlockHeader
				text='Личная информация'
				icon={<Person />}
				sx={{ m: 0 }}
				action={
					<IconButton onClick={toggle} sx={{ ml: "auto" }}>
						{showInfo ? <ExpandLess /> : <ExpandMore />}
					</IconButton>
				}
			/>
			<Collapse in={showInfo} unmountOnExit>
				<PersonalInfo />
			</Collapse>
		</Box>
	);
}
