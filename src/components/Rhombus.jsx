import "./Rhombus.css";

export default function Rhombus() {
  return (
    <div className="Rhombus__Wrapper">
      <svg
        viewBox="0,0,10,10"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="10" height="10" fill="black" />
        <g className="Rhombus__g">
          <polygon
            points="5,-3 13,5 5,13 -3,5"
            fill="none"
            stroke="white"
            strokeDasharray="4 1 2"
          />
          {/* <polygon
            points="5,0 10,5 5,10 0,5"
            fill="none"
            stroke="white"
            strokeDasharray="3 2 1"
          /> */}
          <polygon
            points="5,3 7,5 5,7 3,5"
            fill="none"
            stroke="white"
            strokeDasharray="4 2 3"
          />
        </g>
      </svg>
    </div>
  );
}
