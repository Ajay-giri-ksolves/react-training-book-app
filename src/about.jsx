function About() {
  const cities = ['New Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Srinagar'];
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our bookstore!</p>
      <p>Here are our book stores in India:</p>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
