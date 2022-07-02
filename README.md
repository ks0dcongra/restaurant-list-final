# 餐廳清單 Final
此專案提供本網站會員新增、刪除及修改餐廳的資訊，例如:餐廳類別、地址、評分、描述等。

### 操作流程
1.開啟終端機(Terminal)cd 到存放專案本機位置並執行:

```
git clone https://github.com/ks0dcongra/restaurant-list-final.git
```

2.進入專案資料夾

```
cd restaurant-list-final
```

3.下載express-session套件
```
npm install express-session@1.17.1
```

4.開啟程式
```
npm run start 
```

5.打開瀏覽器網址列輸入 http://localhost:3000/
```
CMD顯示 `Express is running on http://localhost:3000` 即啟動完成
```

## 主要功能列表
1. 使用者可以註冊帳號
2. 使用者也可以透過 Facebook Login 直接登入
3. 使用者的密碼要使用 bcrypt 來處理
4. 使用者必須登入才能使用餐廳清單
5. 使用者登出、註冊失敗、或登入失敗時，使用者都會在畫面上看到正確而清楚的系統訊息
6. 依照餐廳名稱及餐廳類別搜尋
  - 優化搜尋功能
    - 剔除多餘的空白
    - 搜尋沒有結果時也有對應頁面提示
7. 可從首頁點擊餐廳圖片了解餐廳詳細資訊
8. 依照餐廳名稱、類別及地區排序
9. 檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map
  - 基本CRUD
    - 點選Banner的圖標返回首頁瀏覽全部餐廳資料
    - 點選`Edit`編輯此筆餐廳資料
    - 點選`Delete`刪除此筆餐廳資料
    - 點選 Google Map`顯示詳細地圖`可查看位置詳細資料
10. 點選`Create`新增餐廳包含上傳圖片、評分、類別、地址等資訊，Google Map 位置會依照輸入之地址產生

## 系統截圖
![user1@example.com](https://github.com/ks0dcongra/restaurant-list-final/blob/master/public/imgur/restaurant_0.jpg)
![user2@example.com](https://github.com/ks0dcongra/restaurant-list-final/blob/master/public/imgur/restaurant_1.jpg)
## Acknowledgments
* AlphaCamp

