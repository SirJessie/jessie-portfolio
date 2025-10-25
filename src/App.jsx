import {useState} from 'react'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './sections/Header.jsx'
import MainContainer from './sections/MainContainer.jsx'
import NotFound from './Pages/404Page.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  const [darkmode, setDarkmode] = useState(() => {
          return localStorage.getItem("darkmode") === "true" ? true : false;
  });

  useEffect(() => {  
      localStorage.setItem("darkmode", darkmode);
  }, [darkmode]);

  return (
    <>
      <main className={darkmode ? "container darkmode" : "container"}>
        <div className="inner-container">
          <Router>
            <Routes>
              <Route path="/" element={
                <>
                  <Header isDarkMode={darkmode} toggleDarkmode={setDarkmode} />
                  <MainContainer />
                  <Footer />
                </>
              } />
              <Route path="/tech-stack" element={<h1>Tech Stack Page</h1>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </main>
    </>
  )
}
