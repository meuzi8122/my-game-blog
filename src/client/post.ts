import { marked } from "marked";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Post, PostMetaData } from "../type";
import { client } from "./cms";

export class PostClient {

    private static endpoint = "posts";

    private static queries: MicroCMSQueries = {
        fields: "id,title,body,game.id,game.title,tags,revisedAt",
        limit: 100,
        orders: `-revisedAt`
    }

    private static parsePostMetaData(content: any): PostMetaData {
        const date = new Date(content.revisedAt);

        return {
            id: content.id,
            title: content.title,
            game: content.game,
            tags: content.tags,
            revisedAt: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
        }
    }

    private static parsePost(content: any): Post {
        return {
            ...this.parsePostMetaData(content),
            body: marked(content.body).replace(/<hr>/g, "<div></div>")
        }
    }

    static async findLatestPostMetaData(): Promise<PostMetaData[]> {
        return (await client.get({
            endpoint: this.endpoint,
            queries: { ...this.queries, limit: 5 },
        })).contents.map((content: any) => this.parsePostMetaData(content));
    }

    static async findPosts(): Promise<Post[]> {
        return (await client.get({
            endpoint: this.endpoint,
            queries: this.queries,
        })).contents.map((content: any) => this.parsePost(content));
    }

}