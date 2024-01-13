import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Component/Header/Header'
import { ImgsComponent } from './Component/ImgsComponent/ImgsComponent'
import { TextComponent } from './Component/TextComponent/TextComponent'
import { About } from './Component/About/About'
import { Footer } from './Component/Footer/Footer'
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonFill } from "react-icons/bs";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`px-[30px] bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}>



      <Header
        div={
          <div className="flex items-center">

            <label className="cursor-pointer p-2">
              <div className={`w-14 h-4 bg-gray-300 rounded-full  transition duration-300 ease-in-out flex items-center`}>

                <div className={`w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transform ${darkMode ? 'translate-x-8' : 'translate-x-0'} transition duration-300 ease-in-out`}
                  onClick={toggleDarkMode}
                >
                  {darkMode ? <IoMdSunny className='text-black' /> : <BsFillMoonFill className='text-black' />}
                </div>
              </div>
              <input type="checkbox" className="hidden" checked={darkMode} onChange={toggleDarkMode} />
            </label>
          </div>
        }

      />
      <ImgsComponent />

      <div className='mt-10 w-full flex-none xl:flex gap-10'>

        <div className='w-[70%]'>
          <TextComponent />
        </div>

        <div className='w-full xl:w-[30%] '>
          <About></About>
        </div>

      </div>
      <Footer />

    </div>
  )
}

export default App
