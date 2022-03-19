import NextHead from "next/head"
import { VFC } from "react"

type CustomHeadProps = {
  title: string
}

export const CustomHead: VFC<CustomHeadProps> = (props) => {
  const { title } = props

  return (
    <NextHead>
      <title>Homepage - {title}</title>
      <meta name="description" content={`${title.toLowerCase()} page`} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        key="viewport"
      />
    </NextHead>
  )
}
