import { formatCurrency } from "../../utils/helpers";
import Button from '../../ui/Button'
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantitybyId } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import { current } from "@reduxjs/toolkit";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantitybyId(id))
  const isInCart = currentQuantity > 0


  function handleAddToCart() {
    // console.log(id)
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem))
  }
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`} />
      <div className="flex flex-col grow pt-0.5" >
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between flex-grow">
          {!soldOut ? <p >{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
          {isInCart && <div className="flex items-center gap-3 sm:gap-8">
            <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
            <DeleteItem pizzaId={id} />
          </div>}
          {!soldOut && !isInCart && <Button type='small' onClick={handleAddToCart}>Add to cart</Button>}

        </div>
      </div>
    </li>
  );
}

export default MenuItem;
