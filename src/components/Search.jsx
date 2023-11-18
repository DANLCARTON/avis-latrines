import "../styles/Search.css"

const Search = ({setSearch, setSort}) => {

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSort = (e) => {
        setSort(e.target.value)
    }

    return <div className="search">
        <input type="text" className="search-input" placeholder="Rechercher un avis" onChange={(e) => handleSearch(e)} />
        <select className="sort" onChange={(e) => handleSort(e)}>
            <option value="date">Le plus récent d'abord</option>
            <option value="Adate">Le plus ancien d'abord</option>
            <option value="title">Ordre alphabétique (titre)</option>
            <option value="Atitle">Ordre antialphabétique (titre)</option>
            <option value="author">Ordre alphabétique (auteur)</option>
            <option value="Aauthor">Ordre antialphabétique (auteur)</option>
            <option value="place">Ordre alphabétique (lieu)</option>
            <option value="Aplace">Ordre antialphabétique (lieu)</option>
            <option value="rate">Le mieux noté d'abord</option>
            <option value="Arate">Le moins bien noté d'abord</option>
        </select>
    </div>
}

export default Search