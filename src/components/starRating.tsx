import React from "react";
interface RatingReviewProps {
  rating: number;
}
const RatingReview: React.FC<RatingReviewProps> = ({ rating }) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((star,index) => {
        return (
          // <span
          //   className="start"
          //   style={{
          //     display: "inline-block",
          //     //   cursor: "pointer",
          //     color: rating >= star ? "gold" : "gray",
          //     // fontSize: `0.9rem`,
          //     height: '24px',
          //     width: '29px'
          //   }}
          //   // onClick={() => {
          //   //   setRating(star);
          //   // }}
          // >
          //   {" "}
          //   ★{" "}
          // </span>
          <svg
            // width="29"
            // height="24"
            key={index}
            style={{height: '24px', width: '29px'}}
            viewBox="0 0 29 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 3L23.5933 16.5H5.40673L14.5 3Z"
              fill={rating >= star ? "#FFDB5B" : "gray"}
            />
            <path
              d="M5.2005 7.69613L23.6535 7.48687L14.646 20.817L5.2005 7.69613Z"
              fill={rating >= star ? "#FFDB5B" : "gray"}
            />
          </svg>
        );
      })}
    </>
  );
};

export default RatingReview;
