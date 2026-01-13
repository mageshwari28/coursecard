
function Course({ course, addToCart }) {
  return (
    <div className="bg-sky-200 text-white rounded-xl p-4 text-center w-[220px]">
      <img
        src={course.image}
        alt={course.name}
        className="w-full h-32  rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold">{course.name}</h3>
      <p className="font-bold mb-2">₹ {course.price}</p>
      <button
        onClick={() => addToCart(course)}
        className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Course;
