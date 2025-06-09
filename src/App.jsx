import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import Bio from "./components/Bio";
import { containerStyle } from "./components/styles";
import AddInfo from "./components/AddInfo";
import Expirience from "./components/Expirience";

const theme = createTheme({
	palette: {
		mode: "dark"
	}
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box sx={containerStyle}>
					<Header />
					<Bio />
					<Expirience />
					<AddInfo />
				</Box>
			</ThemeProvider>
		</>
	);
}

export default App;
