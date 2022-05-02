export interface CommentInterface {
    createdAt: number,
    name: string,
    value: string,
    id?: string,
    parentId: number,
}