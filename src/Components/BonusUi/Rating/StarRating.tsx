// @ts-nocheck
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { StarRatingBar } from "@/Constant/constant";
import { StarRatingData } from "@/Data/BonusUi/Rating/RatingData";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const StarRating = () => {
  const [rating, setRating] = useState(1);

  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={StarRatingBar} subTitle={StarRatingData} />
        <CardBody>
          <div className="rating">
            <Rating initialRating={rating} emptySymbol="txt-primary star fa fa-star-o fa-2x" fullSymbol="txt-primary star fa fa-star fa-2x" onChange={(rate) => setRating(rate)} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StarRating;
