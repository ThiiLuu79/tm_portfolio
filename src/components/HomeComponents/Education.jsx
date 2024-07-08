import getExpTimeString from "../../utils/time";

import{
    EDUCATION_TITLE,
    ETS,
    ETS_DEGREE,
    MAISONNEUVE,
    MAISONNEUVE_DEGREE
}
from "../../i18n/homeConstants";

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
                    <h2 className = "section__title section__title--education"><b>{EDUCATION_TITLE}</b></h2>
                    <br></br>
                    <h3 className="ets_">{ETS}</h3>
                    <p className="ets_info">{ETS_DEGREE} {etsExpTimeString} </p>
                    <br></br>
                    <h3 className="maisonneuve_"> {MAISONNEUVE} </h3>
                    <p className="maisonneuve_info">{MAISONNEUVE_DEGREE} {maisonneuveExpTimeString} </p>
                    <br></br>
                </div>
            </div>
        </section>
    )
}
export default Education