import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const baseUrl = "http://localhost:6001"
const plantUrl = `${baseUrl}/plants`

function PlantPage() {

  
  const [formData, setFormData] = useState([])
  const [search, setSearch] = useState("")

  function handleDeez (nuts) {
  setFormData([...formData, nuts])
  }

  function updateSearch (newSearch) {
    setSearch(newSearch)
  }

  const filteredPlants = [...formData].filter(data => {
    return data.name.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    fetch(plantUrl)
      .then(r => r.json())
      .then(data => setFormData(data))

  }, [])
  
  return (
    <main>
      <NewPlantForm handleDeez={handleDeez} />
      <Search updateSearch={updateSearch} search={search} />
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
