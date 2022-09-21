import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './src/components/Cart/Cart';

function App() {
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
