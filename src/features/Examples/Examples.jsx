import { useState } from "react";
import { EXAMPLES, CORE_CONCEPTS } from "@utils/data.js";
import TabButton from "@features/TabButton/TabButton.jsx";
import Section from "@features/Section/Section.jsx";
import Tabs from "@features/Tabs/Tabs.jsx";

export default function Examples() {
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
    <Section id="examples" title="Examples">
      <Tabs
        buttons={CORE_CONCEPTS.map((item) => {
          return (
            <TabButton
              key={item.title}
              isSelected={selectedTopic === item.title.toLowerCase()}
              onSelect={() => handleSelect(item.title)}
            >
              {item.title}
            </TabButton>
          );
        })}
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
