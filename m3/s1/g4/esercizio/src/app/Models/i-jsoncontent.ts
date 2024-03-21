import { IPost } from "./i-post"

export interface IJsoncontent {
  posts:IPost[]
  total:number
  skip:number
  limit:number
}
