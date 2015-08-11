# Map Game
DQMSLみたいなマップをつくる

## Start
```
cd ./Mapgame
python -m SimpleHTTPServer
```

## Architecture
TODO: vue-loader の導入する

**▪ ︎core**  
マップの共通機能  
ダンジョンを歩き回ることができる機能を提供する
- bg
- header
    * stamina
    * exp
- ui
    * touch-move
    * arrow
    * cell
- minimap
- curtain
- msgbox
- modal
- menu
    * item
    * map


**▪ quest**  
ダンジョンで探索を行う機能

**▪ raid**  
ダンジョンでレイドイベントを行う機能

**▪ treasure-hunt**  
ダンジョンで宝探しイベントを行う機能
