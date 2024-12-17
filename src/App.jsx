import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./components/banner/Banner"
import Top from './components/top/Top'
import Banner from './components/banner/Banner'
import Foot from "./components/foot/Foot"
import Heading from './components/heading/Heading'
import Text from "./components/text/Text"
import Pictures from './components/pictures/Pictures'
import Oilfarm from './components/oilfarm/Oilfarm'
import Posters from './components/posters/Posters'
import Lopo from './components/lopo/Lopo'
import Braco from './components/braco/Braco'
import Constractor from './components/constractor/Constractor'
import Map from './components/map/Map'
import Boton from './components/Boton'
import { Last } from 'react-bootstrap/esm/PageItem'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Top/>
     <Heading/>
     <Banner/>
     <Text/>
     <Pictures/>
     <Oilfarm/>
     <Posters/>
     <Lopo/>
     <Braco/>
     <Constractor/>
     <Map/>
     <Boton/>
     <Last/>

    </>
  )
}

export default App
