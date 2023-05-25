# 导入csv和json模块
import csv
import json

# 定义一个函数，接受两个字符串作为参数
def compare_strings(str1, str2):
  # 判断两个字符串的长度，如果第一个字符串比第二个字符串长，就交换它们的位置
  if len(str1) > len(str2):
    str1, str2 = str2, str1
  # 判断第一个字符串是否是第二个字符串的前缀，如果是，就返回True，否则返回False
  return str2.startswith(str1)


# 打开csv文件，假设文件名为data.csv
with open('glorious-glaze/public/dataSheet.csv', 'r') as csv_file:
  # 读取csv文件的内容，假设第一行是表头
  csv_reader = csv.DictReader(csv_file)
  # 创建一个空列表，用于存储转换后的json数据
  json_data = [[{
      "sectionName":"我的收藏",
      "type":"like",
      "tiles":[]
    },{
      "sectionName":"配釉材质库",
      "type":"regular",
      "tiles":[]
    }],
    [{
      "sectionName":"配釉材质库",
      "type":"regular",
      "tiles":[]
    }]]
  
  # 遍历csv文件的每一行
  currentData = '2023年5月22日'
  currentMonth = '2023年5月'
  for row in csv_reader:
    # 把每一行转换成一个字典，并添加到列表中
    thisRow = dict(row)
    print(thisRow)
    if (thisRow['like']=="TRUE"):
        json_data[0][0]['tiles'].append({
           "order":len(json_data[0][0]['tiles'])+1,
           "name":thisRow['TileName'],
           "image":thisRow['ImageDir'],
           "selected":False,
           'MaterialData0':thisRow['MaterialData0'],
           'MaterialData1':thisRow['MaterialData1'],
           'MaterialData2':thisRow['MaterialData2'],
           'MaterialData3':thisRow['MaterialData3'],
        })
    else:
        json_data[0][1]['tiles'].append({
           "order":len(json_data[0][1]['tiles'])+1,
           "name":thisRow['TileName'],
           "image":thisRow['ImageDir'],
           "selected":False,
           'MaterialData0':thisRow['MaterialData0'],
           'MaterialData1':thisRow['MaterialData1'],
           'MaterialData2':thisRow['MaterialData2'],
           'MaterialData3':thisRow['MaterialData3'],
        })
    currentData = thisRow['Time']
    if(compare_strings(currentData,currentMonth)==False):
        # 使用find方法，找到“月”字在字符串中的位置
        index = currentData.find('月')
        # 使用切片操作，保留字符串从开头到“月”字的部分，包括“月”字
        currentMonth = currentData[:index+1]
        json_data[1].append({
            "sectionName":currentMonth,
            "type":"regular",
            "tiles":[]
        })
        json_data[1][len(json_data[1])-1]['tiles'].append({
            "order":len(json_data[1][len(json_data[1])-1]['tiles'])+1,
            "name":thisRow['TileName'],
           "image":thisRow['ImageDir'],
           "selected":False,
           'MaterialData0':thisRow['MaterialData0'],
           'MaterialData1':thisRow['MaterialData1'],
           'MaterialData2':thisRow['MaterialData2'],
           'MaterialData3':thisRow['MaterialData3'],
        })
    else:
        json_data[1][len(json_data[1])-1]['tiles'].append({
            "order":len(json_data[1][len(json_data[1])-1]['tiles'])+1,
            "name":thisRow['TileName'],
           "image":thisRow['ImageDir'],
           "selected":False,
           'MaterialData0':thisRow['MaterialData0'],
           'MaterialData1':thisRow['MaterialData1'],
           'MaterialData2':thisRow['MaterialData2'],
           'MaterialData3':thisRow['MaterialData3'],
        })
      
    #json_data.append(dict(row))

# 打开json文件，假设文件名为data.json
with open('glorious-glaze/public/dataSheet.json', 'w') as json_file:
  # 把列表转换成json格式，并写入到json文件中，使用indent参数格式化输出
  json.dump(json_data, json_file, indent=4)
