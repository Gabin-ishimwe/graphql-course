
const Query = {
  hello: () => {
    return "Hello world!!!"
  },
  products: (parents, { filter }, { db }) => {
    let filteredProducts = db.products
    if (filter) {
      const { onSale, avgRating } = filter
      if (onSale === true) {
        filteredProducts = filteredProducts.filter(product => product.onSale === true)
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter(product => {
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
    return filteredProducts
  },
  product: (parent, args, { db }) => {
    return db.products.find(product => product.id === args.id)
  },
  categories: (parent, args, { db }) => {
    return db.categories
  },
  category: (parent, args, { db }) => {
    return db.categories.find(category => category.id === args.id)
  }
}

export { Query }