import { PORTFOLIO_CARDS } from "../constants"

export async function getCards(category, count, startCount = 0) {
  return new Promise((resolve) => {
    let tempCards = []
    category = {
      "SEE ALL": "all",
      BUSINESS: "business",
      TECHNOLOGY: "technology",
      "UI/UX DESIGN": "uxuidesign",
      "WEB DESIGN": "webdesign",
      DEVELOPMENT: "development",
    }[category]

    if (category === "all") {
      tempCards = [...PORTFOLIO_CARDS]
    } else {
      tempCards = [...PORTFOLIO_CARDS].filter((card) => card.type === category)
    }

    setTimeout(() => {
      resolve(tempCards.slice(startCount, count))
    }, 1000)
  })
}
