import profile from "../../img/home/pfp.jpg";
import {
    MY_NAME, 
    INTRODUCTION, 
    ROLE
} from "./constants.js";

const Card = () => {

    return (
        <section className="intro" id = "home">
            <h2 className = "section__title section__title--intro">{INTRODUCTION} <strong className="name"><b className = "user_full_name">{MY_NAME}</b></strong> </h2>
            <p className = "section__subtitle section__subtitle--intro user_title">{ROLE}</p>
            <img src = {profile} alt="home_picture" className="intro__img"></img>
        </section>
    )
}
export default Card