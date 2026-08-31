import { HelmetProvider } from 'react-helmet-async'
import { MenuProvider } from './context/MenuContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

function App() {
  return (
    <HelmetProvider>
      <MenuProvider>
        <div className="min-h-screen bg-white text-[#262626] flex flex-col justify-between">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </MenuProvider>
    </HelmetProvider>
  )
}

export default App
