

const checkType = type => {
  const catTypes = ['child_friendly', 'dog_friendly', 'stranger_friendly']
  if (!catTypes.includes(type)) {
    return false
  }
  return true
}

module.exports = { checkType }