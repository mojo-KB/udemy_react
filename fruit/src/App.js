import foods from './components/foods'
import {choice, remove} from './components/helpers'

let fruit = choice(foods);
console.log(`I'd like one ${fruit}, please`);


console.log(`Here you go: ${fruit}`)

console.log('Delicious! May I have another one?')
let remaining = remove(foods, fruit);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left`)
function App() {
  return (
    <>
    <h1>{`I'd like one ${fruit}, please`}</h1>
    <h1>{`Here you go: ${fruit}`}</h1>
    <h1>{'Delicious! May I have another one?'}</h1>
    <h1>{`I'm sorry, we're all out. We have ${remaining.length} left`}</h1>
    </>
  );
}

export default App;
