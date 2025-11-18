// ---------------------------------------------
// DATA: your plants + their "digital offspring"
// ---------------------------------------------
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
