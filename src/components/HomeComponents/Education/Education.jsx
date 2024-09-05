import GetExpTimeString from "../../../utils/time";

import { useLanguage } from '../../../LanguageContext/languageContext';

import * as homeConstantsEn from '../../../i18n/homeConstants_en';
import * as homeConstantsFr from '../../../i18n/homeConstants_fr';

const Education = () => {

    const { language } = useLanguage();
    const homeConstants = language === 'en' ? homeConstantsEn : homeConstantsFr;

    var etsStart = new Date(2020, 0);
    var etsEnd = new Date();
    var maisonneuveStart = new Date(2018, 0)
    var maisonneuveEnd = new Date(2020, 0);

    var etsExpTimeString = GetExpTimeString(etsEnd, etsStart, false, false, true);
    var maisonneuveExpTimeString = GetExpTimeString(maisonneuveEnd, maisonneuveStart, false, false, true);


    return (
        <section id = "education">
            <div className="content_wrap">
                <div>
                    <h2 className = "section__title section__title--education"><b>{homeConstants.EDUCATION_TITLE}</b></h2>
                    <br></br>
                    <h3 className="ets_">{homeConstants.ETS}</h3>
                    <p className="ets_info">{homeConstants.ETS_DEGREE} {etsExpTimeString} </p>
                    <h4>{homeConstants.COURSES_TITLE}</h4>
                    <ul className="courses_list">
                        {homeConstants.ETS_COURSES.map((course) => (
                                <li key={course} className="courses_list_item">{course}</li>
                            ))}
                    </ul>
                    <br></br>
                    <h3 className="maisonneuve_"> {homeConstants.MAISONNEUVE} </h3>
                    <p className="maisonneuve_info">{homeConstants.MAISONNEUVE_DEGREE} {maisonneuveExpTimeString} </p>
                    <br></br>
                </div>
            </div>
        </section>
    )
}
export default Education
