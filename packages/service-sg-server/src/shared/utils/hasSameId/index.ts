type HasSameIdMain = (HasSameIdMainArguments: { id: number }) => boolean
type HasSameId = (targetId: number) => HasSameIdMain

export const hasSameId: HasSameId =
  (targetId) =>
  ({ id }) =>
    id === targetId
