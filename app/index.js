var React = require('react');
var ReactDOM = require('react-dom');

//Creating a component called firstTwig
var FirstTwig = React.createClass({
  //Every component needs to have a render function
  render: function(){
    return (
      <div>
        <p>This is my first twig text!!!</p>
      </div>
    )
  }
});

//Render the component to DOM
ReactDOM.render(
  <FirstTwig />,
  document.getElementById('app')
);
