import "../styles/ReviewsPreviews.css"

const ReviewsPreviews = ({reviews}) => {

    const stars = (n) => {
        const rate = "⭐".repeat(n)
        return rate
    }

    console.log(reviews)

    return <div className="reviews">
        {reviews.length == 0 && <p>Aucun avis n'a été trouvé</p>}
        {reviews.map(rev => (
            <div className="review-preview" key={rev.id}>
                <h2 className="review-preview-title">{rev.title}</h2><div className="review-author">par {rev.name}</div>
                <div className="rate"><span>{rev.rate}</span></div>
                <h3>Informations générales</h3>
                <div className="question"><b>Lieu : </b>{rev.place}</div>
                {rev.place && <div className="question"><b>Comment connaissez-vous {rev.place} ? </b>{rev.hostInfo}</div>}
                <h3>Informations sur l'expérience</h3>
                {rev.hobbies && <div className="question"><b>Qu'avez vous fait pendant l'expérience : </b>{rev.hobbies}</div>}
                {rev.lastMeal && <div className="question"><b>Dernier repas ingéré : </b>{rev.lastMeal}</div>}
                <div className="question"><b>Poids estimé : </b>{rev.weight}g</div>
                <div className="question"><b>Longeur estimée : </b>{rev.len}cm</div>
                <div className="question"><b>Ressenti post-acte : </b>{rev.postActFeeling}</div>
                <h3>Cadre de l'expérience</h3>
                <div className="question"><b>Date et heure : </b>{rev.date.toDate().toLocaleDateString("fr-FR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })} à {rev.date.toDate().toLocaleTimeString("fr-FR")}</div>
                <div className="question"><b>Qualité de l'eau : </b>{stars(rev.waterQuality)}</div>
                <div className="question"><b>Hygiène générale : </b>{stars(rev.hygiene)}</div>
                <div className="question"><b>Odeur : </b>{stars(rev.smell)}</div>
                <div className="question"><b>Probabilité que la personne utilisant les toilettes après vous meure : </b>{rev.dyingProbability}%</div>
                <h3>Suggestions</h3>
                {rev.improvements && <div className="question"><b>Améliorations possibles : </b>{rev.improvements}</div>}
                {rev.oneMoreThing && <hr />}
                {rev.oneMoreThing && <div className="paragraph">{rev.oneMoreThing}</div>}
            </div>
        ))}
    </div>
}

export default ReviewsPreviews