import {useState, useEffect} from 'react';

function Works() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("Works.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setItems(result.works);
          console.log(items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message} {items}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="row work-portfolio">
        {items.map(item => (
          <div key={item.id} className="portfolio">
            <img src={item.image} alt={item.website}/>
            <div>
              <h4>{item.website}</h4> 
              <p>{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Works;