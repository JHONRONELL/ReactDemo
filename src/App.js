import logo from './logo.svg';
import './output.css';
import MenuSelector from './components/MenuSelector';
function App() {



  return (
    <div>
      <MenuSelector />


      <section class="bg-blue-500 py-20 text-center text-white">
        <div class="container mx-auto">
          <h1 class="text-4xl font-bold mb-4">Hi, I'm Jhon Ronell</h1>
          <p class="text-lg">I've been in IT industry since 2008 </p>
          <button class="bg-white text-blue-500 px-6 py-3 rounded-full mt-6 hover:bg-blue-400 hover:text-white focus:outline-none">Get Started</button>
        </div>
      </section>


      <section class="py-16">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-xl font-bold mb-4">Responsive</h3>
              <p class="text-gray-700">Designed to be mobile-first and responsive by default.</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-xl font-bold mb-4">Customizable</h3>
              <p class="text-gray-700">Easily customize and extend with utility classes.</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-xl font-bold mb-4">Easy to Use</h3>
              <p class="text-gray-700">Quickly build beautiful websites with pre-designed components.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
