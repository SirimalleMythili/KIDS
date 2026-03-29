import { useParams, useNavigate } from 'react-router-dom';

const featuredBooks = [
  { id: 1, title: 'The Brave Explorer', genre: 'Adventure', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744799952/3_uk78uf.jpg" },
  { id: 2, title: 'Adventures in Dreamland', genre: 'Fantasy', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744799903/2_udls9f.jpg" },
  { id: 3, title: 'The Secret of Starry Island', genre: 'Fantasy', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744794473/11_p7xffb.jpg" },
  { id: 4, title: 'The Great Toy Rescue', genre: 'Adventure', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744794428/10_s2ixza.jpg" },
  { id: 5, title: 'Underwater Kingdom Quest', genre: 'Adventure', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1744794517/12_dvu0ic.jpg" },
  { id: 6, title: 'Barnaby Bear\'s Berry Hunt', genre: 'Animals', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1748881631/a70431b4-5d2b-4e0a-94c3-805fb28218e6_bgc9r6.jpg" },
  { id: 7, title: 'Captain Comet Saves the Day', genre: 'Superheroes', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1748881888/1ef60f8b-ec88-4fa1-8aa7-f5dc89a6cb2a_i1fjfk.jpg" },
  { id: 8, title: 'The Whimsical Wishing Well', genre: 'Fairy Tales', image: "https://res.cloudinary.com/dfsnnfrnn/image/upload/v1748882192/05af78d5-baff-43b7-8229-0bc10c3c84ab_a4sr0x.jpg" }
];

function GenreBooks() {
  const { genreName } = useParams();
  const navigate = useNavigate();
  const books = featuredBooks.filter((book) => book.genre.toLowerCase() === genreName?.toLowerCase());

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px', padding: '8px 16px', cursor: 'pointer' }}>
        Back
      </button>
      <h1>{genreName} Books</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {books.map((book) => (
          <div key={book.id} style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigate(`/book/${book.id}`)}>
            <img src={book.image} alt={book.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}>
              <h3>{book.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenreBooks;
