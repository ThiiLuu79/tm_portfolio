import GoBack from './MainComponents/GoBack';
import Button from "./MainComponents/Button";

import cover from "../img/academic/spCover.jpg";
import webflix from "../img/academic/webflix.png";
import pusher from "../img/academic/pushers.png";
import huffman from "../img/academic/huffman.png";
import chain from "../img/academic/chain.jpg";
import opac from "../img/academic/CSJV.jpg";

const Academics = () => {

    return (
        <div>
            <GoBack/>

            <section className="intro">
                <h2 className = "section__title section__title--intro">Here are my <strong className="name"><b className="academicPro_name">Academic Projects</b></strong> </h2>
                <p className = "section__subtitle section__subtitle--intro academicPro_type">Academic Projects</p>
                <img src = {cover} alt="web page cover" className="intro__img"></img>
            </section>

            <div className="block_wrap">

                <section className="block project__item">
                    <h2 className = "section__title section__title--block">Webflix Application</h2>
                    <p className = "section__subtitle section__subtitle--block">Fall 2023 (ÉTS)</p>

                    <div className = "block__body">
                        <p>As part of the <b>High Performance Databases (LOG660)</b> course, we were tasked with developing a Full Stack application named <b>Webflix</b>, 
                            allowing clients to rent movies in accordance with their subscriptions. Our data management required the utilization of an Oracle database, 
                            and interaction with this data was achieved through an object-oriented program. 
                            This assignment was structured in three phases. 
                            <br></br><br></br>
                            In the initial phase, we focused on designing className and relational diagrams for the application, 
                            tailored to various use cases. Additionally, we were responsible for importing a vast amount of data into the database from an XML file containing 
                            thousands of entries.
                            <br></br><br></br>
                            For the second phase of this assignment, our task was to design and develop a user interface (UI) for the application. Within this interface, 
                            clients could log in to access detailed information about movies, actors and directors. Moreover, clients with eligible subscriptions had the ability to rent movies.
                            <br></br><br></br>
                            In the third phase, our task included establishing an analytical data system to evaluate rental frequencies across various dimensions. 
                            Additionally, we were tasked with implementing a recommendation function for each movie, by getting the client ratings from an external database.
                        </p>
                        <br></br>

                        <p className="cont-title">Key contributions:</p>
                        <ul className="cont">
                            <li>Led a team of four students.</li>
                            <li>Designed and optimized the className and relational diagram for the Webflix application.</li>
                            <li>Created database tables for the Webflix application.</li>
                            <li>Created SQL triggers to implement the business logic within the database.</li>
                            <li>Inserted data entries into the database from a given XML file using JDBC.</li>
                            <li>Created a bridge between an object-oriented program and a relational database using an ORM (Hibernate).</li>
                            <li>Implemented the user interface using Java and JavaSwing including a log in system, a movie searching window and a movie details window.</li>
                            <li>Created a user manual to assist the client in using the application.</li>
                            <li>Designed and optimized the star schema for the analytical data system.</li>
                            <li>Utilized the ETL (Extract, Transform, Load) process to transform data and seamlessly insert it into both fact and dimensions tables.</li>
                        </ul>

                        <br></br>
                        <h4>Work time: 10 weeks</h4>
                        <h4>Grade for part 1 : 95%</h4>
                        <h4>Grade for part 2 : 92%</h4>
                        <h4>Grade for part 3 : 96%</h4>
                        <h4>Skills:</h4>
                        <ul style={{listStyleType:"none"}}>
                            <li>Language(s): Java, SQL, PLSQL, HQL, JDBC, UML, ERD, XML</li>
                            <li>Database: Oracle</li>
                            <li>Framework(s): Hibernate, JavaSwing</li>
                            <li>Pattern Design(s): Data Access Object (DAO), Singleton</li>
                            <li>Tool(s): Git/GitHub, IntelliJ, Visual Paradigm, SQL Developer</li>
                        </ul>
                    </div>
                    <img src = {webflix} alt="webflix cover" width="500" className="block__img"></img>
                </section>

                
                <section className="block project__item">
                    <h2 className = "section__title section__title--block">Pushers Game</h2>
                    <p className = "section__subtitle section__subtitle--block">Winter 2023 (ÉTS)</p>

                    <div className = "block__body">
                        <p>As part of the <b>Data Structures and Algorithms (LOG320)</b> course, giving a board game, we had the task to implement an AI that determines the best moves to play in that game.
                            The game is called <b>Pushers</b>, where the player have to reach the opponent's last row by moving his pieces. The rules are simple: 
                        </p>
                        <br></br>
                        <ul className="cont">
                            <li>Pushables are the smaller pieces and can only be pushed by pushers</li>
                            <li>Pushers are the bigger pieces and can move by themselves</li>
                            <li>Pieces can move up or diagonally, but not backward or sideways</li>
                            <li>Pieces can only capture diagonally</li>
                        </ul>
                        <br></br>

                        <p className="cont-title">Key contributions:</p>
                        <ul className="cont">
                        <li>Implemented a move generator that returns all the possible moves in a turn.</li>
                        <li>Implemented the minimax algorithm with prunning to score all the possible moves.</li>
                        <li>Implemented a static evaluation function in order to determine the AI's strategy.</li>
                        </ul>

                        <br></br>
                        <h4>Work time: 6 weeks</h4>
                        <h4>Skills:</h4>
                        <ul style={{listStyleType:"none"}}>
                            <li>Language(s): Java</li>
                            <li>Algorithm(s): MiniMax, Alpha-Beta Pruning, Recursive</li>
                            <li>Data structure(s): 2D arrays </li>
                            <li>Tool(s): Git/GitHub, IntelliJ</li>
                        </ul>
                    </div>
                    <img src = {pusher} alt="pushers cover" width="500" className="block__img"></img>
                </section>

                <section className="block project__item">
                    <h2 className = "section__title section__title--block">Huffman algorithm</h2>
                    <p className = "section__subtitle section__subtitle--block">Winter 2023 (ÉTS)</p>

                    <div className = "block__body">
                        <p>As part of the <b>Data Structures and Algorithms (LOG320)</b> course,  we were challenged with the implementation of the Huffman algorithm, 
                        an essential tool in the realm of file compression and decompression. 
                        The execution of this algorithm involved a multifaceted process, commencing with the construction of a character frequency table derived from the contents of a file.
                        Subsequently, we embarked on the creation of the Huffman tree based on this frequency table, followed by the generation of the Huffman code from the resulting tree.
                        The culmination of our efforts lay in the encoding and decoding of files utilizing the generated Huffman code.
                        </p>
                        <br></br>


                        <p className="cont-title">Key contributions:</p>
                        <ul className="cont">
                        <li>Implemented frequency table of all the characters in a file.</li>
                        <li>Implemented the Huffman algorithm to encode/decode a file.</li>
                        </ul>

                        <br></br>

                        <h4>Work time: 3 weeks</h4>
                        <h4>Final grade : 97.5%</h4>
                        <h4>Skills:</h4>
                        <ul style={{listStyleType:"none"}}>
                            <li>Language(s): Java</li>
                            <li>Algorithm(s): Huffman, Recursive</li>
                            <li>Data structure(s): Binary search tree, HashMap, ArrayList, PriorityQueue</li>
                            <li>Tool(s): Git/GitHub, IntelliJ</li>
                        </ul>
                    </div>
                    <img src = {huffman} alt="huff cover" width="500" className="block__img"></img>
                </section>


                <section className="block project__item">
                    <h2 className = "section__title section__title--block">Chain of Production Simulation</h2>
                    <p className = "section__subtitle section__subtitle--block">Fall 2022 (ÉTS)</p>

                    <div className = "block__body">
                        <p>As part of the <b>Object-Oriented Programming and Conception (LOG121)</b> course, we were tasked with the development of a simulated production chain dedicated to manufacturing airplanes. 
                            This intricate simulation involved the orchestration of various factories essential for airplane production. 
                            For instance, the creation of metal necessitated the operation of metal factories, followed by the transportation of metal to wing and engine factories for the assembly of these crucial components. 
                            The final step in this intricate process involved sending wings and engines to an assembly factory responsible for crafting the complete airplane.
                            The completed airplanes were then directed to a warehouse, from which they would be strategically introduced into the market, either at fixed intervals or randomly.
                            Notably, the warehouse was designed with a maximum capacity, prompting the suspension of production activities when this threshold was reached.
                            Prior to the implementation phase, our undertaking commenced with a thoughtful consideration of system conception. 
                            This involved the creation of UML className diagrams and sequence diagrams, meticulously outlining the key operations integral to the functionality of the system.
                        </p>
                        <br></br>

                        <p className="cont-title">Key contributions:</p>
                        <ul className="cont">
                        <li>Creating a conceptual diagram of the system with UML.</li>
                        <li>Implemented the chain of production with Java and JavaSwing.</li>
                        <li>Applied the observator and stategy pattern design to make the code more maintainable.</li>
                        </ul>

                        <br></br>

                        <h4>Work time: 4 weeks</h4>
                        <h4>Final grade : 91%</h4>
                        <h4>Skills:</h4>
                        <ul style={{listStyleType:"none"}}>
                            <li>Language(s): Java, XML, UML</li>
                            <li>Framework(s): JavaSwing</li>
                            <li>Pattern Design(s): Observator, Strategy, Singleton</li>
                            <li>Tool(s): Git/GitHub, IntelliJ, Visual Paradigm</li>
                        </ul>
                    </div>
                    <img src = {chain} alt="ProdChain cover" width="500" className="block__img"></img>
                </section>

                <section className="block project__item" id ="opac">
                    <h2 className = "section__title section__title--block">Koha's OPAC pages</h2>
                    <p className = "section__subtitle section__subtitle--block">Winter 2022 (Internship)</p>
            
                    <div className = "block__body">

                    <p>During my first internship at <a href="https://inlibro.com/" target="_blank" rel="noreferrer">Solution inLibro</a>, I had the opportunity to customize the OPAC page for both St-Jean Vianney College and the Cultural French Center of Vancouver.
                        The Koha OPAC serves as a versatile interface, enabling clients to effortlessly perform various tasks, including reserving items and conducting specific item searches, 
                        among other functionalities. Engaging with this project was particularly enjoyable for me, as it allowed me to indulge my passion for web development and enhance my creative skills.</p>

                    <br></br>
                    <br></br>
                    <Button text="CSJV" redirect='https://csjv-biblio.inlibro.net/' blank={true} noreferrer={true}/>
                    <br></br><br></br>
                    <Button text="CCFV" redirect='https://ccfvancouver.inlibro.net/' blank={true} noreferrer={true}/>
                    <br></br><br></br>
                    <h4>Skills:</h4>
                    <ul style={{listStyleType:"none"}}>
                        <li>Language(s): JavaScript, CSS</li>
                        <li>Tool(s): Git/GitHub, Koha</li>
                    </ul>
                    </div>
                    <img src = {opac} alt="opac cover" width="500" className="block__img"></img>
                </section>


            </div>


        </div>
    )
}
export default Academics