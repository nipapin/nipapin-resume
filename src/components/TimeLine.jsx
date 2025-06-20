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
		title: "Кушать подано|2021-2022",
		about: "эко-система для столовой",
		description:
			"Создание и ведение web-приложения «Кушать подано», полная автоматизация процессов, кассовое приложение для составления меню, панель администрирования для настройки и редактирования блюд, менеджмент кухни, уведомления о поступлении заказов, онлайн-меню, обновление в реальном времени.",
		link: null,
		actionIcon: <Info />,
		tech: "ReactJS|Functional Components|css|js|html|MaterialUI|Firebase (Firestore, Auth, Storage)",
		anno: "Так как сервис не имеет клиентской части, могу показать при помощи github-репозитория"
	},
	{
		id: 2,
		title: "РБ Полюс|2022-2023",
		about: "сервис для расчета стоимости рекламной кампании",
		description:
			"Web-приложение для рекламной компании «РБ Полюс», калькулятор для расчета стоимости рекламной кампании онлайн, моментальный расчет, более 150 параметров, охват более 10 регионов, 19 городов, клиентское приложение, панель администрирования, база входящих ответов, выгрузка расчета как в графическом варианте, так и в формате XLSX.Также создавал лендинг-страницы в Тильда. В период с апреля 2022 по сентябрь 2022, продажи в сегменте интернет-реклама выросли с 200 000 р в месяц до 1 000 000 рублей в месяц.",
		link: null,
		actionIcon: <Info />,
		tech: "vite|ReactJS|Functional Components|css|js|html|MaterialUI|Firebase (Firestore, Auth, Storage)|XLSX.js|Konva.js|Yandex Cloud",
		anno: "На данный момент сервис не работает, так как компания отказалась от использования. Есть возможность показать при помощи github-репозитория"
	},
	{
		id: 3,
		title: "Podshipnikoff|2023-2024",
		about: "сервис для продажи подшипников в России",
		description:
			"Интернет-магазин для продажи подшипников в России, созданный на Next.js. Также была реализована система отправки запросов на почту и собственная CRM-система для управления заказами и продукцией.",
		link: null,
		actionIcon: <Info />,
		tech: "Next.js|Typescript|@mui/material|Postgres|node|node-mailer|socket.io|Yandex Cloud|NGINX",
		anno: "На данный момент сервис не работает, так как компания отказалась от использования. Есть возможность показать при помощи github-репозитория"
	},
	{
		id: 4,
		title: "AtomX|2024-2025",
		about: "пожжержка и создание расширений для Adobe",
		description:
			"Помогаю клиентам с техническим обеспечением расширений для Adobe, а также создаю собственные расширения для автоматизации проектов в After Effects и Premiere Pro",
		link: "https://get-atomx.com",
		actionIcon: <OpenInNew />,
		tech: "HMTL|CSS|VanilaJS|Adobe Premiere Pro API|Adobe After Effects API|OSAScript|C++",
		anno: null
	},
	{
		id: 5,
		title: "Odin Pro|2024-2025",
		about: "коммерческий сайт для зарубежного блогера по продаже расширения для Premiere Pro",
		description: "Создал сайт для зарубежного блогера Premiere Basics для продажи расширения с системой переходов для Premiere Pro",
		link: "https://odin-pro.com",
		actionIcon: <OpenInNew />,
		tech: "Next.js|Typescript|@mui/material|Postgres|node|node-mailer|socket.io|Yandex Cloud|NGINX|PM2",
		anno: null
	},
	{
		id: 6,
		title: "Ione|2024-2025",
		about: "создание и поддержка сценариев для автоматизации процессов в After Effects",
		description: "Создаю и поддерживаю сценарии для автоматизации процессов в After Effects по запросу дизайнеров и авторов",
		link: null,
		actionIcon: <Info />,
		tech: "Bolt-CEP|Adobe After Effects API|ReactJS|Typescript|@mui/material",
		anno: "Все они есть на github, но в основном они не доступны для показа только по запросу"
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
			<Typography sx={{ fontSize: "1.5em", m: "8px 0", fontWeight: "bolder" }}>2021-{new Date().getFullYear()}</Typography>
			<Typography>В 2019 году я оформил самозанятость, после ухода с телевидения работал в сфере дизайна и web-программирования.</Typography>
			<Typography color='primary'>Примеры работ:</Typography>
			<List>
				{works.map(({ id, title, description, about, actionIcon, link, anno, tech }) => {
					const clickHandle = (e) => {
						link ? window.open(link, "_blank") : setAnchorEl(e.target);
					};

					const [titleText, titleYear] = title.split("|");

					return (
						<Card sx={{ m: "4px 0" }} key={id}>
							<CardHeader
								title={
									<Box sx={{ display: "flex", alignItems: "center", gap: "8px", pb: "8px" }}>
										<Typography fontWeight='bolder'>{titleText}</Typography>
										<Chip label={titleYear} size='small' color='primary' />
									</Box>
								}
								subheader={about}
								action={<IconButton onClick={clickHandle}>{actionIcon}</IconButton>}
							/>
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
			<Divider sx={{ m: "8px 0" }} />
			<Typography>
				В последнее время активно изучаю нейронные сети <strong>(Whisper, Elevenlabs, Deepseek)</strong> и их применение в веб-разработке, а также в
				автоматизации продуктов Adobe
			</Typography>
		</Box>
	);
}
const timelines = [timeline_001, timeline_002, <Template />];
export { timelines };
