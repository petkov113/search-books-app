export const login = (id: string, password: string) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const value = Math.floor(Math.random() * 10)
      value > 5 ? resolve('123') : reject('Server Error')
    }, 1500)
  )
