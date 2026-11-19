# Ice-Cream Kiosk

A single-page React application simulating an ice-cream kiosk. Users can browse flavors, build an order within a scoop limit, filter out sold-out flavors, mark favorites, and place orders that update flavor inventory in real time.

## Features

- **Flavor Grid:** Renders ice-cream flavor cards dynamically from state using `.map()`.
- **Scoop Controls (`+` / `–`):** Add or remove scoops per flavor with automatic button disabling when a flavor is sold out, out of stock, or the order limit is reached.
- **Inventory & Ordering:** Each flavor tracks `availableScoops`. Clicking **Place Order** deducts purchased scoops from stock, automatically marks depleted flavors as **Sold Out**, and resets the cart for the next customer.
- **Availability Filter:** Toggle **Show only available** to hide sold-out flavors.
- **Conditional Notices:** Displays contextual alerts for:
  - Reaching the order scoop limit (default: `5` scoops).
  - Having no visible flavors when the filter is active and all flavors are sold out.
  - An empty order note in the summary when `0` scoops are selected.
- **Order Summary:** Always-visible footer showing total scoops, total price (`$5` per scoop), favorites count, **Place Order**, and **Clear Order**.
- **Favorites:** Star toggle (`★` / `☆`) on each flavor card with a live count in the summary.

## Project Structure

```text
Ice-Cream-Kiosk/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx                   # Core state (useState), derived values, and handlers
    ├── App.css                   # Layout, card, button, and notice styling
    └── components/
        ├── NoticeArea.jsx        # Conditional warning and info banners
        ├── FlavorCard.jsx        # Individual flavor card with stock, favorite, and +/- controls
        └── OrderSummary.jsx      # Totals, favorites count, Place Order, and Clear Order actions