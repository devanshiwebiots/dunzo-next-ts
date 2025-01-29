import { ContactCreated, ContactHistory, Href } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setHistory } from "@/Redux/Reducers/ContactSlice";
import Link from "next/link";

const HistoryClass = () => {
  const {history} = useAppSelector((state)=>state.contact)
  const dispatch = useAppDispatch()

  return (
    <div id="right-history" className={history ? "show":""}>
      <div className="modal-header p-20">
        <h6 className="modal-title w-100">{ContactHistory}
          <span className="pull-right">
            <Link className="closehistory" href={Href} onClick={()=>dispatch(setHistory())}>
              <i className="icofont icofont-close"></i>
            </Link>
          </span>
        </h6>
      </div>
      <div className="history-details">
        <div className="text-center">
          <i className="icofont icofont-ui-edit"></i>
          <p>Contact has not been modified yet.</p>
        </div>
        <div className="d-flex">
          <i className="icofont icofont-star me-3"></i>
          <div className="mt-0 flex-grow-1">
            <h3 className="mt-0">{ContactCreated}</h3>
            <p className="mb-0">Contact is created via mail</p>
            <span className="f-12">Sep 10, 2024 4:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryClass;
