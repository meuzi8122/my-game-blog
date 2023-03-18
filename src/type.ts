export type Post = {
    id: string;
    title: string;
    body: string;
    game: Game;
    tags: string[];
    revisedAt: string;
}

export type Game = {
    id: string;
    title: string;
}