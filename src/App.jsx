// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/Aboutus';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="background-container">
          {/* Render Header component */}
          <Header />

          {/* Use Routes to handle multiple routes */}
          <Routes>
            {/* Route for rendering the main page (Intro, About, Services, Blog) */}
            <Route path="/" element={<MainPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Define a separate component for the main page
const MainPage = () => (
  <>
    {/* Render other components on the main page */}
    <Intro />
    <About />
    
    <Blog />
    <Footer/>
  </>
);

export default App;
