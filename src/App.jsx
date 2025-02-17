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
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
