import logo from './logo.svg';
import './App.css';

const number = 555;
const singers = [
  {name: 'Ali Hossain', job:'Singer'},
  {name: 'Eva Akter', job: 'Driver'},
  {name: 'Akter', job: 'Car washer'},
  {name: 'Ramjan', job:'Berber'},
];

const singerStyle ={
  color: 'white',
  backgroundColor: 'red',

}

function App() {
  const hero =['Rubel', 'BappaRaz', 'Salman Khan', 'The king'];
  const products = [
    {name:'Laptop', price:'20000'},
    {name:'Mobile', price:'10000'},
    {name:'Watch', price:'5000'},
    {name:'Tablet', price:'7990'},
  ]
  return (
    <div className="App">
      {
        hero.map(hero => <li>{hero}</li>)
      }
      {/* {
        hero.map(hero => <Person name={hero}> </Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* 
      <Person name={hero[0]} job="Teacher"></Person>
      <Person name={hero[1]} job="Driver"></Person> */}

      <h2>New Component</h2>
      <Friend phone="029992" movie="The king"></Friend>
      <Friend phone="2239992"></Friend>


      {/* ******** Products ******** */}
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="laptop" price="20,000" ></Product>
      <Product name="Mobile" price="2,000" ></Product>
      <Product name="Watch" price="4,000" ></Product> */}
    </div>
  );
}


// =========== Component start from here =====================
function Person(props){
  // console.log(props);
  return (
    <div className='person'>
      <h2>{props.name}</h2>
      <p>{props.job}</p>
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


// Part 2
function Product(props){
  return(
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}


export default App;
