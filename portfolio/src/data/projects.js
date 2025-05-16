import work1 from '../assets/1.jpg';
import work2 from '../assets/2.jpg';
import work3 from '../assets/3.jpg';
import work4 from '../assets/4.jpg';


const projects = [
    {
        id: "task-management",
        name: "Task Management",
        img: work1,
        link: "https://mz-task-management.netlify.app",
        description: "A Kanban-style task board with drag-and-drop, task categories, and real-time updates.",
        tech: ["React", "Framer Motion", "Tailwind CSS"]
    },
    {
        id: "introduction",
        name: "Introduction",
        img: work2,
        link: "https://mz-portfolio-mz.netlify.app",
        description: "An animated personal intro page with smooth transitions and parallax effects.",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: "movie-app",
        name: "Movie App",
        img: work3,
        link: "https://movie-app-mz.netlify.app",
        description: "Fetches and displays movies using an external API. Includes search and favorites.",
        tech: ["React", "API", "CSS Modules"]
    },
    {
        id: "blkrouge",
        name: "BLKROUGE",
        img: work3,
        link: "https://blkrouge.netlify.app",
        description: "An E-commerce website for selling clothing based in Calgary.",
        tech: ["JavaScript", "HTML", "CSS"]
    },
    {
        id: "portfolio-v2",
        name: "Portfolio V2",
        img: work4,
        link: "https://portfolio-v2-mz.netlify.app",
        description: "A second portfolio just to fullfill my obsession over developing new websites and getting better!",
        tech: ["React", "JavaScript", "Motion Frame", "UI/UX"]
    },
];

export default projects;