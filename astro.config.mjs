import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
const env = loadEnv("", process.cwd(), "STORYBLOK");


// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: "storyblok/Page",
      introduction: "storyblok/Introduction",
      about: "storyblok/About",
      experience: "storyblok/Experience",
      singleExperience: "storyblok/SingleExperience",
      project: "storyblok/Project",
      singleProject: "storyblok/SingleProject",
      testimonial: "storyblok/Review",
      review: "storyblok/SingleReview",
      contact: "storyblok/Contact"
    }
  }), tailwind(), react()]
});