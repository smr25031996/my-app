import "./StylingComponents.css";
import "bootstrap/dist/css/bootstrap.min.css";
function StylingComponents() {
  return (
    <div>
      <h1 style={{ color: "green", fontFamily: "Verdana" }}>
        Welcome To React
      </h1>
      <h2
        style={{
          color: "rebeccapurple",
          fontSize: "40px",
          backgroundColor: "yellowgreen",
        }}
      >
        Welcome
      </h2>
      <button button className="red" type="submit">
        Submit
      </button>
      <button className="btn btn-danger">BootStrap Button</button>
    </div>    
  );
}

export default StylingComponents;
