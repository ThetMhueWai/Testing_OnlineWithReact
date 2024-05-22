import ExItem from "./components/ExItem";
function App() {
    const exp = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14)
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12)
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 18)
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12)
        },
    ]
    return (
        <div>
            <h2>Let's get started!</h2>
            <ExItem title={exp[0].title} amount={exp[0].amount} date={exp[0].date}></ExItem>
            <ExItem title={exp[1].title} amount={exp[1].amount} date={exp[1].date}></ExItem>
            <ExItem title={exp[2].title} amount={exp[2].amount} date={exp[2].date}></ExItem>
            <ExItem title={exp[3].title} amount={exp[3].amount} date={exp[3].date}></ExItem>
        </div>
  );
}

export default App;
