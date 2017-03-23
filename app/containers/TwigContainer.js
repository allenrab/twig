var React = require('react');
var TwigForm = require('../components/TwigForm')


var TwigContainer = React.createClass({
  //In getInitialState, you usually pass in empty parameters that hold the state
  getInitialState: function(){
    return {
        step: [],
        twigTitle: '',
        twigContent: [
          {
            stepNum: 1,
            stepTitle: '',
            active: false
          }
        ]
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

  handleUpdateTwig: function(e){
    this.setState({
      twigTitle: e.target.value
    })
  },
  handleUpdateTwigContent: function(e){
    var twigContent = this.state.twigContent;
    twigContent[0] = {
      "stepNum": 1,
      "stepTitle": e.target.value,
      "active": true
    };
    this.setState({
      twigContent: twigContent
    });
    console.log(this.state.twigContent);
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
      onUpdateTwig={this.handleUpdateTwig}
      twigTitle={this.state.twigTitle}
      onUpdateTwigContent={this.handleUpdateTwigContent}
      twigContent={this.state.twigContent}
      />
    )
  }
});

module.exports = TwigContainer;
