import xml2js from "xml2js";
import _get from "lodash/get";

import { Maybe } from "~/utils";

export interface IBlogPost {
  id?: Maybe<string>;
  title?: Maybe<string>;
  author?: Maybe<string>;
  href?: Maybe<string>;
  category?: Maybe<string>;
  date?: Maybe<string>;
  image?: Maybe<string>;
  description?: Maybe<string>;
  content?: Maybe<string>;
}

const parseResponse = async (text: string, limit?: number): Promise<IBlogPost[]> => {
  try {
    const xmlResult = await xml2js.parseStringPromise(text);
    const items = _get(xmlResult, "rss.channel[0].item") as unknown[];

    const result = items?.map((item) => {
      const id = _get(item, "guid[0]._", "");
      const title = _get(item, "title[0]", "");
      const author = _get(item, "dc:creator[0]", "");
      const href = _get(item, "link[0]", "");
      const category = _get(item, "category[0]", "");
      const date = _get(item, "pubDate[0]", "");
      const description = _get(item, "description[0]", "");
      const content = _get(item, "content:encoded[0]", "");
      const image = _get(item, "featured_image[0]", "");
      // Replace small image size
      let validImage = image.replace(/(\-300x157)|(\-300x200)/, "");

      return {
        id,
        title,
        author,
        href,
        category,
        date,
        image: validImage,
        description,
        content,
      };
    });

    if (limit) {
      return result?.slice(0, limit);
    }

    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/";

export class BlogPostApi {
  static async list(params: { limit?: number }) {
    const { limit } = params;

    const response = await fetch(`${API_URL}blog/feed/`, {
      next: {
        revalidate: 60 * 5,
      },
      headers: {
        "Content-Type": "text/xml",
      },
    });

    if (response.ok) {
      const responseText = await response.text();
      const result = await parseResponse(responseText, limit);

      return result;
    }

    return [] as IBlogPost[];
  }
}
