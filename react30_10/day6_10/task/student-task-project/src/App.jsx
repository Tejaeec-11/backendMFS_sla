
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
