import taskmg from '../assets/taskmg.png';
import portfoliov2 from '../assets/portfoliov2.png';
import movieapp from '../assets/movieapp.png';
import blkrouge from '../assets/blkrouge.png';
import TravelBotImg from '../assets/travelbot.png';

const projects = [
    {
        id: "travel-bot",
        name: "TravelBot",
        img: TravelBotImg,
        link: "https://travelbot-mz.netlify.app", 
        description: `
            TravelBot is an AI-powered chatbot designed to make travel planning effortless and personalized. Using OpenAI's GPT technology, TravelBot interacts with users by asking a set of tailored questions about their travel preferences such as destination, duration, budget, and interests. Based on these inputs, it generates multiple detailed travel itineraries that include places to visit, activities, highlights, and estimated costs.
            Built with React for a smooth and responsive user experience, TravelBot not only helps users decide where to go but also offers creative and unique travel plans. It demonstrates my skills in frontend development, API integration, and conversational AI.
            This project reflects my passion for combining technology with real-world applications to enhance user experiences and solve everyday problems.
        `,
        tech: ["React", "OpenAI", "Node.js", "Framer Motion", "API Integration"]
    },
    {
        id: "task-management",
        name: "Task Management",
        img: taskmg,
        link: "https://mz-task-management.netlify.app",
        description: "A Kanban-style task board with drag-and-drop, task categories, and real-time updates.",
        tech: ["React", "Framer Motion", "Tailwind CSS"]
    },
    {
        id: "portfolio-v2",
        name: "Portfolio V2",
        img: portfoliov2,
        link: "https://portfolio-v2-mz.netlify.app",
        description: "A second portfolio just to fullfill my obsession over developing new websites and getting better!",
        tech: ["React", "JavaScript", "Motion Frame", "UI/UX"]
    },
    {
        id: "movie-app",
        name: "Movie App",
        img: movieapp,
        link: "https://movie-app-mz.netlify.app",
        description: "Fetches and displays movies using an external API. Includes search and favorites.",
        tech: ["React", "API", "CSS Modules"]
    },
    {
        id: "blkrouge",
        name: "BLKROUGE",
        img: blkrouge,
        link: "https://blkrouge.netlify.app",
        description: "An E-commerce website for selling clothing based in Calgary.",
        tech: ["JavaScript", "HTML", "CSS"]
    },
   
];

export default projects;