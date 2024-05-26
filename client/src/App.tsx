import Search from "./components/Search";

const App = () => {
  return (
    <main>
      <img src="/shop.png" alt="logo" width={200} height={200} className="drop-shadow-md"/>
      <h1>Bazar Online</h1>
      <Search />
    </main>
  );
};

export default App;