import { BackToHomePage, MaintenancesSubContent, MaintenancesTitle, ThankYouForPatience } from "@/Constant/constant";
import Link from "next/link";
import { Container } from "reactstrap";

const MaintenanceContainer = () => {
  return (
    <div className="page-wrapper">
      <div className="error-wrapper maintenance-bg">
        <Container>
          <ul className="maintenance-icons">
            <li><i className="fa fa-cog"></i></li>
            <li><i className="fa fa-cog"></i></li>
            <li><i className="fa fa-cog"></i></li>
          </ul>
          <div className="maintenance-heading">
            <h2 className="headline">{MaintenancesTitle}</h2>
          </div>
          <h4 className="sub-content">{MaintenancesSubContent}<br />{ThankYouForPatience}</h4>
          <div>
            <Link className="btn btn-primary-gradien btn-lg text-light" href="/dashboard/default">{BackToHomePage}</Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MaintenanceContainer;
