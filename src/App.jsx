import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Homepage from './Pages/homepage'
import AboutUspage from './Pages/About'
import BlogPage from './Pages/Blog'
import ContactPage from './Pages/Contact'

function App() {



  return (
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-grow mt-4 '>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<AboutUspage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/trip" element={<h1>take trip with us</h1>} />
              </Routes>
          </main>
        </div>
  )
}

export default App
