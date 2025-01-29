import { Input, Label } from "reactstrap";

export const EcommerceTableHead = () => {
    return (
        <thead>
            <tr>
                <th>
                    <div className="form-check">
                        <Input
                            type="checkbox"
                            value="" />
                        <Label></Label>
                    </div>
                </th>
                <th>Product Name</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
            </tr>
        </thead>
    );
};
