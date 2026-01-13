
import { useState } from "react";
import Course from "./Course";
import html from "./assets/html.jpeg";
import css from "./assets/css.jpeg";
import js from "./assets/js.jpeg";
import mongodb from "./assets/mongodb.png";
import react from "./assets/react.png";
import nodejs from "./assets/nodejs.png";
import toast from "react-hot-toast";


function Courselist() {
  const courses = [
    { id: 1, name: "HTML", price: 100, image: html },
    { id: 2, name: "CSS", price: 120, image: css },
    { id: 3, name: "JavaScript", price: 150, image: js },
    { id: 4, name: "React", price: 100, image: react },
    { id: 5, name: "MongoDB", price: 120, image: mongodb },
    { id: 6, name: "NodeJS", price: 150, image: nodejs },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(course) {
    const found = cart.find(item => item.id === course.id);
    if (found) {
      setCart(
        cart.map(item =>
          item.id === course.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
      toast.success("Course quantity updated ");
    } else {
      setCart([...cart, { ...course, qty: 1 }]);
      toast.success("Course added to cart ");

    }
  }

  return (
    <div className="flex gap-8 p-8 bg-gray-300 min-h-screen">
      
      {/* LEFT – COURSES */}
      <div className="grid grid-cols-3 gap-10">
        {courses.map(course => (
          <Course key={course.id} course={course} addToCart={addToCart} />
        ))}
      </div>

      {/* RIGHT – CART */}
      <div className="w-[400px] bg-white rounded-xl p-5 shadow-lg sticky top-5 h-fit">
        <h2 className="text-center text-xl font-bold mb-3">🛒 Cart</h2>

        {cart.length === 0 && (
          <p className="text-center text-gray-400">No items</p>
        )}

        <div className="max-h-[250px] overflow-y-auto space-y-2 mt-2">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex justify-between bg-gray-100 p-2 rounded-md text-sm"
            >
              <span>{item.name}</span>
              <span>Qty: {item.qty}</span>
              <span>₹ {item.price * item.qty}</span>
            </div>
          ))}
        </div>

        <h3 className="text-center text-green-600 font-bold mt-3">
          Total ₹ {cart.reduce((s, i) => s + i.price * i.qty, 0)}
        </h3>
      </div>
    </div>
  );
}

export default Courselist;


