export type PostMetaData = {
    id: string;
    title: string;
    game: Game;
    tags: string[];
    revisedAt: string;
}

export type Post = PostMetaData & {
    body: string;
}

export type Game = {
    id: string;
    title: string;
}