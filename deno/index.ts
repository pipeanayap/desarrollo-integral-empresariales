import { bold, red, green, yellow, blue } from "https://deno.land/std@0.204.0/fmt/colors.ts";
import express from "npm:express@4.18.2";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome to the Dinosaur API!");
// });

interface Person1{
    name: string;
    age: number;
  }
  
  function greet1(person: Person1): string {
    return "Hello, " + person.name + "!";
  }
  
  const alice1: Person1 = {
    name: "Alice",
    age: 36
  };
  
  console.log(bold(blue(greet1(alice1))));

app.listen(8000);