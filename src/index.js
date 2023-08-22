import _ from 'lodash'; // Optional. You can remove it if you don't need it
import './style.css';

// Remove this code snippet and put your own code snippet here
const component = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['This is a', 'template'], ' ');
  return element;
};
document.body.appendChild(component());