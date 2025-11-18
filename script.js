
// DATA: plants + their digital offspring
const rawData = [
  // Tillandsia recurvata — r/ExplainLikeImFive
  { year: 2019, plant: "Tillandsia recurvata", subreddit: "r/ExplainLikeImFive", offspring: 60 },
  { year: 2020, plant: "Tillandsia recurvata", subreddit: "r/ExplainLikeImFive", offspring: 95 },
  { year: 2021, plant: "Tillandsia recurvata", subreddit: "r/ExplainLikeImFive", offspring: 130 },
  { year: 2022, plant: "Tillandsia recurvata", subreddit: "r/ExplainLikeImFive", offspring: 165 },
  { year: 2023, plant: "Tillandsia recurvata", subreddit: "r/ExplainLikeImFive", offspring: 200 },
  { year: 2024, plant: "Tillandsia recurvata", subreddit: "r/ExplainLikeImFive", offspring: 235 },

  // Vachellia farnesiana — r/askWomen
  { year: 2019, plant: "Vachellia farnesiana", subreddit: "r/askWomen", offspring: 85 },
  { year: 2020, plant: "Vachellia farnesiana", subreddit: "r/askWomen", offspring: 120 },
  { year: 2021, plant: "Vachellia farnesiana", subreddit: "r/askWomen", offspring: 155 },
  { year: 2022, plant: "Vachellia farnesiana", subreddit: "r/askWomen", offspring: 190 },
  { year: 2023, plant: "Vachellia farnesiana", subreddit: "r/askWomen", offspring: 225 },
  { year: 2024, plant: "Vachellia farnesiana", subreddit: "r/askWomen", offspring: 260 },

  // Quercus fusiformis — r/Drugs
  { year: 2019, plant: "Quercus fusiformis", subreddit: "r/Drugs", offspring: 110 },
  { year: 2020, plant: "Quercus fusiformis", subreddit: "r/Drugs", offspring: 145 },
  { year: 2021, plant: "Quercus fusiformis", subreddit: "r/Drugs", offspring: 180 },
  { year: 2022, plant: "Quercus fusiformis", subreddit: "r/Drugs", offspring: 215 },
  { year: 2023, plant: "Quercus fusiformis", subreddit: "r/Drugs", offspring: 250 },
  { year: 2024, plant: "Quercus fusiformis", subreddit: "r/Drugs", offspring: 285 },

  // Hamelia — r/OutOftheLoop
  { year: 2019, plant: "Hamelia", subreddit: "r/OutOftheLoop", offspring: 135 },
  { year: 2020, plant: "Hamelia", subreddit: "r/OutOftheLoop", offspring: 170 },
  { year: 2021, plant: "Hamelia", subreddit: "r/OutOftheLoop", offspring: 205 },
  { year: 2022, plant: "Hamelia", subreddit: "r/OutOftheLoop", offspring: 240 },
  { year: 2023, plant: "Hamelia", subreddit: "r/OutOftheLoop", offspring: 275 },
  { year: 2024, plant: "Hamelia", subreddit: "r/OutOftheLoop", offspring: 310 },

  // Dermatophyllum secundiflorum — r/MaleFashionAdvice
  { year: 2019, plant: "Dermatophyllum secundiflorum", subreddit: "r/MaleFashionAdvice", offspring: 160 },
  { year: 2020, plant: "Dermatophyllum secundiflorum", subreddit: "r/MaleFashionAdvice", offspring: 195 },
  { year: 2021, plant: "Dermatophyllum secundiflorum", subreddit: "r/MaleFashionAdvice", offspring: 230 },
  { year: 2022, plant: "Dermatophyllum secundiflorum", subreddit: "r/MaleFashionAdvice", offspring: 265 },
  { year: 2023, plant: "Dermatophyllum secundiflorum", subreddit: "r/MaleFashionAdvice", offspring: 300 },
  { year: 2024, plant: "Dermatophyllum secundiflorum", subreddit: "r/MaleFashionAdvice", offspring: 335 },

  // Caesalpinia pulcherrima — r/Dating
  { year: 2019, plant: "Caesalpinia pulcherrima", subreddit: "r/Dating", offspring: 185 },
  { year: 2020, plant: "Caesalpinia pulcherrima", subreddit: "r/Dating", offspring: 220 },
  { year: 2021, plant: "Caesalpinia pulcherrima", subreddit: "r/Dating", offspring: 255 },
  { year: 2022, plant: "Caesalpinia pulcherrima", subreddit: "r/Dating", offspring: 290 },
  { year: 2023, plant: "Caesalpinia pulcherrima", subreddit: "r/Dating", offspring: 325 },
  { year: 2024, plant: "Caesalpinia pulcherrima", subreddit: "r/Dating", offspring: 360 },

  // Dichelache crinita — r/antiWork
  { year: 2019, plant: "Dichelache crinita", subreddit: "r/antiWork", offspring: 210 },
  { year: 2020, plant: "Dichelache crinita", subreddit: "r/antiWork", offspring: 245 },
  { year: 2021, plant: "Dichelache crinita", subreddit: "r/antiWork", offspring: 280 },
  { year: 2022, plant: "Dichelache crinita", subreddit: "r/antiWork", offspring: 315 },
  { year: 2023, plant: "Dichelache crinita", subreddit: "r/antiWork", offspring: 350 },
  { year: 2024, plant: "Dichelache crinita", subreddit: "r/antiWork", offspring: 385 },

  // Yucca elata — r/SocialSkills
  { year: 2019, plant: "Yucca elata", subreddit: "r/SocialSkills", offspring: 235 },
  { year: 2020, plant: "Yucca elata", subreddit: "r/SocialSkills", offspring: 270 },
  { year: 2021, plant: "Yucca elata", subreddit: "r/SocialSkills", offspring: 305 },
  { year: 2022, plant: "Yucca elata", subreddit: "r/SocialSkills", offspring: 340 },
  { year: 2023, plant: "Yucca elata", subreddit: "r/SocialSkills", offspring: 375 },
  { year: 2024, plant: "Yucca elata", subreddit: "r/SocialSkills", offspring: 410 },

  // Galphimia glauca — r/Politics
  { year: 2019, plant: "Galphimia glauca", subreddit: "r/Politics", offspring: 260 },
  { year: 2020, plant: "Galphimia glauca", subreddit: "r/Politics", offspring: 295 },
  { year: 2021, plant: "Galphimia glauca", subreddit: "r/Politics", offspring: 330 },
  { year: 2022, plant: "Galphimia glauca", subreddit: "r/Politics", offspring: 365 },
  { year: 2023, plant: "Galphimia glauca", subreddit: "r/Politics", offspring: 400 },
  { year: 2024, plant: "Galphimia glauca", subreddit: "r/Politics", offspring: 435 },

  // Esperanza Flowers — r/AmIOverReacting
  { year: 2019, plant: "Esperanza Flowers", subreddit: "r/AmIOverReacting", offspring: 285 },
  { year: 2020, plant: "Esperanza Flowers", subreddit: "r/AmIOverReacting", offspring: 320 },
  { year: 2021, plant: "Esperanza Flowers", subreddit: "r/AmIOverReacting", offspring: 355 },
  { year: 2022, plant: "Esperanza Flowers", subreddit: "r/AmIOverReacting", offspring: 390 },
  { year: 2023, plant: "Esperanza Flowers", subreddit: "r/AmIOverReacting", offspring: 425 },
  { year: 2024, plant: "Esperanza Flowers", subreddit: "r/AmIOverReacting", offspring: 460 },
];


