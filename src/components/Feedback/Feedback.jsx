import { useState } from 'react';

import Button from '../Button/Button';

import './styles.css';

function Feedback() {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);


  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);
  const handleReset = () => {

    setLikes(0);
     setDislikes(0);
  };



  return (
    <div className="feedback-container">
      <Button onClick={handleLike}>Like</Button>
      <span>{likes}</span>
      
      <Button onClick={handleDislike}>Dislike</Button>
      <span>{dislikes}</span>
      
      <Button onClick={handleReset}>Reset Results</Button>
    </div>
  );
}

export default Feedback;