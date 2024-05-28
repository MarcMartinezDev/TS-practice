import Search from "./components/Search";

const App = () => {
  return (
    <main className="justify-center bg-gradient-to-b from-white from-20% to-slate-300 p-4">
      <img
        src="/shop.png"
        alt="logo"
        width={200}
        height={200}
        className="drop-shadow-md hover:rotate-6 transition-all"
      />
      <h1>Bazaar Online</h1>
      <Search />
    </main>
  );
};

export default App;
