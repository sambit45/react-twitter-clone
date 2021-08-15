import logo from './logo.svg';
import './App.css';
import LeftLayout from './Layouts/LeftLayout/LeftLayout';
import MainLayout from './Layouts/MainLayout/MainLayout';
import RightLayout from './Layouts/RightLayout/RightLayout';

function App() {
  return (
    <div className="layout">
      <LeftLayout/>
      <MainLayout/>
      <RightLayout/>
    </div>
    
  );
}

export default App;
