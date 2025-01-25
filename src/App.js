import { useState } from 'react';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Chocolate Covered Almonds"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    },
  ]);

  
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ?
        {...item, checked: !item.checked} :
        item
    );

    setItems(listItems);

    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header
        title="Grocery List"
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
