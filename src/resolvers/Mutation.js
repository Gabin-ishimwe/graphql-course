import { v4 as uuid } from "uuid"

const Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const newCategory = {
      id: uuid(),
      name: input.name
    }
    db.categories.push(newCategory)
    return newCategory
  },
  addReview: (parent, { input }, { db }) => {
    const { date, title, comment, rating, productId } = input
    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId
    }
    db.reviews.push(newReview)
    return newReview
  },
  addProduct: (parent, { input }, { db }) => {
    const { name,
      description,
      quantity,
      image,
      price,
      onSale,
      categoryId } = input
    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      image,
      price,
      onSale,
      categoryId
    }
    db.products.push(newProduct)
    return newProduct
  },
  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter(category => id !== category.id)
    db.products = db.products.map(product => {
      if (product.categoryId === id) {
        return {
          ...product,
          categoryId: null
        }
      }
      else {
        return product
      }
    })
    return true
  },
  updateCategory: (parent, { id, input }, { db }) => {
    const index = db.categories.findIndex(category => category.id === id)
    db.categories[index] = {
      ...db.categories[index],
      name: input.name
    }
    return db.categories[index]
  }
}

export { Mutation }