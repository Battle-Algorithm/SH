import re
def solution(new_id:str):
    new_id = new_id.lower()
    for special_char in '~!@#$%^&*()=+[{]}:?,<>/':
        new_id = new_id.replace(special_char, '')
    new_id = re.sub('\.+','.',new_id)
    new_id = re.sub('^\.','', new_id)
    new_id = re.sub('\.$','', new_id)
    new_id = "a" if new_id=="" else new_id
    new_id = new_id[:15]
    new_id = re.sub('\.$','', new_id)
    new_id += new_id[len(new_id)-1]*(3 - len(new_id)) if len(new_id) <3 else ""
    return new_id