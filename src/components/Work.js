import GoBack from '../components/MainComponents/GoBack.js';
import cover from "../img/experiences/experience.jpg";
import nbcImg from "../img/experiences/nbc_interns.jpg";

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
            
            <section class="exp_section">
                <h2 class = "section__title section__title--block">Working experiences</h2>
                <img src = {cover} alt="experience page cover" width="500" class="block__img"></img>
            </section>

            <div class="block_wrap">

                <section class="block project__item">
                    <div class = "block__body">
                    <div class="job-details">
                        <h3>Full Stack Developer (Internship)</h3>
                        <img src = {nbcImg} alt="nbc interns" width="500" class="block__img"></img>
                        <p><a href="https://www.bnc.ca/" target="_blank">National Bank of Canada (NBC)</a> - Montreal, Canada</p>
                        <p id="nbc_time">{nbcExpTimeString}</p>
                    </div>

                    <div class="job-summary">
                        <p>Worked as a Full Stack Developer at National Bank of Canada. Contributed in the redesign of the transactional site (DBE project).</p>
                    </div>
                    <br></br>
                    <p class="cont-title">Key contributions:</p>
                    <ul class="cont">
                        <li>Joined the Vikings team. Worked on the hybrid navigation between the older and newer interface.</li>
                        <li>Implemented new features to enhance the interface.</li>
                        <li>Fixed defects on the interface.</li>
                        <li>Analyzed the data and raised anomalies in a SQL report.</li>
                        <li>Created flat tables to store data from multiple systems.</li>
                    </ul>
                    <div class="environment">
                        <p class="tools">Tools</p>
                        <ul class="tool-list">
                        <li><b>Environment</b>: MacOS, Windows</li>
                        <li><b>Database</b> : Oracle</li>
                        <li><b>Languages</b>: Java, JavaScript, Java Server Page (JSP), HTML, SQL</li>
                        <li><b>Methodology</b>: Agile, Kanban</li>
                        <li><b>Others</b>: IntelliJ, Git, JUnit, Bitbucket, Jira, Confluence, Maven, DBeaver, Docker, Websphere Application Server, Urban Code Deploy, Jenkins, DataHub, Snowflake, AWS Cloud, Teams, Slack</li>
                        </ul>
                    </div>
                    </div>
                </section>

                <section class="block project__item">
                    <div class = "block__body">
                    <div class="job-details">
                        <h3>Full Stack Developer (Internship)</h3>
                        <p><a href="https://inlibro.com/" target="_blank">Solution inLibro</a> - Montreal, Canada</p>
                        <p id="inlibro_time">{inlibroExpTimeString}</p>
                    </div>

                    <div class="job-summary">
                        <p>Worked as a Full Stack Developer on Koha, an open source library management system distributed in different schools and libraries.</p>
                        <br></br>
                        <p class="cont-title">Key contributions:</p>
                        <ul class="cont">
                        <li>Fixed bugs on Koha’s UI and UX</li>
                        <li>Created patches to improve Koha’s system</li>
                        <li>Rebased old patches to make them work on the current Koha system</li>
                        <li>Interacted with Koha community to solve problems</li>
                        <li>Personalized the client’s interface for different schools</li>
                        <li>Worked on inLibro’s plugins, which can be used in Koha</li>
                        <li>Maintenance</li>
                        <li>Unit testing</li>
                        <li>QA testing</li>
                        <li>Assisted new interns</li>
                        </ul>
                    </div>
                    <div class="environment">
                        <br></br>
                        <p class="tools">Tools</p>
                        <ul class="tool-list">
                        <li><b>Environment</b>: Linux, Koha</li>
                        <li><b>Database</b>: MariaDB</li>
                        <li><b>Languages</b>: Perl, CSS, JavaScript, SQL</li>
                        <li><b>Methodology</b>: Agile, Kanban</li>
                        <li><b>Others</b>: Git, Apache, Bugzilla</li>
                        </ul>
                    </div>
                    <br></br>
                    </div>
                </section>

                <section class="block project__item">
                    <div class = "block__body">
                    <div class="job-details">
                        <h3>Food Attendant</h3>
                        <p><a href="https://ciusss-estmtl.gouv.qc.ca/" target="_blank">Residential and long-term care centers (CHSLD)</a> - Montreal, Canada</p>
                        <p id="ciuss_time">{ciussExpTimeString}</p>
                    </div>

                    <div class="job-summary">
                        <p>Worked as a Food Attendant in multiple care centers, such as CHSLD Nicolet and CHSLD J-H Charbonneau.</p>
                        <br></br>
                        <p class="cont-title">Key contributions:</p>
                        <ul class="cont">
                        <li>Prepared meal trays for elderly residents</li>
                        <li>Offered services to elderly residents during breakfast, lunch, and dinner</li>
                        <li>Maintained and cleaned the kitchen</li>
                        <li>Delivered meals to elderly residents’ rooms</li>
                        <li>Made the inventory of food items in the kitchen</li>
                        </ul>
                    </div>
                    <br></br>
                    </div>
                </section>
                </div>
            
        </div>
    )
}
export default Work