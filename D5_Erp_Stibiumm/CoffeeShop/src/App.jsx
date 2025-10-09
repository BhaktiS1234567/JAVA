import { useState, useEffect } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import bgImage from "./assets/bg.png"; // Background image
import CappuccinoImg from "./assets/Cappuccino.jpg";
import DoppioImg from "./assets/Doppio.webp";
import EspressoImg from "./assets/Espresso.webp";
import GlaceImg from "./assets/Glace.jpeg";
import LatteImg from "./assets/Latte.jpg";
import MochaImg from "./assets/Mocha.png";
import DairyMImg from "./assets/DairyM.jpg";
import DarkCImg from "./assets/DarkC.webp";
import Star5Img from "./assets/Star5.jpg";


export default function App() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  // Coffee menu data
 const coffees = [
  { name: "Espresso", price: "$2.50", desc: "Strong and bold, served straight.", img: EspressoImg },
  { name: "Cappuccino", price: "$3.50", desc: "Espresso with steamed milk foam.", img: CappuccinoImg },
  { name: "Latte", price: "$3.00", desc: "Smooth espresso with steamed milk.", img: LatteImg },
  { name: "Mocha", price: "$3.75", desc: "Espresso with chocolate and milk.", img: MochaImg },
  { name: "Glace", price: "$4.00", desc: "Iced coffee with cream and sugar.", img: GlaceImg },
  { name: "Doppio", price: "$3.25", desc: "Double shot espresso.", img: DoppioImg },
];


  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
  }, []);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main content */}
      <div className="relative z-10 p-6 lg:p-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-[#ED8728]">MORNING MUG</h1>
            <p className="text-sm text-gray-100 dark:text-gray-300">
              Delicious coffee & drinks menu
            </p>
          </div>
          <div className="flex items-center gap-3">
            

            {/* Dark Mode Switch */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">Dark</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={dark}
                  onChange={(e) => setDark(e.target.checked)}
                />
                <div className="w-10 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-primary-300 rounded-full peer-checked:bg-primary-600 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:w-5 after:h-5 after:rounded-full after:shadow-sm peer-checked:after:translate-x-4 transition-all" />
              </label>
            </div>
          </div>
        </header>

        {/* Coffee Menu Grid */}
<section className="mb-8">
  <h2 className="text-3xl font-semibold mb-4 text-green-300 text-center">Menu Card</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {coffees.map((coffee, i) => (
      <Card key={i} title={coffee.name}>
        <div className="flex flex-col items-center gap-2">
          <img
            src={coffee.img}
            alt={coffee.name}
            className="w-24 h-24 object-cover rounded-full"
          />
          {/* Increased coffee name size */}
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
            {coffee.name}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-200 text-center">
            {coffee.desc}
          </p>
          <p className="font-semibold text-2xl">{coffee.price}</p>
          <div className="flex items-center gap-2 mt-2">
            <Button
              size="sm"
              variant="primary"
              onClick={() => alert(`${coffee.name} ordered successfully!`)}
            >
              Order
            </Button>
            
          </div>
        </div>
      </Card>
    ))}
  </div>
</section>


        {/* Flexbox Example - Popular Coffee Combos */}
<section className="mb-8 ">
  <h2 className="text-lg font-semibold mb-4 text-white">
    Popular Coffee Combos
  </h2>
  <div className="flex flex-col md:flex-row gap-4 items-stretch ">
    {/* Combo 1 */}
    <div className="bg-blue-100 flex-1 bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700 ">
      <h3 className="font-semibold mb-2 text-lg">Espresso + Dairy Milk</h3>
      <div className="flex items-center gap-2 mb-2">
        <img src={EspressoImg} alt="Espresso" className="w-16 h-16 rounded-full" />
        <img src={DairyMImg} alt="Dairy Milk" className="w-16 h-16 rounded-full" />
      </div>
      <p className="text-sm mb-2">Classic espresso served with a smooth Dairy Milk chocolate.</p>
      <p className="font-semibold">$5.50</p>
      <Button
        size="sm"
        variant="primary"
        onClick={() => alert("Espresso + Dairy Milk ordered successfully!")}
        className="mt-2"
      >
        Order
      </Button>
    </div>

    {/* Combo 2 */}
    <div className="bg-blue-100 flex-1 bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
      <h3 className="font-semibold mb-2 text-lg">Latte + Dark Choclate</h3>
      <div className="flex items-center gap-2 mb-2">
        <img src={LatteImg} alt="Latte" className="w-16 h-16 rounded-full" />
        <img src={DarkCImg} alt="5 Star" className="w-16 h-16 rounded-full" />
      </div>
      <p className="text-sm mb-2">Smooth latte paired with a delicious and healthy Dark chocolate.</p>
      <p className="font-semibold">$6.00</p>
      <Button
        size="sm"
        variant="primary"
        onClick={() => alert("Latte + 5 Star ordered successfully!")}
        className="mt-2"
      >
        Order
      </Button>
    </div>

    {/* Combo 3 */}
    <div className=" bg-blue-100 flex-1 bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
      <h3 className="font-semibold mb-2 text-lg">Cappuccino + FiveStar</h3>
      <div className="flex items-center gap-2 mb-2">
        <img src={CappuccinoImg} alt="Cappuccino" className="w-16 h-16 rounded-full" />
        <img src={Star5Img} alt="Dairy Milk" className="w-16 h-16 rounded-full" />
      </div>
      <p className="text-sm mb-2">Foamy cappuccino served with  a delicious 5 Star chocolate.</p>
      <p className="font-semibold">$5.75</p>
      <Button
        size="sm"
        variant="primary"
        onClick={() => alert("Cappuccino + Dairy Milk ordered successfully!")}
        className="mt-2"
      >
        Order
      </Button>
    </div>
  </div>
</section>


        {/* Modal */}
        <Modal open={open} onClose={() => setOpen(false)} title="Example modal">
          <p className="text-sm mb-4">
            This modal demonstrates layered overlay, fixed centering and simple keyboard handling (Escape).
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => { setOpen(false); alert("Saved!"); }}>Save</Button>
          </div>
        </Modal>

        {/* Footer */}
        <footer className="text-[20px] text-bold mt-12  text-yellow-200 dark:text-brown-300 text-center">
          Experience the art of coffee at Morning Mug. <br/>
          Our expertly brewed drinks, fresh ingredients, and warm atmosphere make every visit a memorable one.
        </footer>
      </div>
    </div>
  );
}
