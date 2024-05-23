
import './App.scss'
import MainLayout from './layout/MainLayout.tsx';
import ProductList from './components/ProductList/ProductList.tsx';
import Slider from './components/Slider/Slider.tsx';

function App() {

  return (
    <MainLayout>
        <Slider/>
        <ProductList/>
    </MainLayout>
  )
}

export default App
