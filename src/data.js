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
		title: "Standings - RP Div",
		path: "#rpStandings",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
	},
	{
		title: "Cross Div Constructors",
		path: "#crossDivStandings",
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
		src: "/images/s14-calender-div-1-new.png",
	},
	{
		id: 15,
		season: "15",
		src: "/images/s14-calender-div-2-new.png",
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
		src: "https://www.youtube.com/embed/UNNd7v8krfE?si=_p7tIBaOYFwsmkRj",
		title: "Div 1 - Rnd 12 - Hungary",
	},
	{
		id: 2,
		src: "https://www.youtube.com/embed/qs8glWH-QOM?si=MDAkSOOgckLTDnYJ",
		title: "Div 2 - Rnd 12 - Hungary",
	},
];

export const standingsConfig = [
	{
		id: 1,
		position: "1",
		name: "VFR_Laser24",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "2",
		podiums: "6",
		fastest: "1",
		points: "222",
	},
	{
		id: 2,
		position: "2",
		name: "MDJ",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "4",
		podiums: "8",
		fastest: "2",
		points: "191",
	},
	{
		id: 3,
		position: "3",
		name: "BTL Harry Kane",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "3",
		podiums: "6",
		fastest: "",
		points: "153",
	},

	{
		id: 4,
		position: "4",
		name: "SFR_Mhartin",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "113",
	},

	{
		id: 5,
		position: "5",
		name: "Bur-Miester",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "112",
	},

	{
		id: 6,
		position: "6",
		name: "JDM1477",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "111",
	},
	{
		id: 7,
		position: "7",
		name: "SFR-OliverF1",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "91",
	},
	{
		id: 8,
		position: "8",
		name: "Mackett__",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "91",
	},

	{
		id: 9,
		position: "9",
		name: "Hazara",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "89",
	},
	{
		id: 10,
		position: "10",
		name: "Kuyperz",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "80",
	},
	{
		id: 11,
		position: "11",
		name: "RogueSmithy",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		second: "",
		third: "1",
		fastest: "",
		points: "80",
	},
	{
		id: 12,
		position: "12",
		name: "SFR_SonicHawk",
		team: "Ferarri",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "76",
	},
	{
		id: 13,
		position: "13",
		name: "OXR_Xenon",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "70",
	},
	{
		id: 14,
		position: "14",
		name: "Glock",
		team: "Ferrari",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "1",
		fastest: "",
		points: "55",
	},
	{
		id: 15,
		position: "15",
		name: "Rel1kz",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "45",
	},
	{
		id: 16,
		position: "16",
		name: "Wesker_95",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "42",
	},

	{
		id: 17,
		position: "17",
		name: "Jagkingz",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "40",
	},

	{
		id: 18,
		position: "18",
		name: "Cassidy",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "32",
	},
	{
		id: 19,
		position: "19",
		name: "MSA Samad",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "32",
	},
	{
		id: 20,
		position: "20",
		name: "MRamavaj",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "19",
	},
];

export const constructorsConfig = [
	{
		id: 1,
		position: "1",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "5",
		points: "393",
	},
	{
		id: 2,
		position: "2",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "4",
		points: "312",
	},
	{
		id: 3,
		position: "3",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "1",
		points: "270",
	},
	{
		id: 4,
		position: "4",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "2",
		points: "230",
	},
	{
		id: 5,
		position: "5",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		points: "228",
	},
	{
		id: 6,
		position: "6",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		points: "200",
	},
	{
		id: 7,
		position: "7",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		points: "199",
	},
	{
		id: 8,
		position: "8",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "1",
		points: "180",
	},
	{
		id: 9,
		position: "9",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "160",
	},
	{
		id: 10,
		position: "10",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "",
		points: "114",
	},
];

export const standingsGP2Config = [
	{
		id: 1,
		position: "1",
		name: "Surj_SH",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "2",
		podiums: "6",
		fastest: "",
		points: "223",
	},
	{
		id: 2,
		position: "2",
		name: "SFR_TheVicar",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		podium: "2",
		fastest: "1",
		points: "182",
	},
	{
		id: 3,
		position: "3",
		name: "SFR-energydan",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "174",
	},
	{
		id: 4,
		position: "4",
		name: "utkarsh_xlri",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "1",
		podiums: "5",
		fastest: "2",
		points: "162",
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
		points: "147",
	},
	{
		id: 6,
		position: "6",
		name: "SFR_Doran",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "133",
	},
	{
		id: 7,
		position: "7",
		name: "Ska-Aydams1",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "2",
		podiums: "2",
		fastest: "1",
		points: "123",
	},
	{
		id: 8,
		position: "8",
		name: "SFR-Thebear2312",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		pdoiums: "3",
		fastest: "",
		points: "112",
	},
	{
		id: 9,
		position: "9",
		name: "MrWigglesff",
		team: "Ferarri",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "2",
		fastest: "",
		points: "112",
	},
	{
		id: 10,
		position: "10",
		name: "Gijsselodeon",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "111",
	},

	{
		id: 11,
		position: "11",
		name: "SFR-BossyGaming",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "2",
		fastest: "1",
		points: "94",
	},
	{
		id: 12,
		position: "12",
		name: "Marcqwerty1",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "84",
	},
	{
		id: 13,
		position: "13",
		name: "SFR-BritishGuy69",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "78",
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
		points: "67",
	},
	{
		id: 15,
		position: "15",
		name: "Mindful_wasp",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "60",
	},
	{
		id: 16,
		position: "16",
		name: "Mansell_19",
		team: "Ferarri",
		teamBadge: "/images/team-fer.png",
		wins: "2",
		podiums: "2",
		fastest: "1",
		points: "49",
	},
	{
		id: 17,
		position: "17",
		name: "SFR_Calvin_Racing",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "1",
		podiums: "2",
		fastest: "",
		points: "49",
	},
	{
		id: 18,
		position: "18",
		name: "KeithB",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "19",
	},
	{
		id: 19,
		position: "19",
		name: "Noldus",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "1",
		points: "11",
	},
	{
		id: 20,
		position: "20",
		name: "Ellie",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
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
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "4",
		points: "346",
	},
	{
		id: 2,
		position: "2",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		wins: "",
		points: "266",
	},
	{
		id: 3,
		position: "3",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		points: "258",
	},
	{
		id: 4,
		position: "4",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "1",
		points: "256",
	},
	{
		id: 5,
		position: "5",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "252",
	},
	{
		id: 6,
		position: "6",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "245",
	},
	{
		id: 7,
		position: "7",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "3",
		points: "209",
	},
	{
		id: 8,
		position: "8",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "1",
		points: "206",
	},

	{
		id: 9,
		position: "9",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		points: "145",
	},
	{
		id: 10,
		position: "10",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		wins: "1",
		points: "72",
	},
];

