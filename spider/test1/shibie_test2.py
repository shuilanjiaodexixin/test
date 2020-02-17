#-*-coding:utf-8-*-

from PIL import Image
import pytesseract

def recognize_captcha(img_path):
    im = Image.open(img_path)
    # threshold = 140
    # table = []
    # for i in range(256):
    #     if i < threshold:
    #         table.append(0)
    #     else:
    #         table.append(1)
    #
    # out = im.point(table, '1')
    num = pytesseract.image_to_string(im)
    return num


if __name__ == '__main__':
    for i in range(1, 5):
        img_path = 'spider/test1/img/'+str(i)+'.jpg'
        res = recognize_captcha(img_path)
        strs = res.split("\n")
        print(strs)
    