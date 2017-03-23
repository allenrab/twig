var React = require('react');
var PropTypes = React.PropTypes;
var stepPadding = require('../styles').stepPadding;
var buttonPadding = require('../styles').buttonPadding;



var steps = [];
function renderSteps (num) {
    if (num>0){
      steps.push(
        <div style={stepPadding}>
          <input
          className="form-control"
          placeholder={"Step " + num + " Title"}
          type="text"/>
        <textarea
          className="form-control"
          placeholder={"Step " + num + " Description"}
          type="text"/>
        </div>
      )
    }
  return steps;
}


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
            {renderSteps(props.stepCount.length)}
          </div>
          <div className="form-group col-sm-6 col-sm-offset-3">
            <button
              className="btn btn-primary"
              type="button"
              onClick={props.addStep}
              style={buttonPadding}>
                Add Step
              </button>
            <button
              className="btn btn-success"
              type="submit"
              style={buttonPadding}>
                Submit
              </button>
          </div>
        </form>
      </div>
      <div className="col-sm-6">
        <p>Steps go here</p>
      </div>
    </div>
  )
}

module.exports = TwigForm;
