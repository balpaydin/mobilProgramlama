import express from "express";
import auth from "./src/services/auth";

const app = express();




app.get("/", (req, res) => {
    res.json({
        message: "welcome",
        password: auth.login("", "123")
    });
});


app.listen(8080, () => {
    console.log("Started *8080");
})
