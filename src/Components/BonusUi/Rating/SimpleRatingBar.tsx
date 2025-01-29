//@ts-nocheck
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { RatingBars } from "@/Constant/constant";
import { BarRatingData } from "@/Data/BonusUi/Rating/RatingData";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const SimpleRatingBar = () => {
  const [rating, setRating] = useState(8);

  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={RatingBars} subTitle={BarRatingData} />
        <CardBody>
          <div className="rating">
            <Rating stop={10} initialRating={rating} emptySymbol="br-selected" fullSymbol="br-selected br-current" onChange={(rate) => setRating(rate)} />
            <span className="current-rating">{rating}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleRatingBar;
