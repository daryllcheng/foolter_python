import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFoods } from '../store/actions/foods_action';
import { getFilteredFoods } from '../store/reducers/selectors';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Steps from '../components/search/Steps';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
    
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      protein: [0, 100],
      fat: [0, 100],
      carb: [0, 100],
      sugar: [0, 100]
    }

    this.updateFoods = this.updateFoods.bind(this);
  }

  componentDidMount() {
    this.updateFoods();
  }

  updateFoods() {
    this.props.dispatch(fetchFoods(this.state));
  }

  renderSliders() {
    return (
      <createSliderWithTooltip>
        {
          Object.keys(this.state).map(nutrient => (
            <div key={ nutrient }>
              <div className="slider">
                <p className="sliderLabel">{ nutrient.charAt(0).toUpperCase() + nutrient.slice(1) }</p>
                <img src={ `assets/icons/${ nutrient }.png` } alt="nutrientIcon" />
              </div>
              <Range allowCross={ false } value={ this.state[nutrient] } onChange={ (value) => { 
                this.setState({ [nutrient]: value });
              }}/>
            </div>
          ))
        }
      </createSliderWithTooltip>
    )
  }

  render() {
    return (
      <div className="search">
        <Steps />
        {
          this.renderSliders()
        }
        <a className="searchIcon" onClick={ this.updateFoods }>
          <i className="fas fa-search pulsate"></i>
        </a>
        <div className="matches">
          <p>{ this.props.foods.length > 0 ? `Total Matches: ${ this.props.foods.length } ` : "No Matches" }</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    foods: getFilteredFoods(state)
  };
};

export default connect(mapStateToProps)(Search);