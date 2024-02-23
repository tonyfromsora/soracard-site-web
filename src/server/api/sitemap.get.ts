import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const blogArticles = await serverQueryContent(event).find()

  return blogArticles.map((el) => el._path)
})
