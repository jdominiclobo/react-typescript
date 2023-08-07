import "./App.css";
import { Counter } from "./components/state/Counter";
// import { Button } from "./components/Button";
// import { Container } from "./components/Container";
// import Greet from "./components/Greet";
// import { Heading } from "./components/Heading";
// import { Input } from "./components/Input";
// import { Oscar } from "./components/Oscar";
// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";
// import { Status } from "./components/Status";
// import { LoggedIn } from "./components/state/LoggedIn";
// import { User } from "./components/state/User";

function App() {
  // const personName = {
  //   first: "Joel",
  //   last: "Lobo",
  // };

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clart",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Robert",
  //     last: "Downey",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Greet name="Joel" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text </Heading>
      <Oscar>
        <Heading>Oscar goes to Joel</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log("Button clicked", event, id)}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
      <User /> */}
      <Counter />
    </div>
  );
}

export default App;
