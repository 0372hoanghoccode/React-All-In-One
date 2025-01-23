const items = ["Apple", "Banana", "Cherry"];

const App = () => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default App;

//example 2
// const Shopping = ({ items }) => {
//   return (
//     <section>
//       <ol>
//         {items.map((item) => (
//           <li key={Math.random() * 5}>{item}</li>
//         ))}
//       </ol>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <section>
//       <Shopping
//         items={["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"]}
//       />
//     </section>
//   );
// };

// export default App;
