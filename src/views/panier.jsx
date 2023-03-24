import { CartContext } from "./context/CartContext";
const myCartContext = useContext(CartContext);

export default function Panier() {
  useEffect(() => {
    console.log(myCartContext);
  }, []);
  return <div>Mon panier</div>;
}
