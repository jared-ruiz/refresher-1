import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

//array of descriptors to dynamically load
const reactDesciptions = ["Fundamental", "Crucial", "Core"];

//math function to get a random into from the 3 items in the reactDescriptions array
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  //took logic out of curly brackets and placed it above to lean out the jsx
  const description = reactDesciptions[genRandomInt(2)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function CoreConcept({image, title, description}) {
  return(
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

//added props to CoreConcepts component. Since I am familiar with this concept, I destructured them to make more sense visably for myself
//... spread operator will pull all the key value pairs from the core_concepts object array and give the same results as the one above
function App() {

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
              
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />

          </ul>

        </section>
      </main>
    </div>
  );
}

export default App;
