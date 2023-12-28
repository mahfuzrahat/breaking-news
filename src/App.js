import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import News from './components/News/News';
import Header from './components/News/Header/Header';
import Headline from './components/TopHeadline/Headline';

function App() {
  return (
    <div>
      <h2>React Bootstrap</h2>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Header></Header>
      <Headline></Headline>
      {/* <News></News> */}
    </div>
    
        
    
  );
}
export default App;
