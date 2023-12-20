import type { LayoutLoad } from ".././$types";
import { client } from "../../vendors/utils";

export const load: LayoutLoad = async ({ fetch }) => {
    const query = `
  query Stories {
      stories {
          createdAt
          id
          publishedAt
          title
          subtitle
          route
          updatedAt
      thumbnail {
          id
          url
      }
  }
}`;
    const data = await client({ query, fetch: fetch });

    return {
        stories: data.stories,
    };
};
