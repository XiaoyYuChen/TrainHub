# TrainHub

心雨少儿体能-体测方向 · 训练中心（短跑、中长跑、跳绳、体能、核心、协调性等）

开源、可扩展：课程数据在 `data/`，页面壳在 `modules/`。新增专项请先读 [AGENTS.md](AGENTS.md)（也适合其它 AI 直接上手）。

## 在线预览（GitHub Pages）

- 站点首页：https://xiaoyyuchen.github.io/TrainHub/
- 短跑总表：https://xiaoyyuchen.github.io/TrainHub/modules/sprint/
- 长跑总表：https://xiaoyyuchen.github.io/TrainHub/modules/endurance/
- 跳绳总表：https://xiaoyyuchen.github.io/TrainHub/modules/jump-rope/
- 体能总表：https://xiaoyyuchen.github.io/TrainHub/modules/fitness/
- 核心力量总表：https://xiaoyyuchen.github.io/TrainHub/modules/core/
- 协调性总表：https://xiaoyyuchen.github.io/TrainHub/modules/coordination/

仓库地址：https://github.com/XiaoyYuChen/TrainHub

## 本地预览

在仓库根目录执行：

```bash
python -m http.server 8765
```

浏览器打开 http://127.0.0.1:8765/

## 扩展专项

1. 复制 `data/_template/` → `data/{id}/`
2. 复制 `modules/_template/` → `modules/{id}/`
3. 在 `data/catalog.js` 登记模块
4. 填写课时数据（同一份数据生成学员表和教练教案）

细节、字段说明与注意事项见 [AGENTS.md](AGENTS.md)。

## 作者

陈晓雨（小学体能体测）

微信扫码联系作者：

<p align="center">
  <img src="assets/readme/author-qr.jpg" alt="作者微信二维码" width="220" />
</p>

## 打赏码

如果本项目对你有帮助，欢迎扫码打赏支持：

<p align="center">
  <img src="assets/readme/donate-qr.jpg" alt="打赏码" width="280" />
</p>

## 开源协议

本项目采用 [Apache License 2.0](LICENSE) 开源协议。

你可以自由使用、修改和分发本项目，但需保留版权与许可声明；详细条款见仓库根目录 `LICENSE` 文件。

Copyright © 2026 陈晓雨
