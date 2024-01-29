export const getSearchUrl = (query: string) => {
  return `/search?q=${encodeURIComponent(query)}`
}
