import { TableHeaderProp } from "@/Types/DashboardType";

const TableHead: React.FC<TableHeaderProp> = ({ headData }) => {
  return (
    <thead>
      <tr>
        {headData &&
          headData.map((item, index) =>
            item.class ? (
              <th key={index} className={item.class}>
                {item.name}
              </th>
            ) : (
              <th key={index}>{item.name}</th>
            )
          )}
      </tr>
    </thead>
  );
};
export default TableHead;
