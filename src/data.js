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
    title: "Standings - GP1",
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
    title: "Standings - GP2",
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
    season: "14",
    src: "/images/s14-calender-gp1.png",
  },
  {
    id: 15,
    season: "15",
    src: "/images/s14-calender-new.jpg",
  },
];

export const gp1Slider = [
  {
    id: 1,
    imgPath: "/images/img-1.jpg",
    desc: "Submit your racing images on Discord to show here",
  },
  {
    id: 2,
    imgPath: "/images/img-2.jpg",
    desc: "Submit your racing images on Discord to show here",
  },
];

export const gp2Slider = [
  {
    id: 1,
    imgPath: "/images/img-ollie.jpg",
    desc: "SFR-OliverF1 and Vernex_EU batting it out at turn 5 of Portimao, in the penultimate race of the GP2 season",
  },
  {
    id: 2,
    imgPath: "/images/img-2.jpg",
    desc: "Submit your racing images on Discord to show here",
  },
];

export const streamConfig = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/rD31qHLteho",
    title: "GP1 - Rnd 7 - USA",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/oxG4WsnhrsI",
    title: "GP2 - Rnd 7 - USA",
  },
];

export const standingsConfig = [
  {
    id: 1,
    position: "1",
    name: "X_Yarham",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 2,
    position: "2",
    name: "TNR_Andreas",
    team: "Red Bull",
    teamBadge: "/images/team-rb.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 3,
    position: "3",
    name: "JDM1477",
    team: "Alpha Tauri",
    teamBadge: "/images/team-at.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 4,
    position: "4",
    name: "SFR_SonicHawk",
    team: "Ferarri",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 5,
    position: "5",
    name: "VFR_Laser24",
    team: "McLaren",
    teamBadge: "/images/team-mcl.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 6,
    position: "6",
    name: "SFR-Jineji",
    team: "Mercedes",
    teamBadge: "/images/team-merc.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 7,
    position: "7",
    name: "SFR-OliverF1",
    team: "Mercedes",
    teamBadge: "/images/team-merc.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 8,
    position: "8",
    name: "Rel1kz",
    team: "Alfa Romeo",
    teamBadge: "/images/team-ar.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 9,
    position: "9",
    name: "OXR_Xenon",
    team: "Red Bull",
    teamBadge: "/images/team-rb.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 10,
    position: "10",
    name: "Bur-Miester",
    team: "Haas",
    teamBadge: "/images/team-haas.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 11,
    position: "11",
    name: "RogueSmithy",
    team: "Alpha Tauri",
    teamBadge: "/images/team-at.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 12,
    position: "12",
    name: "BTL_Harry_Kane",
    team: "McLaren",
    teamBadge: "/images/team-mcl.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 13,
    position: "13",
    name: "XGamer-_-1891",
    team: "Ferrari",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 14,
    position: "14",
    name: "SFR_Mhartin",
    team: "Aston Martin",
    teamBadge: "/images/team-am.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 15,
    position: "15",
    name: "Cassidy1690",
    team: "Aston Martin",
    teamBadge: "/images/team-am.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 16,
    position: "16",
    name: "Jagkingz",
    team: "Alfa Romeo",
    teamBadge: "/images/team-ar.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 17,
    position: "17",
    name: "SFRCalvin_Racing",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 18,
    position: "18",
    name: "Kuyperz",
    team: "Haas",
    teamBadge: "/images/team-haas.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 19,
    position: "19",
    name: "Mackett__",
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 20,
    position: "20",
    name: "Forrest_Jump",
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
];

export const constructorsConfig = [
  {
    id: 1,
    position: "1",
    team: "Mercedes",
    teamBadge: "/images/team-merc.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 2,
    position: "2",
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 3,
    position: "3",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 4,
    position: "4",
    team: "McLaren",
    teamBadge: "/images/team-mcl.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 5,
    position: "5",
    team: "Red Bull",
    teamBadge: "/images/team-rb.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 6,
    position: "6",
    team: "Ferrari",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 7,
    position: "7",
    team: "Alfa Romeo",
    teamBadge: "/images/team-ar.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 8,
    position: "8",
    team: "Haas",
    teamBadge: "/images/team-haas.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 9,
    position: "9",
    team: "Alpha Tauri",
    teamBadge: "/images/team-at.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 10,
    position: "10",
    team: "Aston Martin",
    teamBadge: "/images/team-am.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
];

export const standingsGP2Config = [
  {
    id: 1,
    position: "1",
    name: "Mindful_wasp",
    team: "Mercedes",
    teamBadge: "/images/team-merc.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 2,
    position: "2",
    name: "SFR_MADG",
    team: "Red Bull",
    teamBadge: "/images/team-rb.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 3,
    position: "3",
    name: "SFR-energydan",
    team: "Mercedes",
    teamBadge: "/images/team-merc.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 4,
    position: "4",
    name: "SFR-BritishGuy69",
    team: "McLaren",
    teamBadge: "/images/team-mcl.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 5,
    position: "5",
    name: "SFR_Doran",
    team: "Aston Martin",
    teamBadge: "/images/team-am.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 6,
    position: "6",
    name: "EKG_MCFC2020",
    team: "Alfa Romeo",
    teamBadge: "/images/team-ar.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 7,
    position: "7",
    name: "SFR_TheVicar",
    team: "Alpha Tauri",
    teamBadge: "/images/team-at.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 8,
    position: "8",
    name: "Gijsselodeon",
    team: "Red Bull",
    teamBadge: "/images/team-rb.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 9,
    position: "9",
    name: "Ska-Aydams1",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 10,
    position: "10",
    name: "SFR-NFSHW",
    team: "McLaren",
    teamBadge: "/images/team-mcl.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 11,
    position: "11",
    name: "Katsikas_9",
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 12,
    position: "12",
    name: "Marcqwerty1",
    team: "Alpha Tauri",
    teamBadge: "/images/team-at.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 13,
    position: "13",
    name: "SFR-Thebear2312",
    team: "Aston Martin",
    teamBadge: "/images/team-am.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 14,
    position: "14",
    name: "GEVII_Orieuglas",
    team: "Alfa Romeo",
    teamBadge: "/images/team-ar.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 15,
    position: "15",
    name: "J_Sarge",
    team: "Ferrari",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 16,
    position: "16",
    name: "The_Slayer23",
    team: "Ferrari",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 17,
    position: "17",
    name: "Surj_SH",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 18,
    position: "18",
    name: "Bobkat20008",
    team: "Haas",
    teamBadge: "/images/team-haas.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 19,
    position: "19",
    name: "utkarsh_xlri",
    team: "Haas",
    teamBadge: "/images/team-haas.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 20,
    position: "20",
    name: "Gogs0407",
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
];

export const constructorsGP2Config = [
  {
    id: 1,
    position: "1",
    team: "Mercedes",
    teamBadge: "/images/team-merc.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 2,
    position: "2",
    team: "Red Bull",
    teamBadge: "/images/team-rb.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 3,
    position: "3",
    team: "McLaren",
    teamBadge: "/images/team-mcl.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 4,
    position: "4",
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 5,
    position: "5",
    team: "Aston Martin",
    teamBadge: "/images/team-am.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 6,
    position: "6",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 7,
    position: "7",
    team: "Alpha Tauri",
    teamBadge: "/images/team-at.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 8,
    position: "8",
    team: "Ferrari",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 9,
    position: "9",
    team: "Haas",
    teamBadge: "/images/team-haas.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
  {
    id: 10,
    position: "10",
    team: "Alfa Romeo",
    teamBadge: "/images/team-ar.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "",
  },
];
