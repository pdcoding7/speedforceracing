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
		// subNav: [
		//   {
		//     title: "GP1",
		//     path: "#gp1Standings",
		//     icon: <IoIcons.IoIosPaper />,
		//   },
		//   {
		//     title: "GP2",
		//     path: "#gp2Standings",
		//     icon: <IoIcons.IoIosPaper />,
		//   },
		// ],
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

export const raceResultsDiv1 = [
	{
		id: 1,
		season: "18",
		src: "/images/div1-race-result-rnd-8.png",
	},
];

export const raceResultsDiv2 = [
	{
		id: 1,
		season: "18",
		src: "/images/div2-race-result-rnd-8.png",
	},
];

export const constructorsGraphicGp1 = [
	{
		id: 1,
		season: "18",
		src: "/images/div-1-constructors-rnd-8.png",
	},
];

export const constructorsGraphic = [
	{
		id: 1,
		season: "18",
		src: "/images/div-2-constructors-rnd-8.png",
	},
];

export const constructorsAllGraphic = [
	{
		id: 1,
		season: "18",
		src: "/images/div-all-constructors-rnd-8.png",
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
		src: "https://www.youtube.com/embed/jvOInz86jb4?si=mdDkeG3yhIOLfvEJ",
		title: "Div 1 - Rnd 4 - Hungary",
	},
	{
		id: 2,
		src: "https://www.youtube.com/embed/fIL6eGbmG3U?si=L4XLqdS6yGCsTtP5",
		title: "Div 2 - Rnd 4 - Hungary",
	},
	{
		id: 3,
		src: "https://www.youtube.com/embed/xekezTTKkIE?si=bd99w_E4N-e7ofFP",
		title: "Div 3 - Rnd 4 - Hungary",
	},
];

