var React = require('react');
var PropTypes = React.PropTypes;
var stepPadding = require('../styles').stepPadding;
var buttonPadding = require('../styles').buttonPadding;
var noHeaderMargin =require('../styles').noHeaderMargin;
var headerPadding =require('../styles').headerPadding;
var stepHeader =require('../styles').stepHeader;


var steps = [];
function renderSteps (num, func) {
    if (num>0 && !steps[num-1]){
      steps.push(
        <div style={stepPadding}>
          <input
          className="form-control"
          placeholder={"Step " + num + " Title"}
          type="text"
          name={"step-title-" + num}
          onChange={func}/>
        <textarea
          className="form-control"
          placeholder={"Step " + num + " Description"}
          type="text"
          name={"step-content-" + num}
          onChange={func}/>
        </div>
      )
    }
  return steps;
}

var contents = [];
function renderContent (arr){
    contents[arr.length]= (
      <div>
        <h3 style={stepHeader}>{"Step " + arr.length + ": " + arr[arr.length-1].stepTitle}</h3>
        <p>Enter step here</p>
      </div>
    )

  console.log(arr[arr.length-1].stepTitle);
  return contents;
}

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
            onChange={props.onUpdateTwig}
            value={props.twigTitle}
            type="text"/>
          <div className="form-group steps">
            {renderSteps(props.twigContent.length, props.onUpdateTwigContent)}
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
        <h2 style={noHeaderMargin}>{props.twigTitle}</h2>
        {renderContent(props.twigContent)}
      </div>
    </div>
  )
}

module.exports = TwigForm;
