import React from "react";
import { Card, Rate } from "antd";
const { Meta } = Card;

const MovieCard = ({ title, description, posterUrl, rating }) => {
  return (
    <Card hoverable cover={<img alt="example" src={posterUrl} />}>
      <Meta
        style={{
          marginBottom: "1rem",
        }}
        title={title}
        description={description.slice(0, 100)}
      />
      <Rate disabled defaultValue={rating} />
    </Card>
  );
};
export default MovieCard;
