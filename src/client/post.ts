import type { Post } from "../type";
import { client } from "./cms";
import { marked } from "marked";

export class PostClient {
    
    private static endpoint = "posts";

    private static parsePost(content: any): Post {
        const date = new Date(content.revisedAt);

        return {
            id: content.id,
            title: content.title,
            body: marked(content.body),
            game: content.game,
            tags: content.tags,
            revisedAt: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
        }
    }

    static async findPosts(): Promise<Post[]> {
        return (await client.get({
            endpoint: this.endpoint,
            queries: {
                fields: "id,title,body,game.id,game.title,tags,revisedAt",
                limit: 100,
            }
        })).contents.map((content: any) => this.parsePost(content));
    }

}