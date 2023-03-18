import type { Article } from "../type";
import { client } from "./cms";
import { marked } from "marked";

export class ArticleClient {
    
    private static endpoint = "articles";

    private static parseArticle(content: any): Article {
        const date = new Date(content.revisedAt);

        return {
            id: content.id,
            title: content.title,
            body: marked(content.body),
            relations: content.relations,
            revisedAt: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        }
    }

    static async findArticles(): Promise<Article[]> {
        return (await client.get({
            endpoint: this.endpoint,
            queries: {
                fields: "id,title,body,relations.id,relations.title,revisedAt",
                limit: 100,
            }
        })).contents.map((content: any) => this.parseArticle(content));
    }

}