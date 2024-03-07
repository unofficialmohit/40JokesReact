import React from "react";
import ReactDOM from "react-dom/client";
import Joke from "./Joke.jsx";
import './styles.css';
export default function App(){

    const questionJokes= [
        {question: "I got my daughter a fridge for her birthday", punchline: "I can't wait to see her face light up when she opens it."},
        {question:" How did the hacker escape the police?", punchline: "He just ransomware!"},
        {question: "Why don't pirates travel on mountain roads?", punchline:" Scurvy."},
        {question: "Why do bees stay in the hive in the winter?", punchline: "Swarm."},
        {question: "What's the best thing about Switzerland?", punchline: "I don't know, but the flag is a big plus!"},
        {question: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!"},
        {question: "What did the big flower say to the little flower?", punchline: "What’s up, bud?"},
        {question: "Why did the bicycle fall over?", punchline: "Because it was two-tired!"},
        {question: "Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one!"},
        {question: "Why don't skeletons fight each other?", punchline: "They don't have the guts."},
        {question: "What did one hat say to the other?", punchline: "You stay here, I'll go on ahead!"},
        {question: "Why was the math book sad?", punchline: "Because it had too many problems."},
        {question: "Why don't scientists trust atoms?", punchline: "Because they make up everything!"},
        {question: "What did one wall say to the other wall?", punchline: "I'll meet you at the corner!"},
        {question: "Why did the tomato turn red?", punchline: "Because it saw the salad dressing!"},
        {question: "What do you call fake spaghetti?", punchline: "An impasta!"},
        {question: "Why did the coffee file a police report?", punchline: "It got mugged."},
        {question: "Why did the man put his money in the blender?", punchline: "He wanted to make liquid assets."},
        {question: "Why did the music teacher go to jail?", punchline: "Because she got caught dealing scales!"},
        {question: "What do you call an alligator in a vest?", punchline: "An investigator!"},
    ];
    const nonQuestionJokes = [
        { punchline: "I'm reading a book on anti-gravity. It's impossible to put down!" },
        { punchline: "Why don't scientists trust atoms? Because they make up everything!" },
        { punchline: "Parallel lines have so much in common. It’s a shame they’ll never meet." },
        { punchline: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
        { punchline: "I'm reading a horror book in Braille. Something bad is about to happen... I can feel it." },
        { punchline: "I'm on a whiskey diet. I've lost three days already." },
        { punchline: "Why don’t skeletons fight each other? They don’t have the guts." },
        { punchline: "I told my computer I needed a break, and now it won’t stop sending me vacation ads." },
        { punchline: "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you...'" },
        { punchline: "I used to play piano by ear, but now I use my hands." },
        { punchline: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
        { punchline: "I told my wife she should embrace her mistakes. She gave me a hug." },
        { punchline: "I told my wife she should embrace her mistakes. She gave me a hug." },
        { punchline: "Why did the tomato turn red? Because it saw the salad dressing!" },
        { punchline: "I used to be a baker, but I couldn't make enough dough." },
        { punchline: "Why did the bicycle fall over? Because it was two-tired!" },
        { punchline: "I'm trying to organize a hide and seek tournament, but good players are really hard to find." },
        { punchline: "Why don't scientists trust atoms? Because they make up everything!" },
        { punchline: "I don't trust stairs. They're always up to something." },
        { punchline: "I'd tell you a joke about construction, but I'm still working on it." }
    ];

return(
<div className="main">
{questionJokes.map((joke,index)=>(
        
<Joke number={index+1} 
      question={joke.question} 
      punchline={joke.punchline}
      />

))}

{nonQuestionJokes.map((joke,index)=>(
<Joke number={questionJokes.length+index+1} punchline={joke.punchline}/>
))}

</div>
);
    
}

