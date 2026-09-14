# Dev Stack Builder

Dev Stack Builder is a responsive React website that helps developers explore different technologies and build their own development stack. Users can explore technology options, add technologies to their stack, and remove them when needed.


---

## Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React-Toastify
- JSON
- Vite

---

## Features

### 1. Explore Technologies

Users can explore different technologies and learn basic information about each technology.

The project includes technologies from different categories, such as:

- Frontend
- Backend
- Database
- Language
- Styling
- DevOps
- Tools

The technology information is loaded dynamically from a JSON file instead of being hardcoded inside the React components.

Each technology card contains information such as:

- Technology name
- Category
- Description
- Icon
- Rating
- Difficulty
- Badge

---

### 2. Build Your Own Stack

Users can create their own development stack by adding technologies to the "Your Stack" section.

The selected stack displays:

- Selected technology count
- Technology icon
- Technology name
- Technology category
- Remove button

Users can:

- Add a technology
- Remove a single technology
- Remove all selected technologies
- See the current number of selected technologies

A technology cannot be added more than once.

---

### 3. Duplicate Prevention

The application prevents users from adding the same technology multiple times.

After a technology has been added:

- Its Add to Stack button becomes disabled.
- Trying to add the same technology again shows a warning toast notification.

This keeps the selected technology stack organized and prevents duplicate items.

---

### 4. Toast Notifications

The project uses React-Toastify to provide feedback to users.

Toast notifications are displayed for different stack actions.

When a technology is added successfully, a success toast is shown.

When a duplicate technology is attempted, a warning toast is shown.

When a technology is removed, an information toast is shown.

When all technologies are removed, an information toast is shown.

---

### 5. Responsive Design

The website is fully responsive and works on:

- Mobile devices
- Tablets
- Desktop screens

The technology cards use responsive grid layouts:

- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop

The navigation bar also changes its layout for smaller screens and includes a mobile hamburger menu.

---

### 6. Loading State

The application displays a loading state while the technology data is being fetched from the JSON file.

This gives users visual feedback while the data is loading.

---

### 7. Sticky Responsive Navbar

The website includes a sticky navigation bar.

On desktop, it contains:

- Dev Stack brand/logo
- Home
- Technologies
- Projects
- About
- Contact
- Sign In
- Sign Up

On mobile, the navigation changes to a responsive layout with:

- Hamburger menu
- Centered Dev Stack brand
- Sign In
- Sign Up

---

### 8. Hero Section

The website includes a hero section with:

- Main heading
- Supporting description
- "Explore Technologies" button
- "Learn More" button
- Development stack banner image

The project uses an orange → pink → violet gradient theme in the interface.

---

### 9. Projects and About Sections

The website includes additional sections for:

- Projects
- About Dev Stack

These sections provide additional information and make the website structure more complete.

---

### 10. Responsive Footer

The footer contains:

- Dev Stack brand
- Short description
- GitHub link
- Twitter link
- LinkedIn link
- Product links
- Company links
- Legal links
- Privacy
- Terms
- Copyright information

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML.

JSX is a syntax that allows us to write HTML-like code inside JavaScript.

It is used in React because it makes the user interface easier to write and understand. Instead of creating the UI using only JavaScript functions, JSX allows us to write a structure that looks similar to HTML.

For example:

```jsx
<h1>Hello React</h1>
```

JSX is not directly understood by the browser. It is transformed into JavaScript before the application runs.

JSX makes React components more readable and easier to maintain.

## 2. What is the difference between props and state?

Props and state are both used to manage data in React, but they have different purposes.

Props

Props are used to pass data from a parent component to a child component.

Props are read-only from the child component's point of view.

For example:

<TechnologyCard
  technology={technology}
  onAdd={onAdd}
/>

Here, technology and onAdd are props passed from the parent component to the TechnologyCard component.

State

State is data that is managed inside a React component.

State can change over time. When state changes, React updates the UI.

For example:

const [stack, setStack] = useState([]);

In this project, the selected technologies are stored in state.

