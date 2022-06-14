

const Product = {
  category: (parent, args, { db }) => {
    const cat = db.categories.find(category => category.id === parent.categoryId)
    return cat
  },
  reviews: ({ id }, args, { db }) => {
    const reviewing = db.reviews.filter(review => review.productId === id)
    return reviewing
  }
}

export { Product }