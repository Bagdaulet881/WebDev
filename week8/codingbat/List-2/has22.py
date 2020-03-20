def has22(nums):
    arr = []
    for i in range(0, len(nums)):
        if nums[i] == 2:
            arr.append(i)
    for i in range(0, len(arr)-1):
        if arr[i+1] - arr[i] == 1:
            return True
    return False