def last2(str):
    if len(str) < 2:
        return 0
  
    # last 2 chars, can be written as str[-2:]
    last2 = str[len(str)-2:]
    cnt = 0
  
  # Check each substring length 2 starting at i
    for i in range(len(str)-2):
        sub = str[i:i+2]
        if sub == last2:
            cnt = cnt + 1

    return cnt