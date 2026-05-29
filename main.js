const scenicSpots = [
    { name: "五大道", desc: "万国建筑博览苑", img:"image/wudadao.png", tags: ["历史街区"], crowd: "comfortable", visitors: 120, detail: "拥有2000多所花园洋房", audioDesc: "五大道位于天津中心市区的南部，东、西向并列着以成都、重庆、常德、大理、睦南及马场为名的五条街道。这里汇聚了英、法、意、德、西班牙等国各式风貌建筑230多幢。", openTime: "全天开放", ticket: "免费(马车50元)", address: "天津市和平区重庆道55号" },
    { name: "天津之眼", desc: "桥上摩天轮", img: "image/tianjinzhiyan.png", tags: ["夜景"], crowd: "crowded", visitors: 180, detail: "俯瞰海河夜景", audioDesc: "天津之眼是世界唯一建在桥上的摩天轮，直径110米，到达最高点时可见方圆40公里景色。", openTime: "9:30-21:30", ticket: "70元", address: "河北区五马路永乐桥" },
    { name: "古文化街", desc: "津门故里", img: "image/guwenhuajie.png", tags: ["民俗"], crowd: "moderate", visitors: 95, detail: "泥人张、杨柳青年画", audioDesc: "古文化街全长687米，以天后宫为中心，是天津老字号民间手工艺品集中地。", openTime: "全天", ticket: "免费", address: "南开区古文化街" },
    { name: "意式风情区", desc: "意式建筑群", img: "image/yishifengqingqu.png", tags: ["欧陆"], crowd: "moderate", visitors: 70, detail: "名人故居聚集", audioDesc: "原意大利租界，现存200余栋地中海风格建筑，梁启超、曹禺等名人故居。", openTime: "全天", ticket: "免费", address: "河北区意式风情区" },
    { name: "滨江道步行街", desc: "津门第一商业街", img: "image/binjiangdaoxiaochijie.png", tags: ["购物", "小吃"], crowd: "crowded", visitors: 200, detail: "集购物、美食、娱乐于一体", audioDesc: "滨江道是天津最繁华的商业步行街，全长2094米，两侧汇聚了劝业场、恒隆广场等大型商场。", openTime: "全天", ticket: "免费", address: "和平区滨江道" },
    { name: "南市食品街", desc: "津味美食天堂", img: "image/nanshishipinjie.png", tags: ["美食"], crowd: "moderate", visitors: 85, detail: "汇集天津特色小吃", audioDesc: "南市食品街建于1985年，汇聚了天津各种传统风味小吃，是品尝津门美食的好去处。", openTime: "9:00-21:00", ticket: "免费", address: "南开区南市食品街" },
    { name: "西北角", desc: "回民美食聚集地", img: "image/xibeijiao.png", tags: ["美食", "清真"], crowd: "moderate", visitors: 60, detail: "地道回民风味", audioDesc: "西北角是天津著名的清真美食街区，有着悠久的回族饮食文化历史。", openTime: "6:00-20:00", ticket: "免费", address: "红桥区西北角" },
    { name: "北安桥", desc: "天津八大名桥", img: "image/beianqiao.png", tags: ["桥梁", "夜景"], crowd: "comfortable", visitors: 30, detail: "法式风格装饰桥", audioDesc: "北安桥建于1939年，桥身雕刻精美，融合了中式石狮和西式雕塑。", openTime: "全天", ticket: "免费", address: "和平区北安桥" },
    { name: "赤峰桥", desc: "天津八大名桥", img: "image/chifengqiao.png", tags: ["桥梁", "夜景"], crowd: "comfortable", visitors: 25, detail: "独塔悬索桥", audioDesc: "赤峰桥采用独塔悬索结构，造型独特，是海河上的一道风景。", openTime: "全天", ticket: "免费", address: "河西区赤峰桥" },
    { name: "大沽桥", desc: "天津八大名桥", img: "image/daguqiao.png", tags: ["桥梁", "夜景"], crowd: "comfortable", visitors: 35, detail: "日月拱桥造型", audioDesc: "大沽桥由两个不对称的拱圈组成，象征日月同辉，寓意天津美好未来。", openTime: "全天", ticket: "免费", address: "和平区大沽桥" },
    { name: "光华桥", desc: "天津八大名桥", img: "image/guanghuaqiao.png", tags: ["桥梁"], crowd: "comfortable", visitors: 20, detail: "现代简约风格", audioDesc: "光华桥建于2006年，设计简洁现代，是天津海河桥梁的新代表。", openTime: "全天", ticket: "免费", address: "河东区光华桥" },
    { name: "解放桥", desc: "天津八大名桥", img: "image/jiefangqiao.png", tags: ["桥梁", "历史"], crowd: "moderate", visitors: 50, detail: "百年开启桥", audioDesc: "解放桥建于1927年，是天津著名的开启桥，可水平旋转打开供船只通行。", openTime: "全天", ticket: "免费", address: "和平区解放桥" },
    { name: "金汤桥", desc: "天津八大名桥", img: "image/jintangqiao.png", tags: ["桥梁", "历史"], crowd: "comfortable", visitors: 40, detail: "百年铁桥", audioDesc: "金汤桥建于1906年，是天津现存最古老的铁桥之一，见证了天津百年历史。", openTime: "全天", ticket: "免费", address: "南开区金汤桥" },
    { name: "狮子林桥", desc: "天津八大名桥", img: "image/shizilinqiao.png", tags: ["桥梁", "石狮"], crowd: "moderate", visitors: 45, detail: "千狮林桥", audioDesc: "狮子林桥因桥上雕刻有形态各异的石狮子而得名，是海河上最具特色的桥梁之一。", openTime: "全天", ticket: "免费", address: "河北区狮子林桥" },
    { name: "永乐桥", desc: "天津八大名桥", img: "image/yongleqiao.png", tags: ["桥梁", "摩天轮"], crowd: "crowded", visitors: 190, detail: "桥轮合一", audioDesc: "永乐桥与天津之眼摩天轮相连，是世界唯一的桥上摩天轮。", openTime: "全天", ticket: "免费", address: "河北区永乐桥" },
    { name: "盘山", desc: "京东第一山", img: "image/panshan.jpg", tags: ["自然", "山景"], crowd: "moderate", visitors: 80, detail: "三盘暮雨胜景", audioDesc: "盘山位于蓟州区，是国家5A级景区，以三盘、五峰、八石著称。主峰挂月峰海拔864米，山势雄伟，林木繁茂。自东汉至清末，有众多帝王将相在此留下足迹。", openTime: "8:00-17:30", ticket: "60元", address: "蓟州区官庄镇盘山" },
    { name: "独乐寺", desc: "千年古刹", img: "image/dulesi.jpg", tags: ["历史", "佛教"], crowd: "moderate", visitors: 75, detail: "辽代建筑瑰宝", audioDesc: "独乐寺位于蓟州区，始建于唐代，辽代重建，是中国三大辽代寺院之一。寺内观音阁高23米，是国内最古老的木结构楼阁式建筑之一。", openTime: "8:00-17:30", ticket: "40元", address: "蓟州区武定街41号" },
    { name: "蓟州溶洞", desc: "地质奇观", img: "image/jizhourongdong.jpg", tags: ["自然", "溶洞"], crowd: "comfortable", visitors: 55, detail: "钟乳石奇观", audioDesc: "蓟州溶洞位于蓟州区，是华北地区最大的溶洞之一。洞内有各种形态的钟乳石、石笋、石柱，在灯光映照下美不胜收。", openTime: "8:00-17:00", ticket: "80元", address: "蓟州区罗庄子镇" }
];
const foodItems = [
    { name: "狗不理包子", desc: "十八个褶百年传承", img: "image/goubulibaozi.png", tags: ["经典"], detail: "鲜香浓郁", audioDesc: "狗不理包子每个包子18个褶，皮薄馅大，鲜嫩多汁。", openTime: "7:00-20:00", ticket: "人均50元", address: "和平区山东路77号" },
    { name: "煎饼果子", desc: "馃篦儿绿豆面", img: "image/jianbingguozi.png", tags: ["街头"], detail: "地道早餐", audioDesc: "天津煎饼果子以绿豆面摊制，配油条或薄脆，加鸡蛋面酱腐乳。", openTime: "5:00-12:00", ticket: "人均8元", address: "各区街头" },
    { name: "耳朵眼炸糕", desc: "外酥里糯", img: "image/erduoyanzhagao.png", tags: ["甜品"], detail: "津门三绝", audioDesc: "耳朵眼炸糕用糯米做皮，红小豆做馅，油炸后金黄酥脆。", openTime: "8:00-20:00", ticket: "人均12元", address: "红桥区耳朵眼胡同" },
    { name: "茶汤", desc: "津门传统甜品", img: "image/chatang.png", tags: ["甜品", "传统"], detail: "细腻香甜", audioDesc: "茶汤是天津传统小吃，用高粱面或糜子面冲制，配以红糖、白糖、芝麻等佐料。", openTime: "8:00-18:00", ticket: "人均10元", address: "南市食品街" },
    { name: "独面筋", desc: "津菜经典", img: "image/dumianjin.png", tags: ["津菜"], detail: "筋道入味", audioDesc: "独面筋是天津传统名菜，面筋块红烧后色泽红亮，口感筋道。", openTime: "10:00-21:00", ticket: "人均25元", address: "各津菜馆" },
    { name: "锅巴菜", desc: "天津独有", img: "image/guobacai.png", tags: ["早餐", "传统"], detail: "独特风味", audioDesc: "锅巴菜是天津独有的早餐，以小米煎饼切成小条，浇上卤汁配以香菜、麻酱等。", openTime: "6:00-12:00", ticket: "人均8元", address: "西北角" },
    { name: "老爆三", desc: "津菜三样", img: "image/laobaosan.png", tags: ["津菜"], detail: "鲜嫩可口", audioDesc: "老爆三是天津传统名菜，用羊肉、羊腰、羊肝爆炒而成。", openTime: "10:00-22:00", ticket: "人均45元", address: "各津菜馆" },
    { name: "十八街老麻花", desc: "津门三绝之一", img: "image/shibajielaomahua.png", tags: ["特产", "甜点"], detail: "酥脆香甜", audioDesc: "十八街麻花以面白、绵白糖、芝麻、桂花等为原料，炸制后酥脆香甜。", openTime: "8:00-20:00", ticket: "人均30元", address: "河西区十八街" },
    { name: "熟梨糕", desc: "童年记忆", img: "image/shouligao.png", tags: ["小吃", "甜点"], detail: "软糯香甜", audioDesc: "熟梨糕是天津传统小吃，用大米磨成粉蒸制，上面铺果酱，软糯可口。", openTime: "9:00-18:00", ticket: "人均8元", address: "古文化街" },
    { name: "贴饽饽熬小鱼", desc: "农家风味", img: "image/tieboboaoxiaoyu.png", tags: ["津菜", "农家"], detail: "鲜香四溢", audioDesc: "贴饽饽熬小鱼是天津传统农家菜，玉米面贴饼配河鱼同炖。", openTime: "10:00-21:00", ticket: "人均40元", address: "各津菜馆" },
    { name: "罾蹦鲤鱼", desc: "津菜代表作", img: "image/zengbengliyu.png", tags: ["津菜"], detail: "形美味鲜", audioDesc: "罾蹦鲤鱼是天津传统名菜，鲤鱼带鳞炸制后浇糖醋汁，酸甜可口。", openTime: "10:00-22:00", ticket: "人均60元", address: "红旗巷47号" },
    { name: "绿豆焖子", desc: "蓟州特色小吃", img: "image/lvdoumenzi.jpg", tags: ["小吃", "蓟州"], detail: "软糯Q弹", audioDesc: "绿豆焖子是蓟州地区传统小吃，用绿豆淀粉制成，煎至外焦里嫩，配以麻酱、蒜汁调味，是当地人最爱的街头美食之一。", openTime: "全天", ticket: "人均15元", address: "蓟州区各小吃店" },
    { name: "大饼卷圈", desc: "天津早餐标配", img: "image/dabingjuanquan.jpg", tags: ["早餐", "小吃"], detail: "酥脆可口", audioDesc: "大饼卷圈是天津经典早餐，大饼裹上酥脆的炸圈，配上面酱和咸菜，简单却美味，是老天津人的集体记忆。", openTime: "6:00-10:00", ticket: "人均6元", address: "各区早点摊" },
    { name: "小宝糖炒栗子", desc: "津门名栗", img: "image/xiaobaotangchaolizi.jpg", tags: ["特产", "零食"], detail: "香甜软糯", audioDesc: "小宝糖炒栗子是天津老字号糖炒栗子品牌，选用河北迁西优质板栗，用古法糖炒，栗子香甜软糯，是天津人秋冬季节最爱的零嘴。", openTime: "9:00-22:00", ticket: "人均25元", address: "南开区三马路" }
];
const intangibleItems = [
    { name: "泥人张彩塑", desc: "国家级非遗", img: "image/nirenzhangcaisu.png", tags: ["彩塑"], detail: "形神毕肖", audioDesc: "泥人张彩塑创始于清代，泥人面目神情栩栩如生，为天津一绝。", openTime: "9:00-17:00", ticket: "免费", address: "古文化街" },
    { name: "杨柳青木版年画", desc: "四百年历史", img: "image/yangliuqingmubannianhua.png", tags: ["年画"], detail: "色彩鲜艳", audioDesc: "杨柳青年画采用木版套印和手工彩绘结合，构图丰满。", openTime: "9:00-17:00", ticket: "30元", address: "西青区杨柳青镇" },
    { name: "天津相声", desc: "茶馆文化", img: "image/tianjinxiangsheng.png", tags: ["曲艺"], detail: "幽默哏都", audioDesc: "天津是相声发源地，茶馆听相声感受哏都幽默。", openTime: "19:30-21:30", ticket: "80元", address: "名流茶馆" },
    { name: "津派旗袍", desc: "津门服饰艺术", img: "image/jinpaiqipao.png", tags: ["服饰"], detail: "端庄典雅", audioDesc: "津派旗袍是天津传统服饰工艺，融合了京派旗袍的端庄与海派旗袍的时尚。", openTime: "9:00-18:00", ticket: "免费参观", address: "古文化街" },
    { name: "天津皇会", desc: "国家级非遗", img: "image/tianjinhuanghui.png", tags: ["民俗", "庙会"], detail: "百年庙会", audioDesc: "天津皇会源于清代妈祖娘娘生日庆典，是天津最盛大的传统庙会活动。", openTime: "农历三月廿三", ticket: "免费", address: "天后宫" },
    { name: "天津时调", desc: "地方曲艺", img: "image/tianjinshidiao.png", tags: ["曲艺"], detail: "津腔津调", audioDesc: "天津时调是天津特有的地方曲艺，用天津方言演唱，旋律优美。", openTime: "以实际演出为准", ticket: "60元起", address: "各茶馆" },
    { name: "风筝魏风筝", desc: "国家级非遗", img: "image/fengzhengweifengzheng.jpg", tags: ["手工艺"], detail: "精巧绝伦", audioDesc: "风筝魏风筝创始于清代，是天津著名的传统手工艺。其风筝造型精美、结构巧妙、放飞平稳，既是精美的工艺品，又是优良的飞行器。", openTime: "9:00-17:00", ticket: "免费参观", address: "古文化街" },
    { name: "天津葫芦烙画", desc: "火笔丹青", img: "image/tianjinhululaohua.jpg", tags: ["手工艺"], detail: "以火为墨", audioDesc: "天津葫芦烙画是天津传统手工艺，用特制的烙铁在葫芦表面烫烙出各种图案和文字。作品古朴典雅，具有独特的艺术风格。", openTime: "9:00-17:00", ticket: "免费参观", address: "古文化街" }
];
/*AI辅助生成：DeeepSeek-v3，2026.5.1*/
const hotelsData = {
    "五大道": [
        { name: "天津利顺德大饭店", type: "hotel", price: 450, stars: 5, address: "和平区台儿庄路189号", desc: "百年历史豪华酒店" },
        { name: "五大道民宿·小洋楼", type: "homestay", price: 180, stars: 4, address: "和平区重庆道24号", desc: "洋楼改造特色民宿" },
        { name: "和平宾馆", type: "hotel", price: 220, stars: 3, address: "和平区南京路108号", desc: "商务舒适之选" }
    ],
    "天津之眼": [
        { name: "天津海河悦榕庄", type: "hotel", price: 680, stars: 5, address: "河北区海河东路34号", desc: "河景奢华酒店" },
        { name: "天津之眼公寓", type: "homestay", price: 150, stars: 4, address: "河北区永乐桥附近", desc: "观景便利公寓" },
        { name: "格林豪泰", type: "hotel", price: 120, stars: 3, address: "河北区宙纬路15号", desc: "经济连锁酒店" }
    ],
    "古文化街": [
        { name: "天津泛太平洋大酒店", type: "hotel", price: 520, stars: 5, address: "南开区张自忠路1号", desc: "海河畔豪华酒店" },
        { name: "古文化街客栈", type: "homestay", price: 160, stars: 4, address: "南开区古文化街北口", desc: "古色古香民宿" },
        { name: "7天连锁酒店", type: "hotel", price: 110, stars: 3, address: "南开区东马路50号", desc: "性价比之选" }
    ],
    "意式风情区": [
        { name: "天津意大利风情街酒店", type: "hotel", price: 380, stars: 4, address: "河北区意式风情区光复道", desc: "意式风格酒店" },
        { name: "梁启超故居民宿", type: "homestay", price: 200, stars: 4, address: "河北区意式风情区民族路", desc: "名人故居改造" },
        { name: "如家酒店", type: "hotel", price: 130, stars: 3, address: "河北区建国道53号", desc: "连锁品质保障" }
    ],
    "滨江道步行街": [
        { name: "天津康莱德酒店", type: "hotel", price: 580, stars: 5, address: "和平区南京路128号", desc: "高端奢华体验" },
        { name: "滨江道公寓", type: "homestay", price: 170, stars: 4, address: "和平区滨江道商业街内", desc: "购物便利住宿" },
        { name: "汉庭酒店", type: "hotel", price: 120, stars: 3, address: "和平区山西路110号", desc: "经济实惠" }
    ],
    "南市食品街": [
        { name: "天津燕园国际酒店", type: "hotel", price: 420, stars: 5, address: "南开区育婴堂路78号", desc: "古典园林酒店" },
        { name: "南市客栈", type: "homestay", price: 140, stars: 3, address: "南开区南市食品街附近", desc: "美食街旁民宿" },
        { name: "锦江之星", type: "hotel", price: 100, stars: 3, address: "南开区南门外大街", desc: "经济型连锁" }
    ],
    "西北角": [
        { name: "天津利顺德大饭店", type: "hotel", price: 450, stars: 5, address: "和平区台儿庄路189号", desc: "百年传奇酒店" },
        { name: "西北角清真民宿", type: "homestay", price: 130, stars: 3, address: "红桥区西北角正街", desc: "清真特色民宿" },
        { name: "速8酒店", type: "hotel", price: 95, stars: 3, address: "红桥区芥园道", desc: "性价比高" }
    ],
    "北安桥": [
        { name: "天津利顺德大饭店", type: "hotel", price: 450, stars: 5, address: "和平区台儿庄路189号", desc: "海河岸边地标" },
        { name: "安和客栈", type: "homestay", price: 150, stars: 4, address: "和平区北安桥畔", desc: "桥头民宿" },
        { name: "格林联盟", type: "hotel", price: 110, stars: 3, address: "和平区进步道", desc: "商务出差首选" }
    ],
    "赤峰桥": [
        { name: "天津金融街瑞吉酒店", type: "hotel", price: 600, stars: 5, address: "河西区金融街8号", desc: "河西区核心位置" },
        { name: "赤峰桥公寓", type: "homestay", price: 160, stars: 4, address: "河西区赤峰桥旁", desc: "河景公寓" },
        { name: "如家精选", type: "hotel", price: 140, stars: 3, address: "河西区围堤道", desc: "品质连锁" }
    ],
    "大沽桥": [
        { name: "天津香格里拉大酒店", type: "hotel", price: 650, stars: 5, address: "和平区曲阜道1号", desc: "海河畔奢华体验" },
        { name: "大沽桥民宿", type: "homestay", price: 170, stars: 4, address: "和平区大沽桥附近", desc: "近海河景区" },
        { name: "全季酒店", type: "hotel", price: 150, stars: 3, address: "和平区蚌埠道", desc: "商务舒适" }
    ],
    "光华桥": [
        { name: "天津万丽天津宾馆", type: "hotel", price: 480, stars: 5, address: "河西区宾水道16号", desc: "湖泊景致酒店" },
        { name: "光华公寓", type: "homestay", price: 130, stars: 3, address: "河东区光华桥旁", desc: "交通便利" },
        { name: "锦江之星品尚", type: "hotel", price: 120, stars: 3, address: "河东区津塘路", desc: "经济型" }
    ],
    "解放桥": [
        { name: "天津金皇大酒店", type: "hotel", price: 380, stars: 5, address: "和平区南京路20号", desc: "解放桥旁地标" },
        { name: "解放桥客栈", type: "homestay", price: 160, stars: 4, address: "和平区解放桥入口", desc: "近天津站" },
        { name: "莫泰酒店", type: "hotel", price: 120, stars: 3, address: "和平区赤峰道", desc: "连锁品质" }
    ],
    "金汤桥": [
        { name: "天津海河英迪格酒店", type: "hotel", price: 520, stars: 5, address: "南开区东马路115号", desc: "古文化街畔" },
        { name: "金汤桥民宿", type: "homestay", price: 140, stars: 4, address: "南开区通庆街", desc: "历史街区民宿" },
        { name: "布丁酒店", type: "hotel", price: 90, stars: 3, address: "南开区城厢东路", desc: "年轻时尚" }
    ],
    "狮子林桥": [
        { name: "天津海河文华酒店", type: "hotel", price: 450, stars: 5, address: "河北区狮子林大街", desc: "狮子林桥旁" },
        { name: "狮子林民宿", type: "homestay", price: 130, stars: 3, address: "河北区狮子林桥畔", desc: "桥头民宿" },
        { name: "99旅馆连锁", type: "hotel", price: 80, stars: 2, address: "河北区金纬路", desc: "超经济型" }
    ],
    "永乐桥": [
        { name: "天津海河悦榕庄", type: "hotel", price: 680, stars: 5, address: "河北区海河东路34号", desc: "永乐桥畔奢华" },
        { name: "永乐公寓", type: "homestay", price: 150, stars: 4, address: "河北区永乐桥附近", desc: "近摩天轮" },
        { name: "汉庭Express", type: "hotel", price: 110, stars: 3, address: "河北区黄纬路", desc: "快捷连锁" }
    ],
    "盘山": [
        { name: "盘山游客中心酒店", type: "hotel", price: 280, stars: 4, address: "蓟州区官庄镇盘山景区", desc: "景区内官方酒店" },
        { name: "盘山农家院", type: "homestay", price: 100, stars: 3, address: "蓟州区官庄镇", desc: "当地特色农家院" },
        { name: "蓟州快捷酒店", type: "hotel", price: 90, stars: 3, address: "蓟州区渔阳南路", desc: "县城中心" }
    ],
    "独乐寺": [
        { name: "蓟州宾馆", type: "hotel", price: 260, stars: 4, address: "蓟州区武定街41号", desc: "独乐寺附近" },
        { name: "独乐人家民宿", type: "homestay", price: 120, stars: 4, address: "蓟州区武定街", desc: "古寺脚下民宿" },
        { name: "如家酒店", type: "hotel", price: 100, stars: 3, address: "蓟州区中昌北路", desc: "连锁品质" }
    ],
    "蓟州溶洞": [
        { name: "蓟州溶洞度假酒店", type: "hotel", price: 320, stars: 4, address: "蓟州区罗庄子镇", desc: "溶洞景区酒店" },
        { name: "蓟州山水民宿", type: "homestay", price: 140, stars: 4, address: "蓟州区罗庄子镇", desc: "山水间特色民宿" },
        { name: "农家乐", type: "homestay", price: 80, stars: 2, address: "蓟州区溶洞附近村", desc: "体验乡村生活" }
    ]
};


