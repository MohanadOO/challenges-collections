//https://leetcode.com/problems/k-closest-points-to-origin/
//Medium

//Sort Approach O(n log(N))
function kClosest(points: number[][], k: number): number[][] {
  points.sort((a, b) => {
    return a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1])
  })
  return points.slice(0, k)
}

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
)
