import { SignInButton, SignUpButton, useUser } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import BookDetail from "./BookDetail";
import GenreBooks from "./GenreBooks";
import Order from "./pages/Order";
import "./App.css";

function AppContent() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  /* -----------------------------------------------
     🌈 WELCOME PAGE
  -------------------------------------------------*/
  if (!isSignedIn) {
    return (
      <div className="welcome-bg">

        {/* floating blobs */}
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>

        <div className="welcome-card">

          {/* logo / illustration */}
          <div className="logo-box">
            📚✨
          </div>

          <h1 className="title">
            Welcome to <span>YuvYarn</span>
          </h1>

          <p className="tagline">
            Create magical <b>AI-powered personalized storybooks</b>
            where every child becomes the hero of their own adventure.
          </p>

          <div className="button-group">

            <SignInButton mode="modal">
              <button className="btn-primary">
                Login
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="btn-secondary">
                Sign Up
              </button>
            </SignUpButton>

          </div>

          <button
            className="demo-btn"
            onClick={() => alert("Demo mode coming soon!")}
          >
            Explore Demo Story
          </button>

        </div>
      </div>
    );
  }

  /* -----------------------------------------------
     ⭐ LOGGED IN ROUTES
  -------------------------------------------------*/

  return (
    <Routes>
      <Route path="/bookstore" element={<Dashboard />} />
      <Route path="/book/:id" element={<BookDetail />} />
      <Route path="/genre-books/:genreName" element={<GenreBooks />} />
      <Route path="/order" element={<Order />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;