import { CommentInterface } from "./components/comment/comment.model";

export interface CommentStateInterface {
    comments: CommentInterface[],
    postSuccess: boolean,
    postFailure: boolean,
}