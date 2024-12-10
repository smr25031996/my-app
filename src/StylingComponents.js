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

      <h1 id="name">Hi My Name Shubham</h1>
    </div>
  );
}

export default StylingComponents;
