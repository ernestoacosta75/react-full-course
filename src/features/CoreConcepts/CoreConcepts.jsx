import CoreConcept from '@features/CoreConcept/CoreConcept.jsx';
import {CORE_CONCEPTS} from '@utils/data.js';
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => {
          return <CoreConcept key={conceptItem.title} {...conceptItem} />;
        })}
      </ul>
    </section>
  );
}