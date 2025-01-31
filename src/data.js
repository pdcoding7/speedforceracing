import React from "react";
// import * as FaIcons from 'react-icons/fa'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Home",
		path: "#home",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Calendar",
		path: "#calendar",
		icon: <AiIcons.AiFillCalendar />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Standings",
		path: "#standings",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Past Streams",
		path: "#pastStreams",
		icon: <AiIcons.AiFillVideoCamera />,
	},
	{
		title: "Gallery",
		path: "#gallery",
		icon: <AiIcons.AiFillCamera />,
	},
	{
		title: "Hall of Fame",
		path: "#hallOfFame",
		icon: <AiIcons.AiFillCrown />,
	},
];

export const pageLinks = [
	{ id: 1, href: "#home", text: "home" },
	{ id: 2, href: "#calendar", text: "calendar" },
	{ id: 3, href: "#standings", text: "standings" },
	{ id: 4, href: "#pastStreams", text: "past streams" },
	{ id: 5, href: "#gallery", text: "gallery" },
	{ id: 6, href: "#hallOfFame", text: "hall of fame" },
];

export const socialLinks = [
	{
		id: 1,
		href: "https://www.facebook.com/SpeedForceRacingPS4/",
		icon: "fab fa-facebook",
	},
	{
		id: 2,
		href: "https://twitter.com/SFRps4",
		icon: "fab fa-twitter",
	},
	{
		id: 3,
		href: "https://discord.gg/8hB3MMfGy4",
		icon: "fab fa-discord",
	},
];

export const currentHofConfig = [
	{
		id: 15,
		season: "15",
		src: "/images/hof-s15.png",
	},
	{
		id: 14,
		season: "14",
		src: "/images/hof-s14.png",
	},
];

export const hofConfig = [
	{
		id: 13,
		season: "13",
		src: "/images/hof-s13.png",
	},
	{
		id: 12,
		season: "12",
		src: "/images/hof-s12.png",
	},
	{
		id: 11,
		season: "11",
		src: "/images/hof-s11.png",
	},
	{
		id: 10,
		season: "10",
		src: "/images/hof-s10.png",
	},
	{
		id: 9,
		season: "9",
		src: "/images/hof-s9.png",
	},
	{
		id: 8,
		season: "8",
		src: "/images/hof-s8.png",
	},
	{
		id: 7,
		season: "7",
		src: "/images/hof-s7.png",
	},
	{
		id: 6,
		season: "6",
		src: "/images/hof-s6.png",
	},
	{
		id: 5,
		season: "5",
		src: "/images/hof-s5.png",
	},
	{
		id: 4,
		season: "4",
		src: "/images/hof-s4.png",
	},
	{
		id: 3,
		season: "3",
		src: "/images/hof-s3.png",
	},
	{
		id: 2,
		season: "2",
		src: "/images/hof-s2.png",
	},
	{
		id: 1,
		season: "1",
		src: "/images/hof-s1.png",
	},
];

export const gp1Slider = [
	{
		id: 1,
		imgPath: "/images/lights-out.jpg",
		desc: "And it's lights out and away we go at Bahrain for the opening race of Season 14!",
	},
	{
		id: 2,
		imgPath: "/images/kierannn.jpg",
		desc: "The McLaren of Kierannnn_88 in the lead of the Bahrain GP, with his teammate in tow - Bahrain Rnd 1",
	},
	{
		id: 3,
		imgPath: "/images/alpha-line.jpg",
		desc: "RogueSmithy dragging his car home as he runs out of fuel - Bahrain Rnd 1",
	},
];

export const streamConfig = [
	{
		id: 1,
		src: "https://www.youtube.com/embed/rc4voXSXwTw",
		title: "Div 1 - Rnd 2 - Hungary",
	},
	{
		id: 2,
		src: "https://www.youtube.com/embed/8tl1cWIhvrk",
		title: "Div 2 - Rnd 2 - Hungary",
	},
	{
		id: 3,
		src: "https://www.youtube.com/embed/dFVmye6caTY",
		title: "Div 3 - Rnd 2 - Hungary",
	},
	{
		id: 4,
		src: "https://www.youtube.com/embed/nvGmIxz7zY4",
		title: "Div 4 - Rnd 2 - Hungary",
	},
];

