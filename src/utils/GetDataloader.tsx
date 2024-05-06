import React from "react";

const GetDataloader: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="200"
      height="200"
      style={{
        shapeRendering: "auto",
        display: "block",
        background: "transparent",
        margin: "auto",
      }}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#fc8d59"
        stroke="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51;360 50 51"
        ></animateTransform>
      </path>
    </svg>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 100 100"
    //   preserveAspectRatio="xMidYMid"
    //   width="200"
    //   height="200"
    //   style={{
    //     shapeRendering: "auto",
    //     display: "block",
    //     background: "rgb(255, 255, 255)",
    //     margin: "auto"
    //   }}
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    // >
    //   <g>
    //     <g transform="rotate(0 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="-0.9166666666666666s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g transform="rotate(30 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="-0.8333333333333334s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g transform="rotate(60 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="-0.75s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g transform="rotate(90 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="-0.6666666666666666s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g transform="rotate(120 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="-0.5833333333333334s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g transform="rotate(150 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="-0.5s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g transform="rotate(180 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="-0.4166666666666667s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g transform="rotate(210 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="-0.3333333333333333s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g transform="rotate(240 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="-0.25s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g transform="rotate(270 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="-0.16666666666666666s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g transform="rotate(300 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="-0.08333333333333333s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g transform="rotate(330 50 50)">
    //       <rect
    //         x="47"
    //         y="24"
    //         rx="3"
    //         ry="6"
    //         width="6"
    //         height="12"
    //         fill="#d2d2cb"
    //       >
    //         <animate
    //           attributeName="opacity"
    //           values="1;0"
    //           keyTimes="0;1"
    //           dur="1s"
    //           begin="0s"
    //           repeatCount="indefinite"
    //         ></animate>
    //       </rect>
    //     </g>
    //     <g></g>
    //   </g>
    // </svg>
  );
};

export default GetDataloader;