export const mergedStandingsConfig = [
	{
		id: 1,
		position: "1",
		league: 1,
		name: "Ramavaj",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "1",
		podiums: "1",
		fastest: "",
		points: "41",
	},
	{
		id: 2,
		position: "2",
		league: 1,
		name: "Hazara",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "1",
		fastest: "1",
		points: "41",
	},
	{
		id: 3,
		position: "3",
		league: 1,
		name: "Brabit029",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "36",
	},
	{
		id: 4,
		position: "4",
		league: 1,
		name: "Glock4495",
		team: "Mercedes",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "34",
	},
	{
		id: 5,
		position: "5",
		league: 1,
		name: "OWR_Harry_Kane",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "1",
		podiums: "1",
		fastest: "1",
		points: "26",
	},
	{
		id: 6,
		position: "6",
		league: 1,
		name: "TNR_Langfjell",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "26",
	},
	{
		id: 7,
		position: "7",
		league: 1,
		name: "CT_Noldus",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "24",
	},
	{
		id: 8,
		position: "8",
		league: 1,
		name: "VFR_Laser24",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "20",
	},
	{
		id: 9,
		position: "9",
		league: 1,
		name: "Smoke_FX_44",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "20",
	},
	{
		id: 10,
		position: "10",
		league: 1,
		name: "Spraynpray0205",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "15",
	},
	{
		id: 11,
		position: "11",
		league: 1,
		name: "RSIIMarky",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "12",
	},

	{
		id: 12,
		position: "12",
		league: 1,
		name: "BRS_Melnes",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "10",
	},
	{
		id: 13,
		position: "13",
		league: 1,
		name: "RogueSmithy23",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "10",
	},
	{
		id: 14,
		position: "14",
		league: 1,
		name: "OWR_BareRemi",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "9",
	},
	{
		id: 15,
		position: "15",
		league: 1,
		name: "OWR_LordDannyBoy",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "7",
	},
	{
		id: 16,
		position: "16",
		league: 1,
		name: "SFR-OliverF1",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 17,
		position: "17",
		league: 1,
		name: "Liammm109",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 18,
		position: "18",
		league: 1,
		name: "Utkarsh_XLRI",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 19,
		position: "19",
		league: 1,
		name: "FNR_Simon",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 21,
		position: "1",
		league: 2,
		name: "SFRCalvin_Racing",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "1",
		podiums: "2",
		fastest: "",
		points: "72",
	},
	{
		id: 22,
		position: "2",
		league: 2,
		name: "Cassidy1690",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "1",
		fastest: "1",
		points: "68",
	},
	{
		id: 23,
		position: "3",
		league: 2,
		name: "SFR_SonicHawk",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "1",
		podiums: "1",
		fastest: "",
		points: "63",
	},
	{
		id: 24,
		position: "4",
		league: 2,
		name: "Aydams1",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "61",
	},
	{
		id: 25,
		position: "5",
		league: 2,
		name: "SFR_MADG",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "61",
	},
	{
		id: 26,
		position: "6",
		league: 2,
		name: "SFR_Keefs",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "1",
		podiums: "1",
		fastest: "1",
		points: "57",
	},
	{
		id: 27,
		position: "7",
		league: 2,
		name: "Mansell-_-19",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "50",
	},
	{
		id: 28,
		position: "8",
		league: 2,
		name: "SFR-EnergyDan",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "49",
	},
	{
		id: 29,
		position: "9",
		league: 2,
		name: "Klusser40",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "48",
	},
	{
		id: 30,
		position: "10",
		league: 2,
		name: "OWR_Atlascopo",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "48",
	},
	{
		id: 31,
		position: "11",
		league: 2,
		name: "Mindful_Wasp",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "46",
	},
	{
		id: 32,
		position: "12",
		league: 2,
		name: "SFR_Mhartin",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "1",
		podiums: "1",
		fastest: "",
		points: "45",
	},
	{
		id: 33,
		position: "13",
		league: 2,
		name: "OWR_Ronny",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "28",
	},
	{
		id: 34,
		position: "14",
		league: 2,
		name: "EKG_MCFC2020",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "10",
	},
	{
		id: 35,
		position: "15",
		league: 2,
		name: "BRS_Weiseth",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "5",
	},
	{
		id: 36,
		position: "16",
		league: 2,
		name: "OWR_Xenon",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 37,
		position: "17",
		league: 2,
		name: "OWR_Emils1991",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 38,
		position: "18",
		league: 2,
		name: "Surj_SH",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 41,
		position: "1",
		league: 3,
		name: "SFR_TheVicar",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "2",
		podiums: "4",
		fastest: "",
		points: "92",
	},
	{
		id: 42,
		position: "2",
		league: 3,
		name: "OWR_Prberli",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "2",
		podiums: "3",
		fastest: "1",
		points: "89",
	},
	{
		id: 43,
		position: "3",
		league: 3,
		name: "SFR_Doran",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "2",
		fastest: "1",
		points: "72",
	},
	{
		id: 44,
		position: "4",
		league: 3,
		name: "OWR_AlexHaug",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "50",
	},
	{
		id: 45,
		position: "5",
		league: 3,
		name: "OWR_Mihtrandir",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "49",
	},
	{
		id: 46,
		position: "6",
		league: 3,
		name: "MrWigglesFF",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "45",
	},
	{
		id: 47,
		position: "7",
		league: 3,
		name: "xEllieCx",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "44",
	},
	{
		id: 48,
		position: "8",
		league: 3,
		name: "BillyG1977",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "1",
		fastest: "1",
		points: "44",
	},
	{
		id: 49,
		position: "9",
		league: 3,
		name: "OWR_Preb1",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "43",
	},
	{
		id: 50,
		position: "10",
		league: 3,
		name: "Gogs0407",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "36",
	},
	{
		id: 51,
		position: "11",
		league: 3,
		name: "OWR_Staink",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "30",
	},
	{
		id: 52,
		position: "12",
		league: 3,
		name: "Kris-Big-Pro",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "29",
	},
	{
		id: 53,
		position: "13",
		league: 3,
		name: "OWR_Silverfox",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "29",
	},

	{
		id: 54,
		position: "14",
		league: 3,
		name: "JonMos",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "28",
	},
	{
		id: 55,
		position: "15",
		league: 3,
		name: "SFR-Simmo007",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "25",
	},
	{
		id: 56,
		position: "16",
		league: 3,
		name: "OWR_Halvor",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "23",
	},
	{
		id: 57,
		position: "17",
		league: 3,
		name: "ODB-Nerodia071",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "11",
	},
	{
		id: 58,
		position: "18",
		league: 3,
		name: "OWR_Tajkern",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "8",
	},
	{
		id: 59,
		position: "19",
		league: 3,
		name: "OWR_Shaggy",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
	{
		id: 20,
		position: "20",
		league: 3,
		name: "Owencfc18",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
];

export const mergedConstructorsConfig = [
	{
		id: 1,
		position: "1",
		league: 1,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "1",
		points: "59",
	},
	{
		id: 2,
		position: "2",
		league: 1,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		points: "54",
	},
	{
		id: 3,
		position: "3",
		league: 1,
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "53",
	},
	{
		id: 4,
		position: "4",
		league: 1,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "1",
		points: "48",
	},
	{
		id: 5,
		position: "5",
		league: 1,
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		points: "40",
	},
	{
		id: 6,
		position: "6",
		league: 1,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "36",
	},
	{
		id: 7,
		position: "7",
		league: 1,
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		points: "33",
	},
	{
		id: 8,
		position: "8",
		league: 1,
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		points: "26",
	},
	{
		id: 9,
		position: "9",
		league: 1,
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		points: "24",
	},
	{
		id: 10,
		position: "10",
		league: 1,
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		points: "20",
	},
	{
		id: 11,
		position: "1",
		league: 2,
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "1",
		points: "140",
	},
	{
		id: 12,
		position: "2",
		league: 2,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "1",
		points: "118",
	},
	{
		id: 13,
		position: "3",
		league: 2,
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		points: "110",
	},
	{
		id: 14,
		position: "4",
		league: 2,
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "2",
		points: "108",
	},
	{
		id: 15,
		position: "5",
		league: 2,
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "96",
	},
	{
		id: 16,
		position: "6",
		league: 2,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		points: "96",
	},
	{
		id: 17,
		position: "7",
		league: 2,
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		points: "49",
	},
	{
		id: 18,
		position: "8",
		league: 2,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "44",
	},
	{
		id: 19,
		position: "9",
		league: 2,
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		points: "29",
	},
	{
		id: 20,
		position: "10",
		league: 2,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		points: "19",
	},
	{
		id: 21,
		position: "1",
		league: 3,
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "2",
		points: "156",
	},
	{
		id: 22,
		position: "2",
		league: 3,
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "2",
		points: "137",
	},
	{
		id: 23,
		position: "3",
		league: 3,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		points: "116",
	},
	{
		id: 25,
		position: "5",
		league: 3,
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		points: "85",
	},
	{
		id: 25,
		position: "5",
		league: 3,
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		points: "79",
	},
	{
		id: 26,
		position: "6",
		league: 3,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "69",
	},
	{
		id: 27,
		position: "7",
		league: 3,
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		points: "57",
	},
	{
		id: 28,
		position: "8",
		league: 3,
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "47",
	},
	{
		id: 29,
		position: "9",
		league: 3,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		points: "41",
	},
	{
		id: 30,
		position: "10",
		league: 3,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		points: "28",
	},
];

export const constructorsAllConfig = [
	{
		id: 1,
		position: "1",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		div1: "33",
		div2: "110",
		div3: "137",
	},
	{
		id: 2,
		position: "2",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		div1: "48",
		div2: "96",
		div3: "116",
	},
	{
		id: 3,
		position: "3",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		div1: "40",
		div2: "140",
		div3: "57",
	},
	{
		id: 4,
		position: "4",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		div1: "20",
		div2: "49",
		div3: "156",
	},
	{
		id: 5,
		position: "5",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		div1: "54",
		div2: "118",
		div3: "28",
	},
	{
		id: 6,
		position: "6",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		div1: "24",
		div2: "108",
		div3: "79",
	},
	{
		id: 7,
		position: "7",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		div1: "53",
		div2: "96",
		div3: "47",
	},
	{
		id: 8,
		position: "8",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		div1: "36",
		div2: "44",
		div3: "69",
	},
	{
		id: 9,
		position: "9",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		div1: "26",
		div2: "29",
		div3: "85",
	},
	{
		id: 10,
		position: "10",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		div1: "59",
		div2: "19",
		div3: "41",
	},
];
