def cat_dog(str):
    cat = str.split('cat')
    dog = str.split('dog')  
    if len(cat) == len(dog):    
        return True
    else:
        return False
