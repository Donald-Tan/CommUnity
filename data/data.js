// Hardcoded data for clubs/movements
export const fakeGroups = [
  {
    id: "1",
    image: require("../assets/images/runclub.png"),
    name: "UW Running Club",
    members: 20,
    announcements: ["🏃 5k Run tomorrow @ 12:30 PM!"],
    description:
      "Join us for weekly runs and improve your stamina while meeting new friends!",
  },
  {
    id: "2",
    image: require("../assets/images/soccerball.png"),
    name: "UWB Soccer Club",
    members: 96,
    announcements: ["⚽ Friendly match this Saturday @ 3 PM!"],
    description:
      "Sharpen your soccer skills and enjoy friendly matches with our club!",
  },
  {
    id: "3",
    image: require("../assets/images/csseclub.png"),
    name: "UWB CSSE Club",
    members: 20,
    announcements: ["💻 Hackathon at ARC next week!"],
    description:
      "Explore coding challenges, AI projects, and software development with fellow tech enthusiasts.",
  },
  {
    id: "4",
    image: require("../assets/images/badminton.png"),
    name: "UWB Badminton Club",
    members: 65,
    announcements: ["🏸 Tournament sign-ups now open!"],
    description:
      "Join our club to improve your badminton skills and compete in fun tournaments.",
  },
  {
    id: "5",
    image: require("../assets/images/no-smoking.png"),
    name: "No Smoking Movement",
    members: 101,
    announcements: ["🚭 Awareness campaign this Friday!"],
    description:
      "Support our mission to create a healthier campus by raising awareness about the dangers of smoking.",
  },
  {
    id: "6",
    image: require("../assets/images/daily-run.png"),
    name: "Daily Running Movement",
    members: 24,
    announcements: ["🏃‍♂️ Morning run challenge starting Monday!"],
    description:
      "Join our movement to build healthy habits with daily morning runs.",
  },
];

/*export const fakeMovements = [
    {
        id: '1', 
        image: require('../assets/images/no-smoking.png'), 
        name: 'No Smoking Movement', 
        description: 'Description about no smoking', 
        members: 101,
        progress: 0.5
    },
    {
        id: '2',
        image: require('../assets/images/daily-run.png'), 
        name: 'Daily Running Movement', 
        description: 'Description about running daily', 
        members: 24,
        progress: 0.8
    }
]*/

export const connectionRequests = [
  {
    id: "1",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
  {
    id: "2",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
];

export const connections = [
  {
    id: "3",
    name: "Sarah Lee",
    message: "Let’s catch up soon!",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
  {
    id: "4",
    name: "John Doe",
    message: "Excited to collaborate!",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
];

export const connectionNotifications = [
  {
    id: "1",
    name: "Donald",
    message: "is interested in connecting",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
  {
    id: "2",
    name: "Adam Thomas",
    message: "sent a message",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
  {
    id: "3",
    name: "John Doe",
    message: "is interested in connecting",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
];

export const communityNotifications = [
  {
    id: "2",
    name: "UW Running Club",
    message: "5K Run tomorrow @ 12:30PM",
    image: require("@/assets/images/runclub.png"),
  },
  {
    id: "3",
    name: "No Smoking Movement",
    message: "Donald joined the no smoking movement",
    image: require("@/assets/images/no-smoking.png"),
  },
  {
    id: "4",
    name: "UWB CSSE Club",
    message: "Hackathon at ARC next week!",
    image: require("@/assets/images/csseclub.png"),
  },
];
