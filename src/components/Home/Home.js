import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';
import Image from '../../Image/The-Old-Man-and-the-Sea.jpg'
import Books from '../Books/Books';
import './Home.css';



const Home = () => {
 const navigate = useNavigate();
 const [books, setBooks] = useBooks();

return (
  
    <div>
      <div className="killing">
        <div className="frist-part">
          <h1 className="red">The Old Man</h1>
          <h1 className="white">and the Sea</h1>
          <p>
          “Every day is a new day. It is better to be lucky. But I would rather be exact. Then when luck comes you are ready.” ~ Ernest Hemingway, The Old Man and the Sea. 
          “But the old man always thought of her as feminine and as something that gave or withheld great favours, and if she did wild or wicked things it was because she could not help them. The moon affects her as it does a woman, he thought.”
          </p>
          <button className="btn">Bye Now</button>
        </div>
        <div className='image'>
          <img src={Image} alt="" />
        </div>
      </div>

      <div>
        <div className="three-reviews">
          <h1 className="title">Coustomer Reviews(3)</h1>
          <div className="book-container">
            {books.slice(0, 3).map((book) => (
              <Books key={book.id} book={book}></Books>
            ))}
            <button onClick={() => navigate("/reviews")} className="btn-1">
              See All Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
 
);
};

export default Home;