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

export const hofConfig = [
	{
		id: 14,
		season: "14",
		src: "/images/hof-s14.png",
	},
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

export const gp2Slider = [
	{
		id: 1,
		imgPath: "/images/img-ollie-new.jpg",
		desc: "Fighting for places at turn 1 of the Hungaroring. Submitted by SFR-OliverF1",
	},
	{
		id: 2,
		imgPath: "/images/img-ollie.jpg",
		desc: "SFR-OliverF1 and Vernex_EU batting it out at turn 5 of Portimao, in the penultimate race of the Div 2 season",
	},
	{
		id: 3,
		imgPath: "/images/img-bossy-3.jpg",
		desc: "SFR-BossyGaming chasing down SFR-NFSHW as the track dries up in Australia, Rnd 2. ",
	},
	{
		id: 4,
		imgPath: "/images/img-bossy-2.jpg",
		desc: "And the Haas of SFR-BossyGaming takes the inside to steal P6 from SFR-NFSHW. Australia Rnd 2",
	},
	{
		id: 5,
		imgPath: "/images/img-bossy-1.jpg",
		desc: "Clean air! Move done and time to push on for SFR-BossyGaming. Australia Rnd 2.",
	},
];

export const streamConfig = [
	{
		id: 1,
		src: "https://www.youtube.com/embed/pedctrl-Wc0?si=QkjG4hyuEKOvhu70",
		title: "Div 1 - Rnd 7 - Singapore",
	},
	{
		id: 2,
		src: "https://www.youtube.com/embed/RXvu53oB3I4?si=K8_tQ_rmPcG3aU-c",
		title: "Div 2 - Rnd 7 - Singapore",
	},
];

export const mergedStandingsConfig = [
	{
		id: 1,
		position: "1",
		league: 1,
		name: "Mdj2002mdj",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "4",
		fastest: "1",
		points: "138",
	},
	{
		id: 2,
		position: "2",
		league: 1,
		name: "OWR_Harry_Kane",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "2",
		podiums: "4",
		fastest: "",
		points: "136",
	},
	{
		id: 3,
		position: "3",
		league: 1,
		name: "Glock",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "1",
		fastest: "2",
		points: "123",
	},
	{
		id: 4,
		position: "4",
		league: 1,
		name: "VFR_Laser24",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "1",
		podiums: "3",
		fastest: "",
		points: "112",
	},
	{
		id: 5,
		position: "5",
		league: 1,
		name: "OWR_BareRemi",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "110",
	},
	{
		id: 6,
		position: "6",
		league: 1,
		name: "SFR_Mhartin",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "97",
	},
	{
		id: 7,
		position: "7",
		league: 1,
		name: "Mackett",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "1",
		podiums: "1",
		fastest: "",
		points: "79",
	},
	{
		id: 8,
		position: "8",
		league: 1,
		name: "OWR_Atlascopo",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "72",
	},
	{
		id: 9,
		position: "9",
		league: 1,
		name: "OWR_DrauGen",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "70",
	},
	{
		id: 10,
		position: "10",
		league: 1,
		name: "MSA_Samad",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "63",
	},
	{
		id: 11,
		position: "11",
		league: 1,
		name: "OWR_LordDannyBoy",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "58",
	},
	{
		id: 12,
		position: "12",
		league: 1,
		name: "Noldus",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "58",
	},
	{
		id: 13,
		position: "13",
		league: 1,
		name: "Ramavaj",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "1",
		podiums: "2",
		fastest: "1",
		points: "53",
	},
	{
		id: 14,
		league: 1,
		position: "14",
		name: "TNR_Langfjell",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "49",
	},
	{
		id: 15,
		position: "15",
		league: 1,
		name: "ETH Yigermal",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "42",
	},
	{
		id: 16,
		position: "16",
		league: 1,
		name: "JDM1477",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "40",
	},
	{
		id: 17,
		league: 1,
		position: "17",
		name: "OWR_Xenon",
		team: "Ferari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "40",
	},
	{
		id: 18,
		position: "18",
		league: 1,
		name: "SFR_SonicHawk",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "38.5",
	},
	{
		id: 19,
		position: "19",
		league: 1,
		name: "RogueSmithy23",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "26",
	},
	{
		id: 20,
		league: 1,
		position: "20",
		name: "SmokeFX44",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "19",
	},
	{
		id: 21,
		position: "1",
		league: 2,
		name: "Mansell 19",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "2",
		podiums: "3",
		fastest: "1",
		points: "139",
	},
	{
		id: 22,
		position: "2",
		league: 2,
		name: "SFR Keefs",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "114",
	},
	{
		id: 23,
		position: "3",
		league: 2,
		name: "Cassidy",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "1",
		podiums: "2",
		fastest: "",
		points: "104",
	},
	{
		id: 24,
		position: "4",
		league: 2,
		name: "SFR Calvin Racing",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "100",
	},
	{
		id: 25,
		position: "5",
		league: 2,
		name: "Mindful Wasp",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "1",
		podium: "1",
		fastest: "",
		points: "99",
	},
	{
		id: 26,
		position: "6",
		league: 2,
		name: "Utkarsh",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "94",
	},
	{
		id: 27,
		position: "7",
		league: 2,
		name: "SFR TheVicar",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "88",
	},
	{
		id: 28,
		position: "8",
		league: 2,
		name: "MrWiggles",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "85",
	},
	{
		id: 29,
		position: "9",
		league: 2,
		name: "Ellie",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "82",
	},
	{
		id: 30,
		position: "10",
		league: 2,
		name: "SFR Doran",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "82",
	},
	{
		id: 31,
		position: "11",
		league: 2,
		name: "SFR_EnergyDan",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "68",
	},
	{
		id: 32,
		position: "12",
		league: 2,
		name: "SFR Madg",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "67",
	},
	{
		id: 33,
		position: "13",
		league: 2,
		name: "OWR_Tajkern",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "64",
	},
	{
		id: 34,
		position: "14",
		league: 2,
		name: "Gijsselodeon",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "54",
	},
	{
		id: 35,
		position: "15",
		league: 2,
		name: "MCFC_2023",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "53",
	},
	{
		id: 36,
		position: "16",
		league: 2,
		name: "SFR Oliver",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "50",
	},
	{
		id: 37,
		position: "17",
		league: 2,
		name: "OWR_AlexHaug",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "49",
	},
	{
		id: 38,
		position: "18",
		league: 2,
		name: "OWR_Shaggy",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "1",
		points: "36",
	},
	{
		id: 39,
		position: "19",
		league: 2,
		name: "Gogs0407",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "31",
	},
	{
		id: 40,
		league: 2,
		position: "20",
		name: "Marcqwerty1",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		pdoiums: "",
		fastest: "",
		points: "25",
	},
];

export const mergedConstructorsConfig = [
	{
		id: 1,
		position: "1",
		league: 1,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "220",
	},
	{
		id: 2,
		position: "2",
		league: 1,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "1",
		points: "201",
	},
	{
		id: 3,
		position: "3",
		league: 1,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "2",
		points: "198",
	},
	{
		id: 4,
		position: "4",
		league: 1,
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "1",
		points: "195",
	},

	{
		id: 5,
		position: "5",
		league: 1,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "1",
		points: "152",
	},
	{
		id: 6,
		league: 1,
		position: "6",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "1",
		points: "142",
	},
	{
		id: 7,
		position: "7",
		league: 1,
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "1",
		points: "129",
	},
	{
		id: 8,
		position: "8",
		league: 1,
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "1129",
	},
	{
		id: 9,
		league: 1,
		position: "9",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		points: "115",
	},
	{
		id: 10,
		league: 1,
		position: "10",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		points: "86",
	},
	{
		id: 11,
		position: "1",
		league: 2,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "1",
		points: "233",
	},
	{
		id: 12,
		position: "2",
		league: 2,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "2",
		points: "215",
	},
	{
		id: 13,
		position: "3",
		league: 2,
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		points: "204",
	},
	{
		id: 14,
		position: "4",
		league: 2,
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "1",
		points: "202",
	},
	{
		id: 15,
		position: "5",
		league: 2,
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "2",
		points: "190",
	},
	{
		id: 16,
		position: "6",
		league: 2,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "2",
		points: "179",
	},
	{
		id: 17,
		position: "7",
		league: 2,
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "",
		points: "173",
	},
	{
		id: 18,
		position: "8",
		league: 2,
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		points: "139",
	},
	{
		id: 19,
		position: "9",
		league: 2,
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "137",
	},
	{
		id: 20,
		position: "10",
		league: 2,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "99",
	},
];

export const constructorsAllConfig = [
	{
		id: 1,
		position: "1",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		div1: "198",
		div2: "193",
		totalPoints: "391",
	},
	{
		id: 2,
		position: "2",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		div1: "201",
		div2: "189",
		totalPoints: "390",
	},
	{
		id: 3,
		position: "3",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		div1: "195",
		div2: "173",
		totalPoints: "324",
	},
	{
		id: 4,
		position: "4",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		div1: "152",
		div2: "174",
		totalPoints: "326",
	},
	{
		id: 5,
		position: "5",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		div1: "142",
		div2: "182",
		totalPoints: "324",
	},
	{
		id: 6,
		position: "6",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		div1: "220",
		div2: "91",
		totalPoints: "311",
	},
	{
		id: 7,
		position: "7",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		div1: "129",
		div2: "152",
		totalPoints: "281",
	},
	{
		id: 8,
		position: "8",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		div1: "124",
		div2: "133",
		totalPoints: "257",
	},
	{
		id: 9,
		position: "9",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		div1: "115",
		div2: "121",
		totalPoints: "236",
	},
	{
		id: 10,
		position: "10",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		div1: "86",
		div2: "148",
		totalPoints: "234",
	},
];
