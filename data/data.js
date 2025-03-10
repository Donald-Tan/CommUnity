// Hardcoded data for clubs/movements
export const fakeGroups = [
    {
        image: require('../assets/images/runclub.png'),
        id : '1',
        name:"UW Running Club", 
        members: 20,
        announcements: ["5k Run tomorrow @ 12:30PM"],
        description: "Descripton for Running Club"
    }, 
    {
        image: require('../assets/images/soccerball.png'),
        id: '2',
        name: "UWB Soccer Club", 
        members: 96,
        announcements: [],
        description: "Description for Soccer Club"
    }, 
    {
        image: require('../assets/images/csseclub.png'),
        id: '3',
        name: "UWB CSSE Club", 
        members: 20, 
        announcements: ["Hackathon at ARC next week!"],
        description: "Description for CSSE Club"
    },
    {
        image: require('../assets/images/badminton.png'),
        id: '4', 
        name: "UWB Badminton Club", 
        members: 65, 
        announcements: [],
        description: "Description for Badminton Club"
    },
    {
        id: '5', 
        image: require('../assets/images/no-smoking.png'), 
        name: 'No Smoking Movement', 
        description: 'Description about no smoking', 
        members: 101,
        progress: 0.5
    },
    {
        id: '6',
        image: require('../assets/images/daily-run.png'), 
        name: 'Daily Running Movement', 
        description: 'Description about running daily', 
        members: 24,
        progress: 0.8
    }
]

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