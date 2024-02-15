import "./App.css";

const skillList = [
  {
    name: "HTML+CSS",
    color: "lightskyblue",
    emoji: "🍊",
  },
  {
    name: "JavaScript",
    color: "bisque",
    emoji: "🥑",
  },
  {
    name: "React JS",
    color: "mediumpurple",
    emoji: "🍑",
  },
  {
    name: "TypeScript",
    color: "moccasin",
    emoji: "🍉",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.png" alt="Jessica Dionisio" />;
}

function Intro() {
  return (
    <div>
      <h1>Jessica Dionisio</h1>
      <p>
        Frontend engineer at Accenture. Passionate about her fruit yogurt and
        supporting music personalities and going to concerts - making it her
        personality.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillList.map((skill) => (
        <Skill key={skill.name} skillObj={skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.name}</span>
      <span>{skillObj.emoji}</span>
    </div>
  );
}

export default App;
