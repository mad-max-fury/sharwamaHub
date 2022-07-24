import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import styled from "styled-components";
import { colors } from "../../../../../colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function ChartComponent2({ ChartType, data2 }) {
  const generateArrayOfYears = () => {
    var max = new Date().getFullYear();
    var min = max - 12;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    return years.reverse();
  };
  const weekly = ["Mon", "Tues", "weds", "Thurs", "Fri", "Sat", "Sun"];
  const monthly = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = generateArrayOfYears();
  const [labelsValue, setLabelsValue] = useState(weekly);
  const [selectText, setSelectText] = useState("weekly");
  let delayed;
  var chartColors = {
    red: "rgb(255, 99, 132)",
  };
  const options = {
    responsive: true,
    radius: 5,
    width: 1,
    hitRadius: 40,
    hoverRadius: 10,

    animation: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 0.5,
        to: 0.4,
        loop: true,
      },
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 10;
        }
        return delay;
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            if (value > 999) {
              return value / 1000 + "K";
            } else {
              return value;
            }
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = labelsValue;

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data:
          // configure for data reuse
          selectText === "weekly"
            ? [300, 4000, 500, 700, 800, 1000, 200]
            : selectText === "monthly"
            ? [300, 4000, 500, 700, 800, 1000, 300, 4000, 500, 700, 800, 1000]
            : [
                300, 4000, 500, 700, 800, 8000, 1000, 300, 4000, 500, 700, 800,
                1000,
              ],

        borderColor: "#DCD2EE",
        pointBackgroundColor: "#DCD2EE",
        backgroundColor: colors.primary,
        tension: 0.4,
      },
    ],
  };

  const handleChange = ({ target }) => {
    if (target.value === "weekly") {
      setLabelsValue(weekly);
      setSelectText(target.value);
    }
    if (target.value === "month") {
      setLabelsValue(monthly);
      setSelectText("monthly");
    }
    if (target.value === "year") {
      setLabelsValue(years);
      setSelectText("year");
    }
  };
  return (
    <VStack>
      <HStack>
        <Text>Sales Analytics</Text>
        <Select onChange={handleChange}>
          <option value="weekly">Weekly</option>
          <option value="month">Monthly</option>
          <option value="year">Year</option>
        </Select>
      </HStack>
      {<ChartType height={"100%"} options={options} data={data} />}
    </VStack>
  );
}

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: 1px 1px gainsboro, -1px -1px gainsboro;
  border-radius: 5px;
  background-color: #fff;
  padding: 1rem;
  justify-content: space-between;
`;
const HStack = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4rem;
  justify-content: space-between;
`;

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
`;
const Select = styled.select`
  width: fit-content;
  border: none;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 5px;
  color: ${colors.primary};
`;
