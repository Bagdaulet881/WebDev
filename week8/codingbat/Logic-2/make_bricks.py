def make_bricks(small, big, goal):
    num_of_fives = goal / 5
    num_of_ones = goal - (5 * num_of_fives)
    if num_of_fives <= big and num_of_ones <= small:
        return True
    elif (num_of_ones + 5 <= small) and (big * 5 + num_of_ones + 5 == goal):
        return True
    else:
        return False