import React, { Component } from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import Dimensions from 'react-dimensions'

class Steps extends Component {
  render() {
    const style = {
      "fontSize": "14px",
      "color": "#1A1A1A",
      "fontFamily": "neuton"
    }
    return ( 
      <Stepper className="steps" orientation={ this.props.containerWidth >= 500 ? "horizontal" : "vertical" }>
        <Step active={ true }>
          <StepLabel style={ style }>Drag sliders to define range (grams)</StepLabel>
        </Step>
        <Step active={ true }>
          <StepLabel style={ style }>Click on search to confirm</StepLabel>
        </Step>
        <Step active={ true }>
          <StepLabel style={ style }>Browse through available matches</StepLabel>
        </Step>
      </Stepper>
    )
  }
}

export default Dimensions()(Steps);