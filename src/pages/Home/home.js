/* eslint-disable no-undef */
import './home.css';
import React, {Component} from 'react';
import TitlePhoto from "../../components/titlePhoto";
import PrimeiroModal from './primeiroModal';
import BgColorExample from '../../components/BgColorExample';

class Home extends Component {
    render () {
      return (
        <div className='color'>
            <TitlePhoto /> 
            <PrimeiroModal />
            <BgColorExample />
        </div>
      );
    }
  }
  
  export default Home;