import { useState, useEffect } from "react"
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore"
import { db } from "../firebase/config"
import { useParams, useNavigate } from "react-router-dom"

const Form = () => {
    const { placeid } = useParams()

    const [place, setPlace] = useState([])
    const placeDocRef = doc(db, "places", placeid)
    const navigate = useNavigate()

    const [waterInput, setWaterInput] = useState(5)
    const [hygieneInput, setHygieneInput] = useState(5)
    const [smellInput, setSmellInput] = useState(5)
    const [probInput, setprobInput] = useState(50)
    const [rateInput, setRateInput] = useState(5)

    const waterChange = (e) => {
        setWaterInput(e.target.value)
    }

    const hygieneChange = (e) => {
        setHygieneInput(e.target.value)
    }

    const smellChange = (e) => {
        setSmellInput(e.target.value)
    }

    const probChange = (e) => {
        setprobInput(e.target.value)
    }

    const rateChange = (e) => {
        setRateInput(e.target.value)
    }

    const makeid = () => {
        let res = '';
        const chars = 'AZERTYUIOPQSDFHJKLMWXCVBN?=azertyuiopqsdfghjklmwxcvbn0123456789';
        const charLen = chars.length
        for (let i = 0; i < 20; i++) {
            res += chars[Math.floor(Math.random()*charLen)]
        }
        return res
    }
 
    const createDoc = async (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        await setDoc(doc(db, "reviews", makeid()), {
            date: Timestamp.now(),
            dyingProbability: e.target.dyingProbability.value,
            hobbies: e.target.hobbies.value,
            hostInfo: e.target.hostInfo.value,
            hygiene: e.target.hygiene.value,
            improvements: e.target.improvements.value,
            lastMeal: e.target.lastMeal.value,
            len: e.target.len.value,
            name: e.target.name.value,
            oneMoreThing: e.target.oneMoreThing.value,
            place: e.target.place.value,
            postActFeeling: e.target.postActFeeling.value,
            rate: e.target.rate.value,
            smell: e.target.smell.value,
            title: e.target.title.value,
            waterQuality: e.target.waterQuality.value,
            weight: e.target.weight.value
        }).then(() => {
            navigate('/')
        })
    }

    
    useEffect(() => {
        const getPlace = async() => {
            // read data from database
            const data = await getDoc(placeDocRef)
            const filteredData = {
                ...data.data(),
                id: doc.id
            }
            setPlace(filteredData)
        }
        getPlace()
    }, [])

    return <div className="form">
        <h1>AVIS LATRINES</h1>
        <h2>Donnez votre avis</h2>
        <form className="form-form" onSubmit={createDoc}>
            <h3>Informations générales</h3>
            <div className="form-question"><label>Donnez un titre à votre acte : <span className="required">*</span> </label><input type="text" className="short-text-input" name="title" placeholder="ex : Une Aventure Intense dans les Profondeurs de la Porcelaine" required /></div>
            <div className="form-question"><label>Votre nom : <span className="required">*</span> </label><input type="text" className="short-text-input" name="name" placeholder="ex : votre nom ou pseudonyme" /></div>
            <div className="form-question"><label>Lieu : <span className="required">*</span> </label><input type="text" className="short-text-input" name="place" value={place.name} readOnly required /></div>
            <div className="form-question"><label>Comment connaissez vous cet endroit ? : </label><input type="text" className="short-text-input" name="hostInfo" placeholder="ex : J'habite ici / On m'y a invité / Je me suis incrusté" /></div>
            <h3>Informations sur l'acte</h3>
            <div className="form-question"><label>Qu'avez vous fait en même temps ? : </label><textarea name="hobbies" placeholder="ex : J'ai lu un livre captivant et écouté de la musique relaxante pendant que je prenais soin de mes affaires." className="long-text-input"></textarea></div>
            <div className="form-question"><label>Quel est le dernier repas que vous avez ingéré ? : </label><input type="text" className="short-text-input" name="lastMeal" placeholder="ex : Un bol de ramen aux légumes" /></div>
            <div className="form-question"><label>Combien ça semble peser ? (g) : <span className="required">*</span> </label> <input type="number" className="short-text-input" placeholder="200" name="weight" required/> </div>
            <div className="form-question"><label>Combien ça semble mesurer ? (cm) : <span className="required">*</span> </label> <input type="number" className="short-text-input" placeholder="25" name="len" required/> </div>
            <div className="form-question"><label>Quel est votre Ressenti post-acte ? : <span className="required">*</span> </label><textarea name="postActFeeling" className="long-text-input" placeholder="ex : je me sens beaucoup plus léger et détendu. Une sensation de soulagement et de bien-être m'envahit, comme si un poids avait été levé. Prêt à affronter le reste de la journée avec légèreté !" required></textarea></div>
            <h3>Cadre de l'acte</h3>
            <div className="form-quesion"><label>Qualité de l'eau : </label><input type="range" className="rate-input" name="waterQuality" min="1" max="10" step="1" defaultValue="5" onChange={waterChange}/><output>{waterInput}/10</output></div>
            <div className="form-quesion"><label>Hygiène générale : </label><input type="range" className="rate-input" name="hygiene" min="1" max="10" step="1" defaultValue="5" onChange={hygieneChange}/><output>{hygieneInput}/10</output></div>
            <div className="form-quesion"><label>Odeur : </label><input type="range" className="rate-input" name="smell" min="1" max="10" step="1" defaultValue="5" onChange={smellChange}/><output>{smellInput}/10</output></div>
            <div className="form-quesion"><label>Probabilité que la personne après vous meure : </label><input type="range" className="rate-input" name="dyingProbability" min="0" max="100" step="5" defaultValue="50" onChange={probChange}/><output>{probInput}%</output></div>
            <h3>Note finale</h3>
            <div className="form-quesion final-question"><input type="range" className="rate-input" name="rate" min="1" max="10" step="1" defaultValue="5" onChange={rateChange}/><output>{rateInput}/10</output></div>
            <h3>Suggestions</h3>
            <div className="form-question"><label>Améliorations possibles : </label><textarea name="improvements" className="long-text-input" placeholder="une amélioration possible pourrait être une meilleure gestion de l'éclairage. Une lumière plus douce et chaleureuse pourrait créer une atmosphère plus relaxante. De plus, un assainissement régulier et des équipements de nettoyage adéquats contribueraient à maintenir la propreté de l'endroit."></textarea></div>
            <div className="form-question"><label>Quelque chose à ajouter ? : </label><textarea name="oneMoreThing" className="long-input-text"></textarea></div>
            <input type="submit" className="submit" value="ENVOYER"/>
        </form>
    </div>

}

export default Form