"""
脚本用于文字识别 但是识别率不及预期 但是凑活能用
"""



import os
import pytesseract
from PIL import Image
from collections import defaultdict

# pyttesseract.exe所在的文件路径
pytesseract.pytesseract.tesseract_cmd = r'D:\Program Files\Tesseract-OCR\tesseract.exe'
# 获取图片中像素点最多的像素
def get_threshold(image):
    pixel_dict = defaultdict(int)
    rows, cols = image.size
    for i in range(rows):
        for j in range(cols):
            pixel = image.getpixel((i, j))
            pixel_dict[pixel] += 1
    count_max = max(pixel_dict.values()) # 获取像素出现最多的次数
    pixel_dict_reverse = { v:k for k,v in pixel_dict.items()} # 获取出现数量多的像素点
    threshold = pixel_dict_reverse[count_max]
    return threshold

# 按照阈值进行二值化处理
# threshold: 像素阈值
def get_bin_table(threshold):
    # 获取灰度转二值的映射table
    table = []
    for i in range(256):
        rate = 0.1
        if threshold*(1-rate)<=i<= threshold*(1+rate):
            table.append(1)
        else:
            table.append(0)
    return table

# 去掉二值化处理后图片的早点
def cut_noise(image):
    rows, cols = image.size # 图片的宽度和高度
    change_pos = [] # 记录噪声点的位置
    # 遍历图片中每个点，除掉边缘
    for i in range(1, rows-1):
        for j in range(1, cols-1):
            pixel_set = []
            # 取该店的邻域为该店中心的九宫格
            for m in range(i-1, i+2):
                for n in range(j-1, j+2):
                    if image.getpixel((m, n)) != 1: # 1为白色，0为黑色
                        pixel_set.append(image.getpixel((m, n)))

            # 如果该位置九宫格黑色数量小雨四，判断为噪声
            if len(pixel_set) <=4:
                change_pos.append((i, j))

    # 对应位置像素进行修改，将噪声像素设置为1（白色）
    for pos in change_pos:
        image.putpixel(pos, 1)
    return image # 返回修改后图片

# 识别图片中的数字加字幕
# 传入参数为图片路径，返回结果为： 识别结果

def OCR_lmj(img_path):
    image = Image.open(img_path) 
    imgry = image.convert('L') # 转化为灰度图
    # 图片中出现最多的像素就是图像背景
    max_pixel = get_threshold(imgry) 
    # 将图片进行二值化处理
    table = get_bin_table(threshold=max_pixel)
    out = imgry.point(table, '1')
    # 去掉图片中的噪声孤立点
    out = cut_noise(out)
    # 保存图片
    # out.save('')
    # 仅识别图片中的数字
    text = pytesseract.image_to_string(out, config='digits')
    # 识别图片中的数字和字母
    # text = pytesseract.image_to_string(out)
    # 去掉识别结果中的特殊字符
    exclude_char_list = '0123456789'
    text = ''.join([x for x in text if x in exclude_char_list])
    print(text)
    return text

def main():
    # 识别指定文件目录下的图片
    dir = r'C:\Users\35112\Desktop\test\spider\test1\img'
    correct_count = 0 # 图片总数
    total_count = 0 # 识别正确的图片数量
    # 遍历dir下的图片文件
    for file in os.listdir(dir):
        if file.endswith('.png') or file.endswith('.jpg'):
            image_path = '%s/%s'%(dir, file) # 图片路径
            answer = file.split('.')[0] # 图片名
            recognization = OCR_lmj(image_path)
            print((answer, recognization))
            if recognization == answer: #如果识别正确结果加1
                correct_count +=1

            total_count +=1 
    print(total_count, correct_count)

if __name__ == "__main__":
    main()

