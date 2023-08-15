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
		title: "Standings - Div 1",
		path: "#gp1Standings",
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
		title: "Standings - Div 2",
		path: "#gp2Standings",
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

export const raceCalendar = [
	{
		id: 14,
		season: "15",
		src: "/images/s14-calender-div-1.png",
	},
	{
		id: 15,
		season: "15",
		src: "/images/s14-calender-div-2.png",
	},
];

export const raceResultsDiv1 = [
	{
		id: 1,
		season: "18",
		src: "/images/div1-race-result-rnd-4.png",
	},
];

export const raceResultsDiv2 = [
	{
		id: 1,
		season: "18",
		src: "/images/div2-race-result-rnd-4.png",
	},
];

export const constructorsGraphicGp1 = [
	{
		id: 1,
		season: "18",
		src: "/images/div-1-constructors-rnd-4.png",
	},
];

export const constructorsGraphic = [
	{
		id: 1,
		season: "18",
		src: "/images/div-2-constructors-rnd-4.png",
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
		imgPath: "/images/img-ollie.jpg",
		desc: "SFR-OliverF1 and Vernex_EU batting it out at turn 5 of Portimao, in the penultimate race of the Div 2 season",
	},
	{
		id: 2,
		imgPath: "/images/img-bossy-3.jpg",
		desc: "SFR-BossyGaming chasing down SFR-NFSHW as the track dries up in Australia, Rnd 2. ",
	},
	{
		id: 3,
		imgPath: "/images/img-bossy-2.jpg",
		desc: "And the Haas of SFR-BossyGaming takes the inside to steal P6 from SFR-NFSHW. Australia Rnd 2",
	},
	{
		id: 4,
		imgPath: "/images/img-bossy-1.jpg",
		desc: "Clean air! Move done and time to push on for SFR-BossyGaming. Australia Rnd 2.",
	},
];

export const streamConfig = [
	{
		id: 1,
		src: "https://www.youtube.com/embed/phROYoCLHjs",
		title: "Div 1 - Rnd 4 - Baku (Part 2 on YouTube channel)",
	},
	{
		id: 2,
		src: "https://www.youtube.com/embed/VI-l1w_lReE",
		title: "Div 2 - Rnd 4 - Baku",
	},
];

export const standingsConfig = [
	{
		id: 1,
		position: "1",
		name: "VFR_Laser24",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "1",
		podiums: "3",
		fastest: "1",
		points: "83",
	},
	{
		id: 2,
		position: "2",
		name: "TNR_Andreas",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "2",
		podiums: "2",
		fastest: "1",
		points: "75",
	},
	{
		id: 3,
		position: "3",
		name: "Forrest_Jump",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "57",
	},
	{
		id: 4,
		position: "4",
		name: "RogueSmithy",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		second: "",
		third: "1",
		fastest: "",
		points: "47",
	},

	{
		id: 5,
		position: "5",
		name: "SFR_Mhartin",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "46",
	},
	{
		id: 6,
		position: "6",
		name: "Bur-Miester",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "43",
	},
	{
		id: 7,
		position: "7",
		name: "SFR_SonicHawk",
		team: "Ferarri",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "42",
	},
	{
		id: 8,
		position: "8",
		name: "Kuyperz",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "40",
	},
	{
		id: 9,
		position: "9",
		name: "Rel1kz",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "36",
	},
	{
		id: 10,
		position: "10",
		name: "BTL Harry Kane",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "2",
		podiums: "2",
		fastest: "",
		points: "35",
	},

	{
		id: 11,
		position: "11",
		name: "Mackett__",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "34",
	},

	{
		id: 12,
		position: "12",
		name: "SFR_Calvin_Racing",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "34",
	},
	{
		id: 13,
		position: "13",
		name: "JDM1477",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "33",
	},
	{
		id: 14,
		position: "14",
		name: "MDJ",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "31",
	},
	{
		id: 15,
		position: "15",
		name: "SFR-OliverF1",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "30",
	},
	{
		id: 16,
		position: "16",
		name: "Jagkingz",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "26",
	},
	{
		id: 17,
		position: "17",
		name: "OXR_Xenon",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "25",
	},
	{
		id: 18,
		position: "18",
		name: "X_Gamer-_-1891",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "24",
	},
	{
		id: 19,
		position: "19",
		name: "X_Yarham",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "3",
	},

	{
		id: 20,
		position: "20",
		name: "Cassidy",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "1",
	},
];

