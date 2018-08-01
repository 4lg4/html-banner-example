import ad from './ad.js';
import './style.css';

if (process.env.ENV === 'production') {
  require('../helpers/production.js')(ad);
} else {
  require('../helpers/development.js')(ad);
}
