import './App.css';
import Title from './Components/Title/Title';
import SwitchCategoryButtons from './Components/SwitchCategoryButtons/SwitchCategoryButtons';
import CategoryHeader from './Components/CategoryHeader/CategoryHeader';
import { categoriesList } from './utils';

function App() {
  return (
    <div className="App">
      <Title />
      <SwitchCategoryButtons categoriesList={categoriesList} />
      <CategoryHeader name={'Business'} />
    </div>
  );
}

export default App;
