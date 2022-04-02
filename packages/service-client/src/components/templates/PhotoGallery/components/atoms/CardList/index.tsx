import { ComponentProps, VFC } from "react"
import styled from "styled-components"
import { MediaQuery } from "../../../../../../shared/const/MediaQuery"
import { CardRear } from "./components/atoms/CardRear"
import { Card } from "./components/molecules/Card"

type CardInfo = ComponentProps<typeof Card> & ComponentProps<typeof CardRear>

type CardListProps = {
  cards: CardInfo[]
}

export const CardList: VFC<CardListProps> = (props) => {
  const { cards } = props

  return (
    <StyledUl>
      {cards.map((cardInfo) => {
        const { imagePath, ...cardRearProps } = cardInfo

        return (
          <StyledLi key={imagePath}>
            <Card imagePath={imagePath}>
              <CardRear {...cardRearProps} />
            </Card>
          </StyledLi>
        )
      })}
    </StyledUl>
  )
}

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const StyledLi = styled.li`
  ${MediaQuery.Pc} {
    width: 50%;
  }

  ${MediaQuery.Tb} {
    width: 100%;
  }
`
