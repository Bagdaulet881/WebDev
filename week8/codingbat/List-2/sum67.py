def sum67(nums):
    res = 0
    tot = 0
    for i in range(0, len(nums)):
        if res == 0:
            if nums[i] == 6:
                res = 1
            else:
                tot += nums[i]
        else:
            if nums[i] == 7:
                res = 0
            else:
                pass
    return tot
