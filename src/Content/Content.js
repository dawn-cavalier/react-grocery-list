import AddItem from "./AddItem/AddItem";
import "./Content.css";
import ItemList from "./ItemList/ItemList";
import SearchItem from "./SearchItem/SearchItem";

const Content = ({
  items,
  handleCheck,
  handleDelete,
  newItem,
  setNewItem,
  handleSubmit,
  search,
  setSearch,
}) => {
  return (
    <main>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />

      {items.length ? (
        <ItemList
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
