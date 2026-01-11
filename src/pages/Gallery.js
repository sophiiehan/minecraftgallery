/**
 * Gallery - Displays a grid of Capsule components.
 *
 * Structure:
 *   - 3-column responsive grid layout
 *   - Reads capsule data from src/data/capsules.json
 *   - Renders a Capsule for each entry
 *   - Clicking a capsule expands it horizontally (spans 2 columns)
 */
import { useState } from 'react';
import Capsule from '../components/Capsule';
import capsulesData from '../data/capsules.json';

function Gallery() {
  const [expandedId, setExpandedId] = useState(null);

  const handleClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Reorder capsules so expanded one is at the start of its row
  const getOrderedCapsules = () => {
    if (expandedId === null) return capsulesData;

    const expandedIndex = capsulesData.findIndex((c) => c.id === expandedId);
    if (expandedIndex === -1) return capsulesData;

    const columnsPerRow = 3;
    const rowStart = Math.floor(expandedIndex / columnsPerRow) * columnsPerRow;

    // Items before the row (preserved)
    const beforeRow = capsulesData.slice(0, rowStart);
    // The expanded item
    const expandedItem = capsulesData[expandedIndex];
    // Items in the same row before the expanded item
    const sameRowBefore = capsulesData.slice(rowStart, expandedIndex);
    // Items after the expanded item
    const afterExpanded = capsulesData.slice(expandedIndex + 1);

    return [...beforeRow, expandedItem, ...sameRowBefore, ...afterExpanded];
  };

  const orderedCapsules = getOrderedCapsules();

  return (
    <section className="px-8 py-12">
      <div className="grid grid-cols-3 gap-12 items-start">
        {orderedCapsules.map((capsule) => (
          <div
            key={capsule.id}
            className={`transition-all duration-300 ${
              expandedId === capsule.id ? 'col-span-3' : 'col-span-1'
            }`}
          >
            <Capsule
              images={capsule.images.map(img => require(`../assets/galleryImages/${img}`))}
              title={capsule.title}
              date={capsule.date}
              description={capsule.description}
              expanded={expandedId === capsule.id}
              onClick={() => handleClick(capsule.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
