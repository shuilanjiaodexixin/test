import tesserocr
from PIL import Image

image = Image.open('./spider/test1/img/authImage.jpg')
image = image.convert('L')
image = image.convert('1')
threshold = 80
table = []
for i in range(256):
    if i < threshold:
        table.append(0)
    else:
        table.append(1)
image = image.point(table, '1')
image.show()

result = tesserocr.image_to_text(image)
print(result)
print(type(result))