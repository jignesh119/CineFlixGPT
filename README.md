# CineFlixGPT

CineFlixGPT is a Netflix clone website. It features an intuitive movie search through the GPTSearch feature, allowing users to find movies with ease. Firebase authentication ensures secure sign-in and sign-out processes.

## Features

- **GPTSearch:** Search for movies using natural language queries and receive detailed, relevant information.
- **Firebase Authentication:** Secure sign-in and sign-out functionality.
- **Dynamic Browsing:** The `/browse` page displays all available movies, with a continuously playing trailer at the top.
  > currently supports only desktop

## Routes

- **`/browse`**: The homepage where users can view all movies and a featured trailer playing at the top.
- **`/login`**: The sign-in page for user authentication.
- **`/body`**: A placeholder page for testing and development purposes.

## Technologies Used

- **Frontend:** React
- **Backend:** Firebase Authentication
- **APIs:** GROQ API for natural language processing in GPTSearch
- **Database:** Firebase Realtime Database or Firestore (optional)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jignesh119/CineFlixGPT.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CineFlixGPT
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up Firebase:

   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add your Firebase configuration to the project.
   - Enable Firebase Authentication with Email/Password.

5. Run the application:
   ```bash
   npm start
   ```
   or
   ```bash
   npm run dev
   ```

## Usage

- Visit the `/browse` route to explore the movie collection.
- Use GPTSearch to find specific movies by typing natural language queries in the search bar.
- Sign in via `/login` to access personalized features.
- Sign out via signout button in header when done.

## Future Enhancements

- **Video Playback:** Implement full video streaming capabilities.
- **User Profiles:** Allow users to create and manage their profiles.
- **Watchlist:** Add a feature for users to save movies to a watchlist.
