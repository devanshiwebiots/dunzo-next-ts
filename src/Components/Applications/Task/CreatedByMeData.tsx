import SearchNotFoundClass from "@/CommonComponent/SearchNotFound/SearchNotFoundClass";
import { Href, ThemePrimary } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { removeTask } from "@/Redux/Reducers/TaskSlice";
import React, { MutableRefObject } from "react";
import { Link, MoreHorizontal, Trash2 } from "react-feather";
import { CardBody, Table } from "reactstrap";
import SweetAlert from "sweetalert2";

export interface PrintPreviewPropsType {
  ref:MutableRefObject<HTMLDivElement | null>
}

const CreatedByMeData = () => {
  const { allTask } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const deleteTask = (userId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      confirmButtonColor: ThemePrimary,
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(removeTask(userId));
        SweetAlert.fire({ title: "Deleted!", text: "Your file has been deleted.", icon: "success", confirmButtonColor: ThemePrimary });
      } else {
        SweetAlert.fire({ text: "Your imaginary file is safe!", confirmButtonColor: ThemePrimary });
      }
    });
  };

  return (
    <div>
      <CardBody className="p-0">
        <div className="taskadd">
          <div className="table-responsive custom-scrollbar table-borderless">
            <Table borderless>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                {allTask && allTask.length ? (
                  allTask.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <h6 className="task_title_0">{data.title}</h6>
                        <p className="project_name_0">{data.collection}</p>
                      </td>
                      <td><p className="task_desc_0">{data.description}</p></td>
                      <td>
                        <a className="me-2" href={Href}><Link /></a>
                        <a href={Href}><MoreHorizontal /></a>
                      </td>
                      <td><a href={Href} onClick={() => deleteTask(data.id)}><Trash2 /></a></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>
                      <div className="no-favourite">
                        <SearchNotFoundClass word="favorites" />
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </CardBody>
    </div>
  );
};

export default CreatedByMeData;
