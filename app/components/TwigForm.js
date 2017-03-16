var React = require('react');
var PropTypes = React.PropTypes;
var stepPadding = require('../styles').stepPadding;


function Step(number, title, description) {
  this.number = number;
  this.title = title;
  this.description = description;
}

var steps = [];

for (var i=0; i<2 ; i++) { //Should change i<2 to i<steps.length, then cut this to Twig Container
  steps.push(
    <div>
      <input
      className="form-control"
      placeholder="Step 1 Title"
      type="text"/>
    <input
      className="form-control"
      placeholder="Step 1 Description"
      type="text"/>
    </div>
  )
};
/* <input
  className="form-control"
  placeholder="Step 1 Title"
  onChange={props.onUpdateStep}
  value={props.StepTitle}
  type="text"/>
<input
  className="form-control"
  placeholder="Step 1 Description"
  onChange={props.onUpdateStep}
  value={props.StepTitle}
  type="text"/> */


// Basic form
function TwigForm (props) {
  return (
    <div>
      <div className="text-center">
        <h1>Create New Twig</h1>
      </div>
      <div className="col-sm-6">
        <form onSubmit={props.onSubmit}>
          <input
            className="form-control form-control-lg"
            placeholder="Twig Title"
            onChange={props.onUpdateTitle}
            value={props.twigTitle}
            type="text"/>
          <div className="form-group steps">
            {steps}
          </div>
          <div className="form-group col-sm-6 col-sm-offset-3">
            <button
              className="btn btn-block btn-secondary"
              type="button"
              onClick={props.addStep}>
                Add Step
              </button>
            <button
              className="btn btn-block btn-success"
              type="submit">
                Submit
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}

module.exports = TwigForm;
