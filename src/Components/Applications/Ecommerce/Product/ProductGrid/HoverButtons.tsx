import { Href } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addToCartData } from "@/Redux/Reducers/CartSlice";
import { HoverButtonsProp, ProductItemInterface } from "@/Types/EcommerceType";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "reactstrap";

export const HoverButtons: React.FC<HoverButtonsProp> = ({ item, setDataId, setOpenModal }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const AddToCarts = (item: ProductItemInterface, quantity: number) => {
    dispatch(addToCartData({ item, quantity }));
    router.push("/ecommerce/cart");
  };

  const onClickHandle = (i: ProductItemInterface) => {
    setOpenModal(true);
    setDataId(i.id);
  };

  return (
    <div className="product-hover">
      <ul>
        <li>
          <Link color="transparent" href="/ecommerce/cart" onClick={() => AddToCarts(item, 1)}><i className="icon-shopping-cart"></i></Link>
        </li>
        <li>
          <Link href={Href} color="transparent" onClick={() => onClickHandle(item)}><i className="icon-eye"></i></Link>
        </li>
      </ul>
    </div>
  );
};
