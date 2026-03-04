import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Loader from './components/Loader';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      <Router>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loader" exit={{ opacity: 0 }}>
              <Loader onComplete={() => setLoading(false)} />
            </motion.div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Home />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          )}
        </AnimatePresence>
      </Router>
    </HelmetProvider>
  );
}
