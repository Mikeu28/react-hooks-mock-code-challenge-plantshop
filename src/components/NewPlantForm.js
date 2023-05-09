import React, {useState} from "react";

const baseUrl = "http://localhost:6001"
const plantUrl = `${baseUrl}/plants`

function NewPlantForm({handleDeez}) {
  
  const baseForm = {
    name: "",
    image: "",
    price: "",
  }
  
  const [formData, setFormData] = useState(baseForm)

  function handleChange (e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  
  function handleSubmit (e) {
    e.preventDefault()
    fetch(plantUrl, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(nuts => {
      handleDeez(nuts)
      setFormData(baseForm)
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
