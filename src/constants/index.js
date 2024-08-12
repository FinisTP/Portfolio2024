import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  linkedin,
  facebook,
  youtube,

  unreal,
  developer,
  unity,
  designer,
  garena,
  hcmus,

  ddi,
  grief,
  interaction,
  keepwhatalive,
  koluan,
  otome,
  riverwatch,
  staytogether,
  streamer,
  suberdeep,
  nextbot,
  evanesce,
  home,
  gtactica,
  gameverse,
  zoo,
  braintrain


} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About me",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Games",
  },
  {
    id: "achievement",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const headline = {
  init: "Hello, I'm ",
  description: "I create experience through video games,",
  description2:"using advanced technology and game design knowledge.",
  name: "Finis"
}

const aboutInfo = {
  name: "Tu Tan Phat (Finis)",
  role: "Game Developer",
  pseudonym: "Finis",
  description:
    "I'm a game developer from Vietnam, with 2 years of experience in Unity and 6 months in Unreal Engine. "
    + "I took part in over 20 game jams/projects, made over 15 games of variant scale. As of now, I have 6 months of internship and 6 months of working experience at a game company. "
    + "I strive to create games that are fun, innovative and worth-your-penny.",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/finistp/",
      icon: linkedin
    },
    {
      name: "Github",
      url: "https://github.com/FinisTP",
      icon: github
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/phattanttu/",
      icon: facebook
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UCmuycLZgfeH2ASn2AqOHPsw",
      icon: youtube
    }
  ]
};

const services = [
  {
    title: "Game Developer",
    icon: developer,
  },
  {
    title: "Game Designer",
    icon: designer,
  },
  {
    title: "Unity (2 years of experience)",
    icon: unity,
  },
  {
    title: "Unreal Engine (6 months of experience)",
    icon: unreal,
  }
];

const technologies = [
  {
    name: "Unity",
    icon: html,
  },
  {
    name: "Unreal Engine",
    icon: css,
  },
  {
    name: "C#",
    icon: javascript,
  },
  {
    name: "C++",
    icon: typescript,
  },
  {
    name: "Lua",
    icon: reactjs,
  }
];

const experiences = [
  {
    title: "Intern Game Developer (Full-time)",
    company_name: "Garena",
    icon: garena,
    iconBg: "#383E56",
    date: "March 2022 - March 2023",
    points: [
      "Worked on Blockman GO - an online mobile gaming platform like Roblox and FreeFire Craftland - a sandbox engine for the creation of custom FreeFire maps.",
      "Planned, developed, and released 2 different games on mobile platforms, using Blockman Editor and Lua " +
      "over the course of 6 months. Each game garnered over 20,000 players and received >23% retention " +
      "rates on day 2",
      "In charge of building multiplayer games with a huge player base (300,000+), implementing gameplay " +
      "features on both client-side (UI/UX, user inputs, game mechanics, multi-language, audio) and server-side " +
      "(synchronization between clients, payment, data tracking, security handles, database consistency).",
      "Worked closely with other teams such as artists to adjust the game's look and feel, with testers to rid the " +
      "game of development bugs, and with marketers to highlight the game's selling points.",
    ],
  },
  {
    title: "Intern Software Engineer",
    company_name: "Codelynx",
    icon: web,
    iconBg: "#383E56",
    date: "Oct 2020 - Feb 2021",
    points: [
      "Worked on building a ReactJS community for Vietnamese developers.",
      "In charge of writing front-end and back-end codes for blogging site, debuggable embedded code editor."
    ],
  },
  {
    title: "Bachelor of Science - Advanced Program in Computer Science",
    company_name: "University of Science - Vietnam National University",
    icon: hcmus,
    iconBg: "#E6DEDD",
    date: "Oct 2019 - Oct 2023",
    points: [
      "Graduated top 2 programme, top 5 class of 2019, with GPA 3.93/4 (9.46/10).",
      "100% scholarship for Potential Freshman, 100% scholarship in 1st and 2nd years for top-grade students.",
      "Core subjects consist of Human-computer Interaction, Computer Graphics and Artificial Intelligence."
    ],
  }
];

const achievements = [
  {
    title:
      "1st Winner, Best Innovative Solution",
    name: "ZooHackathon 2021",
    issuer: "ChangeVN",
    description:"Worked in a team of 6, developed a game as an environmental-friendly solution to wild animal poaching, "
     + "encouraging players to report animal abuses in exchange for in-game animals and feature unlocks."
  },
  {
    title:
      "Champion Team - Gaming Track",
    name: "VNG Product Case 2022",
    issuer: "VNG Corporation",
    description:"Conceptualized a solution to a business case using Blockchain and Metaverse-inspired simulation, "
     + "allowing corporations and players to interact, trade tokens and view advertisement in a VR city."
  },
  {
    title:
      "1st Winner, Highest Scorer",
    name: "HCMUS's Thach Thuc",
    issuer: "HCM University of Science",
    description:"Faculty's largest annual competition, engaging in challenges regarding all areas of knowledge in Computer Science. Our team won against 27 other teams and 1000+ students around the province."
  },
  {
    title:
      "Runner-up",
    name: "Global Game Jam 2024 - Vietnam",
    issuer: "Gamegeek Asia",
    description:"Developed an AI-driven game in 36 hours, in a team of two (me and an artist). Won 2nd prize in Digital Game category, over 50 entries from other teams."
  },
  {
    title:
      "Runner-up",
    name: "Thuc Hien Uoc Mo 2019 (Achieve Your Dream)",
    issuer: "HCM Student Association Center (SAC)",
    description:"Pitched about my dream to become a game developer, and how I would contribute to the community. Won 2nd prize, over 160,000 high school students around the country."
  }
];

