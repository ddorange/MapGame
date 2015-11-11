# Map Game
- 普通のソシャゲっぽいマイページ
- キャラクター等のリスト画面
- DQMSLみたいなマップ画面
- グランブルーみたいなバトル画面

## Start
```
cd ./path/to/Mapgame
npm run aeromock
```

## Architecture
#### /mypage
- お知らせモーダル

#### /list
タブ
- /list/characters
- /list/wepons
- /list/items

詳細
- /list/{{tab}}/detail/{{id}}

#### /error
- マイページへもどるボタン

#### /quest
- マップ選択
- マップ