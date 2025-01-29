// @ts-nocheck
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { HeartRatingBar } from "@/Constant/constant";
import { HeartRatingData } from "@/Data/BonusUi/Rating/RatingData";
import { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const HeartRating = () => {
  const [rating, setRating] = useState(3);

  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={HeartRatingBar} subTitle={HeartRatingData} />
        <CardBody>
          <div className="rating">
            <Rating initialRating={rating} emptySymbol="txt-primary fa fa-heart-o fa-2x" fullSymbol="txt-primary fa fa-heart fa-2x" onClick={(rate: number) => setRating(rate)} />
            <span className="txt-primary ms-3 mb-1 current-rating">{rating}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeartRating;
