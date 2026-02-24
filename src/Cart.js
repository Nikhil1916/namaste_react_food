import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../utils/currency";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const data = useSelector((store) => store.cart.items) || [];
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(clearItems())    
  }
  return (
    <div className="flex justify-center">
      <div className="w-6/12 mt-4">
      <h1 className="text-center font-bold">Cart</h1>
      <div className=" flex justify-center m-2 cursor-pointer">
        <button onClick={handleClick} className="bg-gray-300 p-2 rounded text-center self-center cursor-pointer">Clear Cart</button>
      </div>
        {data?.map((_,i) => {
          return (
            <div
              className="content-accordian-body flex justify-between p-4 bg-gray-100 items-stretch border-b last:border-none"
              key={_.id+i+""} data-testid="cart-items"
            >
              <div className="flex flex-col text-left p-2">
                <span>
                  {_.name} {"(" + formatCurrency(_.price / 100) + ")"}
                </span>
                <span className="text-gray-600">{_.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
