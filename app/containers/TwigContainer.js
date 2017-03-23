var React = require('react');
var TwigForm = require('../components/TwigForm')


var TwigContainer = React.createClass({
  //You declare this so you can use context later in the code to switch between routers and pass info
  //Not sure why you can't use Link
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },

  //In getInitialState, you usually pass in empty parameters that hold the state
  getInitialState: function(){
    return {
        step: []
    }
  },
  componentDidMount: function(){
      this.setState({
        step: ['Append to step']
      })
  },

  appendStep: function(step){
    var steps = this.state.step;
    steps.push(step);
    this.setState({ step: steps});
  },
  //another custom function we made that gets activated by submitting the button
  handleSubmit: function(e){
    //this prevents the default action of the button (whatever it may be)
    e.preventDefault();
    //This saves the username
    var twigTitle = this.state.twigTitle;
    //This resets the username value in case we click back
    this.setState({
      twigTitle: ''
    });
  },

  addStep: function(e){
    e.preventDefault;
    this.appendStep("another step");
  },

  render: function(){
    return(
      <TwigForm
      //onSubmitUser={this.handleSubmitUser}
      //onUpdateUser={this.handleUpdateUser}
      //header={this.props.route.header}
      //twigTitle={this.state.twigTitle}
      addStep={this.addStep}
      stepCount={this.state.step}
      />
    )
  }
});

module.exports = TwigContainer;
