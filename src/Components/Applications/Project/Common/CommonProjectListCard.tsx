import { Comment, Done, ImagePath, Issues, Resolved } from "@/Constant/constant";
import { CommonProjectInterFace } from "@/Types/ProjectType";
import Image from "next/image";
import { Badge, Col, Progress, Row } from "reactstrap";

export const CommonProjectListCard :React.FC<CommonProjectInterFace> = ({ item }) => {
  return (
    <Col xxl="4" lg="4" md="6" className="box-col-33">
      <div className={`project-box ${item.progress === 100 ? "b-light-success" : "b-light-secondary"}`}>
        <Badge color={item.badge === 'Done' ? 'success' : 'secondary'}>{item.badge}</Badge>
        <h3>{item.title}</h3>
        <div className="d-flex">
          <Image width={20} height={20} className="img-20 me-1 rounded-circle" src={`${ImagePath}/user/${item.image}`} alt="" unoptimized/>
          <div className="flex-grow-1"><p>{item.sites}</p></div>
        </div>
        <p>{item.description}</p>
        <Row className="details">
          <Col xs="6"><span>{Issues} </span></Col>
          <Col xs="6" className={`txt-${item.badge === 'Done' ? 'success' : 'secondary'}`}>{item.issue}</Col>
          <Col xs="6"><span>{Resolved}</span></Col>
          <Col xs="6" className={`txt-${item.badge === 'Done' ? 'success' : 'secondary'}`}>{item.resolved}</Col>
          <Col xs="6"><span>{Comment}</span></Col>
          <Col xs="6" className={`txt-${item.badge === 'Done' ? 'success' : 'secondary'}`}>{item.comment}</Col>
        </Row>
        <div className="customers">
          <ul>
            <li className="d-inline-block"><Image width={30} height={30} className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_img2}`} alt="" priority unoptimized/></li>
            <li className="d-inline-block"><Image width={30} height={30} className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_img3}`} alt="" priority unoptimized/></li>
            <li className="d-inline-block"><Image width={30} height={30} className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_img1}`} alt="" priority unoptimized/></li>
            <li className="d-inline-block ms-2"><p className="f-12">{`+${item.like} More`}</p></li>
          </ul>
        </div>
        <div className="project-status mt-4">
          <div className="d-flex mb-0">
            <p>{item.progress}%</p>
            <div className="flex-grow-1 text-end"><span>{Done}</span></div>
          </div>
          {item.progress === 100 ? <Progress className='sm-progress-bar' color='success' value={item.progress} /> : <Progress className='sm-progress-bar' animated striped color='secondary' value={item.progress} />}
        </div>
      </div>
    </Col>
  );
};
