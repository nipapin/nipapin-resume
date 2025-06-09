import { CasesOutlined, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, Divider, IconButton } from "@mui/material";
import { useState } from "react";
import BlockHeader from "./BlockHeader";
import { timelines } from "./TimeLine";
import { cardBoxStyle } from "./styles";

export default function Expirience() {
	const [showInfo, setShowInfo] = useState(true);
	const toggle = () => setShowInfo(!showInfo);
	return (
		<>
			<Box
				sx={{
					...cardBoxStyle,
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<BlockHeader
					text='Опыт работы'
					icon={<CasesOutlined />}
					sx={{ m: "0" }}
					action={
						<IconButton onClick={toggle} sx={{ ml: "auto" }}>
							{showInfo ? <ExpandLess /> : <ExpandMore />}
						</IconButton>
					}
				/>
			</Box>
			<Collapse in={showInfo} unmountOnExit>
				<Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
					{timelines.map((timeline, index) => {
						return (
							<Box
								sx={{
									...cardBoxStyle,
									flexDirection: "column",
									alignItems: "flex-start"
								}}
								key={index}
							>
								{timeline}
							</Box>
						);
					})}
				</Box>
			</Collapse>
		</>
	);
}
