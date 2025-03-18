import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Tv } from 'lucide-react';
import { streamingServices } from './data/services';
import { ServiceList } from './pages/ServiceList';
import { ServicePage } from './pages/ServicePage';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212] text-white flex flex-col">
        <header className="bg-[#1e1e1e] py-6 px-4 shadow-lg">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <h1 className="text-3xl font-bold mb-4 flex items-center">
                <Tv className="w-8 h-8 mr-3 text-blue-400" />
                Российские стриминговые сервисы
              </h1>
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
          <Routes>
            <Route path="/" element={<ServiceList services={streamingServices} />} />
            <Route path="/service/:slug" element={<ServicePage services={streamingServices} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;