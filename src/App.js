
import './App.css';
import Adresse from './component/profile/Adresse';
import FullName from './component/profile/FullName';
import ProfilePhotos from './component/profile/ProfilePhotos';

function App() {
  return (
    <div className="App">
      <ProfilePhotos/>
      <FullName/>
      <Adresse/>
    </div>
  );
}

export default App;
