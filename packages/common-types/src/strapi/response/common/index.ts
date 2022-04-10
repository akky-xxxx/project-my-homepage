export type Dates = Record<"createdAt" | "publishedAt" | "updatedAt", string>

export type StrapiItem<T> = {
  id: number
  attributes: T
}

type Pagination = {
  page: number
  pageCount: number
  pageSize: number
  total: number
}

type Meta = {
  pagination: Pagination
}

export type StrapiResponse<T> = {
  data: T
  meta: Meta
}
