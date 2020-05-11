import React,{useState, useEffect  } from "react";
import {Line} from 'react-chartjs-2';
import initailstate from "../store";

const Chart =()=> {
  const [state, setState] = useState(initailstate);
  useEffect(() => {
    const subscribe = {
      type: "subscribe",
      channels: [
        {
          name: "ticker",
          product_ids: ["BTC-USD"],
        },
      ],
    };

  const  ws = new WebSocket("wss://ws-feed.pro.coinbase.com");

    ws.onopen = () => {
      ws.send(JSON.stringify(subscribe));
    };

    ws.onmessage = (e) => {
      const response = JSON.parse(e.data);
      if (response.type !== "ticker") return;
      console.log("socket response: ", response);
      const oldData = state.lineChartData.datasets[0];
      const newData = { ...oldData };
      newData.data.push(response.price);

      const newChartData = {
        ...state.lineChartData,
        datasets: [newData],
        labels: state.lineChartData.labels.concat(
          new Date().toLocaleTimeString()
        ),
      };
      setState({ lineChartData: newChartData });
    };
    return () => {
      ws.close();
    }
  }, [])

    return (
      <div className="container p-2">
        <Line data = {state.lineChartData} options = {state.lineChartOptions} height={600}></Line>
      </div>
    );
  
}

export default Chart;
