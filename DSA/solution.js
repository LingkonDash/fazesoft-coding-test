let nums = [2, 3, 2, 12, 23];

function canReachLastIndex (nums) {
    
    let needToReach = 0;
    for (let i = 0; i< nums.length; i++) {
        
        needToReach = i + nums[i];
        console.log(needToReach);
        
        if(needToReach === nums.length - 1) return true
        
    }
    return false
};

console.log(canReachLastIndex(nums));

