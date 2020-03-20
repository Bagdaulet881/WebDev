def make_out_word(out, word):
    nstr = ""
    leno = len(out)
    if len(out) % 2 == 0:
        for i in range(leno):
            if i == leno // 2:
                nstr += str(word)
            nstr += out[i]
    return nstr