const workStatement = "These are projects that best demonstrate my ability as a game developer/designer. " +
"Some are created in 6 months, while others are in merely 24 hours. " +
"There are demo gameplay videos and/or playable links attached to the corners.";

const externalLink = "For more projects, please visit my itch.io page at https://baconxpogo.itch.io/ or https://valeth2124.itch.io/"

const projects = [
  {
    name: "Grief of the Evergreen",
    description:
      "2D Feeding Frenzy-inspired game, where you play as a plant that eats other creatures to grow bigger; has a storyline, weather, day-night cycle and character customization."
      + " The game is developed in 7 days, in a team of 4 for a class project.",
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
      {
        name: "WebGL",
        color: "pink-text-gradient",
      }
    ],
    image: grief,
    youtube_link: "https://www.youtube.com/watch?v=nzpSLC7kWNo",
    play_link: "https://baconxpogo.itch.io/grief-of-the-evergreen"
  },
  {
    name: "Evanesce",
    description:
      "You play as a nurse who takes care of an Alzheimer's patient. You have to entertain him and keep him happy for his remaining time. The game "
      + "plays out in 3D, focusing on storytelling, with AI-generated dialogue and voice input to make the game more immersive.",
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "GPT4",
        color: "pink-text-gradient",
      },
      {
        name: "Whisper",
        color: "pink-text-gradient",
      }
    ],
    image: evanesce,
    youtube_link: "https://www.youtube.com/watch?v=CfBRHN12kWc",
    play_link: "https://valeth2124.itch.io/evanesce"
  },
  {
    name: "Stay Together",
    description:
      "3D Play Together-inspired game, where players can connect to the same world and spend time chatting, play minigames, watch videos or draw together."
      + " The game is made in 1 month for a class project.",
    tags: [
      {
        name: "Photon PUN",
        color: "pink-text-gradient",
      },
      {
        name: "AgoraSDK",
        color: "pink-text-gradient",
      },
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "Multiplayer",
        color: "pink-text-gradient",
      }
    ],
    image: staytogether,
    youtube_link: "https://www.youtube.com/watch?v=kJnTA-Ks8bM"
  },
  {
    name: "3D Interaction with Physical World",
    description:
      "A mobile app that supports 3D object scanning and AR object editing with hand gestures, and object recognition. The app is made in 6 months as part of my thesis.",
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Segment Anything (Meta)",
        color: "pink-text-gradient",
      },
      {
        name: "Niantic Lightship SDK",
        color: "pink-text-gradient",
      },
      {
        name: "Open3D",
        color: "pink-text-gradient",
      }
    ],
    image: interaction,
    youtube_link: "https://www.youtube.com/watch?v=h_Nu19TYLSQ"
  },
  {
    name: "Streamer Simulator (Garena Blockman GO)",
    description:
      "A multi-player simulation game with mechanics revolving daily life of a streamer, including streaming, house decorating, fashioning and meeting up with friends."
      + "Made with Lua and Blockman Editor in 5 months, in a team consisting of 2 developers, 1 UI artist, 1 modeler, 1 game designer and the marketing team.",
    tags: [
      {
        name: "Lua",
        color: "pink-text-gradient",
      },
      {
        name: "Blockman Editor",
        color: "pink-text-gradient",
      },
      {
        name: "Multiplayer",
        color: "pink-text-gradient",
      }
    ],
    image: streamer,
    youtube_link: "https://www.youtube.com/watch?v=09RiJLqRzo0"
  },
  {
    name: "NextBot Simulator (Garena Blockman GO)",
    description:
      "A horror simulation game where you are chased around by scary faces. You have to run around while not getting touched by these faces. The longer you survive, the higher you score.",
    tags: [
      {
        name: "Lua",
        color: "pink-text-gradient",
      },
      {
        name: "Blockman Editor",
        color: "pink-text-gradient",
      },
      {
        name: "Multiplayer",
        color: "pink-text-gradient",
      }
    ],
    image: nextbot,
    youtube_link: "https://www.youtube.com/watch?v=8XixrYbdc6Q"
  },
  {
    name: "Double Dealing Illusionists",
    description:
      "A puzzle game where we play alternately between a light mage and a dark mage. Each traversed tile will either block the path or release it."
      + " Made with Unity C# in under 48 hours, ranked 406/5677 entries to GMTK Jam 2021.",
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient",
      }
    ],
    image: ddi,
    youtube_link: "https://www.youtube.com/watch?v=yK0X7TzErwU",
    play_link: "https://valeth2124.itch.io/double-dealing-illusionists"
  },
  // {
  //   name: "Koluan's Diner",
  //   description:
  //     "You play as a human serving exotic food to aliens at a space station. You must position your food to balance it while carrying.",
  //   tags: [
  //     {
  //       name: "Unity",
  //       color: "pink-text-gradient",
  //     }
  //   ],
  //   image: koluan,
  //   youtube_link: "https://github.com/",
  //   play_link: "https://github.com/"
  // },
  // {
  //   name: "Suberdeep",
  //   description:
  //     "Your submarine follows the anchor into unfathomable depths. You need to maneuver to dodge the hostile fish and shoot torpedoes at them.",
  //   tags: [
  //     {
  //       name: "Unity",
  //       color: "pink-text-gradient",
  //     }
  //   ],
  //   image: suberdeep,
  //   youtube_link: "https://github.com/",
  //   play_link: "https://github.com/"
  // },
  ,
  {
    name: "Brain Train",
    description:
      "A collection of 4 small puzzle games, aiming at children at the age of 10 or younger to help them develop their cognitive skills.",
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient",
      }
    ],
    image: braintrain,
    youtube_link: "https://www.youtube.com/watch?v=4CXrRO2yCjQ",
    play_link: "https://valeth2124.itch.io/brain-train"
  },
  {
    name: "G-Tactica",
    description:
      "A short project that demonstrates by coding capacity, how I used basic design patterns to implement AI/skill features in a tactical RPG.",
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient"
      }
    ],
    image: gtactica,
    youtube_link: "https://www.youtube.com/watch?v=nt8lceqK674",
    play_link: "https://valeth2124.itch.io/g-tactica-demo"
  },
  {
    name: "VNG Gameverse",
    description:
      "This is a prototype made as part of a pitching deck to VNG Product Case Competition 2022. VNG Gameverse is a platform" +
       " that lets players sell/exchange in-game characters using cryptocurrencies, and business partners can set up advertising venues in a VR city.",
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      }
    ],
    image: gameverse,
    youtube_link: "https://www.youtube.com/watch?v=NB7MZEo6Abk",
    play_link: "https://www.figma.com/proto/195NKcmfIBx1TLiOH9jvOh/Application-Proptotype?node-id=602-981&starting-point-node-id=602%3A981&mode=design&t=1kWqhqq7rNrmNucI-1"
  },
  {
    name: "Park Ranger",
    description:
      "This is a prototype made as part of ZooHackathon Vietnam 2021. In this game, you are a zookeeper that must perform tasks to protect endangered animals. "
      + "Players who report real-world animal abuses will be rewarded with in-game animals and feature unlocks.",
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient",
      }
    ],
    image: zoo,
    youtube_link: "https://www.youtube.com/watch?v=55kqNuf8g_Y"
  },
  // {
  //   name: "A Home far from Home",
  //   description:
  //     "You are a sole mouse in a cat-infested home. Slide your way to the escape while avoiding the cats and collecting cheese.",
  //   tags: [
  //     {
  //       name: "Unity",
  //       color: "pink-text-gradient",
  //     }
  //   ],
  //   image: home,
  //   youtube_link: "https://github.com/",
  //   play_link: "https://github.com/"
  // },
  // {
  //   name: "Otome",
  //   description:
  //     "A simple platformer, but the twist is that you have to 'play the cards' to move, jump, dash, shoot. Each card has a cooldown and a unique effect.",
  //   tags: [
  //     {
  //       name: "Unity",
  //       color: "pink-text-gradient",
  //     }
  //   ],
  //   image: otome,
  //   youtube_link: "https://github.com/",
  //   play_link: "https://github.com/"
  // },
  {
    name: "Keep what alive",
    description:
      "Under the global pandemic, people no longer trust each other. You have to survive and keep your family alive. There's a shop, a bustling street, and a strange neighbor's house.",
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient",
      }
    ],
    image: keepwhatalive,
    youtube_link: "https://www.youtube.com/watch?v=9eGpiSccpYc",
    play_link: "https://baconxpogo.itch.io/keep-what-alive"
  },
  // {
  //   name: "Riverwatch",
  //   description:
  //     "A remake of the game Kurin Kurin on GBA. You are a helicopter that collects trash from the river. Be careful so that your rotors don't hit the ledges.",
  //   tags: [
  //     {
  //       name: "Unity",
  //       color: "pink-text-gradient",
  //     }
  //   ],
  //   image: riverwatch,
  //   youtube_link: "https://github.com/",
  //   play_link: "https://github.com/"
  // }
];

export { services, technologies, experiences, achievements, projects, aboutInfo, headline, workStatement, externalLink };
