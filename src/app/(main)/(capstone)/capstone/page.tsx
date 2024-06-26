import Link from "next/link";
import styles from "./capstone.module.css";

export default function Capstone() {
    return (
        <div className={styles.capstoneContainer}>
            <h1>Requirements</h1>
            <h2>(20%) Project Structure, Standardization, and Convention</h2>
            <h3>
                Project is organized into appropriate files and directories,
                following best practices.
            </h3>
            <p>Project is organized in a structured way. </p>
            <h3>Project contains an appropriate level of comments.</h3>
            <p>
                Most aspects of the project contain names that describes the
                data, comments will be placed where needed
            </p>
            <h3>
                Project is pushed to GitHub, and contains a README file that
                documents the project, including an overall description of the
                project.
            </h3>
            <p>
                Updated README with a description of the project as well as
                links to my deployments.
            </p>
            <h3>
                Standard naming conventions are used throughout the project.
            </h3>
            <p>
                I believe that the naming conventions are standard and ordered
                in an understandable way.
            </p>
            <h3>
                Ensure that the program runs without errors (comment out things
                that do not work, and explain your blockers - you can still
                receive partial credit).
            </h3>
            <h3>
                Level of effort displayed in creativity, presentation, and user
                experience.
            </h3>
            <p>
                This project was well planned and thought out, As I build, I
                learn to do things in more efficient ways
            </p>
            <h2>(12%) Core JavaScript</h2>
            <h3>Demonstrate proper usage of ES6 syntax and tools.</h3>
            <p>
                My ability to construct the current site displays that I have an
                understanding of the proper usuage of ES6 syntax and tools.
            </p>
            <h3>Use functions and classes to adhere to the DRY principle.</h3>
            <p>
                Everywhere that I noticed, I created separate components or
                functions to extract code to prevent from repeating myself.
            </p>
            <h3>Use Promises and async/await, where appropriate.</h3>
            <p>I used async/await during fetching of data from my api.</p>
            <h3>Use Axios or fetch to retrieve data from an API.</h3>
            <p>I used Axioss during fetching of data from my api</p>
            <h3>Use sound programming logic throughout the application.</h3>
            <p>
                Considering my code organization and structure, I believe that I
                am using sound programming logic
            </p>
            <h3>Use appropriate exception handling.</h3>
            <p>
                In order to handle exceptions, I used conditionals and try/catch
                to handle exceptions
            </p>
            <h2>(9%) Database</h2>
            <h3>Use MongoDB to create a database for your application.</h3>
            <p>Used MongoDB to create the Capstone database for my project</p>
            <h3>Apply appropriate indexes to your database collections.</h3>
            <p>Added UserID Index to TodoSchema</p>
            <h3>
                Create reasonable schemas for your data by following data
                modeling best practices.
            </h3>
            <p>
                Created Mongoose schemas to support CRUD operations from my
                backend
            </p>
            <h2>(19%) Server</h2>
            <h3>
                Create a RESTful API using Node and Express. * For the purposes
                of this project, you may forgo the HATEOAS aspect of REST APIs.
            </h3>
            <p>RESTful API was created using Node and Express</p>
            <h3>Include API routes for all four CRUD operations.</h3>
            <p>
                Using my API, I am using all four CRUD operations to
                Create/Read/Update/Delete Todos
            </p>
            <h3>
                Utilize the native MongoDB driver or Mongoose to interface with
                your database.
            </h3>
            <p>Using mongoose driver to connect API to database</p>
            <h3>
                Include at least one form of user authentication/authorization
                within the application.
            </h3>
            <p>User Authentication is setup using Supabase and PostgreSQL</p>
            <h2>(35%) Front-End Development</h2>
            <h3>Use React to create the application’s front-end.</h3>
            <p>
                My frontend is constructed with Next JS which is a React
                Framework
            </p>
            <h3>Use CSS to style the application.</h3>
            <p>I am using CSS modules to style application</p>
            <h3>
                Create at least four different views or pages for the
                application.
            </h3>
            <p>
                I have created the Home, Dashboard, Signin/Signup, Shop, About,
                and Capstone Pages
            </p>
            <h3>
                Create some form of navigation that is included across the
                application’s pages, utilizing React Router for page rendering.
            </h3>
            <p>
                The home page contains a Navbar and the Dashboard contains a
                sidebar, responsible for routing.
            </p>
            <h3>Use React Hooks or Redux for application state management.</h3>
            <p>I am using both React Hooks and Redux to Manage State</p>
            <h3>
                Interface directly with the server and API that you created.
            </h3>
            <p>
                I am connected directly to my API, deploying from Digital Ocean
                App Platform
            </p>
            <h2>(5%) Presentation</h2>
            <h3>Create a short overview of your application.</h3>

            <p>
                Todo List that will be a feature within the Life and Family
                management app with a Node Express Api. The web framework will
                be managed with the MERN stack combined with Next JS, TypeScript
                and Supabase.
            </p>

            <h3>Highlight the use cases of your application.</h3>
            <p>
                The Todo List serves to provide a layer of organization in the
                grand scheme of the overall Management App.
            </p>
            <h3>
                Highlight the technical functionality of the application, from a
                high-level perspective.
            </h3>
            <p>
                As thoughts of scaling comes into mind, I use scalable tools
                such as redux to help manage state, maybe I would opt to use
                Docker and Kubernetes if I decided I needed a containerized
                infrastructure, which is something I am considering.
            </p>
            <h3>
                Discuss what you have learned through the development of the
                application.
            </h3>
            <p>
                While developing this application, I became better with
                typescript all around and picking up Redux, getting it to work
                most of the time, has expanded my imagination on what I can
                create. Working in the Backend with Express, has made me
                realized that I love full-stack and shouldn’t limit myself to
                Frontend development.
            </p>
            <h3>
                Discuss additional features that could be added to the
                application in the future.
            </h3>
            <p>
                Some Additional Features that I will be adding to the app will
                be more Life and Family management tools, As well as an
                Ecommerce platform. For the overall System, I envision it to be
                an overall ecosystem for content creators, developers, business
                minds, and entrepreneurs.
            </p>
            <h2>(5%) Extra Credit</h2>
            <h3>
                Adhere to Agile principles and the Scrum framework. Perform
                stand-up sessions (with an instructor) when possible.
            </h3>

            <h3>
                Successfully track your project using a software similar to
                Jira.
            </h3>
            <p>
                Started tracking project with Trello, However, I already started
                tracking in Word. I continued to use my word document.
            </p>
            <Link href="https://drive.google.com/file/d/1XISnsQaZjugld2yeMUSntm4RnlTYfTq4/view?usp=sharing">
                PDF Form of Tracking and Planning
            </Link>
            <h3>Build your application primarily with TypeScript.</h3>
            <p>
                I built my frontend with TypeScript, ran out of time but will be
                converting the backend very soon.
            </p>
        </div>
    );
}
