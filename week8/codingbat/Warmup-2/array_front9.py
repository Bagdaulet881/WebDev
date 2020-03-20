def array_front9(nums):
    a = len(nums)
    if a > 4:
        a = 4
  
    for i in range(a):
        if nums[i] == 9:
            return True
    return False