Main Difference
Props are used to pass data between components.
State is used to store and manage changing data inside a component.
Props are generally controlled by the parent.
State is managed by the component that owns it.

## 3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to store and update data in a React component.

When the state changes, React re-renders the component and updates the user interface.

I used useState in several places in this project.

In App.jsx

I used useState to manage the selected technology stack.

const [stack, setStack] = useState([]);

Here:

stack contains the selected technologies.
setStack is used to update the stack.
The initial value is an empty array.
In Navbar.jsx

I used useState to control the mobile navigation menu.

const [isMenuOpen, setIsMenuOpen] = useState(false);

This state determines whether the mobile menu is open or closed.

In TechnologySection.jsx

I used useState to store the technology data loaded from the JSON file.

const [technologies, setTechnologies] = useState([]);

I also used useState for the loading state:

const [loading, setLoading] = useState(true);

So, useState is used in this project to manage changing UI and application data.

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook allows us to perform side effects in a React component.

Examples of side effects include:

Fetching data
Working with APIs
Updating external systems
Setting up event listeners
Running code after rendering

In this project, I used useEffect in TechnologySection.jsx to fetch the technology data from the JSON file when the component loads.

Example:

useEffect(() => {
  const loadTechnologies = async () => {
    try {
      const response = await fetch("/data/technologies.json");

      if (!response.ok) {
        throw new Error("Failed to fetch technology data");
      }

      const data = await response.json();
      setTechnologies(data);
    } catch (error) {
      console.error("Technology loading error:", error);
    } finally {
      setLoading(false);
    }
  };

  loadTechnologies();
}, []);

The empty dependency array [] means that this effect runs when the component is mounted.

I needed useEffect because loading data from a JSON file using fetch() is a side effect. It allows the application to load the technology data when the Technology section is rendered.

## 5. Why does every item in a .map() list need a unique key prop?

When React renders a list using .map(), each item needs a unique key prop.

React uses the key to identify each individual item in the list.

This helps React understand:

Which item was added
Which item was removed
Which item was changed
Which item should be updated

In this project, every technology has a unique id.

Therefore, I used the technology ID as the key.

Example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

Here:

key={technology.id}

provides a unique key for each technology.

Using a unique key helps React efficiently update the list.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

In this project, conditional rendering is used in the YourStack.jsx component.

When the selected stack is empty, an empty-state message is displayed.

When the stack contains technologies, the selected technologies are displayed.

Example:

