const Card = ({ intro, title, subtitle, image  }) => {

    return (
        <section className="intro">
            <h2 className = "section__title section__title--intro">{intro} <strong><b>{title}</b></strong> </h2>
            <p className = "section__subtitle section__subtitle--intro user_title">{subtitle}</p>
            <img src = {image} alt="card" className="card__img"></img>
        </section>
    )
}
export default Card
