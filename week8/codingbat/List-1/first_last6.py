def first_last6(nums):
    res = nums[0]
    res2 = nums[len(nums) - 1]
    for i in nums:
        if(res == 6 or res2 == 6):
            return True
        else:
            return False