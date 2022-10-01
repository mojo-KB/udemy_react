import NumPicker from "./components/NumPicker";



const getMood = () => {
  const moods = ["Angry", "Hungry", "Silly", "Quiet", "Paraniod"];
  return moods[Math.floor(Math.random() * moods.length)]
}




 function App() {
  return (
    <div>
      <h1>My Current Mood is: {getMood()} </h1>
      <NumPicker />
    </div>
  );
}

export default App;
