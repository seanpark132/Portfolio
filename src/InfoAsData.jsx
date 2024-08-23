export const TECH_STACK = [
  { fileName: "javascript.png", name: "JavaScript" },
  { fileName: "typescript.png", name: "TypeScript" },
  { fileName: "python.png", name: "Python" },
  { fileName: "react.png", name: "React" },
  { fileName: "nextjs.png", name: "Next.js" },
  { fileName: "aws_lambda.svg", name: "AWS Lambda" },
  { fileName: "mongodb.png", name: "MongoDB" },
  { fileName: "nodejs.png", name: "Node.js" },
  { fileName: "html5.png", name: "HTML5" },
  { fileName: "css3.png", name: "CSS3" },
  { fileName: "firebase.png", name: "Firebase" },
  { fileName: "mysql.png", name: "MySQL" },
];

export const PROJECTS = [
  {
    name: "Maplemaps",
    projectName: "maplemaps",
    techItems: ["TypeScript", "React", "AWS Lambda", "MongoDB", "Node.js"],
    description: `A web app serving 40,000+ monthly active users, offering a comprehensive database and useful tools for an online game.     
    To display a data-driven interface of over 5,000 documents and images while maintaining high performance for users, effective data structures, 
    Lambda functions, and MongoDB best practices are used. A highly customizable table was built using TanStack Table and shadcn/ui to let users quickly sort and filter data.`,
    websiteLink: "https://maplemaps.net/",
    images: [1, 2, 3, 4, 5],
  },

  {
    name: "FaveBattles",
    projectName: "favebattles",
    techItems: ["JavaScript", "React", "HTML5", "CSS3", "Firebase"],
    description: `A web app where users can create and play 
    tournament-like games to test their preferences on trendy topics. Users can discover popular 
    choices for topics of interest, play with friends to see where opinions differ, and look at the 
    rankings to see where their favourite lands.`,
    websiteLink: "https://favebattles.netlify.app/",
    githubLink: "https://github.com/seanpark132/FaveBattles",
    images: [1, 2, 3, 4, 5, 6],
  },
  {
    name: "Robot or Not",
    projectName: "robot_or_not",
    techItems: ["TypeScript", "Next.js", "Node.js", "MySQL"],
    description: `A multiplayer web app developed using Next.js, where users need to guess
			if a response to a question is AI-generated or made by another user. WebSockets are used to enable real-time data communication between multiple users.  A fun game to play with
       friends that uses OpenAI's GPT-4 API to create unique experiences.`,
    websiteLink: "https://robot-or-not.vercel.app/",
    githubLink: "https://github.com/seanpark132/Robot-or-Not",
    images: [1, 2, 3, 4],
  },
  {
    name: "Faster Snake Game",
    projectName: "snake",
    techItems: ["Python"],
    description: `A faster-paced version of the classic snake game, developed using Python. 
    Unique features include: additional food that is created every 10 seconds, food deletion after 10 seconds, 
    and an in-game timer.`,
    githubLink: "https://github.com/seanpark132/Faster-snake-game",
    images: [1, 2, 3],
  },
];