const restaurantsData = {
    "狗不理包子": [
        { name: "狗不理包子总店", address: "和平区山东路77号", desc: "百年老店正宗口味", specialty: "狗不理包子", price: "人均50元" },
        { name: "狗不理河东店", address: "河东区十一经路68号", desc: "河东分店品质如一", specialty: "狗不理包子", price: "人均48元" },
        { name: "狗不理南开店", address: "南开区东马路1号", desc: "古文化街附近", specialty: "狗不理包子", price: "人均52元" }
    ],
    "煎饼果子": [
        { name: "德宏煎饼果子", address: "红桥区西北角", desc: "正宗绿豆面煎饼", specialty: "煎饼果子", price: "人均8元" },
        { name: "二嫂子煎饼果子", address: "南开区西湖道", desc: "网红煎饼店", specialty: "煎饼果子", price: "人均12元" },
        { name: "南大煎饼", address: "南开区卫津路94号", desc: "大学生最爱", specialty: "煎饼果子", price: "人均7元" }
    ],
    "耳朵眼炸糕": [
        { name: "耳朵眼炸糕总店", address: "红桥区耳朵眼胡同1号", desc: "百年老字号", specialty: "耳朵眼炸糕", price: "人均12元" },
        { name: "耳朵眼炸糕古文化街店", address: "南开区古文化街", desc: "景区直营店", specialty: "耳朵眼炸糕", price: "人均14元" },
        { name: "耳朵眼炸糕南市店", address: "南开区南市食品街", desc: "美食街分店", specialty: "耳朵眼炸糕", price: "人均12元" }
    ],
    "茶汤": [
        { name: "三合益茶汤", address: "南开区南市食品街", desc: "传统茶汤老店", specialty: "茶汤", price: "人均10元" },
        { name: "二姐茶汤", address: "古文化街", desc: "津门传统甜品", specialty: "茶汤", price: "人均10元" },
        { name: "老北塘茶汤", address: "河北区意式风情区", desc: "甜品小店", specialty: "茶汤", price: "人均8元" }
    ],
    "独面筋": [
        { name: "津菜馆", address: "南开区古文化街58号", desc: "正宗津菜馆", specialty: "独面筋", price: "人均25元" },
        { name: "老胜香包子铺", address: "和平区沈阳道", desc: "津菜老店", specialty: "独面筋", price: "人均28元" },
        { name: "红旗饭庄", address: "红桥区红旗路47号", desc: "天津老字号", specialty: "独面筋", price: "人均30元" }
    ],
    "锅巴菜": [
        { name: "大福来锅巴菜", address: "红桥区西北角", desc: "锅巴菜发源地", specialty: "锅巴菜", price: "人均8元" },
        { name: "至美斋锅巴菜", address: "南开区古文化街", desc: "百年老店", specialty: "锅巴菜", price: "人均8元" },
        { name: "正味锅巴菜", address: "红桥区小伙巷", desc: "传统风味", specialty: "锅巴菜", price: "人均7元" }
    ],
    "老爆三": [
        { name: "津泰老爆三", address: "和平区津塔购物中心", desc: "正宗老爆三", specialty: "老爆三", price: "人均45元" },
        { name: "新兴老爆三", address: "南开区卫津路", desc: "学生族最爱", specialty: "老爆三", price: "人均40元" },
        { name: "红旗饭庄", address: "红桥区红旗路47号", desc: "天津老字号", specialty: "老爆三", price: "人均48元" }
    ],
    "十八街老麻花": [
        { name: "十八街麻花总店", address: "河西区桂发祥十八街", desc: "麻花发源地", specialty: "十八街麻花", price: "人均30元" },
        { name: "十八街麻花古文化街店", address: "南开区古文化街", desc: "景区直营", specialty: "十八街麻花", price: "人均32元" },
        { name: "十八街麻花天津站店", address: "河北区天津站后广场", desc: "方便带走", specialty: "十八街麻花", price: "人均28元" }
    ],
    "熟梨糕": [
        { name: "古文化街熟梨糕", address: "南开区古文化街", desc: "传统小吃摊", specialty: "熟梨糕", price: "人均8元" },
        { name: "南市食品街熟梨糕", address: "南开区南市食品街", desc: "津味小吃", specialty: "熟梨糕", price: "人均8元" },
        { name: "二姐熟梨糕", address: "红桥区西北角", desc: "童年味道", specialty: "熟梨糕", price: "人均6元" }
    ],
    "贴饽饽熬小鱼": [
        { name: "津老味农家菜", address: "蓟州区渔阳镇", desc: "正宗农家风味", specialty: "贴饽饽熬小鱼", price: "人均40元" },
        { name: "盘山农家院", address: "蓟州区官庄镇盘山", desc: "景区农家菜", specialty: "贴饽饽熬小鱼", price: "人均42元" },
        { name: "古文化街津菜馆", address: "南开区古文化街58号", desc: "津菜馆", specialty: "贴饽饽熬小鱼", price: "人均45元" }
    ],
    "罾蹦鲤鱼": [
        { name: "红旗饭庄", address: "红桥区红旗路47号", desc: "罾蹦鲤鱼发源地", specialty: "罾蹦鲤鱼", price: "人均60元" },
        { name: "津菜馆", address: "南开区古文化街58号", desc: "正宗津菜馆", specialty: "罾蹦鲤鱼", price: "人均58元" },
        { name: "老胜香", address: "和平区沈阳道", desc: "老字号津菜", specialty: "罾蹦鲤鱼", price: "人均62元" }
    ],
    "绿豆焖子": [
        { name: "蓟州焖子王", address: "蓟州区渔阳镇", desc: "蓟州特色", specialty: "绿豆焖子", price: "人均15元" },
        { name: "盘山小吃店", address: "蓟州区官庄镇盘山", desc: "景区小吃", specialty: "绿豆焖子", price: "人均15元" },
        { name: "蓟州美食广场", address: "蓟州区中昌北路", desc: "当地美食集合", specialty: "绿豆焖子", price: "人均12元" }
    ],
    "大饼卷圈": [
        { name: "西北角大饼卷圈", address: "红桥区西北角正街", desc: "正宗回民早餐", specialty: "大饼卷圈", price: "人均6元" },
        { name: "南大食堂", address: "南开区卫津路94号", desc: "校园美食", specialty: "大饼卷圈", price: "人均5元" },
        { name: "和平区早点铺", address: "和平区四平西道", desc: "老字号早点", specialty: "大饼卷圈", price: "人均6元" }
    ],
    "小宝糖炒栗子": [
        { name: "小宝糖炒栗子总店", address: "南开区三马路", desc: "老字号招牌", specialty: "糖炒栗子", price: "人均25元" },
        { name: "小宝栗子古文化街店", address: "南开区古文化街", desc: "景区分店", specialty: "糖炒栗子", price: "人均28元" },
        { name: "小宝栗子滨江道店", address: "和平区滨江道", desc: "商业街分店", specialty: "糖炒栗子", price: "人均25元" }
    ]
};

const scenicRestaurantsData = {
    "五大道": [
        { name: "成桂西餐厅", address: "和平区河北路287号", desc: "天津老字号西餐厅", specialty: "罐焖牛肉、红菜汤", price: "人均100元" },
        { name: "桂园餐厅", address: "和平区成都道101号", desc: "天津老牌清真饭馆", specialty: "黑蒜子牛肉粒", price: "人均80元" },
        { name: "清真·老字号菜馆", address: "和平区重庆道", desc: "地道天津家常菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均70元" }
    ],
    "天津之眼": [
        { name: "津门故里饭庄", address: "河北区五马路永乐桥附近", desc: "地道津菜", specialty: "狗不理包子、锅巴菜", price: "人均60元" },
        { name: "海河人家", address: "河北区海河东路", desc: "河景餐厅", specialty: "天津海鲜、贴饽饽熬小鱼", price: "人均90元" },
        { name: "清真老馆子", address: "河北区金纬路", desc: "地道回民菜", specialty: "手抓饭、烤羊腿", price: "人均50元" }
    ],
    "古文化街": [
        { name: "石头门坎素包", address: "南开区古文化街", desc: "百年老字号素包子", specialty: "素包、茶汤", price: "人均30元" },
        { name: "正阳春烤鸭", address: "南开区和平路", desc: "天津烤鸭老字号", specialty: "正阳春烤鸭", price: "人均120元" },
        { name: "津菜馆", address: "南开区古文化街58号", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均75元" }
    ],
    "意式风情区": [
        { name: "意大利餐厅", address: "河北区意式风情区马可波罗广场", desc: "正宗意大利菜", specialty: "意面、披萨", price: "人均150元" },
        { name: "成桂意式餐厅", address: "河北区意式风情区", desc: "融合中西美食", specialty: "牛排、红酒", price: "人均130元" },
        { name: "天津小馆", address: "河北区建国道", desc: "本地特色餐馆", specialty: "天津家常菜", price: "人均60元" }
    ],
    "滨江道步行街": [
        { name: "正阳春烤鸭", address: "和平区辽宁路146号", desc: "总店就在此", specialty: "正阳春烤鸭", price: "人均110元" },
        { name: "老天津味馆", address: "和平区滨江道恒隆广场", desc: "汇聚天津美食", specialty: "各种天津小吃", price: "人均80元" },
        { name: "老字号回民餐馆", address: "和平区劝业场附近", desc: "正宗回民菜", specialty: "水爆肚、酱牛肉", price: "人均65元" }
    ],
    "南市食品街": [
        { name: "狗不理包子总店", address: "南开区南市食品街", desc: "百年老字号", specialty: "狗不理包子", price: "人均70元" },
        { name: "耳朵眼炸糕总店", address: "南开区南市食品街", desc: "天津三绝之一", specialty: "耳朵眼炸糕", price: "人均20元" },
        { name: "十八街麻花总店", address: "南开区南市食品街", desc: "正宗十八街麻花", specialty: "十八街麻花", price: "人均30元" }
    ],
    "西北角": [
        { name: "清真·德宏煎饼果子", address: "红桥区西北角正街", desc: "正宗绿豆面煎饼", specialty: "煎饼果子", price: "人均10元" },
        { name: "大福来锅巴菜", address: "红桥区西北角", desc: "锅巴菜发源地", specialty: "锅巴菜、馃篦儿", price: "人均15元" },
        { name: "清真·老字号菜馆", address: "红桥区西北角", desc: "地道回民菜", specialty: "手抓饭、酱牛肉", price: "人均55元" }
    ],
    "北安桥": [
        { name: "津泰饭庄", address: "和平区进步道", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均70元" },
        { name: "海河人家", address: "和平区北安桥畔", desc: "河景餐厅", specialty: "海河鲜、贴饽饽熬小鱼", price: "人均85元" },
        { name: "意式咖啡屋", address: "和平区意式风情区", desc: "休闲餐饮", specialty: "咖啡、简餐", price: "人均40元" }
    ],
    "赤峰桥": [
        { name: "河西饭庄", address: "河西区围堤道", desc: "天津老字号", specialty: "津菜、海鲜", price: "人均90元" },
        { name: "天津家常菜馆", address: "河西区友谊路", desc: "本地家常菜", specialty: "老爆三、独面筋", price: "人均60元" },
        { name: "清真·回回馆", address: "河西区越秀路", desc: "清真美食", specialty: "酱牛肉、水爆肚", price: "人均70元" }
    ],
    "大沽桥": [
        { name: "天津海河文华酒店·餐厅", address: "和平区曲阜道1号", desc: "高档餐厅", specialty: "中西美食", price: "人均200元" },
        { name: "津门老字号", address: "和平区大沽北路", desc: "传统津菜", specialty: "罾蹦鲤鱼、老爆三", price: "人均80元" },
        { name: "意式风情餐厅", address: "和平区意式风情区", desc: "意式美食", specialty: "披萨、意面", price: "人均120元" }
    ],
    "光华桥": [
        { name: "天津万丽天津宾馆·餐厅", address: "河西区宾水道16号", desc: "高档餐厅", specialty: "中西美食", price: "人均180元" },
        { name: "河西家常菜馆", address: "河西区光华桥附近", desc: "本地家常菜", specialty: "天津特色菜", price: "人均50元" },
        { name: "海鲜酒楼", address: "河西区小海地", desc: "天津海鲜", specialty: "各种海鲜", price: "人均120元" }
    ],
    "解放桥": [
        { name: "天津利顺德大饭店·餐厅", address: "和平区台儿庄路189号", desc: "百年酒店餐厅", specialty: "中西美食", price: "人均200元" },
        { name: "津泰饭庄", address: "和平区赤峰道", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均70元" },
        { name: "正阳春烤鸭", address: "和平区和平路", desc: "天津烤鸭", specialty: "正阳春烤鸭", price: "人均100元" }
    ],
    "金汤桥": [
        { name: "古文化街美食", address: "南开区古文化街", desc: "各种小吃", specialty: "熟梨糕、茶汤", price: "人均30元" },
        { name: "石头门坎素包", address: "南开区古文化街", desc: "素包子", specialty: "素包", price: "人均25元" },
        { name: "津菜馆", address: "南开区通庆街", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均65元" }
    ],
    "狮子林桥": [
        { name: "天津海河文华酒店·餐厅", address: "河北区狮子林大街", desc: "河景餐厅", specialty: "中西美食", price: "人均160元" },
        { name: "清真·老馆子", address: "河北区金纬路", desc: "回民菜", specialty: "酱牛肉、手抓饭", price: "人均50元" },
        { name: "天津小吃店", address: "河北区狮子林桥畔", desc: "各种天津小吃", specialty: "煎饼果子、锅巴菜", price: "人均20元" }
    ],
    "永乐桥": [
        { name: "天津之眼周边餐馆", address: "河北区五马路永乐桥附近", desc: "天津家常菜", specialty: "各种天津菜", price: "人均60元" },
        { name: "清真·回回馆", address: "河北区黄纬路", desc: "回民菜", specialty: "手抓饭、酱牛肉", price: "人均55元" },
        { name: "天津小吃城", address: "河北区中山路", desc: "汇聚天津小吃", specialty: "各种小吃", price: "人均40元" }
    ],
    "盘山": [
        { name: "盘山游客中心餐厅", address: "蓟州区官庄镇盘山景区", desc: "景区餐厅", specialty: "蓟县特色菜", price: "人均60元" },
        { name: "盘山农家院", address: "蓟州区官庄镇", desc: "农家菜", specialty: "贴饽饽熬小鱼", price: "人均45元" },
        { name: "蓟县特色菜馆", address: "蓟州区渔阳镇", desc: "蓟县菜", specialty: "蓟县特色", price: "人均50元" }
    ],
    "独乐寺": [
        { name: "蓟州宾馆·餐厅", address: "蓟州区武定街41号", desc: "酒店餐厅", specialty: "蓟县特色菜", price: "人均70元" },
        { name: "独乐人家菜馆", address: "蓟州区武定街", desc: "本地餐馆", specialty: "蓟县家常菜", price: "人均50元" },
        { name: "蓟县小吃店", address: "蓟州区渔阳镇", desc: "各种小吃", specialty: "绿豆焖子", price: "人均20元" }
    ],
    "蓟州溶洞": [
        { name: "蓟州溶洞度假酒店·餐厅", address: "蓟州区罗庄子镇", desc: "景区餐厅", specialty: "蓟县特色菜", price: "人均80元" },
        { name: "山水人家", address: "蓟州区罗庄子镇", desc: "农家菜", specialty: "贴饽饽熬小鱼", price: "人均50元" },
        { name: "蓟县特色小吃", address: "蓟州区溶洞附近村", desc: "本地小吃", specialty: "各种蓟县小吃", price: "人均30元" }
    ]
};
//AI辅助生成：豆包，2026.5.24
let currentSpeech = null, isSpeaking = false, currentItem = null, currentNavAddress = '';
let currentTemperature = null; // 当前温度

function showCheckInCelebration() {
    const celebration = document.createElement('div');
    celebration.className = 'checkin-celebration';
    celebration.innerHTML = `
        <div class="confetti">🎉</div>
        <div class="confetti">🌟</div>
        <div class="confetti">✨</div>
        <div class="confetti">🎊</div>
    `;
    document.body.appendChild(celebration);
    setTimeout(() => celebration.remove(), 2000);
}

function showToast(msg) {
    let t = document.createElement('div');
    t.className = 'toast';
    t.innerText = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2000);
}

function shareItem(type, idx) {
    let item = type === 'scenic' ? scenicSpots[idx] : type === 'food' ? foodItems[idx] : intangibleItems[idx];
    if (navigator.share) {
        navigator.share({ title: item.name, text: item.desc });
    } else {
        navigator.clipboard.writeText(`${item.name} - ${item.desc}`).then(() => showToast('链接已复制')).catch(() => showToast('复制失败'));
    }
}

function getCrowdLabel(crowd) {
    return crowd === 'comfortable' ? '舒适' : crowd === 'moderate' ? '适中' : '拥挤';
}

function getBadgeBg() {
    const body = document.body;
    if (body.classList.contains('spring')) return '#ffc2d1';
    if (body.classList.contains('summer')) return '#b3e5fc';
    if (body.classList.contains('autumn')) return '#ffe0b2';
    if (body.classList.contains('winter')) return '#e3f2fd';
    if (body.classList.contains('dark')) return '#4ecdc4';
    return '#e9b35f';
}

function renderCards(items, containerId, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = items.map((item, idx) => {
        const badgeBg = getBadgeBg();
        return `<div class="card" data-type="${type}" data-idx="${idx}">
            <div class="card-img" style="background-image:url(${item.img})">
            </div>
            <div class="card-actions">
                <button class="action-btn share-btn" onclick="event.stopPropagation();shareItem('${type}',${idx})"><i class="fas fa-share-alt"></i></button>
            </div>
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <div>
                    <span class="badge" style="background:${badgeBg}">${item.tags[0]}</span>
                    ${item.crowd ? `<span class="crowd-tag ${item.crowd}">${getCrowdLabel(item.crowd)}</span>` : ''}
                </div>
            </div>
        </div>`;
    }).join('');

    container.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.action-btn')) return;
            const t = card.dataset.type;
            const idx = parseInt(card.dataset.idx);
            const item = t === 'scenic' ? scenicSpots[idx] : t === 'food' ? foodItems[idx] : intangibleItems[idx];
            openModal(item);
        });
    });
}

function rerenderAllCards() {
    renderCards(scenicSpots, 'scenicGrid', 'scenic');
    renderCards(foodItems, 'foodGrid', 'food');
    renderCards(intangibleItems, 'intangibleGrid', 'intangible');
}

function getItemType(item) {
    if (scenicSpots.some(s => s.name === item.name)) return 'scenic';
    if (foodItems.some(f => f.name === item.name)) return 'food';
    if (intangibleItems.some(i => i.name === item.name)) return 'intangible';
    return 'unknown';
}

function openModal(item) {
    currentItem = item;
    stopAudio();
    document.getElementById('modalImg').style.backgroundImage = `url(${item.img})`;
    document.getElementById('modalTitle').innerText = item.name;
    
    const itemType = getItemType(item);
    let extraContent = '';
    
    if (itemType === 'scenic' && hotelsData[item.name]) {
        const hotels = hotelsData[item.name];
        extraContent += `<div style="margin-top:16px;">
            <h4 style="margin-bottom:10px;font-size:1rem;">🏨 附近酒店民宿</h4>
            ${hotels.map(h => `
                <div class="hotel-card" onclick="navigateTo('${h.address}')">
                    <div class="hotel-header">
                        <span class="hotel-name">${h.name}</span>
                        <span class="hotel-price">¥${h.price}<span style="font-size:0.75rem;color:#999;">/人</span></span>
                    </div>
                    <div>
                        <span class="hotel-type ${h.type}">${h.type === 'hotel' ? '酒店' : '民宿'}</span>
                        <span class="stars">${'⭐'.repeat(h.stars)}</span>
                    </div>
                    <div style="font-size:0.8rem;margin-top:4px;color:#666;">${h.desc}</div>
                    <div class="restaurant-address">📍 ${h.address}</div>
                </div>
            `).join('')}
        </div>`;
    }
    
    if (itemType === 'scenic' && {
        "五大道": [
            { name: "成桂西餐厅", address: "和平区河北路287号", desc: "天津老字号西餐厅", specialty: "罐焖牛肉、红菜汤", price: "人均100元" },
            { name: "桂园餐厅", address: "和平区成都道101号", desc: "天津老牌清真饭馆", specialty: "黑蒜子牛肉粒", price: "人均80元" },
            { name: "清真·老字号菜馆", address: "和平区重庆道", desc: "地道天津家常菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均70元" }
        ],
        "天津之眼": [
            { name: "津门故里饭庄", address: "河北区五马路永乐桥附近", desc: "地道津菜", specialty: "狗不理包子、锅巴菜", price: "人均60元" },
            { name: "海河人家", address: "河北区海河东路", desc: "河景餐厅", specialty: "天津海鲜、贴饽饽熬小鱼", price: "人均90元" },
            { name: "清真老馆子", address: "河北区金纬路", desc: "地道回民菜", specialty: "手抓饭、烤羊腿", price: "人均50元" }
        ],
        "古文化街": [
            { name: "石头门坎素包", address: "南开区古文化街", desc: "百年老字号素包子", specialty: "素包、茶汤", price: "人均30元" },
            { name: "正阳春烤鸭", address: "南开区和平路", desc: "天津烤鸭老字号", specialty: "正阳春烤鸭", price: "人均120元" },
            { name: "津菜馆", address: "南开区古文化街58号", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均75元" }
        ],
        "意式风情区": [
            { name: "意大利餐厅", address: "河北区意式风情区马可波罗广场", desc: "正宗意大利菜", specialty: "意面、披萨", price: "人均150元" },
            { name: "成桂意式餐厅", address: "河北区意式风情区", desc: "融合中西美食", specialty: "牛排、红酒", price: "人均130元" },
            { name: "天津小馆", address: "河北区建国道", desc: "本地特色餐馆", specialty: "天津家常菜", price: "人均60元" }
        ],
        "滨江道步行街": [
            { name: "正阳春烤鸭", address: "和平区辽宁路146号", desc: "总店就在此", specialty: "正阳春烤鸭", price: "人均110元" },
            { name: "老天津味馆", address: "和平区滨江道恒隆广场", desc: "汇聚天津美食", specialty: "各种天津小吃", price: "人均80元" },
            { name: "老字号回民餐馆", address: "和平区劝业场附近", desc: "正宗回民菜", specialty: "水爆肚、酱牛肉", price: "人均65元" }
        ],
        "南市食品街": [
            { name: "狗不理包子总店", address: "南开区南市食品街", desc: "百年老字号", specialty: "狗不理包子", price: "人均70元" },
            { name: "耳朵眼炸糕总店", address: "南开区南市食品街", desc: "天津三绝之一", specialty: "耳朵眼炸糕", price: "人均20元" },
            { name: "十八街麻花总店", address: "南开区南市食品街", desc: "正宗十八街麻花", specialty: "十八街麻花", price: "人均30元" }
        ],
        "西北角": [
            { name: "清真·德宏煎饼果子", address: "红桥区西北角正街", desc: "正宗绿豆面煎饼", specialty: "煎饼果子", price: "人均10元" },
            { name: "大福来锅巴菜", address: "红桥区西北角", desc: "锅巴菜发源地", specialty: "锅巴菜、馃篦儿", price: "人均15元" },
            { name: "清真·老字号菜馆", address: "红桥区西北角", desc: "地道回民菜", specialty: "手抓饭、酱牛肉", price: "人均55元" }
        ],
        "北安桥": [
            { name: "津泰饭庄", address: "和平区进步道", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均70元" },
            { name: "海河人家", address: "和平区北安桥畔", desc: "河景餐厅", specialty: "海河鲜、贴饽饽熬小鱼", price: "人均85元" },
            { name: "意式咖啡屋", address: "和平区意式风情区", desc: "休闲餐饮", specialty: "咖啡、简餐", price: "人均40元" }
        ],
        "赤峰桥": [
            { name: "河西饭庄", address: "河西区围堤道", desc: "天津老字号", specialty: "津菜、海鲜", price: "人均90元" },
            { name: "天津家常菜馆", address: "河西区友谊路", desc: "本地家常菜", specialty: "老爆三、独面筋", price: "人均60元" },
            { name: "清真·回回馆", address: "河西区越秀路", desc: "清真美食", specialty: "酱牛肉、水爆肚", price: "人均70元" }
        ],
        "大沽桥": [
            { name: "天津海河文华酒店·餐厅", address: "和平区曲阜道1号", desc: "高档餐厅", specialty: "中西美食", price: "人均200元" },
            { name: "津门老字号", address: "和平区大沽北路", desc: "传统津菜", specialty: "罾蹦鲤鱼、老爆三", price: "人均80元" },
            { name: "意式风情餐厅", address: "和平区意式风情区", desc: "意式美食", specialty: "披萨、意面", price: "人均120元" }
        ],
        "光华桥": [
            { name: "天津万丽天津宾馆·餐厅", address: "河西区宾水道16号", desc: "高档餐厅", specialty: "中西美食", price: "人均180元" },
            { name: "河西家常菜馆", address: "河西区光华桥附近", desc: "本地家常菜", specialty: "天津特色菜", price: "人均50元" },
            { name: "海鲜酒楼", address: "河西区小海地", desc: "天津海鲜", specialty: "各种海鲜", price: "人均120元" }
        ],
        "解放桥": [
            { name: "天津利顺德大饭店·餐厅", address: "和平区台儿庄路189号", desc: "百年酒店餐厅", specialty: "中西美食", price: "人均200元" },
            { name: "津泰饭庄", address: "和平区赤峰道", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均70元" },
            { name: "正阳春烤鸭", address: "和平区和平路", desc: "天津烤鸭", specialty: "正阳春烤鸭", price: "人均100元" }
        ],
        "金汤桥": [
            { name: "古文化街美食", address: "南开区古文化街", desc: "各种小吃", specialty: "熟梨糕、茶汤", price: "人均30元" },
            { name: "石头门坎素包", address: "南开区古文化街", desc: "素包子", specialty: "素包", price: "人均25元" },
            { name: "津菜馆", address: "南开区通庆街", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均65元" }
        ],
        "狮子林桥": [
            { name: "天津海河文华酒店·餐厅", address: "河北区狮子林大街", desc: "河景餐厅", specialty: "中西美食", price: "人均160元" },
            { name: "清真·老馆子", address: "河北区金纬路", desc: "回民菜", specialty: "酱牛肉、手抓饭", price: "人均50元" },
            { name: "天津小吃店", address: "河北区狮子林桥畔", desc: "各种天津小吃", specialty: "煎饼果子、锅巴菜", price: "人均20元" }
        ],
        "永乐桥": [
            { name: "天津之眼周边餐馆", address: "河北区五马路永乐桥附近", desc: "天津家常菜", specialty: "各种天津菜", price: "人均60元" },
            { name: "清真·回回馆", address: "河北区黄纬路", desc: "回民菜", specialty: "手抓饭、酱牛肉", price: "人均55元" },
            { name: "天津小吃城", address: "河北区中山路", desc: "汇聚天津小吃", specialty: "各种小吃", price: "人均40元" }
        ],
        "盘山": [
            { name: "盘山游客中心餐厅", address: "蓟州区官庄镇盘山景区", desc: "景区餐厅", specialty: "蓟县特色菜", price: "人均60元" },
            { name: "盘山农家院", address: "蓟州区官庄镇", desc: "农家菜", specialty: "贴饽饽熬小鱼", price: "人均45元" },
            { name: "蓟县特色菜馆", address: "蓟州区渔阳镇", desc: "蓟县菜", specialty: "蓟县特色", price: "人均50元" }
        ],
        "独乐寺": [
            { name: "蓟州宾馆·餐厅", address: "蓟州区武定街41号", desc: "酒店餐厅", specialty: "蓟县特色菜", price: "人均70元" },
            { name: "独乐人家菜馆", address: "蓟州区武定街", desc: "本地餐馆", specialty: "蓟县家常菜", price: "人均50元" },
            { name: "蓟县小吃店", address: "蓟州区渔阳镇", desc: "各种小吃", specialty: "绿豆焖子", price: "人均20元" }
        ],
        "蓟州溶洞": [
            { name: "蓟州溶洞度假酒店·餐厅", address: "蓟州区罗庄子镇", desc: "景区餐厅", specialty: "蓟县特色菜", price: "人均80元" },
            { name: "山水人家", address: "蓟州区罗庄子镇", desc: "农家菜", specialty: "贴饽饽熬小鱼", price: "人均50元" },
            { name: "蓟县特色小吃", address: "蓟州区溶洞附近村", desc: "本地小吃", specialty: "各种蓟县小吃", price: "人均30元" }
        ]
    }[item.name]) {
        const restaurants = {
            "五大道": [
                { name: "成桂西餐厅", address: "和平区河北路287号", desc: "天津老字号西餐厅", specialty: "罐焖牛肉、红菜汤", price: "人均100元" },
                { name: "桂园餐厅", address: "和平区成都道101号", desc: "天津老牌清真饭馆", specialty: "黑蒜子牛肉粒", price: "人均80元" },
                { name: "清真·老字号菜馆", address: "和平区重庆道", desc: "地道天津家常菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均70元" }
            ],
            "天津之眼": [
                { name: "津门故里饭庄", address: "河北区五马路永乐桥附近", desc: "地道津菜", specialty: "狗不理包子、锅巴菜", price: "人均60元" },
                { name: "海河人家", address: "河北区海河东路", desc: "河景餐厅", specialty: "天津海鲜、贴饽饽熬小鱼", price: "人均90元" },
                { name: "清真老馆子", address: "河北区金纬路", desc: "地道回民菜", specialty: "手抓饭、烤羊腿", price: "人均50元" }
            ],
            "古文化街": [
                { name: "石头门坎素包", address: "南开区古文化街", desc: "百年老字号素包子", specialty: "素包、茶汤", price: "人均30元" },
                { name: "正阳春烤鸭", address: "南开区和平路", desc: "天津烤鸭老字号", specialty: "正阳春烤鸭", price: "人均120元" },
                { name: "津菜馆", address: "南开区古文化街58号", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均75元" }
            ],
            "意式风情区": [
                { name: "意大利餐厅", address: "河北区意式风情区马可波罗广场", desc: "正宗意大利菜", specialty: "意面、披萨", price: "人均150元" },
                { name: "成桂意式餐厅", address: "河北区意式风情区", desc: "融合中西美食", specialty: "牛排、红酒", price: "人均130元" },
                { name: "天津小馆", address: "河北区建国道", desc: "本地特色餐馆", specialty: "天津家常菜", price: "人均60元" }
            ],
            "滨江道步行街": [
                { name: "正阳春烤鸭", address: "和平区辽宁路146号", desc: "总店就在此", specialty: "正阳春烤鸭", price: "人均110元" },
                { name: "老天津味馆", address: "和平区滨江道恒隆广场", desc: "汇聚天津美食", specialty: "各种天津小吃", price: "人均80元" },
                { name: "老字号回民餐馆", address: "和平区劝业场附近", desc: "正宗回民菜", specialty: "水爆肚、酱牛肉", price: "人均65元" }
            ],
            "南市食品街": [
                { name: "狗不理包子总店", address: "南开区南市食品街", desc: "百年老字号", specialty: "狗不理包子", price: "人均70元" },
                { name: "耳朵眼炸糕总店", address: "南开区南市食品街", desc: "天津三绝之一", specialty: "耳朵眼炸糕", price: "人均20元" },
                { name: "十八街麻花总店", address: "南开区南市食品街", desc: "正宗十八街麻花", specialty: "十八街麻花", price: "人均30元" }
            ],
            "西北角": [
                { name: "清真·德宏煎饼果子", address: "红桥区西北角正街", desc: "正宗绿豆面煎饼", specialty: "煎饼果子", price: "人均10元" },
                { name: "大福来锅巴菜", address: "红桥区西北角", desc: "锅巴菜发源地", specialty: "锅巴菜、馃篦儿", price: "人均15元" },
                { name: "清真·老字号菜馆", address: "红桥区西北角", desc: "地道回民菜", specialty: "手抓饭、酱牛肉", price: "人均55元" }
            ],
            "北安桥": [
                { name: "津泰饭庄", address: "和平区进步道", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均70元" },
                { name: "海河人家", address: "和平区北安桥畔", desc: "河景餐厅", specialty: "海河鲜、贴饽饽熬小鱼", price: "人均85元" },
                { name: "意式咖啡屋", address: "和平区意式风情区", desc: "休闲餐饮", specialty: "咖啡、简餐", price: "人均40元" }
            ],
            "赤峰桥": [
                { name: "河西饭庄", address: "河西区围堤道", desc: "天津老字号", specialty: "津菜、海鲜", price: "人均90元" },
                { name: "天津家常菜馆", address: "河西区友谊路", desc: "本地家常菜", specialty: "老爆三、独面筋", price: "人均60元" },
                { name: "清真·回回馆", address: "河西区越秀路", desc: "清真美食", specialty: "酱牛肉、水爆肚", price: "人均70元" }
            ],
            "大沽桥": [
                { name: "天津海河文华酒店·餐厅", address: "和平区曲阜道1号", desc: "高档餐厅", specialty: "中西美食", price: "人均200元" },
                { name: "津门老字号", address: "和平区大沽北路", desc: "传统津菜", specialty: "罾蹦鲤鱼、老爆三", price: "人均80元" },
                { name: "意式风情餐厅", address: "和平区意式风情区", desc: "意式美食", specialty: "披萨、意面", price: "人均120元" }
            ],
            "光华桥": [
                { name: "天津万丽天津宾馆·餐厅", address: "河西区宾水道16号", desc: "高档餐厅", specialty: "中西美食", price: "人均180元" },
                { name: "河西家常菜馆", address: "河西区光华桥附近", desc: "本地家常菜", specialty: "天津特色菜", price: "人均50元" },
                { name: "海鲜酒楼", address: "河西区小海地", desc: "天津海鲜", specialty: "各种海鲜", price: "人均120元" }
            ],
            "解放桥": [
                { name: "天津利顺德大饭店·餐厅", address: "和平区台儿庄路189号", desc: "百年酒店餐厅", specialty: "中西美食", price: "人均200元" },
                { name: "津泰饭庄", address: "和平区赤峰道", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均70元" },
                { name: "正阳春烤鸭", address: "和平区和平路", desc: "天津烤鸭", specialty: "正阳春烤鸭", price: "人均100元" }
            ],
            "金汤桥": [
                { name: "古文化街美食", address: "南开区古文化街", desc: "各种小吃", specialty: "熟梨糕、茶汤", price: "人均30元" },
                { name: "石头门坎素包", address: "南开区古文化街", desc: "素包子", specialty: "素包", price: "人均25元" },
                { name: "津菜馆", address: "南开区通庆街", desc: "正宗津菜", specialty: "老爆三、罾蹦鲤鱼", price: "人均65元" }
            ],
            "狮子林桥": [
                { name: "天津海河文华酒店·餐厅", address: "河北区狮子林大街", desc: "河景餐厅", specialty: "中西美食", price: "人均160元" },
                { name: "清真·老馆子", address: "河北区金纬路", desc: "回民菜", specialty: "酱牛肉、手抓饭", price: "人均50元" },
                { name: "天津小吃店", address: "河北区狮子林桥畔", desc: "各种天津小吃", specialty: "煎饼果子、锅巴菜", price: "人均20元" }
            ],
            "永乐桥": [
                { name: "天津之眼周边餐馆", address: "河北区五马路永乐桥附近", desc: "天津家常菜", specialty: "各种天津菜", price: "人均60元" },
                { name: "清真·回回馆", address: "河北区黄纬路", desc: "回民菜", specialty: "手抓饭、酱牛肉", price: "人均55元" },
                { name: "天津小吃城", address: "河北区中山路", desc: "汇聚天津小吃", specialty: "各种小吃", price: "人均40元" }
            ],
            "盘山": [
                { name: "盘山游客中心餐厅", address: "蓟州区官庄镇盘山景区", desc: "景区餐厅", specialty: "蓟县特色菜", price: "人均60元" },
                { name: "盘山农家院", address: "蓟州区官庄镇", desc: "农家菜", specialty: "贴饽饽熬小鱼", price: "人均45元" },
                { name: "蓟县特色菜馆", address: "蓟州区渔阳镇", desc: "蓟县菜", specialty: "蓟县特色", price: "人均50元" }
            ],
            "独乐寺": [
                { name: "蓟州宾馆·餐厅", address: "蓟州区武定街41号", desc: "酒店餐厅", specialty: "蓟县特色菜", price: "人均70元" },
                { name: "独乐人家菜馆", address: "蓟州区武定街", desc: "本地餐馆", specialty: "蓟县家常菜", price: "人均50元" },
                { name: "蓟县小吃店", address: "蓟州区渔阳镇", desc: "各种小吃", specialty: "绿豆焖子", price: "人均20元" }
            ],
            "蓟州溶洞": [
                { name: "蓟州溶洞度假酒店·餐厅", address: "蓟州区罗庄子镇", desc: "景区餐厅", specialty: "蓟县特色菜", price: "人均80元" },
                { name: "山水人家", address: "蓟州区罗庄子镇", desc: "农家菜", specialty: "贴饽饽熬小鱼", price: "人均50元" },
                { name: "蓟县特色小吃", address: "蓟州区溶洞附近村", desc: "本地小吃", specialty: "各种蓟县小吃", price: "人均30元" }
            ]
        }[item.name];
        extraContent += `<div style="margin-top:16px;">
            <h4 style="margin-bottom:10px;font-size:1rem;">🍽️ 附近餐馆推荐</h4>
            ${restaurants.map(r => `
                <div class="restaurant-card" onclick="navigateTo('${r.address}')">
                    <div class="restaurant-header">
                        <span class="restaurant-name">${r.name}</span>
                        <span style="color:#e74c3c;font-size:0.85rem;">${r.price}</span>
                    </div>
                    <div style="font-size:0.85rem;color:#555;margin-bottom:4px;">${r.desc}</div>
                    <div style="font-size:0.85rem;color:#666;margin-bottom:4px;">主打: ${r.specialty}</div>
                    <div class="restaurant-address">📍 ${r.address}</div>
                </div>
            `).join('')}
        </div>`;
    }
    
    if (itemType === 'food' && restaurantsData[item.name]) {
        const restaurants = restaurantsData[item.name];
        extraContent += `<div style="margin-top:16px;">
            <h4 style="margin-bottom:10px;font-size:1rem;">🍽️ 推荐餐馆</h4>
            ${restaurants.map(r => `
                <div class="restaurant-card" onclick="navigateTo('${r.address}')">
                    <div class="restaurant-header">
                        <span class="restaurant-name">${r.name}</span>
                        <span style="color:#e74c3c;font-size:0.85rem;">${r.price}</span>
                    </div>
                    <div style="font-size:0.85rem;color:#555;margin-bottom:4px;">主打: ${r.specialty}</div>
                    <div class="restaurant-address">📍 ${r.address}</div>
                </div>
            `).join('')}
        </div>`;
    }
    
    const addInfo = `
        <div style="margin-top:12px;padding:12px;background:#f9f9f9;border-radius:16px;font-size:0.85rem;">
            <strong>🕘 ${item.openTime ? '开放/营业' : '时间'}:</strong> ${item.openTime || '详询景区'}<br>
            <strong>💰 价格:</strong> ${item.ticket || '免费/时价'}<br>
            <strong>📍 地址:</strong> ${item.address || '天津市区'}
        </div>`;
    document.getElementById('modalDesc').innerHTML = `<p>${item.detail || item.desc}</p>${addInfo}${extraContent}`;
    document.getElementById('detailModal').style.display = 'flex';
    document.getElementById('audioPlayBtn').onclick = () => playAudioItem(item);
    document.getElementById('navBtn').onclick = () => navigateTo(item.address || item.name);
}

function openNavQuickDialog() {
    const address = prompt('请输入您想去的地方（如：五大道、天津之眼）：');
    if (address && address.trim()) {
        navigateTo(address.trim());
    }
}

function navigateTo(address) {
    currentNavAddress = address;
    document.getElementById('navModal').style.display = 'flex';
}

function selectMap(mapType) {
    const encodedAddress = encodeURIComponent(currentNavAddress);
    let url = '';
    
    switch(mapType) {
        case 'amap':
            url = `https://www.amap.com/search?query=${encodedAddress}`;
            break;
        case 'baidu':
            url = `https://map.baidu.com/?newmap=1&ie=utf-8&s=s&wd=${encodedAddress}`;
            break;
        
    }
    
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.focus();
    } else {
        // 如果弹窗被阻止，尝试在当前窗口打开
        window.location.href = url;
    }
    document.getElementById('navModal').style.display = 'none';
    showToast(`正在打开${mapType === 'amap' ? '高德' : '百度'}地图...`);
}

function playAudioItem(item) {
    if (isSpeaking) {
        stopAudio();
        return;
    }
    let text = `${item.name}。${item.audioDesc || item.detail || item.desc}`;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.9;

        const subtitleArea = document.getElementById('subtitleArea');
        const subtitleText = document.getElementById('subtitleText');
        let charIndex = 0;
        let typingInterval = null;

        function loadVoice() {
            const voices = window.speechSynthesis.getVoices();
            const cn = voices.find(v => v.lang.includes('zh'));
            if (cn) utterance.voice = cn;
            utterance.onstart = () => {
                isSpeaking = true;
                const btn = document.getElementById('audioPlayBtn');
                if (btn) btn.innerHTML = '<i class="fas fa-stop"></i> 停止讲解';
                subtitleArea.style.display = 'block';
                subtitleText.innerText = '';
                charIndex = 0;
                typingInterval = setInterval(() => {
                    if (charIndex < text.length) {
                        subtitleText.innerText += text[charIndex];
                        charIndex++;
                    } else {
                        clearInterval(typingInterval);
                    }
                }, 150);
            };
            utterance.onend = () => {
                isSpeaking = false;
                const btn = document.getElementById('audioPlayBtn');
                if (btn) btn.innerHTML = '<i class="fas fa-volume-up"></i> 听讲解';
                clearInterval(typingInterval);
                subtitleText.innerText = text;
                setTimeout(() => {
                    subtitleArea.style.display = 'none';
                }, 2000);
            };
            utterance.onerror = (e) => {
                isSpeaking = false;
                const btn = document.getElementById('audioPlayBtn');
                if (btn) btn.innerHTML = '<i class="fas fa-volume-up"></i> 听讲解';
                clearInterval(typingInterval);
                subtitleArea.style.display = 'none';
                if (e.error === 'not-allowed') {
                    showToast('请允许语音播放后重试');
                }
            };
            window.speechSynthesis.speak(utterance);
            currentSpeech = utterance;
        }

        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            loadVoice();
        } else {
            window.speechSynthesis.onvoiceschanged = () => loadVoice();
        }
    } else {
        showToast('浏览器不支持语音讲解');
    }
}

function stopAudio() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    const btn = document.getElementById('audioPlayBtn');
    if (btn) btn.innerHTML = '<i class="fas fa-volume-up"></i> 听讲解';
    const subtitleArea = document.getElementById('subtitleArea');
    if (subtitleArea) subtitleArea.style.display = 'none';
}

function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
    stopAudio();
}

function showDressTipDetail() {
    const dressDetailModal = document.getElementById('dressDetailModal');
    const tempDisplay = document.getElementById('dressTempDisplay');
    const weatherIcon = document.getElementById('dressWeatherIcon');
    const recommendations = document.getElementById('dressRecommendations');
    
    if (dressDetailModal) {
        dressDetailModal.style.display = 'flex';
    }
    
    // 显示温度
    if (tempDisplay) {
        if (currentTemperature !== null) {
            tempDisplay.innerHTML = `${currentTemperature}°C`;
        } else {
            tempDisplay.innerHTML = '获取中...';
            // 如果温度还没获取到，尝试重新获取
            fetchWeather().then(() => {
                if (currentTemperature !== null) {
                    tempDisplay.innerHTML = `${currentTemperature}°C`;
                    updateDressRecommendations(currentTemperature, recommendations, weatherIcon);
                }
            });
        }
    }
    
    // 更新穿衣建议
    if (currentTemperature !== null) {
        updateDressRecommendations(currentTemperature, recommendations, weatherIcon);
    }
}

function updateDressRecommendations(temp, recommendationsEl, weatherIconEl) {
    // 更新天气图标
    if (weatherIconEl) {
        if (temp < 10) {
            weatherIconEl.innerHTML = '❄️';
        } else if (temp < 20) {
            weatherIconEl.innerHTML = '🍂';
        } else if (temp < 28) {
            weatherIconEl.innerHTML = '🌤️';
        } else {
            weatherIconEl.innerHTML = '🔥';
        }
    }
    
    // 更新穿衣建议
    if (recommendationsEl) {
        let dressList = [];
        
        if (temp < 5) {
            dressList = [
                '🥼 <strong>羽绒服/厚外套</strong>：保暖最重要',
                '🧣 <strong>围巾帽子手套</strong>：全副武装',
                '👢 <strong>雪地靴/棉鞋</strong>：防滑保暖',
                '🧤 <strong>暖宝宝</strong>：随身携带取暖'
            ];
        } else if (temp < 10) {
            dressList = [
                '🧥 <strong>厚外套/呢大衣</strong>：防风保暖',
                '👖 <strong>厚长裤</strong>：秋裤必不可少',
                '🧣 <strong>围巾</strong>：抵御寒风',
                '👟 <strong>保暖鞋</strong>：脚暖全身暖'
            ];
        } else if (temp < 15) {
            dressList = [
                '🧥 <strong>风衣/薄羽绒服</strong>：早晚温差大',
                '👖 <strong>长裤</strong>：舒适牛仔裤即可',
                '🧥 <strong>薄毛衣/卫衣</strong>：内搭保暖',
                '👟 <strong>休闲鞋</strong>：舒适出行'
            ];
        } else if (temp < 20) {
            dressList = [
                '🧥 <strong>薄外套/夹克</strong>：早晚微凉',
                '👖 <strong>长裤/薄牛仔裤</strong>：舒适为主',
                '👕 <strong>长袖衬衫/T恤</strong>：百搭内搭',
                '👟 <strong>休闲鞋</strong>：轻便舒适'
            ];
        } else if (temp < 25) {
            dressList = [
                '👕 <strong>薄长袖/短袖T恤</strong>：清爽透气',
                '👖 <strong>长裤/七分裤</strong>：根据喜好',
                '🧥 <strong>薄开衫</strong>：早晚备用',
                '👟 <strong>运动鞋</strong>：轻便出行'
            ];
        } else if (temp < 30) {
            dressList = [
                '👕 <strong>短袖T恤/衬衫</strong>：棉质或速干面料更佳',
                '🩳 <strong>薄款长裤/短裤</strong>：根据个人喜好选择',
                '👟 <strong>舒适运动鞋</strong>：便于步行游览',
                '🧢 <strong>防晒帽/太阳镜</strong>：户外必备'
            ];
        } else {
            dressList = [
                '🩳 <strong>短裤/短裙</strong>：清凉一夏',
                '👕 <strong>短袖T恤</strong>：纯棉透气',
                '🕶️ <strong>太阳镜</strong>：保护眼睛',
                '🧴 <strong>防晒霜</strong>：SPF50+，防止晒伤',
                '💧 <strong>多喝水</strong>：补充水分'
            ];
        }
        
        recommendationsEl.innerHTML = dressList.map(item => `<li>${item}</li>`).join('');
    }
}

function showSuggestionDetail() {
    const suggestionDetailModal = document.getElementById('suggestionDetailModal');
    if (suggestionDetailModal) {
        suggestionDetailModal.style.display = 'flex';
    }
}

function closeDressModal() {
    document.getElementById('dressDetailModal').style.display = 'none';
}

function closeSuggestionModal() {
    document.getElementById('suggestionDetailModal').style.display = 'none';
}

function closeAboutModal() {
    document.getElementById('aboutModal').style.display = 'none';
}

async function fetchWeather() {
    try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=39.1422&longitude=117.2075&current_weather=true');
        const data = await res.json();
        const temp = data.current_weather.temperature;
        currentTemperature = temp; // 保存温度到全局变量
        const dressTip = document.getElementById('dressTip');
        const suggestionTip = document.getElementById('suggestionTip');
        const weatherDetail = document.getElementById('weatherDetail');
        if (dressTip) dressTip.innerHTML = temp < 10 ? '❄️ 较冷，穿羽绒服' : temp < 20 ? '🧥 风衣必备' : '🌞 舒适夏装';
        if (suggestionTip) suggestionTip.innerHTML = temp > 25 ? '推荐海河夜游' : '适宜逛五大道';
        if (weatherDetail) weatherDetail.innerHTML = `🌡️ 当前${temp}°C, 天津旅行好心情`;
    } catch (e) {
        fallbackTips();
    }
}

function fallbackTips() {
    const dressTip = document.getElementById('dressTip');
    const suggestionTip = document.getElementById('suggestionTip');
    if (dressTip) dressTip.innerHTML = '春季早晚温差大，薄外套';
    if (suggestionTip) suggestionTip.innerHTML = '五大道海棠开了，快去打卡';
}

function setSeasonTheme(manualSeason) {
    const isDark = document.body.classList.contains('dark');
    document.body.classList.remove('spring', 'summer', 'autumn', 'winter');
    if (!isDark) {
        if (manualSeason) {
            document.body.classList.add(manualSeason);
        } else {
            const m = new Date().getMonth();
            if (m >= 2 && m <= 4) document.body.classList.add('spring');
            else if (m >= 5 && m <= 7) document.body.classList.add('summer');
            else if (m >= 8 && m <= 10) document.body.classList.add('autumn');
            else document.body.classList.add('winter');
        }
    }
    updateSeasonDecorations();
}

function updateSeasonDecorations() {
    document.body.classList.remove('spring-decor', 'summer-decor', 'autumn-decor', 'winter-decor');
    if (document.body.classList.contains('spring')) {
        document.body.classList.add('spring-decor');
    } else if (document.body.classList.contains('summer')) {
        document.body.classList.add('summer-decor');
    } else if (document.body.classList.contains('autumn')) {
        document.body.classList.add('autumn-decor');
    } else if (document.body.classList.contains('winter')) {
        document.body.classList.add('winter-decor');
    }
}

const routes = [
    ["五大道", "天津之眼", "古文化街"],
    ["意式风情区", "天津之眼", "相声茶馆"],
    ["古文化街", "泥人张", "耳朵眼炸糕"],
    ["五大道", "古文化街", "意式风情区"],
    ["盘山", "独乐寺", "蓟州溶洞"],
    ["盘山", "独乐寺", "绿豆焖子"]
];
let routeIdx = 0;

const tripRoutes = [
    // #1 一日游 正常游 家庭亲子
    { days: 1, budget: 'normal', crowd: 'family', route: ['独乐寺', '盘山', '蓟州溶洞'], food: '绿豆焖子', desc: '同处蓟州片区连贯游玩，依次探访千年古刹、山林胜景与地质溶洞，沉浸式感受郊外自然与古建相融的独特风光。' },
    // #2 一日游 正常游 情侣出行
    { days: 1, budget: 'normal', crowd: 'couple', route: ['意式风情区', '五大道', '滨江道'], food: '小宝糖炒栗子', desc: '市区近距离连片打卡，漫步异域街区与复古洋楼，闲暇逛街散心，近距离取景拍照，出行动线顺畅不累。' },
    // #3 一日游 省钱游 独自出行
    { days: 1, budget: 'budget', crowd: 'single', route: ['古文化街', '狮子林桥', '金汤桥'], food: '', desc: '老城片区顺路游玩，先逛古街感受民俗风情，再沿河观赏古桥风貌，步行即可轻松游览。' },
    // #4 一日游 正常游 朋友结伴
    { days: 1, budget: 'normal', crowd: 'friends', route: ['古文化街', '西北角', '南市食品街'], food: '老爆三', desc: '老城片区顺路游玩，先后领略民俗风情、清真烟火与特色美食街巷，片区距离相近，逛吃出行十分便捷。' },
    // #5 一日游 省钱游 情侣出行
    { days: 1, budget: 'budget', crowd: 'couple', route: ['大沽桥', '赤峰桥', '解放桥'], food: '', desc: '沿河顺向游览三座桥梁，地理位置相连，一路欣赏河畔落日风光，散步游玩动线合理舒适。' },
    // #6 一日游 正常游 朋友结伴
    { days: 1, budget: 'normal', crowd: 'friends', route: ['天津之眼', '永乐桥', '古文化街'], food: '耳朵眼炸糕', desc: '河北区周边连贯游玩，打卡地标摩天轮与配套桥梁，短途前行抵达民俗老街，行程衔接紧凑顺畅。' },
    // #7 一日游 省钱游 家庭亲子
    { days: 1, budget: 'budget', crowd: 'family', route: ['古文化街', '滨江道', '意式风情区'], food: '熟梨糕', desc: '老城商业区连贯游玩，逛街趣味浓厚，异域风情取景拍照，平坦路线适合孩童出行。' },
    // #8 一日游 正常游 独自出行
    { days: 1, budget: 'normal', crowd: 'single', route: ['五大道', '意式风情区', '北安桥'], food: '独面筋', desc: '和平河北片区相邻景点，穿梭洋房街区后缓步走到河畔桥边，短途漫游感受城区多样风貌。' },
    // #31 一日游 正常游 独自出行
    { days: 1, budget: 'normal', crowd: 'single', route: ['盘山', '独乐寺', '蓟州溶洞'], food: '绿豆焖子', desc: '蓟州本地三点一线游玩，地理位置相邻，顺路游览山林古建与溶洞，无需跨区域移动。' },
    // #32 一日游 省钱游 朋友结伴
    { days: 1, budget: 'budget', crowd: 'friends', route: ['古文化街', '金汤桥', '狮子林桥'], food: '', desc: '老城周边相邻景点，步行即可互相抵达，结伴闲逛观景，出行路线紧凑合理。' },
    
    // #9 二日游 正常游 独自出行
    { days: 2, budget: 'normal', crowd: 'single', route: ['独乐寺', '盘山', '蓟州溶洞'], food: '贴饽饽熬小鱼', desc: '两日都停留蓟州区域，首日游览古寺山林，次日探秘溶洞景观，区域集中无需远距离奔波。' },
    // #10 二日游 省钱游 家庭亲子
    { days: 2, budget: 'budget', crowd: 'family', route: ['古文化街', '金汤桥', '狮子林桥', '北安桥'], food: '大饼卷圈', desc: '两日均在老城海河沿线活动，景点片区相连，步行游览轻松省心，适配全家休闲出行节奏。' },
    // #11 二日游 正常游 情侣出行
    { days: 2, budget: 'normal', crowd: 'couple', route: ['五大道', '滨江道', '意式风情区', '大沽桥'], food: '罾蹦鲤鱼', desc: '两日深耕市区核心片区，街区桥梁距离相近，每日短途漫游，相伴闲逛观景动线合理自然。' },
    // #12 二日游 省钱游 朋友结伴
    { days: 2, budget: 'budget', crowd: 'friends', route: ['意式风情区', '大沽桥', '古文化街', '滨江道'], food: '煎饼果子', desc: '首日打卡异域风情与河畔桥梁，次日逛老街品美食扫特产，结伴出游欢乐满满。' },
    // #13 二日游 正常游 朋友结伴
    { days: 2, budget: 'normal', crowd: 'friends', route: ['天津之眼', '古文化街', '南市食品街', '西北角'], food: '狗不理包子', desc: '两日锁定老城商圈范围，景点相互毗邻，逛地标游老街品美食，短途出行游玩体验顺畅。' },
    // #14 二日游 省钱游 独自出行
    { days: 2, budget: 'budget', crowd: 'single', route: ['古文化街', '金汤桥', '五大道', '意式风情区'], food: '锅巴菜', desc: '首日游览古街古桥感知津门历史，次日穿梭洋楼街区感受异域风情，独行漫步节奏自控。' },
    // #33 二日游 正常游 家庭亲子
    { days: 2, budget: 'normal', crowd: 'family', route: ['五大道', '意式风情区', '滨江道', '古文化街'], food: '耳朵眼炸糕', desc: '两日都在和平南开相邻区域，街区距离相近，轻松游玩各类特色景致。' },
    // #34 二日游 省钱游 情侣出行
    { days: 2, budget: 'budget', crowd: 'couple', route: ['意式风情区', '大沽桥', '古文化街', '西北角'], food: '煎饼果子', desc: '首日漫步异域街区登桥观景，次日逛老城品小吃压马路，浪漫省钱两不误。' },
    
    // #15 三日游 正常游 家庭亲子
    { days: 3, budget: 'normal', crowd: 'family', route: ['独乐寺', '盘山', '蓟州溶洞', '天津之眼', '古文化街'], food: '绿豆焖子、茶汤', desc: '前两天集中游玩蓟州郊外，第三日返程游览市区景点，分区游玩减少跨城奔波，行程安排合理。' },
    // #16 三日游 省钱游 独自出行
    { days: 3, budget: 'budget', crowd: 'single', route: ['古文化街', '狮子林桥', '意式风情区', '五大道', '解放桥', '赤峰桥'], food: '大饼卷圈', desc: '三日老城片区与风情街区交替游览，穿梭古街洋楼登桥观景，单人漫游节奏舒适。' },
    // #17 三日游 正常游 朋友结伴
    { days: 3, budget: 'normal', crowd: 'friends', route: ['五大道', '意式风情区', '滨江道', '南市食品街', '古文化街', '西北角'], food: '十八街麻花、老爆三', desc: '三日围绕市区老城商圈游玩，片区紧密相连，逛街区尝美食，同行游玩路途轻松便捷。' },
    // #18 三日游 省钱游 情侣出行
    { days: 3, budget: 'budget', crowd: 'couple', route: ['五大道', '意式风情区', '古文化街', '大沽桥', '解放桥', '赤峰桥'], food: '', desc: '三日穿梭复古洋楼与异域街区，漫步古街河畔观景，携手慢行旅途浪漫且省钱。' },
    // #19 三日游 正常游 情侣出行
    { days: 3, budget: 'normal', crowd: 'couple', route: ['天津之眼', '永乐桥', '古文化街', '西北角', '五大道', '滨江道'], food: '耳朵眼炸糕、小宝糖炒栗子', desc: '分片区游玩城区景点，同区域内点位互通，短途辗转即可抵达，浪漫游玩路途顺畅。' },
    // #20 三日游 省钱游 家庭亲子
    { days: 3, budget: 'budget', crowd: 'family', route: ['古文化街', '五大道', '意式风情区', '滨江道', '解放桥', '赤峰桥'], food: '熟梨糕、锅巴菜', desc: '三日老城和平片区连贯游玩，逛古街看洋楼品美食压马路，步行路线平缓适合全家出行。' },
    // #35 三日游 正常游 独自出行
    { days: 3, budget: 'normal', crowd: 'single', route: ['盘山', '蓟州溶洞', '独乐寺', '古文化街', '西北角'], food: '十八街麻花', desc: '先完整游玩蓟州片区，再返程游览老城街区，分区出行不绕路。' },
    // #36 三日游 省钱游 朋友结伴
    { days: 3, budget: 'budget', crowd: 'friends', route: ['意式风情区', '五大道', '古文化街', '滨江道', '西北角', '南市食品街'], food: '锅巴菜', desc: '三日连穿异域街区与老城商圈，逛洋楼品美食压马路，结伴游玩热闹有趣。' },
    
    // #21 四日游 正常游 独自出行
    { days: 4, budget: 'normal', crowd: 'single', route: ['独乐寺', '盘山', '蓟州溶洞', '五大道', '意式风情区', '滨江道', '古文化街'], food: '贴饽饽熬小鱼、独面筋', desc: '前两天统一游玩蓟州片区，后两日游览市区连片景点，分区游玩规避远距离往返奔波。' },
    // #22 四日游 省钱游 家庭亲子
    { days: 4, budget: 'budget', crowd: 'family', route: ['古文化街', '金汤桥', '五大道', '意式风情区', '滨江道', '西北角', '解放桥'], food: '煎饼果子、绿豆焖子', desc: '四天老城和平片区深度游玩，逛古街看洋楼品美食扫特产，阖家出行轻松无负担。' },
    // #23 四日游 正常游 情侣出行
    { days: 4, budget: 'normal', crowd: 'couple', route: ['五大道', '滨江道', '意式风情区', '大沽桥', '天津之眼', '古文化街', '西北角', '南市食品街'], food: '罾蹦鲤鱼、茶汤', desc: '市区内分区块游玩，相邻景点依次打卡，片区切换路程短，相伴出游出行十分省心。' },
    // #24 四日游 省钱游 朋友结伴
    { days: 4, budget: 'budget', crowd: 'friends', route: ['意式风情区', '五大道', '古文化街', '滨江道', '西北角', '南市食品街', '解放桥'], food: '', desc: '四天连穿异域街区与老城商圈，逛洋楼品美食扫特产，压马路打卡拍照，结伴出游热闹有趣。' },
    // #25 四日游 正常游 朋友结伴
    { days: 4, budget: 'normal', crowd: 'friends', route: ['古文化街', '西北角', '南市食品街', '滨江道', '五大道', '意式风情区', '天津之眼', '永乐桥'], food: '狗不理包子、老爆三', desc: '四天深耕市区相邻商圈街区，景点彼此距离近，逛玩打卡辗转轻松，旅途热闹不折腾。' },
    // #26 四日游 省钱游 独自出行
    { days: 4, budget: 'budget', crowd: 'single', route: ['古文化街', '五大道', '意式风情区', '滨江道', '西北角', '南市食品街', '解放桥'], food: '锅巴菜、大饼卷圈', desc: '四天穿梭老城和平片区，独自漫游古街洋楼与美食街区，自在穿行无负担。' },
    // #37 四日游 正常游 家庭亲子
    { days: 4, budget: 'normal', crowd: 'family', route: ['独乐寺', '蓟州溶洞', '盘山', '天津之眼', '古文化街', '五大道', '滨江道'], food: '茶汤、罾蹦鲤鱼', desc: '郊外景点集中游玩完毕，再逛市区相邻地标，路线规划贴合实际出行距离。' },
    // #38 四日游 省钱游 情侣出行
    { days: 4, budget: 'budget', crowd: 'couple', route: ['意式风情区', '五大道', '古文化街', '滨江道', '西北角', '大沽桥', '解放桥'], food: '耳朵眼炸糕', desc: '四天连穿风情街区与老城商圈，逛洋楼品小吃压马路登桥赏景，浪漫经济两不误。' },
    
    // #27 五日游 正常游 朋友结伴
    { days: 5, budget: 'normal', crowd: 'friends', route: ['独乐寺', '盘山', '蓟州溶洞', '五大道', '意式风情区', '滨江道', '古文化街', '解放桥', '赤峰桥', '大沽桥'], food: '各式津菜、特色小吃', desc: '前两天游玩郊外蓟州区域，后三日游览连片市区景点，分区规划路线，避免跨区域长途穿行。' },
    // #28 五日游 省钱游 独自出行
    { days: 5, budget: 'budget', crowd: 'single', route: ['古文化街', '五大道', '意式风情区', '滨江道', '西北角', '南市食品街', '解放桥', '赤峰桥', '大沽桥'], food: '平价地道街边小吃', desc: '五日深度漫游老城和平片区，穿梭古街洋楼美食街区，单人出行经济实惠。' },
    // #29 五日游 正常游 家庭亲子
    { days: 5, budget: 'normal', crowd: 'family', route: ['盘山', '独乐寺', '蓟州溶洞', '天津之眼', '古文化街', '五大道', '滨江道', '解放桥', '赤峰桥', '大沽桥'], food: '熟梨糕、贴饽饽熬小鱼', desc: '郊外市区分时段游玩，同片区景点集中打卡，减少远距离移动，游玩节奏贴合家人体力。' },
    { days: 5, budget: 'budget', crowd: 'couple', route: ['五大道', '意式风情区', '古文化街', '滨江道', '西北角', '大沽桥', '解放桥', '赤峰桥', '光华桥'], food: '', desc: '前三天连穿老城和平风情街区，后两天沿河漫步观桥赏景，浪漫经济两不误。' },
    { days: 5, budget: 'normal', crowd: 'single', route: ['盘山', '独乐寺', '蓟州溶洞', '五大道', '滨江道', '古文化街', '西北角', '解放桥', '赤峰桥', '大沽桥'], food: '老爆三、茶汤', desc: '郊外市区分开游玩，同片区内挨个打卡，出行距离合理，游玩体验舒适自然。' },
    { days: 5, budget: 'budget', crowd: 'friends', route: ['五大道', '意式风情区', '古文化街', '滨江道', '西北角', '南市食品街', '大沽桥', '解放桥', '赤峰桥'], food: '大饼卷圈、熟梨糕', desc: '前四天连穿老城和平风情街区逛吃打卡，最后一天沿河观桥赏景，路线合理有趣。' }
];/*AI辅助生成：豆包，2026.5.24*/

function updateRoute() {
    const steps = routes[routeIdx];
    const container = document.getElementById('routeStepsList');
    if (!container) return;
    container.innerHTML = steps.map(s => `
        <div class="step">
            <i class="fas fa-map-marker-alt" style="font-size:1.2rem;color:#cca46c;margin-bottom:4px;"></i>
            <h4 style="font-size:0.9rem;">${s}</h4>
        </div>
    `).join('');
}

function nextRoute() {
    routeIdx = (routeIdx + 1) % routes.length;
    updateRoute();
}

function generateTrip() {
    const days = parseInt(document.getElementById('tripDays').value);
    const crowd = document.getElementById('tripCrowd').value;
    const budget = document.getElementById('tripBudget').value;
    
    const crowdLabel = crowd === 'family' ? '家庭亲子' : crowd === 'couple' ? '情侣出行' : crowd === 'friends' ? '朋友结伴' : '独自出行';
    const budgetLabel = budget === 'normal' ? '正常游' : '省钱游';
    
    let matchedRoutes = tripRoutes.filter(r => 
        r.days === days && r.crowd === crowd && r.budget === budget
    );
    
    if (matchedRoutes.length === 0) {
        matchedRoutes = tripRoutes.filter(r => 
            r.days === days && (r.crowd === crowd || r.budget === budget)
        );
    }
    
    if (matchedRoutes.length === 0) {
        matchedRoutes = tripRoutes.filter(r => r.days === days);
    }
    
    if (matchedRoutes.length === 0) {
        matchedRoutes = tripRoutes;
    }
    
    const selectedRoute = matchedRoutes[0];
    const routeSpots = selectedRoute.route;
    const recommendedFood = selectedRoute.food;
    const routeDesc = selectedRoute.desc;
    
    const dayPlan = [];
    const spotsPerDay = Math.ceil(routeSpots.length / days);
    
    for (let d = 0; d < days; d++) {
        const startIdx = d * spotsPerDay;
        const daySpots = routeSpots.slice(startIdx, startIdx + spotsPerDay);
        if (daySpots.length > 0) {
            dayPlan.push(daySpots);
        }
    }
    
    let html = '';
    dayPlan.forEach((day, d) => {
        const daySlots = ['上午', '下午', '晚上', '傍晚'];
        html += `<div class="trip-day">
            <div class="trip-day-title">📅 第${d + 1}天</div>
            ${day.map((spotName, i) => {
                const spot = scenicSpots.find(s => s.name === spotName) || 
                             foodItems.find(f => f.name === spotName) || 
                             intangibleItems.find(i => i.name === spotName) ||
                             { name: spotName, tags: [], ticket: '免费' };
                return `
                <div class="trip-item">
                    <span class="trip-item-time">${daySlots[i % daySlots.length]}</span>
                    <div>
                        <b>${spot.name}</b>
                        <div style="font-size:0.75rem;opacity:0.7;">${spot.tags && spot.tags.length > 0 ? spot.tags[0] : ''} · ${spot.ticket || '免费'}</div>
                    </div>
                </div>`;
            }).join('')}
        </div>`;
    });

    html += `<div class="trip-summary">
        <h4>🎯 行程特色</h4>
        <p>${routeDesc}</p>
        ${recommendedFood ? `<p style="margin-top:8px;"><strong>🍽️ 推荐美食：</strong>${recommendedFood}</p>` : ''}
        <p style="margin-top:8px;font-size:0.9rem;">适合${crowdLabel} · ${days}日游 · ${budgetLabel}</p>
        <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
            <button class="planner-btn" onclick="printTrip()" style="background:#cca46c;"><i class="fas fa-print"></i> 打印行程</button>
            <button class="planner-btn" onclick="exportTrip()" style="background:#4ecdc4;"><i class="fas fa-download"></i> 导出TXT</button>
        </div>
    </div>`;

    document.getElementById('tripResult').innerHTML = html;
    window.currentTripText = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    window.currentTripHTML = html;
}

function exportTrip() {
    if (!window.currentTripText) return;
    const blob = new Blob([window.currentTripText], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '天津行程.txt';
    a.click();
}

function printTrip() {
    const w = window.open();
    if (!w) { showToast('请允许弹窗'); return; }
    w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>行程单</title><style>body{font-family:sans-serif;padding:20px;line-height:1.8;}</style></head><body>${window.currentTripHTML || window.currentTripText}</body></html>`);
    w.document.close();
    w.print();
}

function renderChart() {
    const sorted = [...scenicSpots].sort((a, b) => b.visitors - a.visitors);
    const chartHTML = sorted.map(s => {
        const percent = Math.round((s.visitors / 200) * 100);
        const cls = s.visitors > 100 ? 'hot' : s.visitors > 70 ? 'warm' : 'cool';
        return `<div>
            <div style="font-size:0.85rem;margin-bottom:2px;">${s.name}</div>
            <div class="chart-bar">
                <div class="chart-fill ${cls}" style="width:0%" data-target="${percent}%">${s.visitors}万</div>
            </div>
        </div>`;
    }).join('');

    // 渲染到顶部容器（首页显示）
    const containerTop = document.getElementById('chartContainer');
    if (containerTop) {
        containerTop.innerHTML = chartHTML;
        setTimeout(() => {
            containerTop.querySelectorAll('.chart-fill').forEach(f => {
                f.style.width = f.dataset.target;
            });
        }, 100);
    }

    // 渲染到底部容器（其他页面显示）
    const containerBottom = document.getElementById('chartContainerBottom');
    if (containerBottom) {
        containerBottom.innerHTML = chartHTML;
        setTimeout(() => {
            containerBottom.querySelectorAll('.chart-fill').forEach(f => {
                f.style.width = f.dataset.target;
            });
        }, 100);
    }
}

function aiRecommend() {
    const hour = new Date().getHours();
    let rec, text;
    const allItems = [...scenicSpots, ...foodItems, ...intangibleItems];
    if (hour < 11) {
        const foodOnly = foodItems;
        rec = foodOnly[Math.floor(Math.random() * foodOnly.length)];
        text = `🍳 清晨推荐：${rec.name}，开启活力满满的一天`;
    } else if (hour < 14) {
        const foodOnly = foodItems;
        rec = foodOnly[Math.floor(Math.random() * foodOnly.length)];
        text = `🍜 午间必尝：${rec.name}，${rec.desc}`;
    } else if (hour < 18) {
        const scenicOnly = scenicSpots;
        rec = scenicOnly[Math.floor(Math.random() * scenicOnly.length)];
        text = `🏛️ 下午时光：${rec.name}，${rec.desc}`;
    } else {
        const scenicOnly = scenicSpots;
        rec = scenicOnly[Math.floor(Math.random() * scenicOnly.length)];
        text = `🌃 夜游推荐：${rec.name}，${rec.desc}`;
    }

    const reasonEl = document.getElementById('aiReasonText');
    if (reasonEl) reasonEl.innerText = text;

    const recContainer = document.getElementById('aiRecommendations');
    if (!recContainer) return;
    recContainer.innerHTML = `<div class="ai-recommend-card" id="aiRecCard">
        <div class="ai-time-tag">✨ AI推荐</div>
        <h4>${rec.name}</h4>
        <p>${rec.desc}</p>
    </div>`;

    const aiCard = document.getElementById('aiRecCard');
    if (aiCard) {
        aiCard.addEventListener('click', () => openModal(rec));
    }
}

function filterContent(filter) {
    const scenicSection = document.getElementById('scenicSection');
    const foodSection = document.getElementById('foodSection');
    const intangibleSection = document.getElementById('intangibleSection');
    const routeSection = document.getElementById('routeSection');
    const aiRecommendSection = document.getElementById('aiRecommendSection');
    const chartSectionTop = document.getElementById('chartSectionTop');
    const chartSectionBottom = document.getElementById('chartSectionBottom');

    // 如果是在问答页面（没有任何主要section）
    if (!scenicSection && !foodSection && !intangibleSection && !routeSection) {
        const mainContent = document.querySelector('main');
        if (mainContent && originalMainContent) {
            // 恢复保存的原始页面内容（不重置问答状态，保留进度）
            mainContent.innerHTML = originalMainContent;
            originalMainContent = '';
            // 立即重新获取section元素并切换到目标页面
            requestAnimationFrame(() => {
                // 直接执行切换逻辑，不再递归调用
                const newScenicSection = document.getElementById('scenicSection');
                const newFoodSection = document.getElementById('foodSection');
                const newIntangibleSection = document.getElementById('intangibleSection');
                const newRouteSection = document.getElementById('routeSection');
                const newAiRecommendSection = document.getElementById('aiRecommendSection');
                const newChartSectionTop = document.getElementById('chartSectionTop');
                const newChartSectionBottom = document.getElementById('chartSectionBottom');
                
                // 显示/隐藏各section
                if (newScenicSection) newScenicSection.style.display = filter === 'all' || filter === 'scenic' ? 'block' : 'none';
                if (newFoodSection) newFoodSection.style.display = filter === 'all' || filter === 'food' ? 'block' : 'none';
                if (newIntangibleSection) newIntangibleSection.style.display = filter === 'all' || filter === 'intangible' ? 'block' : 'none';
                if (newRouteSection) newRouteSection.style.display = filter === 'all' || filter === 'route' ? 'block' : 'none';
                if (newAiRecommendSection) newAiRecommendSection.style.display = filter === 'all' || filter === 'scenic' || filter === 'route' ? 'block' : 'none';
                if (newChartSectionTop) newChartSectionTop.style.display = filter === 'all' ? 'block' : 'none';
                if (newChartSectionBottom) newChartSectionBottom.style.display = filter === 'all' ? 'none' : 'block';
                
                // 更新导航高亮
                document.querySelectorAll('#navLinks a').forEach(a => a.classList.remove('active'));
                const activeMap = {
                    'all': document.querySelector('#navLinks a[data-filter="all"]'),
                    'scenic': document.querySelector('#navLinks a[data-filter="scenic"]'),
                    'food': document.querySelector('#navLinks a[data-filter="food"]'),
                    'intangible': document.querySelector('#navLinks a[data-filter="intangible"]'),
                    'route': document.getElementById('tripPlannerNav')
                };
                if (activeMap[filter]) activeMap[filter].classList.add('active');
            });
            return;
        } else {
            // 如果没有保存的内容，重新加载页面
            location.reload();
            return;
        }
    }

    if (!scenicSection && !foodSection && originalMainContent) {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.innerHTML = originalMainContent;
        }
        document.querySelectorAll('#navLinks a').forEach(a => a.classList.remove('active'));
        const activeMap = {
            'all': document.querySelector('#navLinks a[data-filter="all"]'),
            'scenic': document.querySelector('#navLinks a[data-filter="scenic"]'),
            'food': document.querySelector('#navLinks a[data-filter="food"]'),
            'intangible': document.querySelector('#navLinks a[data-filter="intangible"]'),
            'route': document.getElementById('tripPlannerNav')
        };
        if (activeMap[filter]) activeMap[filter].classList.add('active');
        return;
    }

    if (scenicSection) scenicSection.style.display = filter === 'all' || filter === 'scenic' ? 'block' : 'none';
    if (foodSection) foodSection.style.display = filter === 'all' || filter === 'food' ? 'block' : 'none';
    if (intangibleSection) intangibleSection.style.display = filter === 'all' || filter === 'intangible' ? 'block' : 'none';
    if (routeSection) routeSection.style.display = filter === 'all' || filter === 'route' ? 'block' : 'none';
    // AI推荐只在首页显示，美食和非遗页面隐藏
    if (aiRecommendSection) aiRecommendSection.style.display = filter === 'all' || filter === 'scenic' || filter === 'route' ? 'block' : 'none';
    
    // 游客热度排行：首页置顶显示，其他页面在底部显示
    if (chartSectionTop) chartSectionTop.style.display = filter === 'all' ? 'block' : 'none';
    if (chartSectionBottom) chartSectionBottom.style.display = filter === 'all' ? 'none' : 'block';

    document.querySelectorAll('#navLinks a').forEach(a => a.classList.remove('active'));
    const activeMap = {
        'all': document.querySelector('#navLinks a[data-filter="all"]'),
        'scenic': document.querySelector('#navLinks a[data-filter="scenic"]'),
        'food': document.querySelector('#navLinks a[data-filter="food"]'),
        'intangible': document.querySelector('#navLinks a[data-filter="intangible"]'),
        'route': document.getElementById('tripPlannerNav')
    };
    if (activeMap[filter]) activeMap[filter].classList.add('active');
}

function globalSearch() {
    const kw = document.getElementById('globalSearchInput').value.trim().toLowerCase();
    if (!kw) {
        filterContent('all');
        rerenderAllCards();
        return;
    }
    const s = scenicSpots.filter(i => i.name.toLowerCase().includes(kw) || i.desc.toLowerCase().includes(kw));
    const f = foodItems.filter(i => i.name.toLowerCase().includes(kw) || i.desc.toLowerCase().includes(kw));
    const n = intangibleItems.filter(i => i.name.toLowerCase().includes(kw) || i.desc.toLowerCase().includes(kw));
    
    // 收集所有匹配结果
    const allResults = [
        ...s.map(item => ({ ...item, type: 'scenic', category: '景点' })),
        ...f.map(item => ({ ...item, type: 'food', category: '美食' })),
        ...n.map(item => ({ ...item, type: 'intangible', category: '非遗' }))
    ];
    
    const mainContent = document.querySelector('main');
    if (!mainContent) return;
    
    if (allResults.length === 0) {
        // 没有找到结果
        mainContent.innerHTML = `
            <section class="section" style="max-width:600px;margin:0 auto;text-align:center;padding:4rem 1rem;">
                <div style="font-size:6rem;margin-bottom:20px;">🔍</div>
                <h2>未找到相关结果</h2>
                <p style="color:#666;margin-top:10px;">没有找到包含"${kw}"的景点、美食或非遗项目</p>
                <button class="planner-btn" onclick="goHomeFromSearch()" style="margin-top:20px;">返回首页</button>
            </section>
        `;
        // 更新导航高亮
        document.querySelectorAll('#navLinks a').forEach(a => a.classList.remove('active'));
    } else {
        // 显示搜索结果
        mainContent.innerHTML = `
            <section class="section" style="max-width:1200px;margin:0 auto;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;">
                    <div>
                        <h2>🔍 搜索结果</h2>
                        <p style="color:#666;margin-top:5px;">找到 ${allResults.length} 个与"${kw}"相关的结果</p>
                    </div>
                    <button class="planner-btn" onclick="goHomeFromSearch()">返回首页</button>
                </div>
                <div class="search-results-grid">
                    ${allResults.map(item => `
                        <div class="card ${item.type}" onclick="openModal(${JSON.stringify(item).replace(/"/g, '&quot;')})">
                            <div class="card-image" style="background-image:url(${item.img || 'https://via.placeholder.com/300x200'})"></div>
                            <div class="card-content">
                                <div class="card-badge">${item.category}</div>
                                <h3>${item.name}</h3>
                                <p>${item.desc}</p>
                                ${item.price ? `<p class="card-price">💰 ${item.price}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
        // 更新导航高亮
        document.querySelectorAll('#navLinks a').forEach(a => a.classList.remove('active'));
    }
}

function goHomeFromSearch() {
    const mainContent = document.querySelector('main');
    if (!mainContent) {
        location.reload();
        return;
    }
    // 使用保存的原始首页内容恢复
    if (originalHomeContent) {
        mainContent.innerHTML = originalHomeContent;
    } else {
        // 如果没有保存的内容，重新加载页面
        location.reload();
        return;
    }
    // 更新导航高亮
    document.querySelectorAll('#navLinks a').forEach(a => a.classList.remove('active'));
    const homeLink = document.querySelector('#navLinks a[data-filter="all"]');
    if (homeLink) homeLink.classList.add('active');
    // 等待DOM更新后重新初始化
    requestAnimationFrame(() => {
        renderCards(foodItems, 'foodGrid', 'food');
        renderCards(intangibleItems, 'intangibleGrid', 'intangible');
        updateRoute();
        renderChart();
        aiRecommend();
        // 重新绑定按钮事件
        document.getElementById('refreshRouteBtn').onclick = nextRoute;
        document.getElementById('generateTripBtn').onclick = generateTrip;
    });
}

function initSettings() {
    document.querySelectorAll('[data-theme]').forEach(opt => {
        opt.style.cursor = 'pointer';
        opt.onclick = () => {
            const theme = opt.dataset.theme;
            document.body.classList.remove('spring', 'summer', 'autumn', 'winter');
            if (theme === 'dark') {
                document.body.classList.remove('dark');
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
                setSeasonTheme();
            }
            rerenderAllCards();
        };
    });
    document.querySelectorAll('[data-season]').forEach(opt => {
        opt.style.cursor = 'pointer';
        opt.onclick = () => {
            const season = opt.dataset.season;
            document.body.classList.remove('dark');
            document.body.classList.remove('spring', 'summer', 'autumn', 'winter');
            setSeasonTheme(season);
            document.querySelectorAll('.season-opt').forEach(s => s.style.opacity = '0.5');
            opt.style.opacity = '1';
            rerenderAllCards();
        };
    });
    document.querySelectorAll('[data-font]').forEach(f => {
        f.style.cursor = 'pointer';
        f.onclick = () => {
            const size = f.dataset.font;
            document.body.classList.remove('font-sm', 'font-md', 'font-lg');
            document.body.classList.add(`font-${size}`);
        };
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 1000);

    setSeasonTheme();
    fetchWeather();
    setInterval(fetchWeather, 3600000);

    renderCards(scenicSpots, 'scenicGrid', 'scenic');
    renderCards(foodItems, 'foodGrid', 'food');
    renderCards(intangibleItems, 'intangibleGrid', 'intangible');
    updateRoute();
    renderChart();
    aiRecommend();
    initSettings();
    
    // 在所有初始化完成后保存原始首页内容
    setTimeout(() => {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            originalHomeContent = mainContent.innerHTML;
        }
    }, 500);

    document.getElementById('refreshRouteBtn').onclick = nextRoute;
    document.getElementById('globalSearchBtn').onclick = globalSearch;
    document.getElementById('globalSearchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') globalSearch();
    });

    document.getElementById('randomPickNav').onclick = () => {
        const all = [...scenicSpots, ...foodItems, ...intangibleItems];
        const r = all[Math.floor(Math.random() * all.length)];
        openModal(r);
    };

    document.getElementById('tripPlannerNav').onclick = () => filterContent('route');
    document.getElementById('generateTripBtn').onclick = generateTrip;
    document.getElementById('aboutFooter').onclick = () => document.getElementById('aboutModal').style.display = 'flex';

    document.getElementById('closeDetailModal').onclick = closeModal;
    document.getElementById('closeAboutModalBtn').onclick = closeAboutModal;

    window.onclick = (e) => {
        if (e.target === document.getElementById('detailModal')) closeModal();
        if (e.target === document.getElementById('aboutModal')) closeAboutModal();
        if (e.target === document.getElementById('dressDetailModal')) closeDressModal();
        if (e.target === document.getElementById('suggestionDetailModal')) closeSuggestionModal();
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeAboutModal();
        }
    });

    document.getElementById('back2top').onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    window.onscroll = () => {
        const btn = document.getElementById('back2top');
        if (btn) {
            if (window.scrollY > 300) btn.classList.add('show');
            else btn.classList.remove('show');
        }
    };

    document.getElementById('settingsBtn').onclick = () => {
        const panel = document.getElementById('settingsPanel');
        if (panel) panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    };

    document.querySelectorAll('#navLinks a[data-filter]').forEach(a => {
        a.onclick = () => filterContent(a.dataset.filter);
    });

    document.querySelectorAll('.nav-icons a[data-filter]').forEach(a => {
        a.onclick = () => filterContent(a.dataset.filter);
    });

    // 音乐播放器功能
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    let isMusicPlaying = false;
    let hasInteracted = false;

    // 尝试自动播放音乐
    function tryAutoPlay() {
        if (hasInteracted && !isMusicPlaying && bgMusic) {
            bgMusic.play().then(() => {
                isMusicPlaying = true;
                if (musicToggle) musicToggle.classList.add('playing');
                if (musicIcon) musicIcon.className = 'fas fa-pause';
            }).catch(() => {
                // 播放失败，保持静音状态
            });
        }
    }

    // 监听用户第一次交互
    const firstInteractionHandler = () => {
        hasInteracted = true;
        tryAutoPlay();
        // 只需要一次交互
        document.removeEventListener('click', firstInteractionHandler);
        document.removeEventListener('touchstart', firstInteractionHandler);
        document.removeEventListener('keydown', firstInteractionHandler);
    };

    // 添加交互监听器
    document.addEventListener('click', firstInteractionHandler);
    document.addEventListener('touchstart', firstInteractionHandler);
    document.addEventListener('keydown', firstInteractionHandler);

    // 页面加载后立即尝试播放（某些浏览器允许）
    if (bgMusic) {
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            hasInteracted = true;
            if (musicToggle) musicToggle.classList.add('playing');
            if (musicIcon) musicIcon.className = 'fas fa-pause';
        }).catch(() => {
            // 浏览器阻止自动播放，等待用户交互
        });
    }

    if (musicToggle) {
        musicToggle.addEventListener('click', () => {
            if (isMusicPlaying) {
                bgMusic.pause();
                musicToggle.classList.remove('playing');
                musicIcon.className = 'fas fa-music';
            } else {
                bgMusic.play().catch(() => {
                    showToast('请先点击页面任意位置启用音频');
                });
                musicToggle.classList.add('playing');
                musicIcon.className = 'fas fa-pause';
            }
            isMusicPlaying = !isMusicPlaying;
        });
    }

    // AI助手功能
    const aiBtn = document.getElementById('aiBtn');
    const aiWindow = document.getElementById('aiWindow');
    const aiClose = document.getElementById('aiClose');
    const aiInput = document.getElementById('aiInput');
    const aiSend = document.getElementById('aiSend');
    const aiMessages = document.getElementById('aiMessages');

    // AI回复数据库
    const aiResponses = {
        '开心': [
            '太棒了！看到你开心我也超级开心呢 🎉',
            '开心就好！继续保持这份好心情哦 ✨',
            '你的笑容是最美丽的风景 🌸',
            '快乐会传染，你一笑，整个世界都亮了 🌟',
            '愿这份好心情能一直陪伴着你，天天开心！🌈',
            '开心的时光总是过得特别快，珍惜每一个快乐的瞬间吧 🥰'
        ],
        '累': [
            '辛苦了！累了就好好休息一下吧，泡杯热茶，给自己一个拥抱 💖',
            '抱抱你！累是正常的，适当的休息是为了更好的出发 🌙',
            '你已经做得很好了，现在让自己放松一下吧 🍵',
            '累的时候就停下来歇一歇，我会一直在这里陪着你 🌷',
            '身体是革命的本钱，一定要好好照顾自己哦 🛌',
            '生活偶尔会很累，但你值得所有的美好，先休息一下吧 ☕'
        ],
        '迷茫': [
            '迷茫是成长的一部分呢，让我们一起慢慢找方向 🌟',
            '不要着急，每个人都会有迷茫的时候，重要的是不放弃前行 💪',
            '深呼吸，迷茫只是暂时的，你的内心一定知道答案 🌈',
            '迷茫不可怕，可怕的是失去寻找方向的勇气，你很棒的！✨',
            '人生就像一场旅行，偶尔迷路也没关系，沿途的风景同样美丽 🌿',
            '给自己一点时间，答案会慢慢浮现的，相信自己的直觉 💫'
        ],
        '赞美': [
            '你知道吗？你真的很棒！勇敢、善良、独一无二 ✨',
            '你有着闪闪发光的特质，只是有时候自己没发现 🌟',
            '你值得所有的美好，因为你本身就是美好 💖',
            '你的努力和坚持都在闪闪发光，继续加油！💪',
            '世界因为有你而更加美好，你是独一无二的存在 🌈',
            '不要小看自己，你比想象中更优秀、更强大！💥'
        ],
        '鼓励': [
            '相信自己，你一定可以的！💪',
            '每一步都在接近目标，继续加油！🚀',
            '你的努力不会白费，坚持就是胜利！✨',
            '困难只是暂时的，阳光总在风雨后 🌞',
            '你已经做得很好了，再坚持一下就好！💖',
            '无论遇到什么，我都会陪在你身边支持你！🌟'
        ],
        '晚安': [
            '晚安！祝你做个甜甜的梦，明天又是美好的一天 🌙',
            '好好休息，明天醒来又是元气满满的一天！💤',
            '愿星光伴你入眠，梦里有甜甜的棉花糖 🍬',
            '晚安好梦，明天见！✨',
            '夜深了，照顾好自己，晚安～ 😴',
            '祝你一夜好眠，醒来充满能量！⚡'
        ],
        '天气': [
            '今天天气不错呢，适合出门走走！☀️',
            '天气变化多端，记得随时关注天气预报哦 🌤️',
            '下雨天记得带伞，天冷记得加衣，照顾好自己！☔',
            '阳光明媚的日子，心情也会变好呢！🌞',
            '今天温度适宜，很适合出游哦！🌡️',
            '天气冷的时候，记得喝杯热饮暖暖身子 ❄️'
        ],
        '景点推荐': [
            '根据你的心情，我推荐你去五大道散步，那里有美丽的洋楼建筑，非常适合放松心情 🏛️',
            '不如去天津之眼摩天轮俯瞰海河夜景，浪漫又惬意 🎡',
            '古文化街很有津门特色，泥人张、杨柳青年画都很值得一看哦 🎭',
            '盘山是京东第一山，风景秀丽，特别适合登山爱好者 ⛰️',
            '独乐寺有千年历史，辽代建筑瑰宝，值得一去 🏯',
            '蓟州溶洞的钟乳石奇观美不胜收，适合带家人一起去探险 🕳️',
            '意式风情区充满异域风情，拍照打卡的好地方！🇮🇹',
            '解放桥是天津的标志性建筑，夜景特别美！🌉',
            '海河夜景美不胜收，一定要去看看！🌊',
            '南市食品街不仅有美食，建筑风格也很有特色！🍜'
        ],
        '美食推荐': [
            '来天津一定要尝尝狗不理包子，皮薄馅大，鲜嫩多汁！ 🥟',
            '推荐你去西北角，那里有最地道的回民美食，煎饼果子、锅巴菜都很棒 🍜',
            '南市食品街汇聚了各种天津传统小吃，一定让你大饱口福 🍢',
            '绿豆焖子是蓟州特色小吃，软糯Q弹，一定让你回味无穷 🍡',
            '大饼卷圈是天津早餐标配，酥脆可口，趁热吃最香 🥞',
            '小宝糖炒栗子是天津老字号，香甜软糯，秋冬季节必备 🌰',
            '耳朵眼炸糕外酥里糯，是津门三绝之一，一定要尝尝！🧈',
            '煎饼果子是天津人的早餐灵魂，一定要吃正宗的！🥞',
            '锅巴菜是天津独有的美食，来天津必须体验！🍲',
            '熟梨糕是天津传统小吃，软糯香甜，满满的童年回忆！🍮'
        ],
        '笑话': [
            '有一天，小明去天津旅游，问路人："天津之眼在哪？" 路人说："你眨眨眼就知道了！" 😄',
            '天津人说："嘛钱不钱的，乐呵乐呵得了！" 这就是哏都人的快乐秘诀 😆',
            '为什么天津人说话都像说相声？因为他们天天都在演哏剧啊！ 🎭',
            '游客："天津话怎么这么逗？" 天津人："我们说话自带包袱！" 🤣',
            '听说天津人吵架都像说相声，全程不带重样儿的！😝',
            '问：天津人最喜欢的数字是什么？答："嘛"！因为他们天天说"干嘛呢？" 😂'
        ],
        '故事': [
            '从前有座城，叫哏都，那里的人们都特别乐观，每天都开开心心的...这个故事告诉我们：快乐是一种选择 🌟',
            '你知道吗？天津之眼是世界上唯一建在桥上的摩天轮，每当夜幕降临，它就像一只银色眼睛注视着这座城市 🌙',
            '古文化街的天后宫是天津最古老的建筑之一，相传来这里祈福特别灵验哦 ⛩️',
            '盘山始于东汉，历代帝王将相都曾来此游玩，相传乾隆皇帝曾多次登临盘山 🏔️',
            '独乐寺的白塔有个传说：据说当年建造时，工匠们遇到了困难，后来得到神仙指点才顺利完成 🗼',
            '蓟州溶洞的形成经历了亿万年的地质变迁，大自然的鬼斧神工令人叹为观止 🕳️',
            '狮子林桥因为桥上有很多石狮子而得名，每只狮子的表情都不一样，特别有趣！🦁',
            '海河是天津的母亲河，见证了这座城市的百年变迁 🌊',
            '天津的相声文化源远流长，马三立、侯宝林等大师都出自这里 🎤',
            '杨柳青年画始于明代，色彩鲜艳，构图饱满，是中国四大年画之一 🎨'
        ],
        '百科': [
            '天津，简称"津"，是中国四大直辖市之一，素有"哏都"之称，是相声的发源地，相声文化底蕴深厚 🎭',
            '天津之眼摩天轮直径110米，到达最高点时可以看到方圆40公里的景色，非常壮观！ 🎡',
            '狗不理包子始创于1858年，因其创始人高贵友的小名"狗不理"而得名，已有160多年历史 🥟',
            '盘山位于蓟州区，是国家5A级景区，以"三盘、五峰、八石"著称，主峰挂月峰海拔864米 ⛰️',
            '独乐寺是中国三大辽代寺院之一，寺内观音阁高23米，是国内最古老的木结构楼阁式建筑 🏯',
            '风筝魏风筝是国家级非遗，创始于清代，以造型精美、结构巧妙著称，既是工艺品又是飞行器 🪁',
            '天津葫芦烙画是传统手工艺，用特制的烙铁在葫芦表面烫烙出各种图案，古朴典雅 🎨',
            '天津相声是北方相声的代表，以幽默风趣、贴近生活著称，茶馆听相声是来天津必体验的项目 🎤',
            '泥人张彩塑始创于清代，泥人面目神情栩栩如生，为天津一绝 👤',
            '天津皇会是国家级非遗，源于清代妈祖娘娘生日庆典，是天津最盛大的传统庙会活动 🎉'
        ],
        '旅行建议': [
            '来天津旅游建议安排2-3天，可以充分体验天津的魅力！🗺️',
            '天津的景点大多集中在市区，交通很方便，地铁和公交都很发达 🚇',
            '晚上一定要去海河边上走走，夜景真的很美！🌃',
            '建议穿舒适的鞋子，因为天津的景点之间步行可达，边走边逛很惬意 🚶',
            '天津人热情好客，问路的时候他们会很热心地帮助你！😊',
            '如果时间充裕，可以去蓟州玩一天，盘山、独乐寺都值得一去 ⛰️'
        ],
        'default': [
            '谢谢你和我分享这些 💖',
            '我在认真听呢，继续说吧 🌸',
            '有你在真好，我会一直陪着你的 ✨',
            '嗯，我明白你的感受 🌷',
            '你愿意和我分享，我很开心 💝',
            '继续说，我在认真倾听呢 🎧',
            '你的想法很有趣，我很喜欢听！🎈',
            '无论发生什么，我都会在这里支持你 💪',
            '谢谢你信任我，愿意和我说这些 🌟',
            '和你聊天真的很开心！🥰'
        ]
    };

    // 智能问答数据库
    const qaDatabase = {
        '五大道': { openTime: '全天开放', ticket: '免费(马车50元)', address: '天津市和平区重庆道55号', tip: '拥有2000多所花园洋房，万国建筑博览苑' },
        '天津之眼': { openTime: '9:30-21:30', ticket: '70元', address: '河北区五马路永乐桥', tip: '世界唯一建在桥上的摩天轮' },
        '古文化街': { openTime: '全天', ticket: '免费', address: '南开区古文化街', tip: '泥人张、杨柳青年画集中地' },
        '意式风情区': { openTime: '全天', ticket: '免费', address: '河北区意式风情区', tip: '200余栋地中海风格建筑' },
        '滨江道': { openTime: '全天', ticket: '免费', address: '和平区滨江道', tip: '天津最繁华的商业步行街' },
        '狗不理包子': { openTime: '7:00-20:00', ticket: '人均50元', address: '和平区山东路77号', tip: '每个包子18个褶，皮薄馅大' },
        '煎饼果子': { openTime: '5:00-12:00', ticket: '人均8元', address: '各区街头', tip: '绿豆面配油条或薄脆' },
        '耳朵眼炸糕': { openTime: '8:00-20:00', ticket: '人均12元', address: '红桥区耳朵眼胡同', tip: '津门三绝之一，外酥里糯' },
        '十八街麻花': { openTime: '8:00-20:00', ticket: '人均30元', address: '河西区十八街', tip: '津门三绝之一，酥脆香甜' },
        '泥人张': { openTime: '9:00-17:00', ticket: '免费', address: '古文化街', tip: '国家级非遗，形神毕肖' },
        '杨柳青年画': { openTime: '9:00-17:00', ticket: '30元', address: '西青区杨柳青镇', tip: '四百年历史，木版套印' },
        '天津相声': { openTime: '19:30-21:30', ticket: '80元', address: '名流茶馆', tip: '茶馆文化，幽默哏都' },
        '盘山': { openTime: '8:00-17:30', ticket: '60元', address: '蓟州区官庄镇盘山', tip: '京东第一山，国家5A级景区' },
        '独乐寺': { openTime: '8:00-17:30', ticket: '40元', address: '蓟州区武定街41号', tip: '千年古刹，辽代建筑瑰宝' },
        '蓟州溶洞': { openTime: '8:00-17:00', ticket: '80元', address: '蓟州区罗庄子镇', tip: '华北最大溶洞之一，钟乳石奇观' },
        '绿豆焖子': { openTime: '全天', ticket: '人均15元', address: '蓟州区各小吃店', tip: '蓟州特色小吃，软糯Q弹' },
        '大饼卷圈': { openTime: '6:00-10:00', ticket: '人均6元', address: '各区早点摊', tip: '天津早餐标配，酥脆可口' },
        '小宝糖炒栗子': { openTime: '9:00-22:00', ticket: '人均25元', address: '南开区三马路', tip: '天津老字号，香甜软糯' },
        '风筝魏风筝': { openTime: '9:00-17:00', ticket: '免费参观', address: '古文化街', tip: '国家级非遗，造型精美' },
        '天津葫芦烙画': { openTime: '9:00-17:00', ticket: '免费参观', address: '古文化街', tip: '火笔丹青，以火为墨' }
    };

    // 单位换算
    const unitConversions = {
        'km换米': 1000, '米换km': 0.001,
        'kg换斤': 2, '斤换kg': 0.5,
        'cm换英寸': 0.3937, '英寸换cm': 2.54,
        'c换f': (c) => c * 9/5 + 32, 'f换c': (f) => (f - 32) * 5/9,
        '人民币换美元': 0.14, '美元换人民币': 7.1
    };

    function getRandomResponse(key) {
        const responses = aiResponses[key] || aiResponses['default'];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    function addMessage(text, isUser) {
        const msg = document.createElement('div');
        msg.className = `ai-message ${isUser ? 'user' : 'ai'}`;
        msg.textContent = text;
        aiMessages.appendChild(msg);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    function searchQADatabase(text) {
        for (let key in qaDatabase) {
            if (text.includes(key)) {
                const info = qaDatabase[key];
                return `${key}的信息：\n📍 地址：${info.address}\n🕘 ${info.ticket.includes('免费') ? '门票' : '价格'}：${info.ticket}\n⏰ ${info.tip.includes('全天') || info.tip.includes('9:') ? '开放时间' : '特色'}：${info.openTime}\n💡 ${info.tip}`;
            }
        }
        return null;
    }

    function processCommand(text) {
        const lowerText = text.toLowerCase();

        // 实用工具 - 翻译
        if (lowerText.includes('翻译') || lowerText.includes('translate')) {
            const engWords = {
                '你好': 'Hello', '谢谢': 'Thank you', '再见': 'Goodbye', '我爱你': 'I love you',
                '狗不理': 'Go Believe', '煎饼果子': 'Jianbing Guozi', '天津': 'Tianjin',
                '摩天轮': 'Ferris Wheel', '景点': 'Scenic Spot', '美食': 'Delicious Food'
            };
            for (let cn in engWords) {
                if (text.includes(cn)) return `翻译：${cn} → ${engWords[cn]} 🌐`;
            }
            for (let en in engWords) {
                if (lowerText.includes(en.toLowerCase())) return `翻译：${en} → ${engWords[en]} 🌐`;
            }
            return '抱歉，我目前支持以下中英互译：你好、谢谢、再见、我爱你、狗不理、煎饼果子、天津、摩天轮、景点、美食';
        }

        // 实用工具 - 计算
        const calcMatch = text.match(/(\d+)\s*[\+\-\*\/]\s*(\d+)/);
        if (calcMatch) {
            const a = parseFloat(calcMatch[1]);
            const b = parseFloat(calcMatch[2]);
            const op = text.includes('+') ? '+' : text.includes('-') ? '-' : text.includes('*') ? '*' : '/';
            const result = op === '+' ? a + b : op === '-' ? a - b : op === '*' ? a * b : (a / b).toFixed(2);
            return `计算结果：${a} ${op} ${b} = ${result} 🧮`;
        }

        // 实用工具 - 单位换算
        if (text.includes('km换米') || text.includes('公里换米')) {
            const num = parseFloat(text.match(/\d+/)?.[0] || 1);
            return `${num}公里 = ${num * 1000}米 📏`;
        }
        if (text.includes('米换km') || text.includes('米换公里')) {
            const num = parseFloat(text.match(/\d+/)?.[0] || 1000);
            return `${num}米 = ${(num / 1000).toFixed(2)}公里 📏`;
        }
        if (text.includes('kg换斤') || text.includes('公斤换斤')) {
            const num = parseFloat(text.match(/\d+/)?.[0] || 1);
            return `${num}公斤 = ${num * 2}斤 ⚖️`;
        }
        if (text.includes('斤换kg') || text.includes('斤换公斤')) {
            const num = parseFloat(text.match(/\d+/)?.[0] || 1);
            return `${num}斤 = ${num / 2}公斤 ⚖️`;
        }
        if (text.includes('c换f') || text.includes('摄氏度换华氏度')) {
            const num = parseFloat(text.match(/\d+/)?.[0] || 25);
            return `${num}°C = ${(num * 9/5 + 32).toFixed(1)}°F 🌡️`;
        }
        if (text.includes('f换c') || text.includes('华氏度换摄氏度')) {
            const num = parseFloat(text.match(/\d+/)?.[0] || 77);
            return `${num}°F = ${((num - 32) * 5/9).toFixed(1)}°C 🌡️`;
        }

        return null;
    }

    function getAIResponse(text) {
        const lowerText = text.toLowerCase();

        // 智能问答 - 搜索景点/美食信息
        const qaResult = searchQADatabase(text);
        if (qaResult) return qaResult;

        // 实用工具
        const cmdResult = processCommand(text);
        if (cmdResult) return cmdResult;

        // 心情分类
        if (lowerText.includes('开心') || lowerText.includes('高兴') || lowerText.includes('快乐') || lowerText.includes('心情好')) {
            return getRandomResponse('开心');
        }
        if (lowerText.includes('累') || lowerText.includes('疲惫') || lowerText.includes('困') || lowerText.includes('压力大')) {
            return getRandomResponse('累');
        }
        if (lowerText.includes('迷茫') || lowerText.includes('不知道') || lowerText.includes('怎么办') || lowerText.includes('困惑')) {
            return getRandomResponse('迷茫');
        }
        if (lowerText.includes('夸') || lowerText.includes('赞美') || lowerText.includes('我棒') || lowerText.includes('夸我')) {
            return getRandomResponse('赞美');
        }

        // 推荐功能
        if (lowerText.includes('推荐景点') || lowerText.includes('去哪玩') || lowerText.includes('景点推荐') || lowerText.includes('有什么好玩的') || 
            lowerText.includes('推荐一个景点') || lowerText.includes('推荐个景点') || lowerText.includes('介绍景点') || lowerText.includes('好玩的地方')) {
            return getRandomResponse('景点推荐');
        }
        if (lowerText.includes('推荐美食') || lowerText.includes('吃什么') || lowerText.includes('美食推荐') || lowerText.includes('好吃的') || 
            lowerText.includes('推荐一个美食') || lowerText.includes('推荐个美食') || lowerText.includes('介绍美食') || lowerText.includes('特色小吃')) {
            return getRandomResponse('美食推荐');
        }
        if (lowerText.includes('给我推荐') || lowerText.includes('你能推荐') || lowerText.includes('推荐一个') || lowerText.includes('推荐个')) {
            const allRecs = [...aiResponses['景点推荐'], ...aiResponses['美食推荐']];
            return allRecs[Math.floor(Math.random() * allRecs.length)];
        }

        // 百科问答
        if (lowerText.includes('什么是') || lowerText.includes('百科') || lowerText.includes('介绍一下') || lowerText.includes('知道吗')) {
            return getRandomResponse('百科');
        }
        if (lowerText.includes('天津')) {
            return getRandomResponse('百科');
        }

        // 笑话
        if (lowerText.includes('笑话') || lowerText.includes('搞笑') || lowerText.includes('逗我笑') || lowerText.includes('讲个笑话')) {
            return getRandomResponse('笑话');
        }

        // 故事
        if (lowerText.includes('讲故事') || lowerText.includes('故事') || lowerText.includes('传说') || lowerText.includes('有什么典故')) {
            return getRandomResponse('故事');
        }

        // 鼓励
        if (lowerText.includes('加油') || lowerText.includes('鼓励') || lowerText.includes('支持') || lowerText.includes('相信自己')) {
            return getRandomResponse('鼓励');
        }

        // 晚安
        if (lowerText.includes('晚安') || lowerText.includes('睡觉') || lowerText.includes('好梦') || lowerText.includes('休息')) {
            return getRandomResponse('晚安');
        }

        // 天气
        if (lowerText.includes('天气') || lowerText.includes('温度') || lowerText.includes('冷') || lowerText.includes('热') || lowerText.includes('下雨')) {
            return getRandomResponse('天气');
        }

        // 旅行建议
        if (lowerText.includes('攻略') || lowerText.includes('旅行建议') || lowerText.includes('怎么玩') || lowerText.includes('行程')) {
            return getRandomResponse('旅行建议');
        }

        // 感谢
        if (lowerText.includes('谢谢') || lowerText.includes('感谢') || lowerText.includes('谢谢你') || lowerText.includes('辛苦了')) {
            return '不客气！能帮到你我很开心 💖';
        }

        // 问候
        if (lowerText.includes('你好') || lowerText.includes('嗨') || lowerText.includes('哈喽') || lowerText.includes('在吗')) {
            return '你好呀！我是AI小暖，很高兴认识你～ 有什么我可以帮助你的吗？😊';
        }

        // 闲聊
        if (lowerText.includes('在干嘛') || lowerText.includes('忙吗') || lowerText.includes('无聊') || lowerText.includes('聊天')) {
            return '我在随时待命呢！陪你聊天、解答问题、推荐景点美食都可以哦～ 你想聊点什么呀？✨';
        }

        // 路线规划
        if (lowerText.includes('路线') || lowerText.includes('行程') || lowerText.includes('规划') || lowerText.includes('攻略') || lowerText.includes('怎么玩')) {
            return '我可以帮你规划天津旅行路线哦！你可以告诉我游玩天数、出行人群和消费类型，我来为你推荐最合适的行程～ 🗺️';
        }

        // 知识问答
        if (lowerText.includes('问答') || lowerText.includes('答题') || lowerText.includes('知识') || lowerText.includes('题目') || lowerText.includes('测试')) {
            return '想挑战天津知识问答吗？点击首页的知识问答入口，测试一下你对天津的了解程度吧！答对还有奖励哦～ 🧠';
        }

        // 非遗文化
        if (lowerText.includes('非遗') || lowerText.includes('文化') || lowerText.includes('传统') || lowerText.includes('手工艺')) {
            return '天津有很多精彩的非物质文化遗产，比如泥人张、杨柳青年画、风筝魏等！点击底部导航的"非遗"可以了解更多～ 🎭';
        }

        // 美食推荐
        if (lowerText.includes('吃') || lowerText.includes('美食') || lowerText.includes('小吃') || lowerText.includes('特产')) {
            return '天津美食可太多啦！狗不理包子、煎饼果子、十八街麻花...点击底部导航的"美食"可以看到更多推荐哦～ 🍜';
        }

        // 景点介绍
        if (lowerText.includes('景点') || lowerText.includes('旅游') || lowerText.includes('玩') || lowerText.includes('风景')) {
            return '天津有很多值得一去的景点！五大道、天津之眼、古文化街...点击底部导航的"景点"可以看到详细介绍～ 🏛️';
        }

        // 音乐播放
        if (lowerText.includes('音乐') || lowerText.includes('歌') || lowerText.includes('声音') || lowerText.includes('播放')) {
            return '背景音乐是天津小曲哦～ 如果想关闭可以点击页面上的音乐控制按钮！🎵';
        }

        // 首页导航
        if (lowerText.includes('首页') || lowerText.includes('返回') || lowerText.includes('回去')) {
            return '点击顶部导航的"首页"或者底部导航的"首页"按钮，就能回到首页啦！🏠';
        }

        return getRandomResponse('default');
    }

    function sendUserMessage(text) {
        if (!text.trim()) return;
        addMessage(text, true);
        aiInput.value = '';

        setTimeout(() => {
            const response = getAIResponse(text);
            addMessage(response, false);
        }, 800);
    }

    window.aiQuickReply = function(key) {
        const quickText = {
            '开心': '今天很开心！',
            '累': '有点累了...',
            '迷茫': '有些迷茫',
            '赞美': '夸夸我吧！',
            '推荐': '给我推荐个好玩的',
            '笑话': '讲个笑话吧',
            '百科': '介绍一下天津'
        };
        sendUserMessage(quickText[key] || key);
    };

    if (aiBtn) {
        aiBtn.addEventListener('click', () => {
            aiWindow.style.display = aiWindow.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    if (aiClose) {
        aiClose.addEventListener('click', () => {
            aiWindow.style.display = 'none';
        });
    }

    if (aiSend) {
        aiSend.addEventListener('click', () => {
            sendUserMessage(aiInput.value);
        });
    }

    if (aiInput) {
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendUserMessage(aiInput.value);
            }
        });
    }

    filterContent('all');

    // 知识问答功能
    initQuiz();
});

// 天津知识问答数据（20题）
const quizQuestions = [
    {
        question: '天津的市花是什么？',
        options: ['月季', '牡丹', '菊花', '梅花'],
        answer: 0,
        reward: '🎉 恭喜！获得"津门小达人"称号！',
        explanation: '天津的市花是月季，象征着热情、坚韧和永恒的爱情。'
    },
    {
        question: '天津之眼是世界上唯一建在什么上面的摩天轮？',
        options: ['桥上', '山上', '水上', '屋顶上'],
        answer: 0,
        reward: '🎡 太棒了！获得"摩天轮守护者"称号！',
        explanation: '天津之眼是世界上唯一建在桥梁（永乐桥）上的摩天轮。'
    },
    {
        question: '天津著名的"狗不理"包子始创于哪个朝代？',
        options: ['清朝', '明朝', '唐朝', '宋朝'],
        answer: 0,
        reward: '🥟 厉害！获得"美食家"称号！',
        explanation: '狗不理包子始创于清朝同治年间（1858年）。'
    },
    {
        question: '天津古文化街以什么为中心？',
        options: ['天后宫', '玉皇阁', '文庙', '大悲禅院'],
        answer: 0,
        reward: '🏮 优秀！获得"传统文化传承者"称号！',
        explanation: '古文化街以天后宫为中心，是天津最古老的商业街。'
    },
    {
        question: '天津人常说的"哏"是什么意思？',
        options: ['有趣、逗乐', '聪明', '厉害', '漂亮'],
        answer: 0,
        reward: '😄 太哏儿了！获得"哏都小霸王"称号！',
        explanation: '"哏"是天津方言，指有趣、逗乐、好笑的意思。'
    },
    {
        question: '盘山被誉为？',
        options: ['京东第一山', '华北第一峰', '燕山明珠', '太行之巅'],
        answer: 0,
        reward: '⛰️ 真棒！获得"登山小能手"称号！',
        explanation: '盘山被誉为"京东第一山"，是天津著名的风景名胜区。'
    },
    {
        question: '独乐寺是哪个朝代的建筑？',
        options: ['辽代', '唐代', '宋代', '明代'],
        answer: 0,
        reward: '🏯 厉害！获得"历史探秘者"称号！',
        explanation: '独乐寺建于辽代，是中国现存最古老的木结构建筑之一。'
    },
    {
        question: '天津特色小吃"煎饼果子"的主要原料是？',
        options: ['绿豆面', '小麦面', '玉米面', '高粱面'],
        answer: 0,
        reward: '🍕 完美！获得"早餐达人"称号！',
        explanation: '天津煎饼果子传统上使用绿豆面制作，口感酥脆。'
    },
    {
        question: '五大道地区共有多少条街道？',
        options: ['五条', '八条', '十条', '十三条'],
        answer: 1,
        reward: '🏛️ 优秀！获得"洋楼鉴赏家"称号！',
        explanation: '五大道实际有八条街道，因其中五条最为著名而得名。'
    },
    {
        question: '海河是天津的母亲河，它最终流入哪里？',
        options: ['渤海', '黄海', '东海', '南海'],
        answer: 0,
        reward: '🌊 正确！获得"海河守护者"称号！',
        explanation: '海河是天津的母亲河，最终注入渤海湾。'
    },
    {
        question: '天津的"泥人张"是一种什么艺术形式？',
        options: ['彩塑', '剪纸', '年画', '刺绣'],
        answer: 0,
        reward: '🧑🎨 太棒了！获得"民间艺术大师"称号！',
        explanation: '泥人张是天津著名的彩塑艺术，已有近200年历史。'
    },
    {
        question: '杨柳青年画起源于哪个朝代？',
        options: ['明朝', '清朝', '元朝', '宋朝'],
        answer: 0,
        reward: '🖼️ 厉害！获得"年画收藏家"称号！',
        explanation: '杨柳青年画起源于明朝崇祯年间，是中国四大年画之一。'
    },
    {
        question: '天津相声的发源地是哪里？',
        options: ['劝业场', '茶馆', '德云社', '名流茶馆'],
        answer: 1,
        reward: '🎤 太牛了！获得"相声爱好者"称号！',
        explanation: '天津相声发源于茶馆，是中国相声的重要发源地之一。'
    },
    {
        question: '天津港是中国第几大港？',
        options: ['第一', '第二', '第三', '第四'],
        answer: 1,
        reward: '🚢 正确！获得"港口探险家"称号！',
        explanation: '天津港是中国北方最大的综合性港口，吞吐量位居全国前列。'
    },
    {
        question: '天津大学的前身是什么？',
        options: ['北洋大学', '南开大学', '燕京大学', '辅仁大学'],
        answer: 0,
        reward: '🎓 博学！获得"学霸"称号！',
        explanation: '天津大学的前身是北洋大学，成立于1895年，是中国第一所现代大学。'
    },
    {
        question: '天津的母亲河"海河"全长约多少公里？',
        options: ['70公里', '100公里', '130公里', '160公里'],
        answer: 2,
        reward: '💧 厉害！获得"地理小专家"称号！',
        explanation: '海河全长约130公里，贯穿天津市区，是天津的重要地标。'
    },
    {
        question: '天津特色美食"耳朵眼炸糕"始创于哪一年？',
        options: ['1900年', '1910年', '1920年', '1930年'],
        answer: 0,
        reward: '🍩 完美！获得"糕点达人"称号！',
        explanation: '耳朵眼炸糕始创于1900年，是天津三绝之一。'
    },
    {
        question: '天津的"天塔"是亚洲第几高的电视塔？',
        options: ['第一', '第二', '第三', '第四'],
        answer: 1,
        reward: '🏰 太棒了！获得"高塔征服者"称号！',
        explanation: '天津广播电视塔（天塔）高415.2米，是亚洲第二高的电视塔。'
    },
    {
        question: '天津话属于哪种方言体系？',
        options: ['冀鲁官话', '东北官话', '北京官话', '江淮官话'],
        answer: 0,
        reward: '🗣️ 太哏儿了！获得"方言专家"称号！',
        explanation: '天津话属于冀鲁官话保唐片，具有独特的语音和词汇特点。'
    },
    {
        question: '天津意式风情区曾是哪个国家的租界？',
        options: ['意大利', '英国', '法国', '德国'],
        answer: 0,
        reward: '🇮🇹 正确！获得"租界探索者"称号！',
        explanation: '天津意式风情区曾是意大利在天津的租界，保留了大量意大利风格建筑。'
    }
];
/*AI辅助生成：豆包-2026.5.25*/
let currentQuizIndex = 0;
let quizScore = 0;
let currentQuizQuestions = [];
let originalMainContent = ''; // 保存原来的页面内容
let quizStarted = false; // 是否已经开始问答会话（未退出）

function initQuiz() {
    const quizNav = document.getElementById('quizNav');
    if (quizNav) {
        quizNav.onclick = () => openQuiz();
    }
}

function openQuiz() {
    // 保存原来的页面内容
    const mainContent = document.querySelector('main');
    if (mainContent) {
        originalMainContent = mainContent.innerHTML;
    }
    
    // 如果还没有开始问答会话，初始化题目
    if (!quizStarted) {
        currentQuizIndex = 0;
        quizScore = 0;
        // 随机从20题中抽取10题
        const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
        currentQuizQuestions = shuffled.slice(0, 10);
        quizStarted = true;
    }
    
    // 如果已经答完所有题目，重新开始
    if (currentQuizIndex >= currentQuizQuestions.length) {
        currentQuizIndex = 0;
        quizScore = 0;
        const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
        currentQuizQuestions = shuffled.slice(0, 10);
    }
    
    renderQuiz();
    
    // 确保知识问答导航按钮被激活（放在 renderQuiz 之后确保DOM已更新）
    setTimeout(() => {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        const quizNav = document.getElementById('quizNav');
        if (quizNav) quizNav.classList.add('active');
    }, 0);
}

function renderQuiz() {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const question = currentQuizQuestions[currentQuizIndex];
    
    mainContent.innerHTML = `
        <section class="section" style="max-width:600px;margin:0 auto;">
            <div class="quiz-header">
                <div class="quiz-progress">
                    <span>问题 ${currentQuizIndex + 1} / ${currentQuizQuestions.length}</span>
                    <span class="quiz-score">得分: ${quizScore}</span>
                </div>
                <button class="quiz-back-btn" onclick="exitQuiz()">✕ 退出问答</button>
            </div>
            
            <div class="quiz-card">
                <div class="quiz-question">
                    <h3>❓ ${question.question}</h3>
                </div>
                
                <div class="quiz-options">
                    ${question.options.map((opt, idx) => `
                        <button class="quiz-option" onclick="checkAnswer(${idx})">
                            <span class="option-label">${['A', 'B', 'C', 'D'][idx]}</span>
                            <span class="option-text">${opt}</span>
                        </button>
                    `).join('')}
                </div>
                
                <div class="quiz-feedback" id="quizFeedback"></div>
            </div>
        </section>
    `;
}

function exitQuiz() {
    // 重置问答状态
    quizStarted = false;
    currentQuizIndex = 0;
    quizScore = 0;
    currentQuizQuestions = [];

    // 返回首页：恢复保存的原始页面内容
    const mainContent = document.querySelector('main');
    if (mainContent && originalMainContent) {
        mainContent.innerHTML = originalMainContent;
        originalMainContent = '';
        // 激活首页导航
        document.querySelectorAll('#navLinks a').forEach(a => a.classList.remove('active'));
        const homeNav = document.querySelector('#navLinks a[data-filter="all"]');
        if (homeNav) homeNav.classList.add('active');
    } else {
        // 如果没有保存的内容，重新加载页面
        location.reload();
    }
}

function exitQuizAndGoHome() {
    // 退出问答并返回首页（用于结果页面）
    quizStarted = false;
    currentQuizIndex = 0;
    quizScore = 0;
    currentQuizQuestions = [];

    // 返回首页：恢复保存的原始页面内容
    const mainContent = document.querySelector('main');
    if (mainContent && originalMainContent) {
        mainContent.innerHTML = originalMainContent;
        originalMainContent = '';
        // 激活首页导航
        document.querySelectorAll('#navLinks a').forEach(a => a.classList.remove('active'));
        const homeNav = document.querySelector('#navLinks a[data-filter="all"]');
        if (homeNav) homeNav.classList.add('active');
    } else {
        // 如果没有保存的内容，重新加载页面
        location.reload();
    }
}

