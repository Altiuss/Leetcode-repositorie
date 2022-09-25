
var singleNumber = function(nums) {
for (var i = 0; i < nums.length; i++) {
    let a = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        a++;
      }
    }
    if (a === 1) {
      let rez = nums[i];
     return rez;
    }
  }
   
};
