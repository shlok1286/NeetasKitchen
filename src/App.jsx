import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#FBF7F0] text-[#332A24] flex flex-col justify-between selection:bg-[#8B1328]/15 selection:text-[#64101E]">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App
