import { ImagePath } from "@/Constant/constant";
import { ProjectTableData } from "@/Data/General/Dashboard/DashboardData";
import { Input, Label, Progress } from "reactstrap";
import Image from "next/image";
import Link from "next/link";

export const ProjectSummaryTableBody = () => {
  return (
    <tbody>
      {ProjectTableData.map((rowData, index) => (
        <tr key={index}>
          <td>
            <div className="form-check">
              <Input type="checkbox" value="" />
              <Label></Label>
            </div>
          </td>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image priority width={38} height={38} src={`${ImagePath}/dashboard/user/${index + 1}.png`} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
                <Link href="/users/user_profile">
                  <h6>{rowData.memberName}</h6>
                  <span>{rowData.role}</span>
                </Link>
              </div>
            </div>
          </td>
          <td>{rowData.projectType}</td>
          <td>{rowData.startDate}</td>
          <td>{rowData.endDate}</td>
          <td>
            <Progress value={50} color={rowData.color} />
          </td>
          <td>
            <button className={`btn ${rowData.statusClass}`}>{rowData.status}</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
