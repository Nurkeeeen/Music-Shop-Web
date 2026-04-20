import ProductCard from "../components/ProductCard";
import { useCart } from "../store/cart";

const products = [
  {id:1,name:"Gibson Les Paul",price:129990},
  {id:2,name:"Fender Stratocaster",price:99990},
  {id:3,name:"Yamaha Piano",price:299990},
  {id:4,name:"Roland FP-30X",price:64990},
];

export default function Home(){
  const add = useCart(s=>s.add);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎸 Music Store</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(p=>(
          <ProductCard key={p.id} product={p} add={add}/>
        ))}
      </div>
    </div>
  )
}