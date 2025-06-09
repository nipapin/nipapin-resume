import { Code, Info, OpenInNew } from "@mui/icons-material";
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Chip,
	Divider,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Popover,
	Typography
} from "@mui/material";
import { useState } from "react";

const scripts = [
	{ name: "Paragraph v 2.0", link: "https://vk.com/wall-37009417_4863", id: 1 },
	{
		name: "Mask/Shape Extrude",
		link: "https://vk.com/wall-37009417_4796",
		id: 2
	}
];

const works = [
	{
		id: 1,
		title: "Кушать подано",
		about: "эко-система для столовой",
		description:
			"Создание и ведение web-приложения «Кушать подано», полная автоматизация процессов, кассовое приложение для составления меню, панель администрирования для настройки и редактирования блюд, менеджмент кухни, уведомления о поступлении заказов, онлайн-меню, обновление в реальном времени.",
		link: null,
		actionIcon: <Info />,
		tech: "ReactJS|Functional Components|css|js|html|MaterialUI|Firebase (Firestore, Auth, Storage)",
		anno: "Так как сервис не имеет клиентской части, могу показать при помощи трансляции экрана"
	},
	{
		id: 2,
		title: "РБ Полюс",
		about: "сервис для расчета стоимости рекламной кампании",
		description:
			"Web-приложение для рекламной компании «РБ Полюс», калькулятор для расчета стоимости рекламной кампании онлайн, моментальный расчет, более 150 параметров, охват более 10 регионов, 19 городов, клиентское приложение, панель администрирования, база входящих ответов, выгрузка расчета как в графическом варианте, так и в формате XLSX.Также создавал лендинг-страницы в Тильда. В период с апреля 2022 по сентябрь 2022, продажи в сегменте интернет-реклама выросли с 200 000 р в месяц до 1 000 000 рублей в месяц.",
		link: "https://www.rb-polus.ru/algorithm",
		actionIcon: <OpenInNew />,
		tech: "vite|ReactJS|Functional Components|css|js|html|MaterialUI|Firebase (Firestore, Auth, Storage)|XLSX.js|Konva.js|Yandex Cloud"
	}
];

const timeline_001 = (
	<Box sx={{ width: "100%" }}>
		<Typography sx={{ fontSize: "1.5em", m: "8px 0", fontWeight: "bolder" }}>2015-2019</Typography>
		<Typography>
			Свой путь программиста начал со скриптов в <span style={{ color: "#90caf9" }}>Adobe After Effects</span>, в 2016 году.
			<br />Я состою в числе админов группы <Link href='https://vk.com/ae_exp'>Ae_Expression</Link>
		</Typography>
		<Typography color='primary'>Примеры работ:</Typography>
		<List>
			{scripts.map(({ link, id, name }) => {
				const clickHandle = () => window.open(link, "_blank");
				return (
					<ListItem disablePadding key={id}>
						<ListItemButton onClick={clickHandle} dense>
							<ListItemIcon>
								<Code />
							</ListItemIcon>
							<ListItemText primary={name} />
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	</Box>
);

const timeline_002 = (
	<Box>
		<Typography sx={{ fontSize: "1.5em", m: "8px 0", fontWeight: "bolder" }}>2019-2021</Typography>
		<Typography>
			Помимо программирования, большую часть своей карьеры я работал дизайнером.
			<br /> В эти годы я работал на телевидении
			<span style={{ color: "#90caf9" }}> ГТРК «Калининград»</span>, за 2 года работы создал сервис по быстрому созданию сторис в инстаграм, а также
			экстеншен для Adobe After Effects для парсинга прогноза погоды.
			<br />К сожалению по NDA, исходный код остался у компании.
		</Typography>
	</Box>
);

function Template() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	return (
		<Box>
			<Typography sx={{ fontSize: "1.5em", m: "8px 0", fontWeight: "bolder" }}>2021-2023</Typography>
			<Typography>В 2019 году я оформил самозанятость, после ухода с телевидения работал в сфере дизайна и web-программирования.</Typography>
			<Typography color='primary'>Примеры работ:</Typography>
			<List>
				{works.map(({ id, title, description, about, actionIcon, link, anno, tech }) => {
					const clickHandle = (e) => {
						link ? window.open(link, "_blank") : setAnchorEl(e.target);
					};

					return (
						<Card sx={{ m: "4px 0" }} key={id}>
							<CardHeader title={title} subheader={about} action={<IconButton onClick={clickHandle}>{actionIcon}</IconButton>} />
							<Divider />
							<CardContent>
								<Typography>{description}</Typography>
								<Typography color='primary'>Используемые технологии</Typography>
								<Box
									sx={{
										display: "flex",
										gap: "8px",
										flexWrap: "wrap",
										m: "8px 0"
									}}
								>
									{tech.split("|").map((element) => {
										return <Chip label={element} key={element} />;
									})}
								</Box>
							</CardContent>
							{anno && (
								<Popover
									open={open}
									anchorEl={anchorEl}
									onClose={() => setAnchorEl(null)}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "right"
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "right"
									}}
								>
									<Typography sx={{ maxWidth: "256px", p: "8px" }}>{anno}</Typography>
								</Popover>
							)}
						</Card>
					);
				})}
			</List>
		</Box>
	);
}
const timelines = [timeline_001, timeline_002, <Template />];
export { timelines };