// export const constructorsConfig = [
//   {
//     id: 1,
//     position: "1",
//     team: "Mercedes",
//     teamBadge: "/images/team-merc.png",
//     wins: "",
//     second: "",
//     third: "",
//     fastest: "",
//     points: "",
//   },
//   {
//     id: 2,
//     position: "2",
//     team: "Williams",
//     teamBadge: "/images/team-will.png",
//     wins: "",
//     second: "",
//     third: "",
//     fastest: "",
//     points: "",
//   },
//   {
//     id: 3,
//     position: "3",
//     team: "Alpine",
//     teamBadge: "/images/team-alp.png",
//     wins: "",
//     second: "",
//     third: "",
//     fastest: "",
//     points: "",
//   },
//   {
//     id: 4,
//     position: "4",
//     team: "McLaren",
//     teamBadge: "/images/team-mcl.png",
//     wins: "",
//     second: "",
//     third: "",
//     fastest: "",
//     points: "",
//   },
//   {
//     id: 5,
//     position: "5",
//     team: "Red Bull",
//     teamBadge: "/images/team-rb.png",
//     wins: "",
//     second: "",
//     third: "",
//     fastest: "",
//     points: "",
//   },
//   {
//     id: 6,
//     position: "6",
//     team: "Ferrari",
//     teamBadge: "/images/team-fer.png",
//     wins: "",
//     second: "",
//     third: "",
//     fastest: "",
//     points: "",
//   },
//   {
//     id: 7,
//     position: "7",
//     team: "Alfa Romeo",
//     teamBadge: "/images/team-ar.png",
//     wins: "",
//     second: "",
//     third: "",
//     fastest: "",
//     points: "",
//   },
//   {
//     id: 8,
//     position: "8",
//     team: "Haas",
//     teamBadge: "/images/team-haas.png",
//     wins: "",
//     second: "",
//     third: "",
//     fastest: "",
//     points: "",
//   },
//   {
//     id: 9,
//     position: "9",
//     team: "Alpha Tauri",
//     teamBadge: "/images/team-at.png",
//     wins: "",
//     second: "",
//     third: "",
//     fastest: "",
//     points: "",
//   },
//   {
//     id: 10,
//     position: "10",
//     team: "Aston Martin",
//     teamBadge: "/images/team-am.png",
//     wins: "",
//     second: "",
//     third: "",
//     fastest: "",
//     points: "",
//   },
// ];

export const standingsGP2Config = [
	{
		id: 1,
		position: "1",
		name: "Surj_SH",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "1",
		podiums: "3",
		fastest: "",
		points: "97",
	},
	{
		id: 2,
		position: "2",
		name: "Katsikas_9",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "2",
		fastest: "1",
		points: "79",
	},
	{
		id: 3,
		position: "3",
		name: "utkarsh_xlri",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "1",
		podiums: "2",
		fastest: "2",
		points: "78",
	},
	{
		id: 4,
		position: "4",
		name: "SFR_TheVicar",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		podium: "1",
		fastest: "",
		points: "68",
	},
	{
		id: 5,
		position: "5",
		name: "SFR_MADG",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "66",
	},
	{
		id: 6,
		position: "6",
		name: "SFR-energydan",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "59",
	},
	{
		id: 7,
		position: "7",
		name: "Gijsselodeon",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "58",
	},
	{
		id: 8,
		position: "8",
		name: "SFR_Doran",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "52",
	},

	{
		id: 9,
		position: "9",
		name: "Poj_Racing",
		team: "Williams",
		teamBadge: "/images/team-fer.png",
		wins: "1",
		podiums: "2",
		fastest: "",
		points: "45",
	},
	{
		id: 10,
		position: "10",
		name: "SFR-Thebear2312",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		pdoiums: "1",
		fastest: "",
		points: "38",
	},
	{
		id: 11,
		position: "11",
		name: "Mindful_wasp",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "33",
	},
	{
		id: 12,
		position: "12",
		name: "SFR-BritishGuy69",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "32",
	},
	{
		id: 13,
		position: "13",
		name: "Marcqwerty1",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "26",
	},
	{
		id: 14,
		position: "14",
		name: "SFR-NFSHW",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "25",
	},
	{
		id: 15,
		position: "15",
		name: "Ska-Aydams1",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "25",
	},
	{
		id: 16,
		position: "16",
		name: "SFR-BossyGaming",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "13",
	},
	{
		id: 17,
		position: "17",
		name: "MrWigglesff",
		team: "Ferarri",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "10",
	},
	{
		id: 18,
		position: "18",
		name: "EKG_MCFC2020",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "7",
	},
	{
		id: 19,
		position: "19",
		name: "Gogs0407",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "0",
	},
];

export const constructorsGP2Config = [
	{
		id: 1,
		position: "1",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 2,
		position: "2",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 3,
		position: "3",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 4,
		position: "4",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 5,
		position: "5",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 6,
		position: "6",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 7,
		position: "7",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 8,
		position: "8",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 9,
		position: "9",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 10,
		position: "10",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
];
