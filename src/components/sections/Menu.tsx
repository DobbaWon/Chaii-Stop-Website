"use client";

import { useState } from "react";
import MenuCard from "../ui/MenuCard";
import styles from "./Menu.module.css";

type Category =
  | "Breakfast"
  | "Drinks"
  | "Doughnuts"
  | "Street Food"
  | "Desserts";

export default function MenuSection() {
  const menuData: Record<Category, { name: string; description?: string; price: string }[]> = {
    Breakfast: [
      {
        name: "Loaded Barm",
        description: "Fried Egg, Sausage, Golden Hash Brown with Mushrooms and Chillies",
        price: "£4.95",
      },
      {
        name: "Desi Breakfast",
        description: "Desi Omelette, Beans, Sausages, Golden Hash Brown, Spicy Mushrooms, Tomatoes, 2 Paratilas",
        price: "£7.95",
      },
      {
        name: "Full English",
        description: "Fried/Scrambled Egg, Beans, Sausages, Golden Hash Brown, Mushrooms and Tomatoes. Vegetarian option available",
        price: "£7.95",
      },
      {
        name: "Omelette Wrap/Barm",
        description: "Desi Omelette wrapped in a Classic Paratila or folded into a Toasted Bun",
        price: "£3.50",
      },
    ],

    Drinks: [
      // Brewed to its finest
      { name: "Desi Chai", description: "Traditional Indian spiced tea with milk", price: "£1.90" },
      { name: "Desi Coffee", description: "Strong Indian coffee with a rich aroma", price: "£1.90" },

      // Hot Drinks
      { name: "Kashmiri Chai", description: "Pink tea with a subtle nutty flavor and creaminess", price: "£2.20" },
      { name: "Chai Latte", description: "Smooth blend of tea and steamed milk with spices", price: "£2.00" },
      { name: "Caramel Chai", description: "Spiced tea with a hint of caramel sweetness", price: "£2.20" },
      { name: "Vanilla Coffee", description: "Rich coffee with vanilla flavor", price: "£2.20" },
      { name: "Hot Chocolate", description: "Creamy chocolate drink topped with froth", price: "£1.70" },
      { name: "English Tea", description: "Classic black tea served hot", price: "£1.70" },

      // Cold Drinks
      { name: "Mango Lassi", description: "Refreshing yogurt-based mango smoothie", price: "£3.50" },
      { name: "Iced Desi Chai", description: "Chilled spiced tea, perfect for a hot day", price: "£3.00" },
      { name: "Iced Desi Coffee", description: "Cold, strong coffee with milk and a hint of sweetness", price: "£3.00" },
      { name: "Coke / Diet Coke", description: "Classic carbonated soft drink", price: "£2.00" },
      { name: "Appletiser", description: "Sparkling apple juice", price: "£2.00" },
      { name: "J20", description: "Fruit juice drink", price: "£2.00" },
      { name: "Water", description: "Still or sparkling", price: "£1.50" },

      // Custom options
      { name: "Your Tea Your Way", description: "Caramel / Vanilla / Fresh Mint / Fresh Cream (Add 30p)", price: "Add 30p" },
      { name: "Go Large on Hot Drinks", description: "Increase size of hot drinks", price: "Add 70p" },
    ],

    Doughnuts: [
      // Sugar Box
      {
        name: "Sugar Box - 1 Box (4 Doughnuts)",
        description: "Freshly made, sugar coated doughnuts",
        price: "£5.00",
      },
      {
        name: "Sugar Box - 2 Boxes (8 Doughnuts)",
        description: "Freshly made, sugar coated doughnuts",
        price: "£9.00",
      },
      {
        name: "Sugar Box - 3 Boxes (12 Doughnuts)",
        description: "Freshly made, sugar coated doughnuts",
        price: "£12.00",
      },

      // Luxury Box
      {
        name: "Luxury Box - 1 Box (4 Doughnuts)",
        description: "Freshly made with premium toppings",
        price: "£6.00",
      },
      {
        name: "Luxury Box - 2 Boxes (8 Doughnuts)",
        description: "Freshly made with premium toppings",
        price: "£11.00",
      },
      {
        name: "Luxury Box - 3 Boxes (12 Doughnuts)",
        description: "Freshly made with premium toppings",
        price: "£15.00",
      },
    ],


    "Street Food": [
      { name: "Kebab Roll", description: "Spiced meat rolled in soft flatbread", price: "£3.50" },
      { name: "Kebab Bun", description: "Grilled meat served in a toasted bun", price: "£4.00" },
      { name: "Masala Chips", description: "Crispy fries tossed in a tangy Indian spice mix", price: "£3.50" },
      { name: "Masala Chip Bun", description: "Masala fries served in a toasted bun", price: "£4.00" },
      { name: "Samosa Chaat", description: "Crispy samosas with chickpeas, yogurt, and chutney", price: "£4.50" },
      { name: "Pani Puri", description: "Crispy hollow puris filled with spiced water and potato", price: "£4.90" },
      { name: "Chaat", description: "Tangy, sweet, and spicy mix of chickpeas, potatoes, and chutneys", price: "£3.50" },
      { name: "Meat Samosas", description: "Flaky pastry filled with spiced minced meat", price: "£3.00" },
      { name: "Veg Samosas", description: "Crispy pastry filled with spiced vegetables", price: "£3.00" },
      { name: "Chicken Spring Rolls", description: "Crispy rolls filled with spiced chicken", price: "£3.50" },
      { name: "Chips", description: "Classic fried potatoes", price: "£2.00" },
    ],

    Desserts: [
      { name: "Nutella Wrap", description: "Soft wrap filled with rich Nutella spread", price: "£3.00" },
      { name: "Lotus Wrap", description: "Wrap filled with creamy Lotus Biscoff spread", price: "£3.00" },
      {
        name: "Milk Cakes",
        description: "Sweet, soft milk-based cakes with Ferrero Rocher, Pistachio, or Biscoff flavors",
        price: "£5.95",
      },
      {
        name: "Ice Cream",
        description: "Creamy ice cream in Mango, Original, Pistachio, or Vanilla flavors",
        price: "1 Scoop £1.50, 2 Scoops £2.00",
      },
      { name: "Vanilla Wafers", description: "Light and crunchy vanilla-flavored biscuits", price: "£0.99" },
      { name: "Cafe Rusk", description: "Crispy twice-baked bread perfect with tea or coffee", price: "£0.99" },
      { name: "All Butter Shortbread", description: "Rich, buttery shortbread with a melt-in-your-mouth texture", price: "£0.99" },
    ],
  };


  const [activeCategory, setActiveCategory] = useState<Category>("Breakfast");
  const categories = Object.keys(menuData) as Category[];

  return (
    <section className={styles.menuSection}>
      <h1 className={styles.title}>Our Menu</h1>

      <div className={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`${styles.tabButton} ${
              activeCategory === cat ? styles.activeTab : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        className={`${styles.menuList} ${
          activeCategory === "Drinks" ? styles.drinksMenuList : ""
        }`}
      >
        {activeCategory === "Drinks" ? (
          <>
            <div className={styles.drinksColumns}>
              {/* Hot Drinks */}
              <div className={styles.drinksColumn}>
                <h3 className={styles.drinksHeader}>Hot Drinks</h3>
                {menuData.Drinks.filter((d) =>
                  ["Kashmiri Chai","Chai Latte","Caramel Chai","Vanilla Coffee","Hot Chocolate","English Tea"].includes(d.name)
                ).map((item, idx) => (
                  <MenuCard
                    key={idx}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                ))}
              </div>

              {/* Cold Drinks */}
              <div className={styles.drinksColumn}>
                <h3 className={styles.drinksHeader}>Cold Drinks</h3>
                {menuData.Drinks.filter((d) =>
                  ["Mango Lassi","Iced Desi Chai","Iced Desi Coffee","Coke / Diet Coke","Appletiser","J20","Water"].includes(d.name)
                ).map((item, idx) => (
                  <MenuCard
                    key={idx}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                ))}
              </div>
            </div>

            {/* Custom Options / Deals */}
            <div className={styles.drinksDeals}>
              {menuData.Drinks.filter((d) =>
                ["Your Tea Your Way", "Go Large on Hot Drinks"].includes(d.name)
              ).map((item, idx) => (
                <MenuCard
                  key={idx}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          </>
        ) : (
          // All other categories
          menuData[activeCategory].map((item, idx) => (
            <MenuCard
              key={idx}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))
        )}
      </div>

    </section>
  );
}
