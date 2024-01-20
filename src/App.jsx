import "./App.css";
import Person from "./components/Person";
import Card from "./components/Card";

const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Person
          imageUrl="/avatar-jessica.jpeg"
          name="Jessica Randall"
          location="London, United Kingdom"
          quote="Front-end developer and avid reader."
        />
        {links.map((link) => (
          <Card title={link} />
        ))}
      </div>
    </div>
  );
};
export default App;
