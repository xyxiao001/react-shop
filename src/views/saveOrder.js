export function getOrder() {
  return window.localStorage.getItem('order')
}

export function setOrder(order) {
  return window.localStorage.setItem('order', order)
}

export function removeOrder() {
  return window.localStorage.removeItem('order')
}
