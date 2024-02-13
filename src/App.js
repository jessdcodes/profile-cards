import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.png" alt="Self-portrait" />;
}

function Intro() {
  return (
    <div>
      <h1>Jessica Dionisio</h1>
      <div className="data">
        Frontend engineer at Accenture. Passionate about her fruit yogurt and
        supporting music personalities and going to concerts - making it her
        personality.
      </div>
    </div>
  );
}

export default App;
