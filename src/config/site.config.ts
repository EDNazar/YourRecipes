
    
export const siteConfig = {
  title: "Твой сборник рецептов",
  description: "Твои рецепты",
  navItems: [
    { href: '/', label: 'Рецепты' },
    { href: '/ingredients', label: 'Ингредиенты' },
    { href: '/about', label: 'О нас' },
  ],
  pagesContent: {
    "/": {
      content: 'Здесь будут рецепты...'
    },
    "/ingredients": {
      content: 'Традиционные ингредиенты'
    },
    "/about": {
      content: `
      <h1>
      Это сборник рецептов. Здесь ты можешь сохранять рецепты, которые тебе понравились и создавать свои.
      </h1>
      `
    }
  }
}

