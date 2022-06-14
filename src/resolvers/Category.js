
const Category = {
  products: (parent, { filter }, { db }) => {
    const categoryProduct = db.products.filter(product => product.categoryId === parent.id)
    let categoryFilteredProduct = categoryProduct
    if (filter) {
      const { onSale, avgRating } = filter
      if (onSale === true) {
        categoryFilteredProduct = categoryFilteredProduct.filter(product => product.onSale === true)
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        categoryFilteredProduct = categoryFilteredProduct.filter(product => {
          let sumRating = 0
          let numReview = 0
          db.reviews.forEach(review => {
            if (review.productId === product.id) {
              sumRating += review.rating
              numReview += 1
            }
          });
          const avgProductRating = sumRating / numReview
          return avgProductRating >= avgRating
        })
      }
    }
    return categoryFilteredProduct
  }
}
export { Category }