export const mergedStandingsConfig = [
	//Division 1

	{
		id: 1,
		position: "1",
		league: 1,
		name: "rising_star1115",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "22",
	},
	{
		id: 2,
		position: "2",
		league: 1,
		name: "CT_Noldus",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "18",
	},
	{
		id: 3,
		position: "3",
		league: 1,
		name: "Fireblaze95_",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "16",
	},
	{
		id: 4,
		position: "4",
		league: 1,
		name: "TTVKaname",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "15",
	},
	{
		id: 5,
		position: "5",
		league: 1,
		name: "OWR_BareRemi",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "14",
	},
	{
		id: 6,
		position: "6",
		league: 1,
		name: "DF_Laser",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "13",
	},
	{
		id: 7,
		position: "7",
		league: 1,
		name: "Rac1ngn0m1a",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "12",
	},
	{
		id: 8,
		position: "8",
		league: 1,
		name: "Ickle_33",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "11",
	},
	{
		id: 9,
		position: "9",
		league: 1,
		name: "pocketvalleyguy",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "10",
	},
	{
		id: 10,
		position: "10",
		league: 1,
		name: "cricab06_",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "9",
	},
	{
		id: 11,
		position: "11",
		league: 1,
		name: "OWR_LordDannyBoy",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "8",
	},

	{
		id: 12,
		position: "12",
		league: 1,
		name: "OWR_Draugen",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "1",
		points: "7",
	},
	{
		id: 13,
		position: "13",
		league: 1,
		name: "IRS_Floriann",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "6",
	},
	{
		id: 14,
		position: "14",
		league: 1,
		name: "TNR_Lanfjell",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "5",
	},
	{
		id: 15,
		position: "15",
		league: 1,
		name: "mdj2002mdj",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "4",
	},
	{
		id: 16,
		position: "16",
		league: 1,
		name: "bluerocket05",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 17,
		position: "17",
		league: 1,
		name: "OWR_Harry_Kane05",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 18,
		position: "18",
		league: 1,
		name: "SHZ_JensenR",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 19,
		position: "19",
		league: 1,
		name: "MSA_Samad",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 20,
		position: "20",
		league: 1,
		name: "EVE_Nico05",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},

	//Division 2

	{
		id: 21,
		position: "1",
		league: 2,
		name: "Bur-Meister",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "1",
		podiums: "1",
		fastest: "",
		points: "25",
	},
	{
		id: 22,
		position: "2",
		league: 2,
		name: "Yarham",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "22",
	},
	{
		id: 23,
		position: "3",
		league: 2,
		name: "Yousef",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "1",
		fastest: "1",
		points: "21",
	},
	{
		id: 24,
		position: "4",
		league: 2,
		name: "Klusser40",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "18",
	},
	{
		id: 25,
		position: "5",
		league: 2,
		name: "OWR_Atlascopo",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "16",
	},
	{
		id: 26,
		position: "6",
		league: 2,
		name: "ElectroDan",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "15",
	},
	{
		id: 27,
		position: "7",
		league: 2,
		name: "OWR_Emils1991",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "14",
	},
	{
		id: 28,
		position: "8",
		league: 2,
		name: "Aydams1",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "13",
	},
	{
		id: 29,
		position: "9",
		league: 2,
		name: "VeloceAyubJr",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "12",
	},
	{
		id: 30,
		position: "10",
		league: 2,
		name: "Mansell-_-19",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "11",
	},
	{
		id: 31,
		position: "11",
		league: 2,
		name: "Utkarsh_xlri",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "10",
	},
	{
		id: 32,
		position: "12",
		league: 2,
		name: "neymarmig11",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "9",
	},
	{
		id: 33,
		position: "13",
		league: 2,
		name: "SFR_OliverF1",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "8",
	},
	{
		id: 34,
		position: "14",
		league: 2,
		name: "OWR_Xenon",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "7",
	},
	{
		id: 35,
		position: "15",
		league: 2,
		name: "LORDALAM786",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 36,
		position: "16",
		league: 2,
		name: "Kris Big Pro",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 37,
		position: "17",
		league: 2,
		name: "Mindful_Wasp",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 38,
		position: "18",
		league: 2,
		name: "Caspinjo_22",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 39,
		position: "19",
		league: 2,
		name: "SFR_Mhartin",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 40,
		position: "20",
		league: 2,
		name: "LordBradTheTopG",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},

	// Division 3

	{
		id: 41,
		position: "1",
		league: 3,
		name: "SFR_Energydan",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "1",
		podiums: "2",
		fastest: "",
		points: "45",
	},
	{
		id: 42,
		position: "2",
		league: 3,
		name: "OWR_Prberli",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "40",
	},
	{
		id: 43,
		position: "3",
		league: 3,
		name: "MrWiggles",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "37",
	},
	{
		id: 44,
		position: "4",
		league: 3,
		name: "OWR_Halvor",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "30",
	},
	{
		id: 45,
		position: "5",
		league: 3,
		name: "Cassidy1690",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "1",
		points: "30",
	},
	{
		id: 46,
		position: "6",
		league: 3,
		name: "Skanny",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "29",
	},
	{
		id: 47,
		position: "7",
		league: 3,
		name: "OWR_Mithrandir",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "26",
	},
	{
		id: 48,
		position: "8",
		league: 3,
		name: "OWR_Staink",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "1",
		podiums: "1",
		fastest: "1",
		points: "26",
	},
	{
		id: 49,
		position: "9",
		league: 3,
		name: "xelliecx",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "25",
	},
	{
		id: 50,
		position: "10",
		league: 3,
		name: "AbdallaAyman20",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "24",
	},
	{
		id: 51,
		position: "11",
		league: 3,
		name: "SFR_Keefs",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "22",
	},
	{
		id: 52,
		position: "12",
		league: 3,
		name: "PresidentElite",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "18",
	},
	{
		id: 53,
		position: "13",
		league: 3,
		name: "OWR_Ronny",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "17",
	},
	{
		id: 54,
		position: "14",
		league: 3,
		name: "GEVI_Orieuglas",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "14",
	},
	{
		id: 55,
		position: "15",
		league: 3,
		name: "OWR_Shaggy_P",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "13",
	},
	{
		id: 56,
		position: "16",
		league: 3,
		name: "SFR_MADG",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "11",
	},
	{
		id: 57,
		position: "17",
		league: 3,
		name: "OWR_BenKlock",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "9",
	},
	{
		id: 58,
		position: "18",
		league: 3,
		name: "Btlwakeyjoe",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "4",
	},
	{
		id: 59,
		position: "19",
		league: 3,
		name: "TigerBuka",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},

	// Division 4

	{
		id: 61,
		position: "1",
		league: 4,
		name: "SFR_thevicar",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "1",
		podiums: "2",
		fastest: "1",
		points: "48",
	},
	{
		id: 62,
		position: "2",
		league: 4,
		name: "SFR_Doran",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "1",
		podiums: "1",
		fastest: "",
		points: "43",
	},
	{
		id: 63,
		position: "3",
		league: 4,
		name: "BillyG1977",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "42",
	},
	{
		id: 64,
		position: "4",
		league: 4,
		name: "Jonmowbs",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "1",
		points: "33",
	},
	{
		id: 65,
		position: "5",
		league: 4,
		name: "OWR_Preb1",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "29",
	},
	{
		id: 66,
		position: "6",
		league: 4,
		name: "OWR_Silverfox",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "27",
	},
	{
		id: 67,
		position: "7",
		league: 4,
		name: "OWR_AlexHaug",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "25",
	},
	{
		id: 68,
		position: "8",
		league: 4,
		name: "DylanVince",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "25",
	},
	{
		id: 69,
		position: "9",
		league: 4,
		name: "SFR_Simmo007",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "22",
	},
	{
		id: 70,
		position: "10",
		league: 4,
		name: "Knightcreed11",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "21",
	},
	{
		id: 71,
		position: "11",
		league: 4,
		name: "Dom9180",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "20",
	},
	{
		id: 72,
		position: "12",
		league: 4,
		name: "redoubts",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "19",
	},
	{
		id: 73,
		position: "13",
		league: 4,
		name: "brassmonkies",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "17",
	},
	{
		id: 74,
		position: "14",
		league: 4,
		name: "DanKDLaa",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "16",
	},
	{
		id: 75,
		position: "15",
		league: 4,
		name: "Smothoperater17",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "6",
	},
];

