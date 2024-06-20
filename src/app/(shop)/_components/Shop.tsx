import styles from "./componentStyles.module.css";

const items = [
    {
        id: 1,
        name: "T-Shirt",
        description: "T-Shirt made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 2,
        name: "T-Shirt",
        description: "T-Shirt made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 3,
        name: "T-Shirt",
        description: "T-Shirt made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 4,
        name: "T-Shirt",
        description: "T-Shirt made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 5,
        name: "T-Shirt",
        description: "T-Shirt made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 6,
        name: "T-Shirt",
        description: "T-Shirt made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 7,
        name: "T-Shirt",
        description: "T-Shirt made of clouds from Olympus, approved by Zues.",
    },
];

function Shop() {
    return (
        <>
            <div className={styles.itemContainer}>
                {items.map((item) => {
                    return (
                        <div key={item.id} className={styles.item}>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default Shop;
