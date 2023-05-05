import numpy as np
from scipy.fft import fft, ifft, fftfreq

# 假设你的数据是存储在csv文件中，每行有四个输入和八个输出
data = np.loadtxt("data.csv", delimiter=",")
x = data[:, :4] # 输入矩阵，每行有四个输入
y = data[:, 4:] # 输出矩阵，每行有八个输出

# 假设你想要预测第一行数据的输出
x0 = x[0] # 第一行输入
y0 = y[0] # 第一行输出

# 将输入和输出转换为时域信号
t = np.arange(4) # 时间向量
f = fftfreq(4) # 频率向量
x0t = ifft(x0) # 输入时域信号
y0t = ifft(y0) # 输出时域信号

# 使用FFT插值来预测新的输出时域信号
t_new = np.linspace(0, 3, 8) # 新的时间向量，长度为8
f_new = fftfreq(8) # 新的频率向量，长度为8
x0t_new = np.interp(t_new, t, x0t) # 新的输入时域信号，长度为8
y0t_new = fft(x0t_new) * fft(y0t) / fft(x0t) # 新的输出时域信号，长度为8

# 将新的输出时域信号转换为频域信号
y0_new = ifft(y0t_new) # 新的输出频域信号，长度为8

# 打印结果
print("原始输入：", x0)
print("原始输出：", y0)
print("新的输入：", x0t_new)
print("新的输出：", y0_new)
