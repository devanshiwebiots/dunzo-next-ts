import { BookmarkFilter, Href, ImagePath } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setBookmarkFilter } from "@/Redux/Reducers/BookmarkTabSlice";
import Image from "next/image";
import { Button, Card, CardBody, Col } from "reactstrap";
import NavTab from "./NavTab";

const SideBar = () => {
  const {bookmarkFilter} = useAppSelector((state)=>state.bookmarkTab)
  const dispatch = useAppDispatch()

  return (
    <Col xl="3" className="box-col-4e">
      <div className="md-sidebar">
        <Button tag="a" color="primary" className="md-sidebar-toggle" href={Href} onClick={()=>dispatch(setBookmarkFilter())}>{BookmarkFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${bookmarkFilter ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <div className="d-flex align-items-center">
                    <div className="media-size-email">
                      <Image width={52} height={52} className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="user" priority unoptimized/>
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="text-uppercase">Mark Jecno</h3>
                      <p>Markjecno@gmail.com</p>
                    </div>
                  </div>
                  <NavTab />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SideBar;
