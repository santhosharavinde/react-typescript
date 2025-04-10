import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
// import Box from "./components/context/Box";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import List from "./components/generics/List";
import CustomButton from "./components/html/CustomButton";
import CustomInput from "./components/html/CustomInput";
import Text from "./components/polymorphic/Text";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import RandomNumbers from "./components/restriction/RandomNumbers";
import Toast from "./components/templateliterals/Toast";
// import Counter from "./components/state/Counter";
// import Button from "./components/Button";
// import Container from "./components/Container";
// import Input from "./components/Input";
// import User from "./components/state/User";
// import Greet from "./components/Greet";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Greet name="Santhosh!" isLoggedIn={true} />
      <Person name={personName}/>
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Leonardo Decaprio</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event, id) => {
        console.log("Button Clicked", event, id)
      }}/>
      <Input value="" handleChange={(event) => {
        console.log('event', event)
      }}/>
      <Container style={{border: "1px solid black", padding: "1rem"}}/> */}
      {/* <User />
      <Counter /> */}
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Private isLoggedIn={true} component={Profile} />
      <List
        items={["Batman", "Superman", "Spiderman"]}
        onClick={(item) => console.log(item)}
        renderItem={(item) => <span>{item}</span>}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)}  renderItem={(item) => <span>{item}</span>}/>
      <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Clark", 
            last: "Kent",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={(item) => console.log(item)}
        renderItem={(item) => <span>{item.first} {item.last}</span>}
      />
      <RandomNumbers value={10} isPositive />
      <Toast position="center-bottom"/>
      <CustomButton variant="primary">Hello</CustomButton>
      <CustomInput type="text" />
      <Text as="h1" size="lg">Heading</Text>
      <Text as="p" size="md">Paragraph</Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">Label</Text>
    </div>
  );
}

export default App;
