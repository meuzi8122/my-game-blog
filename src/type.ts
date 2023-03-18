export type Article = {
    id: string;
    title: string;
    body: string;
    relations: Article[];
    revisedAt: string;
}