import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v1",
  token:
    "sk5T9jcrZkIi4rc0zWlqaruKxIEEPC6vDVmvlvWB1dDWkyCTgBN3f9lG2aLzm9pZEY7TT7aCt53E6AdSOlCbRpjaBbkBeLTWgVv6LyWHWlBmkm1sPXboVoknbGKlfC6gi57hrhMbYZR5SDzjQmE5zqwMyUlbo7qwx2ekvZy8gkBmFAtw1fWb",
  useCdn: false,
});