export const mergedConstructorsConfig = [
	{
		id: 1,
		position: "1",
		league: 1,
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		points: "35",
	},
	{
		id: 2,
		position: "2",
		league: 1,
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "1",
		points: "31",
	},
	{
		id: 3,
		position: "3",
		league: 1,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		points: "26",
	},
	{
		id: 4,
		position: "4",
		league: 1,
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "23",
	},
	{
		id: 5,
		position: "5",
		league: 1,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "22",
	},
	{
		id: 6,
		position: "6",
		league: 1,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		points: "22",
	},
	{
		id: 7,
		position: "7",
		league: 1,
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		points: "16",
	},
	{
		id: 8,
		position: "8",
		league: 1,
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		points: "16",
	},
	{
		id: 9,
		position: "9",
		league: 1,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		points: "14",
	},
	{
		id: 10,
		position: "10",
		league: 1,
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		points: "11",
	},

	// Division 2

	{
		id: 11,
		position: "1",
		league: 2,
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		points: "40",
	},
	{
		id: 12,
		position: "2",
		league: 2,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "1",
		points: "33",
	},
	{
		id: 13,
		position: "3",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		league: 2,
		wins: "",
		points: "33",
	},
	{
		id: 14,
		position: "4",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		league: 2,
		wins: "",
		points: "26",
	},
	{
		id: 15,
		position: "5",
		league: 2,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "25",
	},
	{
		id: 16,
		position: "6",
		league: 2,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		points: "23",
	},
	{
		id: 17,
		position: "7",
		league: 2,
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		points: "21",
	},
	{
		id: 18,
		position: "8",
		league: 2,
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		points: "0",
	},
	{
		id: 19,
		position: "9",
		league: 2,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		points: "0",
	},
	{
		id: 20,
		position: "10",
		league: 2,
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		points: "0",
	},

	// Division 3

	{
		id: 1,
		position: "2",
		league: 3,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "1",
		points: "67",
	},
	{
		id: 22,
		position: "2",
		league: 3,
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		points: "66",
	},
	{
		id: 23,
		position: "3",
		league: 3,
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "1",
		points: "56",
	},
	{
		id: 24,
		position: "4",
		league: 3,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		points: "54",
	},
	{
		id: 5,
		position: "4",
		league: 3,
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		points: "48",
	},
	{
		id: 26,
		position: "6",
		league: 3,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		points: "34",
	},
	{
		id: 27,
		position: "7",
		league: 3,
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		points: "33",
	},
	{
		id: 28,
		position: "8",
		league: 3,
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "30",
	},
	{
		id: 29,
		position: "9",
		league: 3,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		points: "18",
	},
	{
		id: 30,
		position: "10",
		league: 3,
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		points: "14",
	},

	// Division 4

	{
		id: 31,
		position: "1",
		league: 4,
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "1",
		points: "85",
	},
	{
		id: 32,
		position: "2",
		league: 4,
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "1",
		points: "81",
	},
	{
		id: 33,
		position: "3",
		league: 4,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		points: "56",
	},
	{
		id: 34,
		position: "4",
		league: 4,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "42",
	},
	{
		id: 35,
		position: "5",
		league: 4,
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		points: "41",
	},
	{
		id: 36,
		position: "6",
		league: 4,
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		points: "36",
	},
	{
		id: 37,
		position: "7",
		league: 4,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		points: "27",
	},
	{
		id: 38,
		position: "8",
		league: 4,
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		points: "25",
	},
	{
		id: 39,
		position: "9",
		league: 4,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		points: "0",
	},
	{
		id: 40,
		position: "10",
		league: 4,
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		points: "0",
	},
];

export const constructorsAllConfig = [
	{
		id: 1,
		position: "1",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 2,
		position: "2",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 3,
		position: "3",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 4,
		position: "4",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 5,
		position: "5",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 6,
		position: "6",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 7,
		position: "7",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 8,
		position: "8",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 9,
		position: "9",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 10,
		position: "10",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		div1: "",
		div2: "",
		div3: "",
	},
];