{stack.length === 0 ? (
  <div>
    Your stack is empty.
  </div>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}

Here:

stack.length === 0

checks whether the stack is empty.

If the condition is true, the empty-state message is displayed.

Otherwise, the selected technologies are displayed.

Another example is the loading state in TechnologySection.jsx:

{loading ? (
  <div>
    Loading technologies...
  </div>
) : (
  <div>
    {/* Technology cards */}
  </div>
)}

If loading is true, the loading message is displayed. Otherwise, the technology cards are displayed.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

In React, a parent component can pass data to a child component using props.

A parent component can also pass a function as a prop. The child component can call that function when an event occurs, allowing the child to communicate an action back to the parent.

In this project, App.jsx manages the selected technology stack.

It passes the stack and callback functions to TechnologySection.jsx.

Example:

<TechnologySection
  onAdd={handleAddToStack}
  onRemove={handleRemove}
  onRemoveAll={handleRemoveAll}
  stack={stack}
/>

Here:

stack passes the selected technologies from the parent to the child.
onAdd passes the add function.
onRemove passes the remove function.
onRemoveAll passes the remove-all function.

The TechnologySection component then passes the onAdd function to the TechnologyCard.

Example:

<TechnologyCard
  technology={technology}
  onAdd={onAdd}
/>

When the user clicks the Add to Stack button inside TechnologyCard, the child calls:

onAdd(technology);

This calls the function that was originally defined in the parent component.

The parent then updates the state.

For example:

const handleAddToStack = (technology) => {
  setStack((currentStack) => [
    ...currentStack,
    technology,
  ]);
};

So the basic flow in this project is:

App.jsx
   ↓
passes props
   ↓
TechnologySection.jsx
   ↓
passes props
   ↓
TechnologyCard.jsx
   ↓
calls callback
   ↓
App.jsx
   ↓
updates state

This is how data and actions are passed between parent and child components in this project.

Project Structure
dev-stack-builder/
│
├── public/
│   ├── data/
│   │   └── technologies.json
│   │
│   └── images/
│       └── banner-stack.png
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── TechnologyCard.jsx
│   │   ├── TechnologySection.jsx
│   │   └── YourStack.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
Data Source

The technology information is stored in the following JSON file:

public/data/technologies.json

The application loads the data dynamically using the fetch() API.

The JSON data contains fields such as:

id
name
category
description
icon
rating
difficulty
badge

Example:

{
  "id": 1,
  "name": "React",
  "category": "Frontend",
  "description": "A JavaScript library for building user interfaces.",
  "icon": "https://icon.icepanel.io/Technology/svg/React.svg",
  "rating": 4.8,
  "difficulty": "Intermediate",
  "badge": "Popular"
}

This approach keeps the technology information separate from the UI components and makes the data easier to manage.

Technologies Included

The project currently includes 12 technologies:

React
Vue.js
Svelte
Next.js
Node.js
PostgreSQL
Redis
JavaScript
TypeScript
Java
Tailwind CSS
Docker

These technologies cover different areas such as frontend, backend, database, programming language, styling, and DevOps.

Responsive Layout

The website is designed to work properly on different screen sizes.

Desktop

On desktop screens:

Full navigation menu is displayed.
Technology cards use a three-column grid.
Technology cards and the Your Stack section are displayed side-by-side.
Full footer navigation is displayed.
Tablet

On tablet screens:

Navigation adjusts to the available space.
Technology cards use a two-column grid.
Content remains responsive.
Mobile

On mobile screens:

A hamburger menu is used for navigation.
The Dev Stack brand is centered.
Sign In and Sign Up buttons remain visible.
Technology cards use a single-column layout.
The Your Stack section adjusts to the smaller screen.
Toast Notifications

The project uses the React-Toastify library for toast notifications.

Add Technology

When a user successfully adds a technology:

Technology added to your stack!

A success toast is displayed.

Duplicate Technology

When a user tries to add a technology that is already selected:

Technology is already in your stack.

A warning toast is displayed.

Remove Technology

When a technology is removed:

Technology removed from your stack.

An information toast is displayed.

Remove All Technologies

When all technologies are removed:

All technologies removed from your stack.

An information toast is displayed.

Color Theme

The project uses a consistent:

Orange → Pink → Violet

gradient theme.

The gradient is reused throughout the website to maintain a consistent visual identity.

It is used in areas such as:

Brand elements
Hero heading
Buttons
Section headings
Highlighted UI elements
Git Commits

The project was developed using meaningful Git commits to track the development process.

The project includes more than the required 8 meaningful commits.

Examples of the commits include:

setup React project with Tailwind CSS
add technology JSON data
create responsive navbar
add hero banner section
add technology cards and JSON fetching
add stack selection and removal
add technology search and category filter
fix stack count and add page sections
remove unnecessary technology filters

These commits show the development process and help keep track of different stages of the project.

Installation & Setup
1. Clone the Repository
git clone https://github.com/Saqlaine-Sami/dev-stack-builder.git
2. Go to the Project Directory
cd dev-stack-builder
3. Install Dependencies
npm install
4. Start the Development Server
npm run dev

The application will start on the Vite development server.

The local development URL is:

http://localhost:5173/
Build for Production

To create a production build, run:

npm run build

To preview the production build locally, run:

npm run preview
Development Tools

This project was developed using:

Visual Studio Code
Node.js
npm
Vite
Git
GitHub
Vercel
Author

Developed as a frontend assignment using React.js, JavaScript, Tailwind CSS, JSON, Vite, and React-Toastify.
