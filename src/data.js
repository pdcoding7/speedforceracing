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
  { id: 2, href: "#standings", text: "standings" },
  { id: 3, href: "#pastStreams", text: "past streams" },
  { id: 4, href: "#gallery", text: "gallery" },
  { id: 5, href: "#hallOfFame", text: "hall of fame" },
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
    name: "BNL_Re_Wolbieg",
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "2",
    second: "1",
    third: "1",
    fastest: "2",
    points: "53",
  },
  {
    id: 2,
    position: "2",
    name: "TNR_Andreas",
    team: "Mercedes",
    teamBadge: "/images/team-merc.png",
    wins: "2",
    second: "1",
    third: "",
    fastest: "2",
    points: "52",
  },
  {
    id: 3,
    position: "3",
    name: "ERL_Logan",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
    wins: "1",
    second: "",
    third: "2",
    fastest: "",
    points: "41",
  },
  {
    id: 4,
    position: "4",
    name: "Rel1kz",
    team: "Ferarri",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "1",
    third: "",
    fastest: "",
    points: "31",
  },
  {
    id: 5,
    position: "5",
    name: "Cassidy1690",
    team: "McLaren",
    teamBadge: "/images/team-mcl.png",
    wins: "",
    second: "",
    third: "2",
    fastest: "",
    points: "28",
  },
  {
    id: 6,
    position: "6",
    name: "Hijacked",
    team: "Mercedes",
    teamBadge: "/images/team-merc.png",
    wins: "",
    second: "1",
    third: "",
    fastest: "",
    points: "23",
  },
  {
    id: 7,
    position: "7",
    name: "SFR-OliverF1",
    team: "Red Bull",
    teamBadge: "/images/team-rb.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "21",
  },
  {
    id: 8,
    position: "8",
    name: "KXI__7",
    team: "Alfa Romeo",
    teamBadge: "/images/team-ar.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "9",
  },
  {
    id: 9,
    position: "9",
    name: "SFR-Jineji",
    team: "Red Bull",
    teamBadge: "/images/team-rb.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "6",
  },
  {
    id: 10,
    position: "10",
    name: "KD1997_",
    team: "Haas",
    teamBadge: "/images/team-haas.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "6",
  },
  {
    id: 11,
    position: "11",
    name: "N2E_Orieuglas",
    team: "Alpha Tauri",
    teamBadge: "/images/team-at.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "4",
  },
  {
    id: 12,
    position: "12",
    name: "XGAMER-_-1891",
    team: "McLaren",
    teamBadge: "/images/team-mcl.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "2",
  },
  {
    id: 13,
    position: "13",
    name: "MaD_Max_Champion",
    team: "Ferrari",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "1",
  },
  {
    id: 14,
    position: "14",
    name: "Carbrinecon-297",
    team: "Aston Martin",
    teamBadge: "/images/team-am.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "0",
  },
  {
    id: 15,
    position: "15",
    name: "DxT_Matty_22",
    team: "Alpha Tauri",
    teamBadge: "/images/team-at.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "0",
  },
  {
    id: 16,
    position: "16",
    name: "ET8|Jynx",
    team: "Alfa Romeo",
    teamBadge: "/images/team-ar.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "0",
  },
  {
    id: 17,
    position: "17",
    name: "Steeley2016",
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "0",
  },
  {
    id: 18,
    position: "18",
    name: "itzyaboiialfie",
    team: "Aston Martin",
    teamBadge: "/images/team-am.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "0",
  },
  {
    id: 19,
    position: "19",
    name: "eCOS_Smithy",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "0",
  },
  {
    id: 20,
    position: "20",
    name: "SAF1_ZAANDER",
    team: "Haas",
    teamBadge: "/images/team-haas.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "0",
  },
];

export const constructorsConfig = [
  {
    id: 1,
    position: "1",
    team: "Mercedes",
    teamBadge: "/images/team-merc.png",
    wins: "2",
    second: "2",
    third: "",
    fastest: "2",
    points: "75",
  },
  {
    id: 2,
    position: "2",
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "2",
    second: "1",
    third: "1",
    fastest: "2",
    points: "66",
  },
  {
    id: 3,
    position: "3",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
    wins: "1",
    second: "",
    third: "2",
    fastest: "",
    points: "57",
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
    points: "48",
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
    points: "34",
  },
  {
    id: 6,
    position: "6",
    team: "Ferrari",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "1",
    third: "",
    fastest: "",
    points: "32",
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
    points: "30",
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
    points: "20",
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
    points: "20",
  },
  {
    id: 10,
    position: "10",
    team: "Aston Martin",
    teamBadge: "/images/team-am.png",
    wins: "1",
    second: "",
    third: "",
    fastest: "",
    points: "19",
  },
];

