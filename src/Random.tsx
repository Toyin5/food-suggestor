import { useState } from 'react';
import './Random.css';

export interface Suggestion {
  name: string;
  area: string;
  link: string;
}

export default function Random() {
  const [suggestion, setSuggestion] = useState<Suggestion>({
    name: '',
    area: '',
    link: ''
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await fetch(import.meta.env.VITE_API_URL + "random.php");
      const data = await response.json().then(res => res.meals[0]);
      console.log(data)
      setSuggestion({
        name: data.strMeal,
        area: data.strArea,
        link: data.strYoutube
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="random">
      <h3>Let the app suggest a food for you!</h3>
      <button className={loading ? 'loading' : ''} onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Suggest!'}
      </button>
      {suggestion.name && (
        <div className="suggestion">
          <p>
            <strong>Food Name:</strong> {suggestion.name}
          </p>
          <p>
            <strong>Origin:</strong> {suggestion.area}
          </p>
          <p>
            <strong>Youtube Link:</strong> <a href={suggestion.link} target='blank'>{suggestion.link}</a>
          </p>
        </div>
      )}
    </div>
  );
}
