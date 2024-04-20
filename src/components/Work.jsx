import GoBack from './MainComponents/GoBack';
import WorkExperience from "./ReusableComponents/WorkExperience";

import cover from "../img/experiences/experience.jpg";
import nbcImg from "../img/experiences/nbc_interns.jpg";
import inlibro from "../img/experiences/inlibro.png";
import ciuss from "../img/experiences/ciuss.jpg";

import getExpTimeString from "../js/time.js";

const Work = () => {

    var nbcStart = new Date(2023, 4, 14);
    var nbcEnd = new Date(2023, 7, 30);
    var inlibroStart = new Date(2022, 0);
    var inlibroEnd = new Date(2022, 3);
    var ciussStart = new Date(2019, 7);
    var ciussEnd = new Date(2019, 8);

    var nbcExpTimeString = getExpTimeString(nbcEnd, nbcStart);
    var inlibroExpTimeString = getExpTimeString(inlibroEnd, inlibroStart);
    var ciussExpTimeString = getExpTimeString(ciussEnd, ciussStart);


    return (
        <div>
            <GoBack/>
            
            <section className="exp_section">
                <h2 className = "section__title section__title--block">Working experiences</h2>
                <img src = {cover} alt="experience page cover" width="500" className="block__img"></img>
            </section>

            <div className="block_wrap">

                <WorkExperience
                    title={"Full Stack Developer (Internship)"}
                    image={nbcImg}
                    imgAlt={"nbc interns"}
                    company={"National Bank of Canada (NBC)"}
                    companyLink={"https://www.bnc.ca/"}
                    location={"Montreal, Canada"}
                    workTime={nbcExpTimeString}
                    description={"Worked as a Full Stack Developer at National Bank of Canada. Contributed in the redesign of the transactional site (DBE project)."}
                    contributions={["Joined the Vikings team. Worked on the hybrid navigation between the older and newer interface.", "Implemented new features to enhance the interface.", "Fixed defects on the interface.", "Analyzed the data and raised anomalies in a SQL report.", "Created flat tables to store data from multiple systems."]}
                    tools={["Environment: MacOS, Windows", "Database: Oracle", "Languages: Java, JavaScript, Java Server Page (JSP), HTML, SQL", "Methodology: Agile, Kanban", "Others: IntelliJ, Git, JUnit, Bitbucket, Jira, Confluence, Maven, DBeaver, Docker, Websphere Application Server, Urban Code Deploy, Jenkins, DataHub, Snowflake, AWS Cloud, Teams, Slack"]}
                />

                <WorkExperience
                    title={"Full Stack Developer (Internship)"}
                    image={inlibro}
                    imgAlt={"inlibro"}
                    company={"Solution inLibro"}
                    companyLink={"https://inlibro.com/"}
                    location={"Montreal, Canada"}
                    workTime={inlibroExpTimeString}
                    description={"Worked as a Full Stack Developer on Koha, an open source library management system distributed in different schools and libraries."}
                    contributions={["Fixed bugs on Koha’s UI and UX", "Created patches to improve Koha’s system", "Rebased old patches to make them work on the current Koha system", "Interacted with Koha community to solve problems", "Personalized the client’s interface for different schools", "Worked on inLibro’s plugins, which can be used in Koha", "Maintenance", "Unit testing", "QA testing", "Assisted new interns"]}
                    tools={["Environment: Linux, Koha", "Database: MariaDB", "Languages: Perl, CSS, JavaScript, SQL", "Methodology: Agile, Kanban", "Others: Git, Apache, Bugzilla"]}
                />

                <WorkExperience
                    title={"Food Attendant"}
                    image={ciuss}
                    imgAlt={"ciuss"}
                    company={"Residential and long-term care centers (CHSLD)"}
                    companyLink={"https://ciusss-estmtl.gouv.qc.ca/"}
                    location={"Montreal, Canada"}
                    workTime={ciussExpTimeString}
                    description={"Worked as a Food Attendant in multiple care centers, such as CHSLD Nicolet and CHSLD J-H Charbonneau."}
                    contributions={["Prepared meal trays for elderly residents", "Offered services to elderly residents during breakfast, lunch, and dinner", "Maintained and cleaned the kitchen", "Delivered meals to elderly residents’ rooms", "Made the inventory of food items in the kitchen"]}
                    tools={["Meal Delivery Carts", "Kitchen Appliances", "Cleaning Equipment", "Inventory Management"]}
                />
            </div>
            
        </div>
    )
}
export default Work