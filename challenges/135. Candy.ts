function candy(ratings: number[]): number {
  let candies = ratings.length;
  let down = 0;
  let up = 0;
  let peak = 0;

  for (let i = 1; i < ratings.length; i++) {
    const difference = ratings[i] - ratings[i - 1];
    
    if(difference < 0) {
      up = 0;
      down++;

      
      candies += down + (peak >= down ? -1 : 0);
    } else if (difference === 0) {
      down = 0;
      up = 0;
      peak = 0;
    } else {
      down = 0;
      up += 1;
      peak = up;
      candies += up;
    }

    console.log({ peak, up, down, candies });
  }

  return candies;
};

const value = [1,3,2,2,1];
const result = candy(value);
console.log(result);
