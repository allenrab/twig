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
    alert("Add step here");
    this.appendStep("another step");
    console.log(this.state.step);
  },
/*
    if (this.props.routeParams.playerOne) {
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      //go to playerTwo
      //Can push with either an object (above) or a single line (below)
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
*/
  render: function(){
    return(
      <TwigForm
      //onSubmitUser={this.handleSubmitUser}
      //onUpdateUser={this.handleUpdateUser}
      //header={this.props.route.header}
      //twigTitle={this.state.twigTitle}
      addStep={this.addStep}
      />
    )
  }
});

module.exports = TwigContainer;
