def count_evens(nums):
    res = 0
    for i in nums:
        if i%2 == 0:
            res += 1
    return res