function firstNonConsecutive (arr) {
  let result = arr.filter(it => it != (arr[arr.indexOf(it - 1)] + 1))
  console.log(result)
  if (typeof result[1] === 'undefined') {
    let result = null
    return result
  }
  return    result[1]

}
console.log(firstNonConsecutive([-5,-4,-3,-2,-1,0,1,2,3,4]))