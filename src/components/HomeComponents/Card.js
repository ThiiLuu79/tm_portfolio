import profile from "../../img/home/pfp.jpg";

const Card = () => {

    return (
        <section className="intro" id = "home">
            <h2 className = "section__title section__title--intro">Hi, my name is <strong className="name"><b className = "user_full_name">The Minh Luong</b></strong> </h2>
            <p className = "section__subtitle section__subtitle--intro user_title">Software Engineering Student</p>
            <img src = {profile} alt="home_picture" className="intro__img"></img>
        </section>
    )
}
export default Card