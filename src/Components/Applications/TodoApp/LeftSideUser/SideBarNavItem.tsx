import { CheckCircle, FilePlus, Trash } from "react-feather";
import { Button, Nav, NavItem } from "reactstrap";
import { AllTask, Href, ToDoList,TrashBin} from "@/Constant/constant";
import { WorkingTabs } from "./WorkingTabs";
import Link from "next/link";

export const SideBarNavItem = () => {
  return (
    <Nav className="main-menu custom-todo-list">
      <NavItem> 
        <Button color="primary" className="d-block btn-mail w-100 custom-todo-name"><CheckCircle className="me-2" />{ToDoList}</Button>
      </NavItem>
      <NavItem> 
        <Link href={Href}>
          <span className="iconbg badge-light-primary"><FilePlus className="stroke-primary" /></span>
          <span className="title ms-2">{AllTask}</span>
        </Link> 
      </NavItem>
      <WorkingTabs />
      <NavItem>
        <Link href={Href}>
          <span className="iconbg badge-light-danger"><Trash className="stroke-danger" /></span>
          <span className="title ms-2">{TrashBin}</span>
        </Link>
      </NavItem>
    </Nav>
  );
};
