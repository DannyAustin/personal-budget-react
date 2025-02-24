import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3Chart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = [10, 15, 20, 25, 30];  // Example data

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", 300)
      .attr("height", 200);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 60)
      .attr("y", (d) => 200 - d * 5)
      .attr("width", 50)
      .attr("height", (d) => d * 5)
      .attr("fill", "teal");
  }, []);

  return <div ref={chartRef}></div>;
};

export default D3Chart;
