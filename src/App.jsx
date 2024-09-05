import ScoreCount from "../components/scorecount";
import Input from "../components/input";
import Letters from "../components/letters";
import Header from "../components/header";

import "./App.css";

function App() {
  const wordList = [
    "Algorithm",
    "Array",
    "API",
    "Argument",
    "Asynchronous",
    "Binary",
    "Boolean",
    "Bug",
    "Callback",
    "Class",
    "Code",
    "Compiler",
    "Constructor",
    "Conditional",
    "Constant",
    "Debugging",
    "Dependency",
    "Document Object Model",
    "Encryption",
    "Exception",
    "Execution",
    "Expression",
    "Framework",
    "Function",
    "Garbage collection",
    "Git",
    "Hash",
    "HTML",
    "HTTP",
    "Immutable",
    "Inheritance",
    "Instance",
    "Interface",
    "Iteration",
    "JavaScript",
    "JavaScript Object Notation",
    "Keyword",
    "Library",
    "Loop",
    "Machine learning",
    "Method",
    "Module",
    "Namespace",
    "Null",
    "Object",
    "Object Oriented Programming",
    "Operator",
    "Parameter",
    "Parser",
    "Polymorphism",
    "Pointer",
    "Prototype",
    "Query",
    "Queue",
    "Recursion",
    "Regex",
    "Repository",
    "Representational State Transfer",
    "Return",
    "Scope",
    "Script",
    "Server",
    "Structured Query Language",
    "Stack",
    "Statement",
    "String",
    "Syntax",
    "Thread",
    "Token",
    "Type",
    "Variable",
    "Bash",
    "Closure",
    "Container",
    "Middleware",
    "Promise",
    "Python",
  ];
  const word = [
    wordList[Math.floor(Math.random() * wordList.length)].toLowerCase(),
  ];
  const gameTitle = "Welcome to HangMan";
  const subHeading =
    "Type single letters to guess the word before you perish!!!";
  return (
    <div className="App">
      <Header gameTitle={gameTitle} subHeading={subHeading} />
      <Letters word={word} />
    </div>
  );
}
export default App;
