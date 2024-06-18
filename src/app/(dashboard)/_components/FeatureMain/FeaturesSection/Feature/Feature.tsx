import TodoList from "./Features/TodoList/TodoList";

type FeatureProps = {
    feature: string;
};

function Feature({ feature }: FeatureProps) {
    switch (feature) {
        case "TodoList":
            return (
                <>
                    <TodoList />
                </>
            );

        case "Calendar":
            return <div>{feature + " Welcome to the Feature component"}</div>;

        case "MealPrep":
            return <div>{feature + " Welcome to the Feature component"}</div>;

        case "Workout":
            return <div>{feature + " Welcome to the Feature component"}</div>;

        case "Grocery":
            return <div>{feature + " Welcome to the Feature component"}</div>;

        case "Chores":
            return <div>{feature + " Welcome to the Feature component"}</div>;

        case "Allowance":
            return <div>{feature + " Welcome to the Feature component"}</div>;
        case "Budget":
            return <div>{feature + " Welcome to the Feature component"}</div>;
        case "Reminders":
            return <div>{feature + " Welcome to the Feature component"}</div>;
        case "Message/Linkup/Chat":
            return <div>{feature + " Welcome to the Feature component"}</div>;

        default:
            break;
    }
}
export default Feature;
