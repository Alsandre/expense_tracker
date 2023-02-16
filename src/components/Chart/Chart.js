import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  //   const monthChartRender = props.chart.map((item, index) => (
  //     <ChartBar key={index} value={props} maxValue={props} label={props}/>
  //   ));

  //   console.log(monthChartRender[0]);

  const valuePool = props.dataPoint.map((el) => el.value);
  const totalMaximum = Math.max(...valuePool);
  return (
    <div className="chart">
      {props.dataPoint.map((el) => (
        <ChartBar
          maxValue={totalMaximum}
          label={el.label}
          value={el.value}
          key={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
