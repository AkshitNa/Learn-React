import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Header /> {/* Navigation Bar */}
        <main className="min-h-screen mt-5">
          {/* Content */}

          <h1 className="text-center">Hello World</h1>
          <ul className="flex flex-col items-center mt-5 bg-green-400">
          <li className="hover:bg-gray-400">Akshit</li>
          <li>Akshit</li>
          <li>Akshit</li>
          <li>Akshit</li>
        </ul>
        </main>
        <Footer />       
      </div>
    </>
  );
}

export default App;
