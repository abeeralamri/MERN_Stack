
import './App.css';
import Birthday from './components/Birthday';

function App() {
  
  
  return (
    <div className="App">
     <Birthday firstName = {"Doe"} lastName = {"Jane"} age = {45}  hair_color = {"Black"} />
     <Birthday firstName = {"Smith"} lastName = {"John"} age = {88}  hair_color = {"Brown"} />
     <Birthday firstName = {"Fillmore"} lastName = {"Millard"} age = {50}  hair_color = {"Brown"} />
     <Birthday firstName = {"Smith"} lastName = {"Maria"} age = {62}  hair_color = {"Brown"} />

    </div>
  );
}


export default App;
