
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />

      <main id="home" className="min-h-screen">
        <div className="flex min-h-[80vh] items-center justify-center">
          <h1 className="text-4xl font-bold">
            <span className="text-gray-900">Welcome to </span>

            <span className="brand-gradient-text">
              Dev Stack
            </span>
          </h1>
        </div>
      </main>
    </>
  );
};

export default App;
