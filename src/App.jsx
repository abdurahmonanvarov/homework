// components
import Navbar from "./components/navbar";
import Footer from "./components/foorer";
import Main from "./components/Main";
import FormList from "./components/form/FormList";

// hooklar
import { useState } from "react";



function App() {
  const [data, setData] = useState([]); 



  return (
    <div>
      <Navbar data={data} />
      <FormList setData={setData} />
      <Main data={data} setData={setData} />
      <Footer />
    </div>
  );
}

export default App;
