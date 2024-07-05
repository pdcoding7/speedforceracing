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
		src: "https://www.youtube.com/embed/5cdAxJFYy58?si=oh-FFcV5Ya63mqxB",
		title: "Div 1 - Rnd 1 - Bahrain",
	},
	{
		id: 2,
		src: "https://www.youtube.com/embed/Q-MCPLPFK3w?si=GJBlCjSw70nxZqXQ",
		title: "Div 2 - Rnd 1 - Bahrain",
	},
	{
		id: 3,
		src: "https://www.youtube.com/embed/HhD5-gA06yo?si=Ttl7wQ8sJdtYeflK",
		title: "Div 3 - Rnd 1 - Bahrain",
	},
];

export const mergedStandingsConfig = [
	{
		id: 1,
		position: "1",
		league: 1,
		name: "OWR_Harry_Kane",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 2,
		position: "2",
		league: 1,
		name: "OWR_BareRemi",
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
		league: 1,
		name: "Smoke_FX_44",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 4,
		position: "4",
		league: 1,
		name: "SFR-OliverF1",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 5,
		position: "5",
		league: 1,
		name: "CT_Noldus",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 6,
		position: "6",
		league: 1,
		name: "Liammm109",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 7,
		position: "7",
		league: 1,
		name: "VFR_Laser24",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 8,
		position: "8",
		league: 1,
		name: "Glock4495",
		team: "Mercedes",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 9,
		position: "9",
		league: 1,
		name: "Brabit029",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 10,
		position: "10",
		league: 1,
		name: "Utkarsh_XLRI",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},

	{
		id: 11,
		position: "11",
		league: 1,
		name: "TNR_Langfjell",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},

	{
		id: 12,
		position: "12",
		league: 1,
		name: "OWR_LordDannyBoy",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 13,
		position: "13",
		league: 1,
		name: "BRS_Melnes",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 14,
		position: "14",
		league: 1,
		name: "FNR_Simon",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 15,
		position: "15",
		league: 1,
		name: "Spraynpray0205",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 16,
		position: "16",
		league: 1,
		name: "RSIIMarky",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 17,
		position: "17",
		league: 1,
		name: "Hazara",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 18,
		position: "18",
		league: 1,
		name: "RogueSmithy23",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 19,
		position: "19",
		league: 1,
		name: "Ramavaj",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 21,
		position: "1",
		league: 2,
		name: "OWR_Atlascopo",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 22,
		position: "2",
		league: 2,
		name: "Klusser40",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 23,
		position: "3",
		league: 2,
		name: "OWR_Xenon",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 24,
		position: "4",
		league: 2,
		name: "OWR_Emils1991",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 25,
		position: "5",
		league: 2,
		name: "BRS_Weiseth",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 26,
		position: "6",
		league: 2,
		name: "OWR_Ronny",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 27,
		position: "7",
		league: 2,
		name: "SFR_Keefs",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
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
		points: "",
	},
	{
		id: 29,
		position: "9",
		league: 2,
		name: "SFRCalvin_Racing",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 30,
		position: "10",
		league: 2,
		name: "Cassidy1690",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 31,
		position: "11",
		league: 2,
		name: "SFR-EnergyDan",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 32,
		position: "12",
		league: 2,
		name: "SFR_MadG",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 33,
		position: "13",
		league: 2,
		name: "SFR_Mhartin",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 34,
		position: "14",
		league: 2,
		name: "SFR_SonicHawk",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 35,
		position: "15",
		league: 2,
		name: "EKG_MCFC2020",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 36,
		position: "16",
		league: 2,
		name: "Mansell-_-19",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 37,
		position: "17",
		league: 2,
		name: "Mindful_Wasp",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
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
		points: "",
	},
	{
		id: 39,
		position: "19",
		league: 2,
		name: "Srivatsa5",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 41,
		position: "1",
		league: 3,
		name: "BillyG1977",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 42,
		position: "2",
		league: 3,
		name: "SFR_Doran",
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 43,
		position: "3",
		league: 3,
		name: "xEllieCx",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 44,
		position: "4",
		league: 3,
		name: "SFR-Simmo007",
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 45,
		position: "5",
		league: 3,
		name: "Kris-Big-Pro",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 46,
		position: "6",
		league: 3,
		name: "OWR_Staink",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 47,
		position: "7",
		league: 3,
		name: "Owencfc18",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 48,
		position: "8",
		league: 3,
		name: "JonMos",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 49,
		position: "10",
		league: 3,
		name: "MrWigglesFF",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 50,
		position: "11",
		league: 3,
		name: "SFR_TheVicar",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 51,
		position: "12",
		league: 3,
		name: "OWR_Silverfox",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 52,
		position: "13",
		league: 3,
		name: "OWR_AlexHaug",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 53,
		position: "14",
		league: 3,
		name: "OWR_Prberli",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 54,
		position: "15",
		league: 3,
		name: "OWR_Mihtrandir",
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 55,
		position: "16",
		league: 3,
		name: "ODB-Nerodia071",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 56,
		position: "17",
		league: 3,
		name: "Gogs0407",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 57,
		position: "18",
		league: 3,
		name: "OWR_Shaggy",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 58,
		position: "19",
		league: 3,
		name: "Tajkern",
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
	{
		id: 59,
		position: "20",
		league: 3,
		name: "Preb1",
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		podiums: "",
		fastest: "",
		points: "",
	},
];

export const mergedConstructorsConfig = [
	{
		id: 1,
		position: "1",
		league: 1,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		points: "",
	},
	{
		id: 2,
		position: "2",
		league: 1,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		points: "",
	},
	{
		id: 3,
		position: "3",
		league: 1,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "",
	},
	{
		id: 4,
		position: "4",
		league: 1,
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		points: "",
	},
	{
		id: 5,
		position: "5",
		league: 1,
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		points: "",
	},
	{
		id: 6,
		position: "6",
		league: 1,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		points: "",
	},
	{
		id: 7,
		position: "7",
		league: 1,
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "",
	},
	{
		id: 8,
		position: "8",
		league: 1,
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		points: "",
	},
	{
		id: 9,
		position: "9",
		league: 1,
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		points: "",
	},
	{
		id: 10,
		position: "10",
		league: 1,
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		points: "",
	},
	{
		id: 11,
		position: "1",
		league: 2,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		points: "",
	},
	{
		id: 12,
		position: "2",
		league: 2,
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		points: "",
	},
	{
		id: 13,
		position: "3",
		league: 2,
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		points: "",
	},
	{
		id: 14,
		position: "4",
		league: 2,
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		points: "",
	},
	{
		id: 15,
		position: "5",
		league: 2,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		points: "",
	},
	{
		id: 16,
		position: "6",
		league: 2,
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		points: "",
	},
	{
		id: 17,
		position: "7",
		league: 2,
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		points: "",
	},
	{
		id: 18,
		position: "8",
		league: 2,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		points: "",
	},
	{
		id: 19,
		position: "9",
		league: 2,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "",
	},
	{
		id: 20,
		position: "10",
		league: 2,
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "",
	},
	{
		id: 21,
		position: "1",
		league: 3,
		team: "Red Bull",
		teamBadge: "/images/team-rb.png",
		wins: "",
		points: "",
	},
	{
		id: 22,
		position: "2",
		league: 3,
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
		wins: "",
		points: "",
	},
	{
		id: 23,
		position: "3",
		league: 3,
		team: "RB",
		teamBadge: "/images/team-visa.png",
		wins: "",
		points: "",
	},
	{
		id: 24,
		position: "4",
		league: 3,
		team: "Haas",
		teamBadge: "/images/team-haas.png",
		wins: "",
		points: "",
	},
	{
		id: 25,
		position: "5",
		league: 3,
		team: "Williams",
		teamBadge: "/images/team-will.png",
		wins: "",
		points: "",
	},
	{
		id: 26,
		position: "6",
		league: 3,
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		wins: "",
		points: "",
	},
	{
		id: 27,
		position: "7",
		league: 3,
		team: "Ferrari",
		teamBadge: "/images/team-fer.png",
		wins: "",
		points: "",
	},
	{
		id: 28,
		position: "8",
		league: 3,
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		wins: "",
		points: "",
	},
	{
		id: 29,
		position: "9",
		league: 3,
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		wins: "",
		points: "",
	},
	{
		id: 30,
		position: "10",
		league: 3,
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
		wins: "",
		points: "",
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
		team: "Williams",
		teamBadge: "/images/team-will.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 3,
		position: "3",
		team: "RB",
		teamBadge: "/images/team-visa.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 4,
		position: "4",
		team: "Alpine",
		teamBadge: "/images/team-alp.png",
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
		team: "Kick Sauber",
		teamBadge: "/images/team-kick.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 7,
		position: "7",
		team: "Mercedes",
		teamBadge: "/images/team-merc.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 8,
		position: "8",
		team: "McLaren",
		teamBadge: "/images/team-mcl.png",
		div1: "",
		div2: "",
		div3: "",
	},
	{
		id: 9,
		position: "9",
		team: "Aston Martin",
		teamBadge: "/images/team-am.png",
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
