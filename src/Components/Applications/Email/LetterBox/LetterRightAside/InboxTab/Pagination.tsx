import { Href } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setPage } from "@/Redux/Reducers/LetterBoxSlice";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export const MailPagination = () => {
  const { page } = useAppSelector((state) => state.email);
  const dispatch = useAppDispatch();
  const handlePagination = (value: boolean) => dispatch(setPage(value));

  return (
    <Pagination className="mail-pagination  custom-letter-pagination pagination-primary pagin-border-primary">
      <PaginationItem>
        <PaginationLink href={Href} previous />
      </PaginationItem> 
      <PaginationItem active={!page ? true : false} onClick={() => handlePagination(false)}> 
        <PaginationLink href={Href}>1</PaginationLink>
      </PaginationItem>
      <PaginationItem active={page ? true : false} onClick={() => handlePagination(true)}>
        <PaginationLink href={Href}>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={Href} next />
      </PaginationItem>
    </Pagination>
  );
};
