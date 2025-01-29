import { Input, Label } from "reactstrap";

export const ProjectSummaryTableHead = () => {
  return (
    <thead>
      <tr>
        <th>
          <div className="form-check">
            <Input type="checkbox" value="" />
            <Label></Label>
          </div>
        </th>
        <th>Member Name</th>
        <th>Project Type</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Progress</th>
        <th>Status</th>
      </tr>
    </thead>
  );
};
