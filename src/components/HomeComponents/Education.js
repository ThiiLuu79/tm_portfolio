import getExpTimeString from "../../js/time.js";


const Education = () => {

    var etsExpTimeString = getExpTimeString(new Date(), new Date(2020, 0), false, false, true);
    var maisonneuveExpTimeString = getExpTimeString(new Date(2020, 0), new Date(2018, 0), false, false, true);


    return (
        <section id = "education">
            <div class="content_wrap">
                <div>
                    <h2 class = "section__title section__title--education"><b>Education</b></h2>
                    <br></br>
                    <h3 class="ets_">ÉTS - Montreal, Canada</h3>
                    <p class="ets_info">Bachelor of Engineering - BE, Software Engineering, {etsExpTimeString} </p>
                    <br></br>
                    <h3 class="maisonneuve_"> Maisonneuve College - Montreal, Canada </h3>
                    <p class="maisonneuve_info">Pure and applied sciences, {maisonneuveExpTimeString} </p>
                    <br></br>
                </div>
            </div>
        </section>
    )
}
export default Education