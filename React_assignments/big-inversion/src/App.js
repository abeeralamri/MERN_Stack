
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  
  
  return (
    <div className="App">
     <PersonCard firstName = {"Doe"} lastName = {"Jane"} age = {45}  hair_color = {"Black"} />
     <PersonCard firstName = {"Smith"} lastName = {"John"} age = {88}  hair_color = {"Brown"} />
     <PersonCard firstName = {"Fillmore"} lastName = {"Millard"} age = {50}  hair_color = {"Brown"} />
     <PersonCard firstName = {"Smith"} lastName = {"Maria"} age = {62}  hair_color = {"Brown"} />

    </div>
  );
}


export default App;