export const standingsGP2Config = [
  {
    id: 1,
    position: "1",
    name: "Mindful_wasp",
    team: "Mercedes",
    teamBadge: "/images/team-merc.png",
    wins: "2",
    second: "2",
    third: "",
    fastest: "1",
    points: "69",
  },
  {
    id: 2,
    position: "2",
    name: "SFR_MADG",
    team: "Red Bull",
    teamBadge: "/images/team-rb.png",
    wins: "1",
    second: "",
    third: "1",
    fastest: "",
    points: "53",
  },
  {
    id: 3,
    position: "3",
    name: "SFR-energydan",
    team: "Mercedes",
    teamBadge: "/images/team-merc.png",
    wins: "1",
    second: "1",
    third: "",
    fastest: "",
    points: "52",
  },
  {
    id: 4,
    position: "4",
    name: "SFR_Mhartin",
    team: "McLaren",
    teamBadge: "/images/team-mcl.png",
    wins: "1",
    second: "",
    third: "1",
    fastest: "1",
    points: "40",
  },
  {
    id: 5,
    position: "5",
    name: "SFR_Doran",
    team: "Aston Martin",
    teamBadge: "/images/team-am.png",
    wins: "",
    second: "",
    third: "2",
    fastest: "",
    points: "37",
  },
  {
    id: 6,
    position: "6",
    name: "EKG_mcfc2020",
    team: "McLaren",
    teamBadge: "/images/team-mcl.png",
    wins: "1",
    second: "",
    third: "1",
    fastest: "",
    points: "36",
  },
  {
    id: 7,
    position: "7",
    name: "SFR_thevicar",
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "1",
    second: "",
    third: "",
    fastest: "",
    points: "36",
  },
  {
    id: 8,
    position: "8",
    name: "Gijsselodeon",
    team: "Red Bull",
    teamBadge: "/images/team-rb.png",
    wins: "",
    second: "1",
    third: "",
    fastest: "",
    points: "26",
  },
  {
    id: 9,
    position: "9",
    name: "Ska-Aydams1",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
    wins: "",
    second: "1",
    third: "",
    fastest: "2",
    points: "23",
  },
  {
    id: 10,
    position: "10",
    name: "KM_ALKO",
    team: "Alpha Tauri",
    teamBadge: "/images/team-at.png",
    wins: "",
    second: "1",
    third: "",
    fastest: "",
    points: "12",
  },
  {
    id: 11,
    position: "11",
    name: "Cephew",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
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
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "8",
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
    points: "4",
  },
  {
    id: 14,
    position: "14",
    name: "SFR_NFSHW24",
    team: "Alfa Romeo",
    teamBadge: "/images/team-ar.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "2",
  },
  {
    id: 15,
    position: "15",
    name: "AceMan791",
    team: "Ferrari",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "0",
  },
  {
    id: 16,
    position: "16",
    name: "onlydans159",
    team: "Ferrari",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "0",
  },
  {
    id: 17,
    position: "17",
    name: "Corazon-y-mas",
    team: "Alfa Romeo",
    teamBadge: "/images/team-ar.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "0",
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
    points: "0",
  },
  {
    id: 19,
    position: "19",
    name: "utkarsh_xlri",
    team: "Alpha Tauri",
    teamBadge: "/images/team-at.png",
    wins: "",
    second: "",
    third: "",
    fastest: "",
    points: "0",
  },
  {
    id: 20,
    position: "20",
    name: "KlGilbert",
    team: "Haas",
    teamBadge: "/images/team-haas.png",
    wins: "",
    second: "",
    third: "",
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
    wins: "3",
    second: "3",
    third: "",
    fastest: "1",
    points: "120",
  },
  {
    id: 2,
    position: "2",
    team: "Red Bull",
    teamBadge: "/images/team-rb.png",
    wins: "1",
    second: "1",
    third: "1",
    fastest: "",
    points: "82",
  },
  {
    id: 3,
    position: "3",
    team: "McLaren",
    teamBadge: "/images/team-mcl.png",
    wins: "2",
    second: "",
    third: "2",
    fastest: "1",
    points: "72",
  },
  {
    id: 4,
    position: "4",
    team: "Williams",
    teamBadge: "/images/team-will.png",
    wins: "1",
    second: "",
    third: "",
    fastest: "",
    points: "44",
  },
  {
    id: 5,
    position: "5",
    team: "Aston Martin",
    teamBadge: "/images/team-am.png",
    wins: "",
    second: "",
    third: "2",
    fastest: "",
    points: "41",
  },
  {
    id: 6,
    position: "6",
    team: "Alpine",
    teamBadge: "/images/team-alp.png",
    wins: "",
    second: "1",
    third: "",
    fastest: "1",
    points: "33",
  },
  {
    id: 7,
    position: "7",
    team: "Alpha Tauri",
    teamBadge: "/images/team-at.png",
    wins: "",
    second: "1",
    third: "",
    fastest: "",
    points: "30",
  },
  {
    id: 8,
    position: "8",
    team: "Ferrari",
    teamBadge: "/images/team-fer.png",
    wins: "",
    second: "1",
    third: "",
    fastest: "",
    points: "12",
  },
  {
    id: 9,
    position: "9",
    team: "Haas",
    teamBadge: "/images/team-haas.png",
    wins: "",
    second: "",
    third: "1",
    fastest: "",
    points: "10",
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
    points: "5",
  },
];
