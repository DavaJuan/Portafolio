import React from 'react'
import JavaScript from './img/javascript-svgrepo-com.svg';
import HTML from './img/html-svgrepo-com.svg';
import CSS from './img/css-3-svgrepo-com.svg';
import ReactIco from './img/react-svgrepo-com.svg';
import ReduxIco from './img/redux-svgrepo-com.svg';
import NodeJs from './img/node-js-svgrepo-com.svg';
import ExpressIco from './img/express-svgrepo-com.svg';
import Sequelize from './img/sequelize-svgrepo-com.svg';
import TypeScript from './img/typescript-icon-svgrepo-com.svg';
import Python from './img/python-svgrepo-com.svg';
import './Technologies.css';

const Technologies = () => {
  return (
    <div  className='tech-container'>
      <h3>Technologies</h3>
        <div className='container-images'>
          <img className='tech-img' src={HTML} alt="html"/>
          <img className='tech-img' src={CSS} alt="css"/>
          <img className='tech-img' src={JavaScript} alt="javascript"/>
          <img className='tech-img' src={ReactIco} alt="react"/>
          <img className='tech-img' src={ReduxIco} alt="redux"/>
          <img className='tech-img' src={NodeJs} alt="nodesj"/>
          <img className='tech-img' src={ExpressIco} alt="express"/>
          <img className='tech-img' src={Sequelize} alt="sequelize"/>
        </div>
          <h3>Learning</h3>
        <div className='container-images-two'>
            <img className='tech-img' src={TypeScript} alt="typescript" />
            <img className='tech-img' src={Python} alt="python" />
        </div>   
    </div>
  );
}

export default Technologies;