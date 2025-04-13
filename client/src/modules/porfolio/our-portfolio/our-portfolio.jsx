import { useEffect, useRef, useState } from "react"
import styles from "./our-portfolio.module.css"
import { getCards } from "./api/get-cards"
import { CARDS_ON_PAGE, CATEGORIES } from "./constants"

import { PortfolioIntro } from "./components/portfolio-intro"
import { PortfolioButton } from "./components/portolio-button"
import { PortfolioCard } from "./components/portfolio-card"
import { LoadMoreBtn } from "./components/load-more-btn/load-more-btn"
import { Loader } from "../../../ui/loader"

export function OurPortfolio() {
  const [cards, setCards] = useState([])
  const [isMainLoading, setIsMainLoading] = useState(true)
  const [isButtonLoading, setIsButtonLoading] = useState(false)
  const [currentCategory, setCurrentCategory] = useState("SEE ALL")
  const [isAllLoaded, setIsAllLoaded] = useState(false)

  const currentCount = useRef(0)

  useEffect(() => {
    async function loadCards() {
      setIsMainLoading(true)
      const tempCards = await getCards(
        currentCategory,
        CARDS_ON_PAGE,
        currentCount
      )
      setIsAllLoaded(tempCards.length < currentCount.current + CARDS_ON_PAGE)
      setIsMainLoading(false)
      setCards(tempCards)
    }

    loadCards()
  }, [currentCategory])

  useEffect(() => {
    async function loadMoreCards() {
      const tempCards = await getCards(
        currentCategory,
        CARDS_ON_PAGE + currentCount.current,
        currentCount.current
      )
      setIsAllLoaded(tempCards.length < currentCount.current + CARDS_ON_PAGE)
      setIsButtonLoading(false)

      setCards((prev) => [...prev, ...tempCards])
    }

    if (isButtonLoading) {
      loadMoreCards()
    }
  }, [isButtonLoading, currentCategory])

  function handleLoadMoreClick() {
    setIsButtonLoading(true)
    currentCount.current += CARDS_ON_PAGE
  }

  function handleCategoryBtnClick(category) {
    setCurrentCategory(category)
    currentCount.current = 0
  }

  return (
    <div className={styles.prtfolioContainer}>
      <PortfolioIntro />
      <div className={styles.categoryButtons}>
        {CATEGORIES.map((category) => {
          return (
            <PortfolioButton
              onClick={() => handleCategoryBtnClick(category)}
              title={category}
              isActive={category === currentCategory}
            />
          )
        })}
      </div>
      {isMainLoading ? (
        <Loader size='medium' />
      ) : (
        <div className={styles.cardsContainer}>
          {cards.map((card) => {
            return <PortfolioCard img={card.img} />
          })}
        </div>
      )}
      {!isAllLoaded && (
        <LoadMoreBtn
          onClick={handleLoadMoreClick}
          isLoading={isButtonLoading}
        />
      )}
    </div>
  )
}
