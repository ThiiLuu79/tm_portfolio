//Constant for Personals.jsx
export const PERSONALS_WELCOME = "Here are my ";
export const PERSONALS_PROJECT = "Personal Projects";
export const VISIT = "Visit";
export const GITHUB_LINK = "GitHub Repository";

//COOKING LAB PROJECT
export const COOKINGLAB_PROJECT = {
    title: "Cooking Lab Application",
    period: "2024-Present",
    description: "CookingLab is a personalized recipe discovery app designed to make meal planning simple and fun. Inspired by the challenge of deciding what to cook with dietary restrictions, CookingLab generates tailored recipes based on user preferences, including cuisine type, meal type, dietary needs, and allergies. Powered by the Edamam API, the app offers diverse recipe options to suit a wide range of tastes and restrictions, making it easy to find the perfect dish. Developed in collaboration with my partner, CookingLab is an innovative solution for anyone seeking fresh meal ideas without the guesswork.",
    contributions: [
        "Played the role of Product Owner (PO). Defined the product vision, created the product backlog, and prioritized features based on user needs and business value.",
        "Created a static prototype with AxureRP for the UI/UX design.",
        "Created and separated user stories for the application.",
        "Developed the front end using React, Redux, and Bootstrap.",
        "Fetched data from Edamam API to display recipes by creating a proxy with Node.js and Express.",
        "Utilized Redux to persist user selections across steps, allowing users to retain their choices when navigating backward.",
        "Implemented a micro-frontend architecture to enable independent development and deployment of features.",
        "Built a debug panel for skipping steps, which accelerates testing and troubleshooting, streamlining development workflow.",
        "Created unit tests to get a coverage of over 95% of the codebase.",
        "Created end-to-end tests with Cypress.",
        "Built a back end API in Java to expose personal recipes to the user.",
        "Implemented a CI pipeline to make sure the tests are run automatically on every push to the main branch."
    ],
    tools: [
        "Language(s): TypeScript, CSS, Java", 
        "Framework(s): React, Bootstrap, Redux, Node.js, Express, Jest, Cypress, Spring, JUnit",
        "Database: MongoDB",
        "Architectural pattern: Micro-frontends, Redux, MVC Pattern, REST API, Microservices architecture",
        "Methodology: Agile, Scrum, DevOps",
        "Tool(s): Git/GitHub, GitHub Project Board, Jira, VSCode, IntelliJ, AxureRP, Edamam API, Postman, Swagger, Netlify, Render, Microsoft Teams, SonarQube"
    ],
    imgAlt: "cookinglab"
};

//LE SSERAFIM PROJECT
export const LESSERAFIM_PROJECT = {
    title: "LE SSERAFIM Fanpage",
    period: "2025",
    description: "A fanpage dedicated to LE SSERAFIM, my favorite K-pop group, where I showcase my appreciation for their music and journey. The page features an overview of their career, highlighting key milestones and achievements over the years. It includes a list of their music videos. Additionally, the page offers detailed profiles of each member, celebrating their unique talents and contributions to the group. This project allowed me to integrate web design and content organization while reflecting my passion for the group.",
    contributions: [
        "Created a fanpage dedicated to LE SSERAFIM using React and Bootstrap",
    ],
    tools: [
        "Language(s): TypeScript, CSS", 
        "Framework(s): React, Bootstrap",
        "Architectural pattern: Micro-frontends",
        "Tool(s): Git/GitHub, VSCode, Netlify"
    ],
    imgAlt: "lesserafim"
};

//TITITEA PROJECT
export const TITITEA_PROJECT = {
    title: "Tititea Application",
    period: "2021",
    description: "For very my first website, I made a page for TiTiTea, a pretend tea shop. On this page, people could order tea, give ratings, and even apply for positions. While working on it, I picked up some useful web development skills. I started by making the page look good and easy to use. Then, I added features to help users, like messages that pop up if they forgot to fill in all the required info in a form. To wrap it up, I set up a system on the back end to safely store the info people entered into a database. Users would get a quick confirmation message, letting them know their request was successfully sent to the back end.",
    contributions: [
        "Made a page for TiTiTea, a pretend tea shop",
        "Created the front-end using HTML, CSS, and JavaScript",
        "Created the back-end using PHP, MySQL, and XAMPP stack"
    ],
    tools: [
        "Language(s): HTML, CSS, JavaScript, PHP, MySQL, XAMPP Stack",
        "Tool(s): Git/GitHub, VSCode"
    ],
    imgAlt: "tititea"
};
