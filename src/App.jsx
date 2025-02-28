import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

//added props to CoreConcepts component. Since I am familiar with this concept, I destructured them to make more sense visably for myself
//... spread operator will pull all the key value pairs from the core_concepts object array and give the same results as the one above
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
