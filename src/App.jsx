import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

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

function CoreConcept({title, description, image}) {
  return(
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

//added props to CoreConcepts component. Since I am familiar with this concept, I destructured them to make more sense visably for myself
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title="Components" 
              description="The core UI Building Block."
              image={componentsImg}/>
            <CoreConcept title="Props"/>
            <CoreConcept />
            <CoreConcept />
          </ul>

        </section>
      </main>
    </div>
  );
}

export default App;
