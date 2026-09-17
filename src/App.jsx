function App(){
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  )
}
export default App;

//export default App;
import "./App.css";
function App(){
  const trainerName="Shiva";
  const trainingDay=3;
  return(
    <main className="app">
      <section className="welcome-card">
      <h1 className="title">College Course Explore</h1>
      <p><Trainer:>{trainerName}</p>
      <p>React Learning Project</p>
      <p>Used React,JSX,componets,CSS</p>
      </section>
    </main>
  );
}
