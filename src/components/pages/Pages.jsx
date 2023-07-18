import React from "react"
import Home from "../MainPage/Home"
import FlashDeals from "../flashDeals/FlashDeals"
import TopCate from "../top/TopCarte"
import NewArrivals from "../newarrival/NewArrivals"
import Discount from "../discount/Dcard"
import Shop from "../shop/Shop"
import Annocument from "../annocument/Annocument"
import Wrapper from "../wrapper/Wrapper"

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages