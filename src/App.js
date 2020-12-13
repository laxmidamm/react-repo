import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="container">
      <HeaderComponent></HeaderComponent>
      <ListEmployeeComponent></ListEmployeeComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
