import logo from './logo.svg';
import './App.css';

const number = 555;
const singer = {name: 'Ali Hossain', job:'singer'};
const singer2 = {name: 'Eva Akter', job: 'singer two'};

const singerStyle ={
  color: 'white',
  backgroundColor: 'red',

}

function App() {
  return (
    <div className="App">
      <Person name="Ali" job="Teacher"></Person>
      <Person name="Hossain" job="Driver"></Person>
      <h2>New Component</h2>
      <Friend phone="029992" movie="The king"></Friend>
      <Friend phone="2239992"></Friend>
    </div>
  );
}

function Person(props){
  // console.log(props);
  return (
    <div className='person'>
      <h2>{props.name}</h2>
      <p>Profession: {props.job}</p>
    </div>
  )
}

function Friend(props){
  console.log(props);
  return(
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone:{props.phone}</p>
    </div>
  )
}

export default App;
