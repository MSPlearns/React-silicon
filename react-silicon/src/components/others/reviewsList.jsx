import React, { useState } from "react";

const reviewsList = () => {
  return (
    <>
      {reviewItems.map((item) => (
        <ReviewItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default reviewsList;
