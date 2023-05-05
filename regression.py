import numpy as np
from sklearn.neural_network import MLPRegressor
from sklearn.metrics import mean_squared_error

# 假设你的数据是存储在csv文件中，每行有四个输入和八个输出
data = np.loadtxt("data.csv", delimiter=",")
X = data[:, :4] # 输入矩阵，每行有四个输入
y = data[:, 4:] # 输出矩阵，每行有八个输出

# 划分训练集和测试集
X_train = X[:80] # 前80行作为训练集
y_train = y[:80]
X_test = X[80:] # 后20行作为测试集
y_test = y[80:]

# 创建一个MLPRegressor对象
mlp = MLPRegressor(hidden_layer_sizes=(10, 10), # 两个隐藏层，每层10个神经元
                   activation="relu", # 使用relu激活函数
                   solver="adam", # 使用adam优化器
                   learning_rate_init=0.01, # 初始学习率为0.01
                   max_iter=1000) # 最大迭代次数为1000

# 训练网络
mlp.fit(X_train, y_train)

# 预测测试集
y_pred = mlp.predict(X_test)

# 计算均方误差
mse = mean_squared_error(y_test, y_pred)
print("均方误差为：", mse)
