export const headerImg =
  "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png";
export const loginBgImg =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg";

const tmdbAccessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmY4MGIwZDhhYzk1NDY0MTRhYjNhODkzZjMzYzk3ZCIsInN1YiI6IjY2MWExYmJkOTc2YTIzMDE3YjI5NDlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pZ6vDaSYdUCbF5GdT00ucFwATQSxW7hAaVuJfIjyTY0";
const tmdbApiKey = "c2f80b0d8ac9546414ab3a893f33c97d";

export const tmdbApiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmY4MGIwZDhhYzk1NDY0MTRhYjNhODkzZjMzYzk3ZCIsInN1YiI6IjY2MWExYmJkOTc2YTIzMDE3YjI5NDlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pZ6vDaSYdUCbF5GdT00ucFwATQSxW7hAaVuJfIjyTY0",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", language: "English" },
  { identifier: "hindi", language: "Hindi" },
  { identifier: "spanish", language: "Spanish" },
  { identifier: "telugu", language: "Telugu" },
];
