import { useParams, useNavigate } from 'react-router-dom';

const featuredBooks = [
  { id: 1, title: 'The Brave Explorer', description: 'A journey through the jungle with courage and curiosity!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744799952/3_uk78uf.jpg", genre: 'Adventure', storyline: 'Join Leo on an adventure!' },
  { id: 2, title: 'Adventures in Dreamland', description: 'Magical adventures await in a land beyond sleep.', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744799903/2_udls9f.jpg", genre: 'Fantasy', storyline: 'Luna flies to Dreamland!' },
  { id: 3, title: 'The Secret of Starry Island', description: 'Stars fall from the sky and grant wishes on a mystical island!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744794473/11_p7xffb.jpg", genre: 'Fantasy', storyline: 'Maya discovers magical stars!' },
  { id: 4, title: 'The Great Toy Rescue', description: 'Two kids shrink down to toy-size to save their favorite toys!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744794428/10_s2ixza.jpg", genre: 'Adventure', storyline: 'A toy adventure begins!' },
  { id: 5, title: 'Underwater Kingdom Quest', description: 'A quest through an ocean kingdom with a talking dolphin!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744794517/12_dvu0ic.jpg", genre: 'Adventure', storyline: 'Finn explores the ocean!' },
  { id: 6, title: 'Barnaby Bear\'s Berry Hunt', description: 'A heartwarming tale of a little bear finding his favorite berries.', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1748881631/a70431b4-5d2b-4e0a-94c3-805fb28218e6_bgc9r6.jpg", genre: 'Animals', storyline: 'Barnaby hunts for berries!' },
  { id: 7, title: 'Captain Comet Saves the Day', description: 'Join Captain Comet and his super-powered friends in a cosmic rescue!', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1748881888/1ef60f8b-ec88-4fa1-8aa7-f5dc89a6cb2a_i1fjfk.jpg", genre: 'Superheroes', storyline: 'Captain Comet to the rescue!' },
  { id: 8, title: 'The Whimsical Wishing Well', description: 'A curious child finds a magical well with a surprising secret.', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1748882192/05af78d5-baff-43b7-8229-0bc10c3c84ab_a4sr0x.jpg", genre: 'Fairy Tales', storyline: 'Elara finds a magical well!' }
];

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = featuredBooks.find((b) => b.id === parseInt(id || '0'));

  if (!book) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Book not found</h1>
        <button onClick={() => navigate('/')} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px', padding: '8px 16px', cursor: 'pointer' }}>
        Back
      </button>
      <img src={book.image} alt={book.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }} />
      <h1>{book.title}</h1>
      <p style={{ fontSize: '1.1rem', color: '#555' }}>{book.storyline}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
    </div>
  );
}

export default BookDetail;
