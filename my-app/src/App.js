import logo from './logo.svg';
import './App.css';
import FAQ from './FAQ';

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <h2>Details</h2>
        <FAQ 
          question='Contact Info'
          answer='123-456-7890 | lars@mail.com | 123 This Court, NY, NY 12345'
        />
        <FAQ
          
        />
      </div>
    </div>
  );
}

export default App;