function checkAnswer(selectedIndex) {
    // 禁用所有按钮，防止重复点击
    const buttons = document.querySelectorAll('.quiz-option');
    buttons.forEach(btn => btn.disabled = true);
    
    const question = currentQuizQuestions[currentQuizIndex];
    const feedback = document.getElementById('quizFeedback');
    
    // 给用户选择的选项添加高亮
    buttons.forEach((btn, idx) => {
        if (idx === selectedIndex) {
            if (selectedIndex === question.answer) {
                btn.classList.add('correct-answer'); // 答对-绿色
            } else {
                btn.classList.add('wrong-answer'); // 答错-红色
            }
        }
        if (idx === question.answer && selectedIndex !== question.answer) {
            btn.classList.add('correct-answer'); // 显示正确答案
        }
    });
    
    if (selectedIndex === question.answer) {
        quizScore += 10;
        feedback.innerHTML = `
            <div class="feedback correct">
                <div class="feedback-icon">✅</div>
                <div class="feedback-content">
                    <p>${question.reward}</p>
                    <p class="feedback-explanation">💡 ${question.explanation}</p>
                </div>
            </div>
        `;
    } else {
        feedback.innerHTML = `
            <div class="feedback wrong">
                <div class="feedback-icon">❌</div>
                <div class="feedback-content">
                    <p>答错了！正确答案是 <strong>${['A', 'B', 'C', 'D'][question.answer]}. ${question.options[question.answer]}</strong></p>
                    <p class="feedback-explanation">💡 ${question.explanation}</p>
                </div>
            </div>
        `;
    }

    setTimeout(() => {
        if (currentQuizIndex < currentQuizQuestions.length - 1) {
            currentQuizIndex++;
            renderQuiz();
        } else {
            showQuizResult();
        }
    }, 2000);
}

