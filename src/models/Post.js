export default class Post {
    constructor({id, title, body, userId}) {
        this.id = id
        this.title = title
        this.body = body
        this.authorId = userId
    }
}