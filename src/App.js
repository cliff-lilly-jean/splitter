// Components
import Card from './Card/Card';

// CSS
import './App.css';

function App() {
 return (
  <div className="App">
   {/* Header Start */}
   <header>
    <h1>
     <span>SPLI</span>
     <span>TTER</span>
    </h1>
   </header>
   {/* Header End */}
   {/* Main Start */}
   <main>
    <Card></Card>
   </main>
   {/* Main End */}
  </div>
 );
}

export default App;
