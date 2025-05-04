import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton.toLowerCase());
  }

  let tabContent = !selectedTopic ? (
    <p>Please, select a topic.</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => {
              return <CoreConcept key={conceptItem.title} {...conceptItem}/>;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === CORE_CONCEPTS[0].title.toLowerCase()} onSelect={() => handleSelect(CORE_CONCEPTS[0].title)}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === CORE_CONCEPTS[1].title.toLowerCase()} onSelect={() => handleSelect(CORE_CONCEPTS[1].title)}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === CORE_CONCEPTS[2].title.toLowerCase()} onSelect={() => handleSelect(CORE_CONCEPTS[2].title)}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === CORE_CONCEPTS[3].title.toLowerCase()} onSelect={() => handleSelect(CORE_CONCEPTS[3].title)}>
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
