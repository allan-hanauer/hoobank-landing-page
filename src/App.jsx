import styles from "./style.js";
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden h-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar</div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
          Business
          Billing
          CarDeal
          Testimonials
          Clients
          CTA
          Footer
          </div>
      </div>
    </div>
  );
}

export default App;
