import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Student List</h1>

      <Student name="Rahul" age={20} course="CS" />
      <Student name="Ayesha" age={22} course="IT" />
    </div>
  );
}

export default App;