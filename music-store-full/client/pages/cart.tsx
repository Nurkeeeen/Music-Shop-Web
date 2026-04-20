import { useCart } from "../store/cart";

export default function Cart(){
  const items = useCart(s=>s.items);

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Корзина</h1>

      {items.map((i,idx)=>(
        <div key={idx} className="flex justify-between bg-white p-3 mb-2 rounded">
          <span>{i.name}</span>
          <span>{i.price} ₸</span>
        </div>
      ))}

      <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-xl">
        Оформить заказ
      </button>
    </div>
  )
}