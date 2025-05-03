import { useState } from "react";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS } from './data.js';
function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton.description);
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=> handleSelect(CORE_CONCEPTS[0])}>Components</TabButton>
            <TabButton onSelect={()=> handleSelect(CORE_CONCEPTS[1])}>JSX</TabButton>
            <TabButton onSelect={()=> handleSelect(CORE_CONCEPTS[2])}>Props</TabButton>
            <TabButton onSelect={()=> handleSelect(CORE_CONCEPTS[3])}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
