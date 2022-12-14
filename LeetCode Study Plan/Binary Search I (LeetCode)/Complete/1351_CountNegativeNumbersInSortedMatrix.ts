//https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/?envType=study-plan&id=binary-search-i

function countNegatives(grid: number[][]): number[] {
  return [countNegativesNestedLoop(grid), countNegativesBinarySearch(grid)]
}

function countNegativesNestedLoop(grid: number[][]): number {
  let total = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] < 0) total++
      else break
    }
  }

  return total
}

//Binary Search
function countNegativesBinarySearch(grid: number[][]): number {
  let total = 0
  const len = grid.length
  const rowLen = grid[0].length

  let start = 0
  let end = rowLen - 1

  for (let i = 0; i < len; i++) {
    const row = grid[i]

    while (start < end) {
      const mid = start + Math.floor((end - start) / 2)
      if (row[mid] < 0 && row[mid] !== undefined && row[mid - 1] >= 0){
        start = mid
        break
      }
      if (row[mid] >= 0) start = mid + 1
      else end = mid
    }

    total += rowLen - start
    if (row[start] >= 0) total += -1
    end = start > rowLen - 1 ? start - 1 : start
    start = 0
    if (end === 0 && row[start] < 0) {
      total += (rowLen - start) * (len - i - 1)
      break
    }

  }
  return total
}

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
)
console.log(
  countNegatives([
    [3, 3],
    [3, -1],
    [3, -2],
    [-3, -3],
    [-3, -3],
  ])
)
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
)
console.log(
  countNegatives([
    [3, -1, -3, -3, -3],
    [2, -2, -3, -3, -3],
    [1, -2, -3, -3, -3],
    [0, -3, -3, -3, -3],
  ])
)
console.log(
  countNegatives([
    [8, -2, -2, -2, -4, -5, -5],
    [-2, -3, -3, -4, -4, -5, -5],
    [-2, -5, -5, -5, -5, -5, -5],
    [-3, -5, -5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5, -5, -5],
    [-5, -5, -5, -5, -5, -5, -5],
  ])
)
console.log(
  countNegatives([
    [
      10, 9, 6, 3, 2, 1, 0, 0, 0, -3, -13, -19, -19, -20, -20, -20, -20, -20,
      -20, -20,
    ],
    [
      9, 9, 5, 2, -5, -6, -7, -7, -8, -9, -14, -19, -19, -20, -20, -20, -20,
      -20, -20, -20,
    ],
    [
      9, 9, 5, 2, -5, -6, -7, -7, -9, -10, -15, -19, -19, -20, -20, -20, -20,
      -20, -20, -20,
    ],
    [
      9, 8, 5, 1, -6, -7, -8, -9, -9, -11, -15, -20, -20, -20, -20, -20, -20,
      -20, -20, -20,
    ],
    [
      8, 8, 5, -2, -13, -14, -14, -15, -15, -16, -17, -20, -20, -20, -20, -20,
      -20, -20, -20, -20,
    ],
    [
      7, 6, 4, -2, -13, -14, -14, -15, -16, -17, -17, -20, -20, -20, -20, -20,
      -20, -20, -20, -20,
    ],
    [
      6, 5, 4, -2, -13, -14, -14, -15, -17, -18, -19, -20, -20, -20, -20, -20,
      -20, -20, -20, -20,
    ],
    [
      5, 5, -7, -8, -14, -14, -15, -16, -17, -19, -19, -20, -20, -20, -20, -20,
      -20, -20, -20, -20,
    ],
    [
      5, 4, -7, -8, -14, -15, -16, -16, -17, -20, -20, -20, -20, -20, -20, -20,
      -20, -20, -20, -20,
    ],
    [
      4, 4, -7, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20,
      -20, -20, -20, -20,
    ],
    [
      4, 3, -7, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20,
      -20, -20, -20, -20,
    ],
    [
      4, 3, -7, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20,
      -20, -20, -20, -20,
    ],
    [
      4, 2, -8, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20,
      -20, -20, -20, -20,
    ],
    [
      4, 1, -8, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20,
      -20, -20, -20, -20,
    ],
    [
      3, 0, -9, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20,
      -20, -20, -20, -20,
    ],
    [
      2, -1, -10, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20,
      -20, -20, -20, -20, -20,
    ],
    [
      1, -2, -11, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20,
      -20, -20, -20, -20, -20,
    ],
    [
      0, -2, -11, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20,
      -20, -20, -20, -20, -20,
    ],
    [
      -1, -3, -12, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20,
      -20, -20, -20, -20, -20,
    ],
  ])
)

console.log(
  countNegatives([
    [10, 9, 8, 8, 8, 7, 6, 6, 5, 5, 4, -13, -14, -15],
    [10, 9, 7, 7, 7, 7, 5, 4, 3, 2, 1, -13, -15, -15],
    [10, 9, 7, 6, 6, 5, 4, 4, 2, 2, 0, -14, -16, -16],
    [9, 9, 7, 5, 4, 4, 4, 4, 1, 1, -1, -15, -16, -16],
    [9, 8, 7, 4, 3, 2, 1, 1, -15, -15, -16, -17, -18, -18],
    [9, 7, 7, 3, 2, 2, -20, -20, -20, -20, -20, -20, -20, -20],
    [8, 7, 6, 3, 2, 1, -20, -20, -20, -20, -20, -20, -20, -20],
    [8, 6, 6, -16, -16, -16, -20, -20, -20, -20, -20, -20, -20, -20],
    [-19, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20],
    [-20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20],
    [-20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20],
    [-20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20],
    [-20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20],
    [-20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20],
    [-20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20],
  ])
)
