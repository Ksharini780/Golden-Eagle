import { useEffect, useState } from "react";
import axios from "axios";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/services")
      .then(res => setServices(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Our Cleaning Services</h2>
      <ul>
        {services.map(s => (
          <li key={s._id}>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
            <p>₹{s.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
