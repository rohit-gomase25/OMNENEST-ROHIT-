import './App.css'
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  // 1. Removed the placeholder "variableName: type" line which causes a syntax error
  let firstName: string = "John";
  let city: string = "New York";
  let message: string = "Hello World";

  let score = 100;

  return (
    <>
      <div>
        <h1>{message}</h1>
        <p>Welcome, {firstName} from {city}!</p>
        <p>Your score is: {score}</p>
          
          <Greeting name="Bob" role="Developer" bio="Loves coding and coffee." isOnline={true} />
          <Counter />
      </div>
    </>
  )
}

export default App


//  If we write const[count,setCount] = useState(0); 
// It will cause in TypeScript because it does not know the data type of count and setCount. To fix this we can write const[count,setCount] = useState<number>(0);