# coding=utf-8
import requests
from io import StringIO
import pandas as pd
import numpy as np
import json
from datetime import date
import datetime
import time
import talib
import numpy
from dateutil.relativedelta import relativedelta

# 計算均線 close_array收盤價 avg_number看幾日平均


def calculate_kd(high_array, low_array, close_array):
    np_format_close_array = numpy.array(close_array)
    np_format_high_array = numpy.array(high_array)
    np_format_low_array = numpy.array(low_array)
    k, d = talib.STOCH(np_format_high_array,
                       np_format_low_array, np_format_close_array)

    array_format_k_output = np.where(np.isnan(k), 0, k)
    array_format_d_output = np.where(np.isnan(d), 0, d)
    print(array_format_k_output)
    print("---")
    print(array_format_d_output)
    return array_format_k_output, array_format_d_output


def calculate_sma(close_array, avg_number):

    np_format_array = numpy.array(close_array)
    output = talib.SMA(np_format_array, avg_number)
    array_format_output = np.where(np.isnan(output), 0, output)
    return array_format_output
 # 抓取連續半年股票收盤價


def fetch_stock_close():
    stock = "2330"
    six_month = []
    for i in range(6):
        today = date.today() + relativedelta(months=-i)
        formatted_today = today.strftime('%y%m%d')
        today_date = '20'+formatted_today
        six_month.append(today_date)

    key = 1
    temp_dict = []
    close_dict = []
    high_dict = []
    low_dict = []
    for month in reversed(six_month):
        url = "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=" + \
            month+"&stockNo=" + stock
        # field = ["日期", "成交股數", "成交金額", "開盤價", "最高價", "最低價", "收盤價", "漲跌價差", "成交筆數"]
        data_json = requests.get(url).json()
        for day in data_json["data"]:
            close_dict.append(float(day[6]))
            high_dict.append(float(day[4]))
            low_dict.append(float(day[5]))
            temp = {"key": key, "date": day[0], "open": day[3], "high": day[4],
                    "low": day[5], "close": day[6], "spread": [day[7]]}
            key = key+1
            temp_dict.append(temp)

    sma_5 = calculate_sma(close_dict, 5)
    sma_10 = calculate_sma(close_dict, 10)
    k, d = calculate_kd(high_dict, low_dict, close_dict)

    # 放sma進去

    for i, per_day in enumerate(temp_dict):
        per_day.setdefault('5MA', sma_5[i])
        per_day.setdefault('10MA', sma_10[i])
        per_day.setdefault('k', k[i])
        per_day.setdefault('d', d[i])

    data = {'data': temp_dict}
    return data


# 抓取連續半年股票 ["日期", "成交股數", "成交金額", "開盤價", "最高價", "最低價", "收盤價", "漲跌價差", "成交筆數"]


def fetch_stock():
    stock = "2330"
    six_month = []
    for i in range(6):
        today = date.today() + relativedelta(months=-i)
        formatted_today = today.strftime('%y%m%d')
        today_date = '20'+formatted_today
        six_month.append(today_date)

    key = 1
    temp_dict = []
    for month in six_month:
        url = "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=" + \
            month+"&stockNo=" + stock
        # field = ["日期", "成交股數", "成交金額", "開盤價", "最高價", "最低價", "收盤價", "漲跌價差", "成交筆數"]
        data_json = requests.get(url).json()
        for day in reversed(data_json["data"]):
            temp = {"key": key, "date": day[0], "open": day[3], "high": day[4],
                    "low": day[5], "close": day[6], "spread": [day[7]]}
            key = key+1
            temp_dict.append(temp)

    data = {'data': temp_dict}

    # data = {'data': [{
    #     'key': '1',
    #     'name': 'TSMC',
    #     'age': 777,
    #     'address': 'some park',
    #     'actions': ['buy'],
    # }, {
    #     'key': '2',
    #     'name': 'TSMC',
    #     'age': 666,
    #     'address': 'some park',
    #     'actions': ['sell'],
    # }]}

    return data

# 給close price使用 抓取全部上市股票所有資料


def crawl_price(date):
    r = requests.post('http://www.twse.com.tw/exchangeReport/MI_INDEX?response=csv&date=' +
                      str(date).split(' ')[0].replace('-', '') + '&type=ALL')
    ret = pd.read_csv(StringIO("\n".join([i.translate({ord(c): None for c in ' '})
                                          for i in r.text.split('\n')
                                          if len(i.split('",')) == 17 and i[0] != '='])), header=0)
    ret = ret.set_index('證券代號')
    ret['成交金額'] = ret['成交金額'].str.replace(',', '')
    ret['成交股數'] = ret['成交股數'].str.replace(',', '')
    return ret

# 抓取全部上市股票所有資料的收盤價


def Close_price():
    data = {}
    n_days = 1
    date = datetime.datetime.now()
    fail_count = 0
    allow_continuous_fail_count = 5
    while len(data) < n_days:

        print('parsing', date)
        # 使用 crawPrice 爬資料
        try:
            # 抓資料
            data[date.date()] = crawl_price(date)
            print('success!')
            fail_count = 0
        except:
            # 假日爬不到
            print('fail! check the date is holiday')
            fail_count += 1
            if fail_count == allow_continuous_fail_count:
                raise
                break

        # 減一天
        date -= datetime.timedelta(days=1)
        time.sleep(10)

    close = pd.DataFrame({k: d['收盤價'] for k, d in data.items()}).transpose()
    close.index = pd.to_datetime(close.index)

    print(close)


if __name__ == "__main__":
    calculate_sma()
