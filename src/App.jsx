//components
import Navbar from "./components/navbar"
import Foorer from "./components/foorer"
import Main from "./components/Main"
import FormList from "./components/form/FormList"

// huklar
import { useState } from "react"



function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Jon",
      ocupatin: "qassob",
      from: "Uzb",
      img: "./public/bmw.jpg"
    },
    {
      id: 2,
      name: "Abdurashid",
      ocupatin: "Solider",
      from: "Uzb",
      img: "./public/bmw.jpg"
    },
    {
      id: 3,
      name: "Abdujabbor",
      ocupatin: "BUilder",
      from: "Uzb",
      img: "./public/bmw.jpg"
    },
    {
      id: 4,
      name: "Jon",
      ocupatin: "qassob",
      from: "Uzb",
      img: "./public/bmw.jpg"
    },
    {
      id: 5,
      name: "Abdurashid",
      ocupatin: "Solider",
      from: "Uzb",
      img: "./public/bmw.jpg"
    },
    {
      id: 6,
      name: "Abdujabbor",
      ocupatin: "BUilder",
      from: "Uzb",
      img: "./public/bmw.jpg"
    },
    {
      id: 7,
      name: "Jon",
      ocupatin: "qassob",
      from: "Uzb",
      img: "./public/bmw.jpg"
    },
    {
      id: 8,
      name: "Abdurashid",
      ocupatin: "Solider",
      from: "Uzb",
      img: "./public/bmw.jpg"
    },
    {
      id: 9,
      name: "Abdujabbor",
      ocupatin: "BUilder",
      from: "Uzb",
      img: "./public/bmw.jpg"
    },
  ])

  

  return (
    <div>
      <Navbar data={data}/>
      <FormList/>
      <Main data={data} setData={setData}/>
      <Foorer/>
    </div>
  )
}

export default App