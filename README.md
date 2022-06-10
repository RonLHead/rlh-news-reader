![News Reader main page](https://user-images.githubusercontent.com/92322028/172988642-6caa78bf-e5e0-4672-90ba-41cb27ca7445.JPG)

## My News Reader serves as a platform for readers to access a current list of NYT articles. From this app, a reader can view article details, such as the its abstract and byline, and obtain a link to read the full story on the New York Time's website. This news reader also allows readers to filter stories based on subcategory.

### This application was created to submit as a Mod 4 take-home project for Turing School of Software & Design. 
You can see it in action by visiting the [My News Reader](https://rlh-news-reader.surge.sh/) or on your local computer by following the instructions below. <br><br>

### Useful Links!
- [Deployed site](https://rlh-news-reader.surge.sh/)
- [Wireframes on Figma](https://www.figma.com/file/USpu8q4tWvsvmnaCxpUelQ/rlh-news-reader-wireframe?node-id=0%3A1)
- [Project specs](https://mod4.turing.edu/projects/take_home/take_home_fe)
- [New York Times API Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview)

* * *

## Goals

- Simulate a take-home task one mighty receive during an interview process
- Create a news reader application that pulls articles from the [NYT Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview)
- At minimum, the app should show:
  - A list of articles
  - A “detailed” view for each article
  - Articles in the list must link to the detailed article view
  - Filter feature
- Demonstrate a strong understanding of React JS/Front End best practices
- Prioritize project for MVP

## How to Run

1. Clone the repo down to your machine
2. Open the root directory and rum `npm i` to install dependencies
3. Run `npm start` to initialize the webpage
4. Open the site by copying and pasting the server location `http://localhost:3000` in you address bar

* * *

## Development Process

### As a visual learner with an associates in graphic design, I operate best when I can conceptualize how the project would look and operate. My News Reader began life as Figma wireframes to provide direction on how I want to structure my code and app functionality.

ç![My News Reader wireframes](https://user-images.githubusercontent.com/92322028/172990875-48993749-a3c6-4125-8260-f769c5670b51.JPG)

* Please note I originally envisioned a bookmarking feature be included with this project. This was abandoned in order to meet the constraints of the MVP.

### Next came the component tree structure:

## Project Tree
* [App](src/components/App)<br>
--[Nav](src/components/Nav)<br>
--[Stories](src/components/Stories)<br>
  ---[TopStory](src/components/TopStory) ---[SingleStory](src/components/SingleStory) ---[Error](src/components/Error)  ---[GrayLine](src/components/GrayLine)<br>
    -----[TopStoryDetails](src/components/TopStoryDetails)

* * *

## Features

**View Articles List:**
On page load the user will see all the articles in the main New York Times subsection, which they can scroll up and down to view.

![news-reader-articles-list](https://user-images.githubusercontent.com/92322028/172993688-3902befd-2a95-452e-926e-1854a36f6604.gif)

**View Article Details:**
The user can click on an article, and it will route them to a detailed view of the story.

![news-reader-article-details-view](https://user-images.githubusercontent.com/92322028/172994720-b32903d2-445d-4321-b4ae-62f5d59165af.gif)

**Go to NYT Article:**
The user can click on various links to direct themselves to the actual New York Times article.

![news-reader-go-to-nyt](https://user-images.githubusercontent.com/92322028/172995525-b244ac0c-077c-4749-9d74-61612ae5536a.gif)

**Go Back:**
From the article details view, the user can click the Go Back button in the nav bar to route back to the main page.

![news-reader-go-back](https://user-images.githubusercontent.com/92322028/172995058-66d2424c-dd39-4f92-8135-bf94d191c8d5.gif)

**Filter by Subsection:**
The user can use the filter option to display articles based on the various subsections provided by NYT.

![news-reader-filter](https://user-images.githubusercontent.com/92322028/172995824-007c47f3-3a7f-47f3-8608-1a578b902cec.gif)

* * * 

## Technologies Used

- JavaScript
- React.js
- React Hooks
- React Router 6
- HTML
- CSS
- Surge
- V.S. Code


### Future Features

- Ability to bookmark articles
- View bookmarked articles
- Remove bookmarked articles
- Responsive CSS
- End-to-End testing with Cypress

# Contributor
💻 Ron L Head |  [Github](https://github.com/RonLHead)  |  [LinkedIn](https://www.linkedin.com/in/ronlhead/)

