import profile from "../../img/home/pfp.jpg";

const Card = () => {

    return (
        <section class="intro" id = "home">
            <h2 class = "section__title section__title--intro">Hi, my name is <strong class="name"><b class = "user_full_name">The Minh Luong</b></strong> </h2>
            <p class = "section__subtitle section__subtitle--intro user_title">Software Engineering Student</p>
            <img src = {profile} alt="home picture" class="intro__img"></img>
        </section>
    )
}
export default Card