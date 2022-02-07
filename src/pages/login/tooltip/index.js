import './index.css';
import axios from 'axios';
export default function Tooltip() {
  return (
    <div className="main-box">
      <div className="box-tooltip-content">
        <div className="new-orders"></div>
      </div>
      <div className="box-arrow">
        <i className="arrow down"></i>
      </div>
    </div>
  );
}
