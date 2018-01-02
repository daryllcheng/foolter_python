import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilteredFoods } from '../store/reducers/selectors';
import Food from '../components/food/Food';
import EmptyGrid from '../components/food/EmptyGrid';
import ScrollToTop from 'react-scroll-up';

class Foods extends Component {
  render() {
    return (
      <div className="foods">
        {
          this.props.foods && this.props.foods.length >= 1 ? 
          <div className="grid">
            {
              this.props.foods.map(food => (
                <li key={ food.ndbno }>
                  <Food food={ food } />
                </li>
              ))
            }
          </div> :
          <EmptyGrid />
        }
        <ScrollToTop 
          showUnder={ 160 }
          duration={ 500 }
          style={{ "zIndex": 2 }}
        >
          <i className="fas fa-arrow-circle-up pulsate"></i>
        </ScrollToTop>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    foods: getFilteredFoods(state)
  };
};

export default connect(mapStateToProps)(Foods);