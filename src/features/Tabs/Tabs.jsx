export default function Tabs({ children }) {
  return;
  <>
    <menu>
      <TabButton
        isSelected={selectedTopic === CORE_CONCEPTS[0].title.toLowerCase()}
        onSelect={() => handleSelect(CORE_CONCEPTS[0].title)}>
        Components
      </TabButton>
      
      <TabButton
        isSelected={selectedTopic === CORE_CONCEPTS[1].title.toLowerCase()}
        onSelect={() => handleSelect(CORE_CONCEPTS[1].title)}>
        JSX
      </TabButton>

      <TabButton
        isSelected={selectedTopic === CORE_CONCEPTS[2].title.toLowerCase()}
        onSelect={() => handleSelect(CORE_CONCEPTS[2].title)}>
        Props
      </TabButton>

      <TabButton
        isSelected={selectedTopic === CORE_CONCEPTS[3].title.toLowerCase()}
        onSelect={() => handleSelect(CORE_CONCEPTS[3].title)}>
        State
      </TabButton>
    </menu>
    {children}
  </>;
}
