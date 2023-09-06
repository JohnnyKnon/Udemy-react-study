import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    // 값만 가진 Array
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // 값중에서 최대값 구하기, max() 메소드는 배열이아닌 내부 인자로 넣어주어야하므로, Spread를 이용하여 인자로 할당 시킴
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            )
            )}
        </div>
    )
};

export default Chart;