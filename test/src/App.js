import NumPicker from "./components/NumPicker";
import SlotMachine from "./components/SlotMachine";
import DisplayList from "./components/DisplayList";



 function App() {
  return (
    <div>
      <NumPicker />
      <SlotMachine 
      s1='🍓'
      s2='🍓'
      s3='🍓'/>

      <SlotMachine 
      s1='🍓'
      s2='🍑'
      s3='🍑'/>

      <SlotMachine 
      s1='🍓'
      s2='🍇'
      s3='🍓'/>


      <DisplayList 
        name="Elton"
        hobbies={['Piano', 'Singing', 'Dancing']}
      />

      <DisplayList 
        name="Kevin"
        hobbies={['Gaming', 'Netflix', 'Hiking']}
      />


    </div>
  );
}

export default App;
