import "./ChartBar.css";

const ChartBar = (props) => {

  let filler = (props.value / props.maxValue) * 100 + '%';
  if(props.maxValue == 0){
    filler = 0;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: filler}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
