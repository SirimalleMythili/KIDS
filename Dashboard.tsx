import { useState } from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import 'swiper/css';


const featuredBooks = [
  { id: 1, title: 'The Brave Explorer', description: 'A journey through the jungle with courage and curiosity!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744799952/3_uk78uf.jpg", genre: 'Adventure' },
  { id: 2, title: 'Adventures in Dreamland', description: 'Magical adventures await in a land beyond sleep.', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744799903/2_udls9f.jpg", genre: 'Fantasy' },
  { id: 3, title: 'The Secret of Starry Island', description: 'Stars fall from the sky and grant wishes on a mystical island!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744794473/11_p7xffb.jpg", genre: 'Fantasy' },
  { id: 4, title: 'The Great Toy Rescue', description: 'Two kids shrink down to toy-size to save their favorite toys!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744794428/10_s2ixza.jpg", genre: 'Adventure' },
  { id: 5, title: 'Underwater Kingdom Quest', description: 'A quest through an ocean kingdom with a talking dolphin!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744794517/12_dvu0ic.jpg", genre: 'Adventure' },
  { id: 6, title: 'Barnaby Bear\'s Berry Hunt', description: 'A heartwarming tale of a little bear finding his favorite berries.', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1748881631/a70431b4-5d2b-4e0a-94c3-805fb28218e6_bgc9r6.jpg", genre: 'Animals' },
  { id: 7, title: 'Captain Comet Saves the Day', description: 'Join Captain Comet and his super-powered friends in a cosmic rescue!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1748881888/1ef60f8b-ec88-4fa1-8aa7-f5dc89a6cb2a_i1fjfk.jpg", genre: 'Superheroes' },
  { id: 8, title: 'The Whimsical Wishing Well', description: 'A curious child finds a magical well with a surprising secret.', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1748882192/05af78d5-baff-43b7-8229-0bc10c3c84ab_a4sr0x.jpg", genre: 'Fairy Tales' }
];

const genres = [
  { id: 1, name: 'Adventure', description: 'Embark on thrilling journeys with brave explorers in unknown lands!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744791782/5_a3kuwx.jpg" },
  { id: 2, name: 'Fantasy', description: 'Step into magical worlds filled with mythical creatures and enchanted spells!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744791814/6_a7nzql.jpg" },
  { id: 3, name: 'Animals', description: 'Meet adorable creatures and dive into wild adventures with animals!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744791852/7_aj7qwj.jpg" },
  { id: 4, name: 'Superheroes', description: 'Discover heroic adventures with powerful beings saving the day!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744791887/8_umr2ch.jpg" },
  { id: 5, name: 'Fairy Tales', description: 'Enter a world of magic, dragons, and happily-ever-afters!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744791918/9_hrzaav.jpg" }
];

function Dashboard() {
  const { user } = useUser();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const filteredFeaturedBooks = featuredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.description.toLowerCase().includes(search.toLowerCase()) ||
      book.genre.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="bookstore-wrapper">
      <nav className="navbar flex items-center justify-between px-6 py-3 bg-white shadow-md">
        <div className="navbar-logo-text text-2xl font-bold text-purple-600">KIDS</div>

        <ul className="nav-links flex gap-6 items-center">
          <li>
            <a href="#" className="nav-link active-link">Home</a>
          </li>
          <li>
            <Link to="/order" className="nav-link">Order</Link>
          </li>
          
          {/* ✅ Clerk User Profile Button (Profile Pic + Dropdown) */}
          <li>
            <div className="flex items-center gap-2">
              <UserButton afterSignOutUrl="/" />
            </div>
          </li>
        </ul>
      </nav>

      <div className="welcome-header">
        <h1>Unleash Your Imagination! Dive into Enchanting Storybooks!</h1>
        {user && <p className="welcome-message">Hello, {user.firstName || user.username || 'Guest'}!</p>}
        <input
          type="text"
          placeholder="Search for your next story..."
          className="search-bar"
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Featured Books Carousel */}
      <section className="carousel-section">
        <h2 className="featured-heading">Featured Books</h2>
        <p className="featured-subtext">Explore the most loved storybooks, handpicked for young dreamers.</p>
        <Swiper
  modules={[Autoplay, A11y]}
  spaceBetween={30}
  slidesPerView="auto"
  loop
  freeMode
  autoplay={{ delay: 1, disableOnInteraction: false }}
  speed={3000}
  className="book-carousel"
>
  {filteredFeaturedBooks.map((book) => (
    <SwiperSlide key={book.id} style={{ width: '420px', margin: '0' }}>
      <div className="carousel-slide">
        <img src={book.image} alt={book.title} className="carousel-image" />
        <div className="carousel-details">
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          {/* ✅ Make sure navigate is inside here */}
          <button
            className="read-more-button"
            onClick={() => navigate(`/book/${book.id}`)}
          >
            Read More
          </button>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </section>

      {/* Genres Section */}
      <section className="genre-section">
  <h2>Our Genres</h2>
  <div className="genre-grid">
    {genres.map((genre) => (
      <div className="flip-card" key={genre.id}>
        <div className="flip-card-inner">
          {/* Front of the card */}
          <div className="flip-card-front">
            <img src={genre.image} alt={genre.name} className="genre-image" />
            <h3>{genre.name}</h3>
          </div>

          {/* Back of the card */}
          <div className="flip-card-back">
            <p>{genre.description}</p>
            <button
              className="explore-button"
              onClick={() => navigate(`/genre-books/${genre.name}`)}
            >
              Explore Genre
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Sample Books Section */}
      <section className="sample-books-section">
        <h2 className="sample-books-heading">Sample Books</h2>
        <div className="sample-books-grid">
          <div className="sample-book-card">
            <img src="https://res.cloudinary.com/dfsnnfrnn/image/upload/v1745663813/WhatsApp_Image_2025-04-26_at_15.58.40_b9fcd7cf_qjtli0.jpg"
                 alt="Sample Book 1 Cover: Vivaan’s magical adventures"
                 className="sample-book-image"
            />
            <h3>Sample Book 1</h3>
            <h4>Vivaan’s magical adventures</h4>
            <a href="https://drive.google.com/file/d/1Ps5thuO_nt_sN05NVDbBan7dRJLIeVg9/preview" target="_blank" rel="noopener noreferrer">
              <button className="read-now-button">Read It Now</button>
            </a>
          </div>

          <div className="sample-book-card">
            <img src="https://res.cloudinary.com/dfsnnfrnn/image/upload/v1745938138/WhatsApp_Image_2025-04-29_at_20.16.28_f2a6ce25_mkdqqe.jpg"
                 alt="Sample Book 2 Cover: Vivaan and the Garden of Glowing Hearts"
                 className="sample-book-image"
            />
            <h3>Sample Book 2</h3>
            <h4>Vivaan and the Garden of Glowing Hearts</h4>
            <a href="https://drive.google.com/file/d/1ceQNVVdkKWilGqshGJnYEmBjE_tLf5Z_/preview" target="_blank" rel="noopener noreferrer">
              <button className="read-now-button">Read It Now</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
