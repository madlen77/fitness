import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const value = 0.66;

<div style={{ width: 200, height: 200 }}>
 <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;
 </div>