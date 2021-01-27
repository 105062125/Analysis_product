# coding=utf-8
import requests
from io import StringIO
import pandas as pd
import numpy as np
import json
from datetime import date
from dateutil.relativedelta import relativedelta


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


if __name__ == "__main__":
    fetch_stock()
