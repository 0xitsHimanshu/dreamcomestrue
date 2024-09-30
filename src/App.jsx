import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Homepage from './Pages/Homepage'
import AboutUspage from './Pages/AboutPage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import Footer from './components/footer'
import TripGalleryPage from './Pages/TripGalleryPage'
import TermPages from './Pages/TermPages'
import TakeTripPage from './Pages/TakeTripPage'

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
                  <Route path='/term-conditions' element={<TermPages />} />
                  <Route path="/trip" element={<h1>take trip with us</h1>} />
                  <Route path='/packages' element={<TakeTripPage />} />
                  <Route path='/package/:id' element={<h1>check this out</h1>} />
                  <Route path='/trending-packages' element={<TripGalleryPage />} />
                </Routes>
            </main>
          <Footer />
        </div>
  )
}

export default App
