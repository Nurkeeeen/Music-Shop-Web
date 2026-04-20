export default function ProductCard({product, add}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-soft hover:scale-105 transition">
      <div className="h-32 bg-gray-100 rounded mb-2" />
      <h3>{product.name}</h3>
      <p className="text-gray-500">{product.price} ₸</p>
      <button onClick={()=>add(product)} className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg">
        Купить
      </button>
    </div>
  )
}