function showQuizResult() {
    // 问答结束，重置状态（分数在显示完结果后重置）
    quizStarted = false;
    currentQuizIndex = 0;
    
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const totalQuestions = currentQuizQuestions.length;
    const percentage = Math.round((quizScore / (totalQuestions * 10)) * 100);
    let grade, gradeEmoji, gradeTitle;
    
    if (percentage >= 90) {
        grade = 'S';
        gradeEmoji = '🏆';
        gradeTitle = '津门通';
    } else if (percentage >= 80) {
        grade = 'A';
        gradeEmoji = '🌟';
        gradeTitle = '天津达人';
    } else if (percentage >= 60) {
        grade = 'B';
        gradeEmoji = '👍';
        gradeTitle = '津门爱好者';
    } else {
        grade = 'C';
        gradeEmoji = '📚';
        gradeTitle = '新天津人';
    }

    // 保存当前分数用于显示
    const finalScore = quizScore;
    
    // 重置分数，为下一次游戏做准备
    quizScore = 0;

    mainContent.innerHTML = `
        <section class="section" style="max-width:500px;margin:0 auto;text-align:center;">
            <div class="quiz-result">
                <div class="result-emoji">${gradeEmoji}</div>
                <h2 class="result-grade">等级 ${grade}</h2>
                <h3 class="result-title">${gradeTitle}</h3>
                <div class="result-score">
                    <div class="score-circle">${finalScore}</div>
                    <div class="score-text">得分 / ${totalQuestions * 10}</div>
                </div>
                <p class="result-desc">${getResultDescription(percentage)}</p>
                <div class="result-buttons">
                    <button class="planner-btn" onclick="openQuiz()">🔄 再玩一次</button>
                    <button class="planner-btn" onclick="exitQuizAndGoHome()">🏠 返回首页</button>
                </div>
            </div>
        </section>
    `;
}

function getResultDescription(percentage) {
    if (percentage >= 90) {
        return '你对天津太了解了！不愧是真正的津门通！🎉';
    } else if (percentage >= 80) {
        return '很棒！你对天津的了解很深入！✨';
    } else if (percentage >= 60) {
        return '不错！继续学习，你会更了解天津的！💪';
    } else {
        return '加油！多来天津游玩，你会爱上这座城市的！🌆';
    }
}
/*AI辅助生成：DeeepSeek-v3，2026.4.29*/
/*AI辅助删除部分代码：DeepSeek-v3,2026.5.28*/