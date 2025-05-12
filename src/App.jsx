import { useState ,Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Home from '../public/Home'
import Footer from './Footer'
import NavBar from '../component/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
     <Canvas>
      <ambientLight />
      <OrbitControls /> 
      <Suspense fallback ={null}>
        <Home />


      </Suspense>
      <Environment preset='sunset' />
     </Canvas>
     <div className='container'>
      <h1>Home</h1>
      <p>Scale models of houses are usually built with the aim of using them as a real estate sales tool for the final customer, who is interested in buying a house</p>
     </div>
     <Footer />
    </>
  )
}

export default App

