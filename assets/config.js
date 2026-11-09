/* Project-specific labels, fields and preview data. */
const PROJECT = {
  "id": "03",
  "slug": "基于 SSM 的地方文创产品线上售卖系统的设计与实现",
  "mark": "造",
  "short": "造物集",
  "enShort": "Craft Market",
  "cnTitle": "地方文创产品线上售卖系统",
  "enTitle": "Cultural Creative Online Shop",
  "stack": [
    "Vue 3",
    "Spring Boot",
    "SQLite"
  ],
  "headerCta": "进入商店",
  "stats": [
    {
      "v": "126",
      "k": "在售器物"
    },
    {
      "v": "32",
      "k": "合作匠人"
    },
    {
      "v": "9",
      "k": "覆盖县市"
    },
    {
      "v": "4.9",
      "k": "平均评分"
    }
  ],
  "featuresTitle": {
    "eyebrow": "商店能力",
    "title": "像做一本册子那样做商店",
    "sub": "排版留白、器物摄影、工艺说明——售卖系统也可以是内容系统。"
  },
  "features": [
    {
      "icon": "box",
      "t": "商品与库存",
      "d": "按工艺、产地、匠人多维分类，库存与预售状态实时联动。"
    },
    {
      "icon": "cart",
      "t": "购物车与下单",
      "d": "规格、刻字、礼盒选项一并带入订单，支持多种配送方式。"
    },
    {
      "icon": "star",
      "t": "匠人档案",
      "d": "每位匠人独立主页，工艺传承脉络与作品集一并呈现。"
    },
    {
      "icon": "truck",
      "t": "订单履约",
      "d": "下单、备货、发货、签收全流程状态可查，异常自动提醒。"
    }
  ],
  "modules": [
    "商品管理",
    "分类与标签",
    "购物车",
    "订单管理",
    "匠人档案",
    "库存预警",
    "评价系统",
    "销售报表"
  ],
  "modulesTitle": "从一件器物到一张订单",
  "modulesSub": "商品信息、匠人故事与订单数据在同一个后台流转，运营不再东拼西凑。",
  "roles": [
    {
      "name": "店铺管理员",
      "d": "商品、订单与报表",
      "n": 8,
      "c": "#B23A2F"
    },
    {
      "name": "匠人",
      "d": "上传作品与维护档案",
      "n": 4,
      "c": "#C9A227"
    },
    {
      "name": "顾客",
      "d": "浏览、下单与评价",
      "n": 5,
      "c": "#4A6B5F"
    }
  ],
  "arch": [
    {
      "t": "前端展示层",
      "tag": "Vue 3",
      "icon": "layers",
      "items": [
        "Vue 3 + Vite",
        "商品瀑布流",
        "购物车抽屉",
        "图片懒加载"
      ]
    },
    {
      "t": "接口服务层",
      "tag": "Spring Boot",
      "icon": "server",
      "items": [
        "Spring Boot 3",
        "SSM 分层",
        "订单事务",
        "文件上传"
      ]
    },
    {
      "t": "数据存储层",
      "tag": "SQLite",
      "icon": "database",
      "items": [
        "SQLite 3",
        "商品 / 订单 / 匠人表",
        "全文检索",
        "备份策略"
      ]
    }
  ],
  "stackSub": "经典 SSM 分层思路 + Vue 3 前端，代码结构清晰，适合作为课程设计模板。",
  "layout": "catalog",
  "sectionLabel": "地方文创",
  "heading": "地方器物与手作",
  "description": "按工艺浏览地方文创产品，查看产地与制作信息，将选择的作品登记到订单。",
  "recordTitle": "在售作品",
  "itemUnit": "件",
  "stockUnit": "件",
  "action": "登记订单",
  "submissionTitle": "订单记录",
  "accent": "#9b4032",
  "wash": "#f2e9e3",
  "title": "基于 SSM 的地方文创产品线上售卖系统的设计与实现",
  "consumer": true,
  "dated": false,
  "user": "演示管理员",
  "role": "项目工作台",
  "collectionLabel": "商品目录 / COLLECTION",
  "asideTitle": "选好活动，登记参与人",
  "asideText": "查看地点、时间和剩余名额。登记成功后，可在记录列表中查看提交结果。",
  "recordNav": "在售作品",
  "searchHint": "输入名称、类别或地点",
  "addLabel": "新增记录",
  "sampleLogs": [],
  "specialTech": "选题所用技术",
  "specialNote": "当前演示未接入完整方案中的外部业务系统、细粒度权限和第三方通知服务。",
  "columns": [
    "资源名称",
    "分类",
    "地点或规格"
  ],
  "statuses": {
    "ok": "有效",
    "warn": "待确认",
    "off": "已关闭"
  },
  "records": [],
  "items": [
    {
      "title": "柴烧建盏 · 油滴天目",
      "cat": "陶瓷",
      "place": "福建 · 建阳",
      "time": "匠人 陈守拙",
      "day": "¥1,280",
      "mon": "",
      "seats": 6,
      "taken": 2,
      "tint": "#EDE7E2",
      "ink": "#B23A2F",
      "rating": 5,
      "id": "item-001",
      "stock": 4,
      "priceLabel": "¥1,280",
      "image": "assets/images/item-01.svg"
    },
    {
      "title": "蓝印花布 · 手织桌旗",
      "cat": "织染",
      "place": "江苏 · 南通",
      "time": "匠人 沈蓝",
      "day": "¥368",
      "mon": "",
      "seats": 12,
      "taken": 5,
      "tint": "#E6ECF2",
      "ink": "#3E5C78",
      "rating": 4.8,
      "id": "item-002",
      "stock": 7,
      "priceLabel": "¥368",
      "image": "assets/images/item-02.svg"
    },
    {
      "title": "竹编茶则 · 素面",
      "cat": "竹木",
      "place": "浙江 · 安吉",
      "time": "匠人 竹生",
      "day": "¥198",
      "mon": "",
      "seats": 20,
      "taken": 8,
      "tint": "#E9F0E6",
      "ink": "#4A6B3F",
      "rating": 4.9,
      "id": "item-003",
      "stock": 12,
      "priceLabel": "¥198",
      "image": "assets/images/item-03.svg"
    },
    {
      "title": "手工宣纸 · 四尺净皮",
      "cat": "纸品",
      "place": "安徽 · 泾县",
      "time": "匠人 汪纸",
      "day": "¥480",
      "mon": "",
      "seats": 9,
      "taken": 3,
      "tint": "#F5F1E6",
      "ink": "#8A6D3B",
      "rating": 4.7,
      "id": "item-004",
      "stock": 6,
      "priceLabel": "¥480",
      "image": "assets/images/item-04.svg"
    },
    {
      "title": "苗银手镯 · 缠枝纹",
      "cat": "银饰",
      "place": "贵州 · 雷山",
      "time": "匠人 龙银",
      "day": "¥860",
      "mon": "",
      "seats": 4,
      "taken": 1,
      "tint": "#EDEDF2",
      "ink": "#4B4B63",
      "rating": 4.9,
      "id": "item-005",
      "stock": 3,
      "priceLabel": "¥860",
      "image": "assets/images/item-05.svg"
    },
    {
      "title": "手作木刻版画 · 门神",
      "cat": "木刻",
      "place": "山东 · 潍坊",
      "time": "匠人 于木",
      "day": "¥260",
      "mon": "",
      "seats": 15,
      "taken": 6,
      "tint": "#F6E9E4",
      "ink": "#A4442F",
      "rating": 4.8,
      "id": "item-006",
      "stock": 9,
      "priceLabel": "¥260",
      "image": "assets/images/item-06.svg"
    }
  ],
  "moduleDescriptions": [
    "围绕商品管理维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "围绕分类与标签维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "规格、刻字、礼盒选项一并带入订单，支持多种配送方式。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "围绕订单管理维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "每位匠人独立主页，工艺传承脉络与作品集一并呈现。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "围绕库存预警维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "围绕评价系统维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。",
    "围绕销售报表维护业务对象、责任人、处理状态和备注信息，支持按业务条件查询与追踪。 完整系统可进一步增加权限、条件检索与操作追溯；本模块是否已接入，以实现范围表为准。"
  ]
};
