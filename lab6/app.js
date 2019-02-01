const express = require("express");
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.json("This is the home page")
})

router.get('/about', async (req, res) => {
  try {
    const about = {
      "name": "Yiming_Xu",
      "cwid": "10438422",
      "biography": "My name is Yiming Xu.\nI come from China",
      "favoriteShows": [
          "NBA",
          "CBA",
          "NCAA"
          
      ],
      "hobbies": [
          "LOL",
          "Reading",
          "Basketball"
      ]
    } 
    res.json(about);
  } catch (e) {
    res.status(404).json({ message: "not found!" });
  }
});

router.get('/story', async (req, res) => {
  try {
    const story = {
      "storyTitle": "A basketball game",
    "story": "Basketball is the most important hobby in my life. \nI love it since I was young.\nAbout 10 years old."
    }
    res.json(story);
  } catch (e) {
    res.status(404).json({ message: "not found!" });
  }
});

router.get('/education',async (req, res) => {
  try {
    const education = {
      "schoolName1": "SIT", 
      "degree1": "Master of Degree",
      "favoriteClass1": "Web Programming",
      "favoriteMemory1": "I have learned how to use app get.", 
      "schoolName2": "NYIT", 
      "degree2": "Bachelor",
      "favoriteClass2": "Data Mining",
      "favoriteMemory2": "I have learned how to use K-means.",
      "schoolName3": "NJUPT", 
      "degree3": "Bachelor",
      "favoriteClass3": "Information Retrival",
      "favoriteMemory3": "I have learned how to evaluate the research efficiency."
    }
    res.json(education);
  } catch (e) {
    res.status(404).json({ message: "not found!" });
  }
});

router.get("*", (req, res) => {
  res.json("Page not found");
})
app.use("/", router);


app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
  });