export const standingsRealisticConfig = [
	{
		id: 1,
		position: "1",
		name: "SFR_TheVicar",
		wins: "",
		podium: "",
		fastest: "1",
		pole: "",
		points: "58",
	},
	{
		id: 2,
		position: "2",
		name: "SFR_Mhartin",
		wins: "1",
		podiums: "1",
		fastest: "",
		pole: "",
		points: "57",
	},
	{
		id: 3,
		position: "3",
		name: "SFR_SonicHawk",
		wins: "",
		podiums: "1",
		fastest: "",
		pole: "",
		points: "53",
	},
	{
		id: 4,
		position: "4",
		name: "SFR_Calvin_Racing",
		wins: "",
		podiums: "1",
		fastest: "1",
		pole: "",
		points: "48",
	},
	{
		id: 5,
		position: "5",
		name: "RogueSmithy",
		wins: "1",
		podiums: "2",
		fastest: "",
		pole: "1",
		points: "45",
	},
	{
		id: 6,
		position: "6",
		name: "SFR-NFSHW",
		wins: "",
		podiums: "",
		fastest: "",
		pole: "",
		points: "44",
	},

	{
		id: 7,
		position: "7",
		name: "SFR_MADG",
		wins: "",
		podiums: "",
		fastest: "",
		pole: "",
		points: "44",
	},
	{
		id: 8,
		position: "8",
		name: "Cassidy",
		wins: "1",
		podiums: "1",
		fastest: "",
		pole: "",
		points: "37",
	},

	{
		id: 9,
		position: "9",
		name: "Marcqwerty1",
		wins: "",
		pdoiums: "",
		fastest: "",
		pole: "",
		points: "35",
	},
	{
		id: 10,
		position: "10",
		name: "Ska-Aydams1",
		wins: "",
		podiums: "",
		fastest: "",
		pole: "",
		points: "34",
	},
	{
		id: 11,
		position: "11",
		name: "ERL_Logan",
		wins: "",
		podiums: "1",
		fastest: "",
		pole: "",
		points: "22",
	},
	{
		id: 12,
		position: "12",
		name: "SFR-energydan",
		wins: "",
		podiums: "",
		fastest: "",
		pole: "",
		points: "0",
	},
	{
		id: 13,
		position: "13",
		name: "Wesker_95",
		wins: "",
		podiums: "",
		fastest: "",
		pole: "",
		points: "0",
	},
	{
		id: 14,
		position: "14",
		name: "adammackoGTFC",
		wins: "",
		podiums: "",
		fastest: "",
		pole: "",
		points: "0",
	},

	{
		id: 15,
		position: "15",
		name: "AJU1417",
		wins: "",
		podiums: "",
		fastest: "",
		pole: "",
		points: "0",
	},
	{
		id: 16,
		position: "16",
		name: "Shadow_Lancer",
		wins: "",
		podiums: "",
		fastest: "",
		pole: "",
		points: "0",
	},
];

export const constructorsAllConfig = [
	{
		id: 1,
		position: "1",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		div1: "270",
		div2: "323",
		totalPoints: "593",
	},
	{
		id: 2,
		position: "2",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		div1: "393",
		div2: "135",
		totalPoints: "528",
	},
	{
		id: 3,
		position: "3",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		div1: "312",
		div2: "212",
		totalPoints: "524",
	},
	{
		id: 4,
		position: "4",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		div1: "230",
		div2: "241",
		totalPoints: "471",
	},
	{
		id: 5,
		position: "5",
		team: "Alpha Tauri",
		teamBadge: "/images/team-at.png",
		div1: "200",
		div2: "249",
		totalPoints: "449",
	},

	{
		id: 6,
		position: "6",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		div1: "199",
		div2: "230",
		totalPoints: "429",
	},
	{
		id: 7,
		position: "7",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		div1: "228",
		div2: "189",
		totalPoints: "417",
	},
	{
		id: 8,
		position: "8",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		div1: "160",
		div2: "226",
		totalPoints: "386",
	},
	{
		id: 9,
		position: "9",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		div1: "180",
		div2: "183",
		totalPoints: "363",
	},
	{
		id: 10,
		position: "10",
		team: "Alfa Romeo",
		teamBadge: "/images/team-ar.png",
		div1: "114",
		div2: "47",
		totalPoints: "161",
	},
];
