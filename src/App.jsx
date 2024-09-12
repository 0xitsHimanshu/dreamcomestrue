import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Homepage from './Pages/Homepage'
import AboutUspage from './Pages/About'
import BlogPage from './Pages/Blog'
import ContactPage from './Pages/Contact'
import Footer from './components/footer'

function App() {



  return (
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-grow'>
              <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/about" element={<AboutUspage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/trip" element={<h1>take trip with us</h1>} />
              </Routes>
          </main>

          <Footer />
        </div>
  )
}

export default App
