import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Homepage from './Pages/Homepage'
import AboutUspage from './Pages/AboutPage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import Footer from './components/footer'
import TermsAndConditions from './components/termAndCondition'
import TripGalleryPage from './Pages/TripGalleryPage'

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
                  <Route path='/term-conditions' element={<TermsAndConditions />} />
                  <Route path="/trip" element={<h1>take trip with us</h1>} />
                  <Route path='/packages' element={<h1>packages</h1>} />
                  <Route path='/trip-gallery' element={<TripGalleryPage />} />
                </Routes>
            </main>
          <Footer />
        </div>
  )
}

export default App
