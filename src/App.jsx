import { useState } from 'react';
import NoticeArea from './components/NoticeArea';
import FlavorCard from './components/FlavorCard';
import OrderSummary from './components/OrderSummary';
import './App.css';

const PRICE_PER_SCOOP = 5;

export default function App() {
  const [flavors, setFlavors] = useState([
    { id: 1, name: 'Vanilla', isSoldOut: false, scoopsSelected: 0, isFavorite: false },
    { id: 2, name: 'Chocolate', isSoldOut: false, scoopsSelected: 0, isFavorite: false },
    { id: 3, name: 'Strawberry', isSoldOut: true, scoopsSelected: 0, isFavorite: false },
    { id: 4, name: 'Pistachio', isSoldOut: false, scoopsSelected: 0, isFavorite: false },
    { id: 5, name: 'Mango', isSoldOut: false, scoopsSelected: 0, isFavorite: false },
    { id: 6, name: 'Cookies & Cream', isSoldOut: false, scoopsSelected: 0, isFavorite: false },
  ]);

  const [scoopLimit] = useState(5);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const totalScoops = flavors.reduce((sum, flavor) => sum + flavor.scoopsSelected, 0);
  const totalPrice = totalScoops * PRICE_PER_SCOOP;
  const isLimitReached = totalScoops >= scoopLimit;
  const favoritesCount = flavors.filter((flavor) => flavor.isFavorite).length;

  const visibleFlavors = showOnlyAvailable
    ? flavors.filter((flavor) => !flavor.isSoldOut)
    : flavors;

  const handleAddScoop = (id) => {
    if (isLimitReached) return;
    setFlavors((prev) =>
      prev.map((flavor) =>
        flavor.id === id && !flavor.isSoldOut
          ? { ...flavor, scoopsSelected: flavor.scoopsSelected + 1 }
          : flavor
      )
    );
  };

  const handleRemoveScoop = (id) => {
    setFlavors((prev) =>
      prev.map((flavor) =>
        flavor.id === id && flavor.scoopsSelected > 0
          ? { ...flavor, scoopsSelected: flavor.scoopsSelected - 1 }
          : flavor
      )
    );
  };

  const handleClearOrder = () => {
    setFlavors((prev) => prev.map((flavor) => ({ ...flavor, scoopsSelected: 0 })));
  };

  const handleToggleFavorite = (id) => {
    setFlavors((prev) =>
      prev.map((flavor) =>
        flavor.id === id ? { ...flavor, isFavorite: !flavor.isFavorite } : flavor
      )
    );
  };

  return (
    <div className="kiosk-container">
      <header className="kiosk-header">
        <h1>Ice-Cream Kiosk</h1>
        <label className="filter-toggle">
          <input
            type="checkbox"
            checked={showOnlyAvailable}
            onChange={() => setShowOnlyAvailable((prev) => !prev)}
          />
          <span>Show only available</span>
        </label>
      </header>

      <NoticeArea
        isLimitReached={isLimitReached}
        scoopLimit={scoopLimit}
        showNoFlavors={showOnlyAvailable && visibleFlavors.length === 0}
      />

      <main className="flavor-grid">
        {visibleFlavors.map((flavor) => (
          <FlavorCard
            key={flavor.id}
            flavor={flavor}
            isLimitReached={isLimitReached}
            onAdd={handleAddScoop}
            onRemove={handleRemoveScoop}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </main>

      <OrderSummary
        totalScoops={totalScoops}
        scoopLimit={scoopLimit}
        totalPrice={totalPrice}
        favoritesCount={favoritesCount}
        onClear={handleClearOrder}
      />
    </div>
  );
}