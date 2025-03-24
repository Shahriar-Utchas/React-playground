import "./App.css";
import ToDO from "./Todo";
import Actor from "./Actor";
import Movie from "./movie";
function App() {
  const actors = ["Tom Hanks", "Brad Pitt", "Leonardo DiCaprio"];

  const movies = [
    { id: 1, name: "The Shawshank Redemption", year: 1994 },
    { id: 2, name: "The Godfather", year: 1972 },
    { id: 3, name: "The Dark Knight", year: 2008 },
  ];
  return (
    <>
      <h1>React Core Concepts</h1>
      {/* <Developer name = "Shahriar Hossen" tech = "javaScript"></Developer>
    <br />
    <Developer name = "Sajid Arnob" tech = "python"></Developer>
    <Student name = "jony" cgpa="3.78"></Student> */}

      {/* <ToDO task = "Learn react" isDone = {true}></ToDO>
    <ToDO task = "Learn js" isDone = {false} ></ToDO>
    <ToDO task = "Learn node" isDone = {false} ></ToDO> */}

      {/* {
       actors.map(actor => <Actor name = {actor}></Actor>)
    } */}

      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie}></Movie>
      ))}
    </>
  );
}
//create a component

function Developer(props) {
  return (
    <>
      <div className="dev">
        <p>Developer: {props.name} </p>
        <p>Tech: {props.tech}</p>
      </div>
    </>
  );
}
//with destructuring and Css
function Student({ name = "", cgpa = 0.0 }) {
  const StudentStyle = {
    color: "red",
    backgroundColor: "skyblue",
    padding: "10px",
    borderRadius: "5px",
    margin: "15px",
  };
  return (
    <>
      <h3>Student Info</h3>
      <div style={StudentStyle}>
        <p>Student Name: {name} </p>
        <p>CGPA: {cgpa}</p>
      </div>
    </>
  );
}

export default App;
