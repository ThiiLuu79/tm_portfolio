import getExpTimeString from "../../js/time.js";


const Education = () => {

    var etsStart = new Date(2020, 0);
    var etsEnd = new Date();
    var maisonneuveStart = new Date(2018, 0)
    var maisonneuveEnd = new Date(2020, 0);

    var etsExpTimeString = getExpTimeString(etsEnd, etsStart, false, false, true);
    var maisonneuveExpTimeString = getExpTimeString(maisonneuveEnd, maisonneuveStart, false, false, true);


    return (
        <section id = "education">
            <div className="content_wrap">
                <div>
                    <h2 className = "section__title section__title--education"><b>Education</b></h2>
                    <br></br>
                    <h3 className="ets_">ÉTS - Montreal, Canada</h3>
                    <p className="ets_info">Bachelor of Engineering - BE, Software Engineering, {etsExpTimeString} </p>
                    <br></br>
                    <h3 className="maisonneuve_"> Maisonneuve College - Montreal, Canada </h3>
                    <p className="maisonneuve_info">Pure and applied sciences, {maisonneuveExpTimeString} </p>
                    <br></br>
                </div>
            </div>
        </section>
    )
}
export default Education