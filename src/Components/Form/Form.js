import "./Form.css";

const Form = () => {
  return (
    <div id="form-container">
      <div>
        <h5>RESERVATION</h5>
        <h1>BOOK YOUR TABLE</h1>
      </div>
      <form>
        <div className="flex">
          <div className="input-bar">
            <input type="text" placeholder="NAME" />
          </div>
          <div className="input-bar">
            <input type="text" placeholder="DATE" />
          </div>
          <div className="input-bar">
            <input type="number" placeholder="PEOPLE" />
          </div>
        </div>
        <div className="flex">
          <div className="input-bar">
            <input type="text" placeholder="EMAIL" />
          </div>
          <div className="input-bar">
            <input type="text" placeholder="TIME" />
          </div>
          <button>FIND A TABLE</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
