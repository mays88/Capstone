import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "@/slices/todosSlice";
import Task from "./Task";
import CreateTodoForm from "./CreateTodoForm";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function TodoList() {
    const todos = useSelector(selectTodos);
    // const dispatch = useDispatch();

    // const removeTweet = (tweetId) => {
    //     setTweets(tweets.filter((t) => t._d !== tweetId));
    // };

    // const updateTweet = (tweetId, newTweetContent) => {
    //     setTweets(
    //         tweets.map((t) => {
    //             if (t.id === tweetId && newTweetContent) {
    //                 return {
    //                     ...t,
    //                     content: newTweetContent,
    //                 };
    //             } else return t;
    //         })
    //     );
    // };

    return (
        <>
            <CreateTodoForm />
            {/* {todos &&
                todos.map((item: any) => {
                    return (
                        <Task
                            key={item.id}
                            task={item}
                            // removeTweet={removeTweet}
                            // updateTweet={updateTweet}
                        />
                    );
                })} */}
        </>
    );
}
export default TodoList;
