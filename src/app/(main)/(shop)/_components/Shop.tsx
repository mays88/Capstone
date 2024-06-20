import styles from "./componentStyles.module.css";

const items = [
    {
        id: 1,
        name: "T-Shirt",
        description: "T-Shirt made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 2,
        name: "Pants",
        description: "Pants made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 3,
        name: "Shoes",
        description: "Shoes made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 4,
        name: "Belt",
        description: "Belt made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 5,
        name: "Socks",
        description: "Socks made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 6,
        name: "Glasses",
        description: "Glasses made of clouds from Olympus, approved by Zues.",
    },
    {
        id: 7,
        name: "Hat",
        description: "Hat made of clouds from Olympus, approved by Zues.",
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
