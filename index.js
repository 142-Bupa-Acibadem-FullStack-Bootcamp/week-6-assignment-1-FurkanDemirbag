/*Answer 1: using map*/
let target = 49;
let nums = [2,7,11,15,17,19,30,71];

let sum = function(nums,target){
    let res = [];
    nums.map(function(val,index){
        return nums.map(function(val2,idx){
            if(val+val2 == target && res.indexOf(index) == -1 && res.indexOf(idx) == -1){
                res.push(index,idx);
            }
        });
    });
    return res;
}
console.log(sum(nums,target));

/*Answer 2: using for*/
/*let target = 49;
let nums = [2,7,11,15,17,19,30,71];
let sum = function(nums,target){
    for(let i = 0; i<nums.length; i++)
    {
        for(let j= 0; j<nums.length; j++)
        {
            if(nums[i] + nums[j] == target)
            {
                return [i,j];
            }
        }

        if(nums[i] == target){
            return [i];
        }
    }
}
console.log(sum(nums,target));*/
