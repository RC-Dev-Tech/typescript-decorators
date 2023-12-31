# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) Typescript - 裝飾器 (Decorators)
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

---

<!--ts-->
## 目錄:
* [簡介](#簡介)
* [實作範例](#實作範例)
* [操作說明](#操作說明)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---

## 簡介:
裝飾器是一種在TypeScript中用於修改類、方法或屬性行為的特殊語法。<br>
它們可以在不修改原始代碼的情況下，通過附加額外的邏輯或功能來擴展或修改類或其成員。<br>
<br>
裝飾器使用 @ 符號跟隨一個函數，這個函數會在類或成員聲明被定義時立即執行。<br>
這個函數接收三個參數：<br>
- 目標對象（類的原型或類自身）<br>
- 成員名稱（當前裝飾的成員名稱）<br>
- 屬性描述符（對於屬性成員）<br>
<br>
裝飾器可以用於實現各種功能，例如日誌記錄、性能測試、權限檢查、錯誤處理等。<br>
它們提供了一種乾淨且可重用的方式來將額外的行為添加到現有的類或成員中，並有助於提高代碼的可讀性和可維護性。

---

## 實作範例:
- [Example1](https://github.com/RC-Dev-Tech/typescript-decorators/blob/main/src/examples/example1.ts) - 簡單範例-類別.
- [Example2](https://github.com/RC-Dev-Tech/typescript-decorators/blob/main/src/examples/example2.ts) - 簡單範例-方法.

---

## 操作說明:
#### 1. 安裝套件
> npm install --save
#### 2. 編譯 & 運行
> npm run start
#### 3. 切換範例:
> 編輯在app.json中的"exsample_mode"，填入的數字代表第幾個範例.

---

## 參考資料:


---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
---
