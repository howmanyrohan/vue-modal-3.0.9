export const createContainer = (tag = 'div') => {
  const container = document.createElement(tag)

  document.body.appendChild(container)

  return container
}

export const waitNT = (ctx) => new Promise((resolve) => ctx.$nextTick(resolve))
export const waitRAF = () => new Promise((resolve) => requestAnimationFrame(resolve))
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