// CHART SETUP

const margin = { top: 40, right: 40, bottom: 40, left: 170 };
const width = 900;
const height = 450;

const svg = d3
  .select("#chart")
  .append("svg")
  .attr("viewBox", [0, 0, width, height]);

const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const g = svg
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// scales
const x = d3.scaleLinear().range([0, innerWidth]);
const y = d3.scaleBand().range([0, innerHeight]).padding(0.2);

// axes
const xAxisGroup = g
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0,${innerHeight})`);

const yAxisGroup = g.append("g").attr("class", "y-axis");

// x-axis label (metaphor)
svg
  .append("text")
  .attr("x", margin.left + innerWidth / 2)
  .attr("y", height - 5)
  .attr("text-anchor", "middle")
  .attr("font-size", 12)
  .text("Number of offspring (subreddit members / digital seedlings)");

// "year" label in the corner
const yearLabel = svg
  .append("text")
  .attr("class", "year-label")
  .attr("x", width - margin.right)
  .attr("y", margin.top)
  .attr("text-anchor", "end")
  .text("");


// DATA PREP

const years = Array.from(new Set(rawData.map((d) => d.year))).sort(
  (a, b) => a - b
);

// Map: sorted data for that year
const dataByYear = new Map();
years.forEach((year) => {
  const yearSlice = rawData
    .filter((d) => d.year === year)
    .sort((a, b) => b.offspring - a.offspring);
  dataByYear.set(year, yearSlice);
});


// UPDATE FUNCTION (one "frame" of the race)

function update(year) {
  const data = dataByYear.get(year);

  x.domain([0, d3.max(data, (d) => d.offspring) || 1]);
  y.domain(data.map((d) => d.plant));

  //BARS 
  const bars = g.selectAll("rect.bar").data(data, (d) => d.plant);

  const barsEnter = bars
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", (d) => y(d.plant))
    .attr("height", y.bandwidth())
    .attr("width", 0);

  barsEnter
    .merge(bars)
    .transition()
    .duration(900)
    .attr("y", (d) => y(d.plant))
    .attr("height", y.bandwidth())
    .attr("width", (d) => x(d.offspring));

  bars
    .exit()
    .transition()
    .duration(500)
    .attr("width", 0)
    .remove();

  // PLANT LABELS (left of bar)
  const labels = g.selectAll("text.bar-label").data(data, (d) => d.plant);

  const labelsEnter = labels
    .enter()
    .append("text")
    .attr("class", "bar-label")
    .attr("x", -10)
    .attr("y", (d) => y(d.plant) + y.bandwidth() / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", "end")
    .text((d) => d.plant);

  labelsEnter
    .merge(labels)
    .transition()
    .duration(900)
    .attr("y", (d) => y(d.plant) + y.bandwidth() / 2)
    .text((d) => d.plant);

  labels.exit().remove();

  //  VALUE LABELS (inside bar)
  const values = g.selectAll("text.value-label").data(data, (d) => d.plant);

  const valuesEnter = values
    .enter()
    .append("text")
    .attr("class", "value-label")
    .attr("x", (d) => x(d.offspring) + 4)
    .attr("y", (d) => y(d.plant) + y.bandwidth() / 2)
    .attr("dy", "0.35em")
    .text((d) => d.offspring);

  valuesEnter
    .merge(values)
    .transition()
    .duration(900)
    .attr("x", (d) =>
      x(d.offspring) + 4
    )
    .attr("y", (d) => y(d.plant) + y.bandwidth() / 2)
    .text((d) => d.offspring);

  values.exit().remove();

  //  AXES 
  const xAxis = d3.axisBottom(x).ticks(5);
  xAxisGroup.transition().duration(900).call(xAxis);

  yAxisGroup.call(d3.axisLeft(y).tickSize(0).tickFormat(""));

  //  YEAR LABEL 
  yearLabel.text(year);
}

// ANIMATE THROUGH YEARS (simple race)

let idx = 0;
update(years[idx]);

setInterval(() => {
  idx = (idx + 1) % years.length;
  update(years[idx]);
}, 1400);
