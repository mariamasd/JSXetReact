import FullName from './component/FullName';
import Adress from './component/profil/Adress';
import PhotoProfil from './component/profil/PhotoProfil';
import './App.css';

function App() {
  return (
    <div className="App">
       <FullName /> 
       <Adress/>
       <PhotoProfil/>
    </div>
  );
}

export default App;
