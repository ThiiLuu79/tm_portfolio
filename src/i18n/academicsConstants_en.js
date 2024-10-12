//Constant for Academics.jsx
export const ACADEMICS_WELCOME = "Here are my ";
export const ACADEMICS_PROJECT = "Academic Projects";

//WEBFLIX PROJECT
export const WEBFLIX_PROJECT = {
    title: "Webflix Application",
    period: "Fall 2023 (ÉTS)",
    description: "As part of the High Performance Databases (LOG660) course, we were tasked with developing a Full Stack application named Webflix, allowing clients to rent movies in accordance with their subscriptions. Our data management required the utilization of an Oracle database, and interaction with this data was achieved through an object-oriented program. This assignment was structured in three phases. In the initial phase, we focused on designing class and relational diagrams for the application, tailored to various use cases. Additionally, we were responsible for importing a vast amount of data into the database from an XML file containing thousands of entries. For the second phase of this assignment, our task was to design and develop a user interface (UI) for the application. Within this interface, clients could log in to access detailed information about movies, actors and directors. Moreover, clients with eligible subscriptions had the ability to rent movies. In the third phase, our task included establishing an analytical data system to evaluate rental frequencies across various dimensions. Additionally, we were tasked with implementing a recommendation function for each movie, by getting the client ratings from an external database.",
    contributions: [
        "Led a team of four students.",
        "Designed and optimized the class and relational diagram for the Webflix application.",
        "Created database tables for the Webflix application.",
        "Created SQL triggers to implement the business logic within the database.",
        "Inserted data entries into the database from a given XML file using JDBC.",
        "Created a bridge between an object-oriented program and a relational database using an ORM (Hibernate).",
        "Implemented the user interface using Java and JavaSwing including a log in system, a movie searching window and a movie details window.",
        "Created a user manual to assist the client in using the application.",
        "Designed and optimized the star schema for the analytical data system.",
        "Utilized the ETL (Extract, Transform, Load) process to transform data and seamlessly insert it into both fact and dimensions tables."
    ],
    tools: [
        "Language(s): Java, SQL, PLSQL, HQL, JDBC, UML, ERD, XML", 
        "Database: Oracle",
        "Framework(s): Hibernate, JavaSwing",
        "Pattern Design(s): Data Access Object (DAO), Singleton",
        "Tool(s): Git/GitHub, IntelliJ, Visual Paradigm, SQL Developer"
    ],
    imgAlt: "webflix"
};

//PUHSERS PROJECT
export const PUSHERS_PROJECT = {
    title: "Pushers Game",
    period: "Winter 2023 (ÉTS)",
    description: "As part of the Data Structures and Algorithms (LOG320) course, giving a board game, we had the task to implement an AI that determines the best moves to play in that game. The game is called Pushers, where the player have to reach the opponent's last row by moving his pieces. The rules are simple: Pushables are the smaller pieces and can only be pushed by pushers. Pushers are the bigger pieces and can move by themselves. Pieces can move up or diagonally, but not backward or sideways. Pieces can only capture diagonally. The AI was implemented using the minimax algorithm with prunning to score all the possible moves. A static evaluation function was also implemented in order to determine the AI's strategy.",
    contributions: [
        "Implemented a move generator that returns all the possible moves in a turn.",
        "Implemented the minimax algorithm with prunning to score all the possible moves.",
        "Implemented a static evaluation function in order to determine the AI's strategy."
    ],
    tools: [
        "Language(s): Java",
        "Algorithm(s): MiniMax, Alpha-Beta Pruning, Recursive",
        "Data structure(s): 2D arrays",
        "Tool(s): Git/GitHub, IntelliJ"
    ],
    imgAlt: "pushers"
};

//HUFFMAN PROJECT
export const HUFFMAN_PROJECT = {
    title: "Huffman algorithm",
    period: "Winter 2023 (ÉTS)",
    description: "As part of the Data Structures and Algorithms (LOG320) course, we tackled the Huffman algorithm, a key technique for compressing and decompressing files. The process began by analyzing a file to create a table showing how often each character appears. Then, we built the Huffman tree using this table. From the tree, we derived the Huffman code, which assigns a unique binary sequence to each character. Finally, we used this code to encode and decode files, completing the task.",
    contributions: [
        "Implemented frequency table of all the characters in a file.",
        "Implemented the Huffman algorithm to encode/decode a file."
    ],
    tools: [
        "Language(s): Java",
        "Algorithm(s): Huffman, Recursive",
        "Data structure(s): Binary search tree, HashMap, ArrayList, PriorityQueue",
        "Tool(s): Git/GitHub, IntelliJ"
    ],
    imgAlt: "huffman"
};

//CHAIN OF PRODDUCTION PROJECT
export const CHAIN_PROJECT = {
    title: "Chain of Production Simulation",
    period: "Fall 2022 (ÉTS)",
    description: "As part of the Object-Oriented Programming and Conception (LOG121) course, we worked on creating a simulated production chain for making airplanes. This involved coordinating different factories needed for airplane production. For example, metal factories made metal, which was then transported to wing and engine factories for assembly. The final step was sending wings and engines to an assembly factory to build the complete airplane. These airplanes were stored in a warehouse before being released to the market at set times or randomly. The warehouse had a maximum capacity, so production stopped when it was full. Before starting the actual coding, we planned the system by creating UML class diagrams and sequence diagrams, detailing how the system would work.",
    contributions: [
        "Creating a conceptual diagram of the system with UML.",
        "Implemented the chain of production with Java and JavaSwing.",
        "Applied the observator and stategy pattern design to make the code more maintainable."
    ],
    tools: [
        "Language(s): Java, XML, UML",
        "Framework(s): JavaSwing",
        "Pattern Design(s): Observator, Strategy, Singleton",
        "Tool(s): Git/GitHub, IntelliJ, Visual Paradigm"
    ],
    imgAlt: "chain"
};

//KOHA'S OPAC PAGES PROJECT
export const KOHA_PROJECT = {
    title: "Koha's OPAC pages",
    period: "Winter 2022 (Internship)",
    description: "During my first internship at Solution inLibro, I had the opportunity to customize the OPAC page for both St-Jean Vianney College and the Cultural French Center of Vancouver. The Koha OPAC serves as a versatile interface, enabling clients to effortlessly perform various tasks, including reserving items and conducting specific item searches, among other functionalities. Engaging with this project was particularly enjoyable for me, as it allowed me to indulge my passion for web development and enhance my creative skills.",
    contributions: [
        "Customized the OPAC page for both St-Jean Vianney College and the Cultural French Center of Vancouver."
    ],
    tools: [
        "Language(s): JavaScript, CSS",
        "Tool(s): Git/GitHub, Koha"
    ],
    imgAlt: "opac"
};
