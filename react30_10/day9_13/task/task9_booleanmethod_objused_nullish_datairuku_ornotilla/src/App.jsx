import React, { useState } from 'react'

const App = () => {
  const [person,SetPerson] = useState( {name: "Arun",
    age: 0,
    city: null,
    phone: undefined})
  return (
    <>
    <h2>Name:{person.name ?? "Data Not  Available"}</h2>
     <h2>Age:{person.age ?? "Data Not  Available"}</h2>
     <h2>City:{person.city ?? "Data Not  Available"}</h2>
     <h2>Phone:{person.phone ?? "Data Not  Available"}</h2>
    </>
    )
}

export default App