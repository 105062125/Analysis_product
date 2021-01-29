# Analysis web

https://analysis-product.herokuapp.com/

Web built by **ReactJS + Flask + SQlite + Heroku**

## Frontend

---

First go to Analysis_product/frontend folder

`npm start`

- To test on local

`npm run build`

- To build package that can be used in cloud platform

## Backend

---

First go to Analysis_product folder

`source venv/bin/activate`

- open virtual environment called venv

`python app.py`

- open in debug mode (this will help testing)

Make sure open "venv" and install all dependencies

## Cloud

---

Just push to this github master branch

I already set **_Heroku_** to this github repo

**_Heroku_** will detect this repo :)

## Database

---

Used Sqlite to store data.

You can use **_TablePlus_** to watch db file.

## Difficulties

---

1. futures == 3.3.0

pip3 doesn't support futures, just remove it from requirements.txt

2. TA_lib

If you only add TA*lib in your requirements, it will failed to compile in \*\*\_Heroku*\*\*.
Follow the steps below

- Delete TA_lib in requirements.txt
- Go to Settings in **_Heroku_**, you will see Buildpacks.
- Add "https://github.com/numrut/heroku-buildpack-python-talib" in your buildpacks.
- Done

## 等待實現

1. 爬財報
2. 即時股價
3. 更多種策略
4. 把策略跟爬 linechart 分開 避免太久
