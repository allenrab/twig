var React = require('react');
var TwigForm = require('../components/TwigForm')

var TwigContainer = React.createClass({
  //In getInitialState, you usually pass in empty parameters that hold the state
  getInitialState: function(){
    return {
        twigTitle: '',
        twigContent: [
          {
            stepNum: 1,
            stepTitle: 'hello',
            stepContent: ''
          }
        ]
    }
  },
  componentDidMount: function(){
      this.setState({

      })
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
    };
    if (e.target.name.substring(0, 6)=="step-t") {
      console.log("This is a title")
      console.log("title number " + parseInt(e.target.name.substring(11)) )
      let twigTitleNum = parseInt(e.target.name.substring(11));
      twigContent[twigTitleNum-1].stepNum=twigTitleNum;
      twigContent[twigTitleNum-1].stepTitle=e.target.value;
    }
    else if (e.target.name.substring(0, 6)=="step-c") {
      console.log("This is content")
      console.log("content number " + parseInt(e.target.name.substring(13)) )
      let twigContentNum = parseInt(e.target.name.substring(13));
      twigContent[twigContentNum-1].stepNum=twigContentNum;
      twigContent[twigContentNum-1].stepContent=e.target.value;
    }

    this.setState({
      twigContent: twigContent
    });
  },

  //another custom function we made that gets activated by submitting the button
  handleSubmit: function(e){
    //this prevents the default action of the button (whatever it may be)
    e.preventDefault();
    //This saves the
    var twigTitle = this.state.twigTitle;
    //This resets the username value in case we click back
    this.setState({
      twigTitle: ''
    });
  },

  addStep: function(e){
    e.preventDefault;
    let twigContent = this.state.twigContent;
    twigContent.push({
      // pushing empty object
    });
    console.log(twigContent);
    this.setState({ twigContent: twigContent});
  },

  render: function(){
    return(
      <TwigForm
      addStep={this.addStep}
      onUpdateTwig={this.handleUpdateTwig}
      twigTitle={this.state.twigTitle}
      onUpdateTwigContent={this.handleUpdateTwigContent}
      twigContent={this.state.twigContent}
      />
    )
  }
});

module.exports = TwigContainer;
