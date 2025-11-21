document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const contentArea = document.getElementById('content-area');

    console.log('3rd Grade Science App Initialized');

    // Topic Data
    const topics = [
        { id: 'plants', title: 'しょくぶつ', icon: '🌱', color: '#4CAF50' },
        { id: 'magnets', title: 'じしゃく', icon: '🧲', color: '#F44336' },
        { id: 'light', title: 'ひかり', icon: '☀️', color: '#FFC107' },
        { id: 'electricity', title: 'でんき', icon: '💡', color: '#FFEB3B' },
        { id: 'insects', title: 'こんちゅう', icon: '🐞', color: '#795548' },
        { id: 'sdgs', title: 'SDGs', icon: '🌏', color: '#2196F3' },
        { id: 'news', title: 'さいしんニュース', icon: '📰', color: '#607D8B' }
    ];

    // Full Content Data (Hierarchical)
    const fullContentData = {
        plants: {
            title: '植物（しょくぶつ）の育ち方',
            lessons: [
                {
                    id: 'p1', title: '1. 種（たね）まき',
                    content: `
                        <h3>種をまこう！</h3>
                        <p>植物を育てるには、まず種をまきます。</p>
                        <p>ホウセンカやヒマワリの種を見たことがありますか？</p>
                        <p>種によって、色や形、大きさが違います。</p>
                        <p>土に指で穴をあけて、種を入れて、優しく土をかぶせましょう。</p>
                    `,
                    image: 'images/plants_1_sowing_1763719738989.png',
                    quizzes: [
                        { q: '種をまくとき、最初になにをする？', options: ['土に穴をあける', '水をかける', '肥料をやる'], answer: 0 },
                        { q: '種をまいた後はどうする？', options: ['強く叩く', '優しく土をかぶせる', '掘り返す'], answer: 1 },
                        { q: '種の色や形は？', options: ['全部同じ', '植物によって違う', '全部黒い'], answer: 1 }
                    ]
                },
                {
                    id: 'p2', title: '2. 芽（め）が出たよ',
                    content: `
                        <h3>芽が出た！</h3>
                        <p>種をまいて水をあげていると、土の中から「芽」が出てきます。</p>
                        <p>最初に出てくる葉っぱを「子葉（しよう）」といいます。</p>
                        <p>ホウセンカの子葉は丸い形をしています。</p>
                    `,
                    image: 'images/plants_2_sprout_1763719755625.png',
                    quizzes: [
                        { q: '最初に出てくる葉っぱを何という？', options: ['親葉', '子葉', '孫葉'], answer: 1 },
                        { q: '芽が出るために必要な世話は？', options: ['話しかける', '水をあげる', '歌う'], answer: 1 },
                        { q: 'ホウセンカの子葉の形は？', options: ['四角い', '丸い', '星型'], answer: 1 }
                    ]
                },
                {
                    id: 'p3', title: '3. ぐんぐん育つ',
                    content: `
                        <h3>大きくなあれ！</h3>
                        <p>植物が育つには、3つの大切なものがあります。</p>
                        <ul style="text-align: left; margin: 10px 0 20px 20px;">
                            <li>☀️ <strong>日光（にっこう）</strong></li>
                            <li>💧 <strong>水（みず）</strong></li>
                            <li>🌡️ <strong>適当な温度（おんど）</strong></li>
                        </ul>
                        <p>これらが揃うと、茎（くき）が伸びて、葉っぱが増えていきます。</p>
                    `,
                    image: 'images/plants_3_growing_1763719779116.png',
                    quizzes: [
                        { q: '植物が育つのに必要ないものは？', options: ['日光', 'お菓子', '水'], answer: 1 },
                        { q: '茎が伸びるとどうなる？', options: ['背が高くなる', '低くなる', '変わらない'], answer: 0 },
                        { q: '葉っぱの数はどうなる？', options: ['減る', '増える', '変わらない'], answer: 1 }
                    ]
                },
                {
                    id: 'p4', title: '4. 花がさいた',
                    content: `
                        <h3>きれいな花！</h3>
                        <p>夏になると、植物は花を咲かせます。</p>
                        <p>ヒマワリは大きな黄色い花、ホウセンカは赤や白の花を咲かせます。</p>
                        <p>花が咲いた後、そこには何ができるかな？</p>
                    `,
                    image: 'images/plants_4_flowers_1763719797023.png',
                    quizzes: [
                        { q: 'ヒマワリの花は何色？', options: ['青', '黄色', '黒'], answer: 1 },
                        { q: '花が咲くのはいつ頃？', options: ['冬', '夏', '真夜中'], answer: 1 },
                        { q: 'ホウセンカの花の色にないのは？', options: ['赤', '白', '金'], answer: 2 }
                    ]
                },
                {
                    id: 'p5', title: '5. 実（み）ができた',
                    content: `
                        <h3>命のバトンタッチ</h3>
                        <p>花が枯れると、そこに「実（み）」ができます。</p>
                        <p>実の中には、新しい「種」が入っています。</p>
                        <p>この種をまたまくと、新しい植物が育ちます。命は繋がっているんですね。</p>
                    `,
                    image: 'images/plants_5_seeds_1763719817569.png',
                    quizzes: [
                        { q: '花の後になにができる？', options: ['実（種）', '根っこ', '石'], answer: 0 },
                        { q: '実の中に入っているのは？', options: ['水', '種', '空気'], answer: 1 },
                        { q: 'できた種をまくとどうなる？', options: ['新しい植物が育つ', '爆発する', '消える'], answer: 0 }
                    ]
                }
            ]
        },
        // Placeholder for other topics (to be filled)
        magnets: {
            title: '磁石（じしゃく）のふしぎ',
            lessons: [
                {
                    id: 'm1', title: '1. 磁石ってなに？',
                    content: `
                        <h3>不思議な石、磁石</h3>
                        <p>磁石は、鉄（てつ）を引きつける力を持っています。</p>
                        <p>冷蔵庫のドアや、筆箱のふたなど、身の回りのいろいろな場所で使われています。</p>
                        <p>黒い磁石や、銀色の強力な磁石など、いろいろな種類があります。</p>
                    `,
                    image: 'images/magnets_1_magnets_1763719872716.png',
                    quizzes: [
                        { q: '磁石が引きつけるものは？', options: ['木', '鉄', 'プラスチック'], answer: 1 },
                        { q: '磁石が使われている場所は？', options: ['冷蔵庫のドア', '木の机', 'ガラスのコップ'], answer: 0 },
                        { q: '磁石にはどんな種類がある？', options: ['1種類だけ', 'いろいろな種類がある', 'ない'], answer: 1 }
                    ]
                },
                {
                    id: 'm2', title: '2. つくもの・つかないもの',
                    content: `
                        <h3>実験してみよう！</h3>
                        <p>磁石につくものと、つかないものを調べてみましょう。</p>
                        <p><strong>つくもの：</strong> 鉄の釘（くぎ）、クリップ、はさみ</p>
                        <p><strong>つかないもの：</strong> 10円玉（銅）、アルミ缶、プラスチック、木</p>
                        <p>金属（きんぞく）でも、鉄以外はつかないことが多いです。</p>
                    `,
                    image: 'images/magnets_2_attraction_1763719892488.png',
                    quizzes: [
                        { q: '磁石につくものはどれ？', options: ['10円玉', 'クリップ', '消しゴム'], answer: 1 },
                        { q: 'アルミ缶は磁石につく？', options: ['つく', 'つかない', '時々つく'], answer: 1 },
                        { q: '磁石につく金属は？', options: ['鉄', '銅', 'アルミニウム'], answer: 0 }
                    ]
                },
                {
                    id: 'm3', title: '3. N極とS極',
                    content: `
                        <h3>2つの極（きょく）</h3>
                        <p>磁石には「N極（エヌきょく）」と「S極（エスきょく）」があります。</p>
                        <p>棒磁石の端っこ（極）は、磁石の力が一番強い場所です。</p>
                        <p>N極は北（North）、S極は南（South）を指す性質があります。</p>
                    `,
                    image: 'https://placehold.co/600x400/F44336/white?text=N+and+S',
                    quizzes: [
                        { q: '磁石の極はいくつある？', options: ['1つ', '2つ', '3つ'], answer: 1 },
                        { q: 'N極はどの方角を指す？', options: ['東', '西', '北'], answer: 2 },
                        { q: '磁石の力が一番強いのは？', options: ['真ん中', '端っこ（極）', 'どこも同じ'], answer: 1 }
                    ]
                },
                {
                    id: 'm4', title: '4. 極の性質',
                    content: `
                        <h3>近づけるとどうなる？</h3>
                        <p>2つの磁石を近づけてみましょう。</p>
                        <p><strong>違う極同士（NとS）：</strong> 引き合ってくっつきます。</p>
                        <p><strong>同じ極同士（NとN、SとS）：</strong> 反発して（しりぞけあって）離れようとします。</p>
                        <p>目に見えない力が働いているのがわかりますね。</p>
                    `,
                    image: 'https://placehold.co/600x400/F44336/white?text=Repulsion',
                    quizzes: [
                        { q: 'N極とS極を近づけると？', options: ['くっつく', '反発する', 'なにも起きない'], answer: 0 },
                        { q: 'S極とS極を近づけると？', options: ['くっつく', '反発する', 'なにも起きない'], answer: 1 },
                        { q: '反発する組み合わせは？', options: ['NとS', 'SとN', 'NとN'], answer: 2 }
                    ]
                },
                {
                    id: 'm5', title: '5. 砂鉄（さてつ）集め',
                    content: `
                        <h3>砂の中の鉄</h3>
                        <p>公園の砂場などで、磁石をビニール袋に入れて砂の中を動かしてみましょう。</p>
                        <p>黒い粉のようなものがたくさんついてきます。</p>
                        <p>これが「砂鉄（さてつ）」です。砂鉄は細かい鉄の粒なので、磁石にくっつくのです。</p>
                    `,
                    image: 'https://placehold.co/600x400/F44336/white?text=Iron+Sand',
                    quizzes: [
                        { q: '砂鉄は何色？', options: ['赤', '白', '黒'], answer: 2 },
                        { q: '砂鉄の正体は？', options: ['細かい鉄', '細かいプラスチック', '虫のフン'], answer: 0 },
                        { q: '砂鉄を集めるときに使うと便利なものは？', options: ['磁石', '虫メガネ', '定規'], answer: 0 }
                    ]
                }
            ]
        },
        light: {
            title: '光（ひかり）のふしぎ',
            lessons: [
                {
                    id: 'l1', title: '1. 日光（にっこう）',
                    content: `
                        <h3>お日様の光</h3>
                        <p>太陽の光は、とても明るくてあたたかいですね。</p>
                        <p>日なたと日かげでは、明るさやあたたかさが違います。</p>
                        <p>地面の温度を測って比べてみましょう。</p>
                    `,
                    image: 'https://placehold.co/600x400/FFC107/white?text=Sunlight',
                    quizzes: [
                        { q: '太陽の光のことを何という？', options: ['日光', '月光', '星の光'], answer: 0 },
                        { q: '日なたと日かげ、あたたかいのは？', options: ['日かげ', '日なた', 'どちらも同じ'], answer: 1 },
                        { q: '地面の温度が高いのは？', options: ['日なた', '日かげ', '夜'], answer: 0 }
                    ]
                },
                {
                    id: 'l2', title: '2. 光の進み方',
                    content: `
                        <h3>まっすぐ進むよ</h3>
                        <p>光は、まっすぐ進む性質があります。</p>
                        <p>これを「直進（ちょくしん）」といいます。</p>
                        <p>雲の間から光が差しているとき、まっすぐな光の筋が見えることがありますね。</p>
                    `,
                    image: 'https://placehold.co/600x400/FFC107/white?text=Straight+Line',
                    quizzes: [
                        { q: '光はどのように進む？', options: ['ジグザグに', 'まっすぐに', 'ぐるぐると'], answer: 1 },
                        { q: '光がまっすぐ進むことを何という？', options: ['直進', '後退', '回転'], answer: 0 },
                        { q: '光の筋が見えるのはどんな時？', options: ['真っ暗な時', '雲の間から光が差す時', '目をつぶった時'], answer: 1 }
                    ]
                },
                {
                    id: 'l3', title: '3. 鏡（かがみ）と反射',
                    content: `
                        <h3>光の跳ね返り</h3>
                        <p>光が鏡に当たると、跳ね返ります。</p>
                        <p>これを「反射（はんしゃ）」といいます。</p>
                        <p>鏡を使って日光を跳ね返し、壁に光を当ててみましょう。</p>
                    `,
                    image: 'https://placehold.co/600x400/FFC107/white?text=Reflection',
                    quizzes: [
                        { q: '光が鏡に当たって跳ね返ることを何という？', options: ['屈折', '反射', '吸収'], answer: 1 },
                        { q: '鏡で跳ね返した日光はまっすぐ進む？', options: ['進む', '進まない', '消える'], answer: 0 },
                        { q: '鏡を動かすと、壁の光はどうなる？', options: ['動く', '動かない', '大きくなる'], answer: 0 }
                    ]
                },
                {
                    id: 'l4', title: '4. 光を集める',
                    content: `
                        <h3>虫メガネの実験</h3>
                        <p>虫メガネを使って日光を集めてみましょう。</p>
                        <p>光を一点に集めると、そこはとても明るくて、熱くなります。</p>
                        <p>黒い紙に光を集めると、煙が出て焦げることがあります。</p>
                        <p><strong>注意：</strong> 絶対に虫メガネで太陽を見てはいけません！</p>
                    `,
                    image: 'https://placehold.co/600x400/FFC107/white?text=Magnifying+Glass',
                    quizzes: [
                        { q: '虫メガネで光を集めると、その場所はどうなる？', options: ['冷たくなる', '熱くなる', '暗くなる'], answer: 1 },
                        { q: '絶対にやってはいけないことは？', options: ['紙に光を当てる', '太陽を見る', '地面を見る'], answer: 1 },
                        { q: '光を集めやすい紙の色は？', options: ['白', '黒', '透明'], answer: 1 }
                    ]
                },
                {
                    id: 'l5', title: '5. 虹（にじ）の秘密',
                    content: `
                        <h3>7色の光</h3>
                        <p>太陽の光は白っぽく見えますが、実は7つの色が混ざっています。</p>
                        <p>雨上がりに虹が見えるのは、水滴で光が分けられるからです。</p>
                        <p>プリズムという道具を使うと、いつでも虹を作ることができます。</p>
                    `,
                    image: 'https://placehold.co/600x400/FFC107/white?text=Rainbow',
                    quizzes: [
                        { q: '虹は何色あると言われている？', options: ['3色', '5色', '7色'], answer: 2 },
                        { q: '虹が見えるのはどんな時？', options: ['雨上がり', '雪の日', '夜'], answer: 0 },
                        { q: '光を分ける道具を何という？', options: ['プリズム', 'リズム', 'プラズマ'], answer: 0 }
                    ]
                }
            ]
        },
        electricity: {
            title: '電気（でんき）の通り道',
            lessons: [
                {
                    id: 'e1', title: '1. 明かりをつけよう',
                    content: `
                        <h3>豆電球と乾電池</h3>
                        <p>豆電球（まめでんきゅう）と乾電池（かんでんち）をつなぐと、明かりがつきます。</p>
                        <p>乾電池にはプラス（＋）極とマイナス（－）極があります。</p>
                        <p>正しくつなぐことが大切です。</p>
                    `,
                    image: 'https://placehold.co/600x400/FFEB3B/black?text=Light+Bulb',
                    quizzes: [
                        { q: '豆電球を光らせるのに必要なものは？', options: ['乾電池', '消しゴム', '鉛筆'], answer: 0 },
                        { q: '乾電池の極は？', options: ['上と下', 'プラスとマイナス', '右と左'], answer: 1 },
                        { q: '豆電球がつかない時はどうする？', options: ['あきらめる', 'つなぎ方を確認する', '振ってみる'], answer: 1 }
                    ]
                },
                {
                    id: 'e2', title: '2. 回路（かいろ）',
                    content: `
                        <h3>電気の通り道</h3>
                        <p>乾電池のプラス極から出て、豆電球を通り、マイナス極に戻る輪っかのようなつながりを「回路（かいろ）」といいます。</p>
                        <p>途中で切れていると、電気は流れません。</p>
                    `,
                    image: 'https://placehold.co/600x400/FFEB3B/black?text=Circuit',
                    quizzes: [
                        { q: '電気が流れる輪っかのようなつながりを何という？', options: ['道路', '回路', '迷路'], answer: 1 },
                        { q: '回路が途中で切れていると？', options: ['電気が流れない', '電気が強くなる', '爆発する'], answer: 0 },
                        { q: '電気はどこから出る？', options: ['プラス極', 'マイナス極', '真ん中'], answer: 0 }
                    ]
                },
                {
                    id: 'e3', title: '3. 電気を通すもの',
                    content: `
                        <h3>金ぞくの仲間</h3>
                        <p>電気を通すものを探してみましょう。</p>
                        <p>鉄（てつ）、銅（どう）、アルミニウムなどの「金属（きんぞく）」は電気を通します。</p>
                        <p>10円玉やアルミホイル、クリップなどは電気を通します。</p>
                    `,
                    image: 'https://placehold.co/600x400/FFEB3B/black?text=Conductors',
                    quizzes: [
                        { q: '電気を通すものはどれ？', options: ['木', 'プラスチック', '金属'], answer: 2 },
                        { q: '10円玉は電気を通す？', options: ['通す', '通さない', '時々通す'], answer: 0 },
                        { q: 'アルミホイルは電気を通す？', options: ['通す', '通さない', 'わからない'], answer: 0 }
                    ]
                },
                {
                    id: 'e4', title: '4. 電気を通さないもの',
                    content: `
                        <h3>通さないもの</h3>
                        <p>電気を通さないものもあります。</p>
                        <p>木、プラスチック、ガラス、紙、ゴムなどは電気を通しません。</p>
                        <p>電線の周りは、電気が漏れないようにビニール（プラスチック）で覆われています。</p>
                    `,
                    image: 'https://placehold.co/600x400/FFEB3B/black?text=Insulators',
                    quizzes: [
                        { q: '電気を通さないものはどれ？', options: ['鉄の釘', '輪ゴム', '銅線'], answer: 1 },
                        { q: '電線の周りがビニールで覆われているのはなぜ？', options: ['きれいだから', '電気が漏れないように', '重くするため'], answer: 1 },
                        { q: 'ガラスは電気を通す？', options: ['通す', '通さない', '少し通す'], answer: 1 }
                    ]
                },
                {
                    id: 'e5', title: '5. 豆電球とLED',
                    content: `
                        <h3>新しい明かり</h3>
                        <p>最近は、豆電球の代わりに「LED（エルイーディー）」という明かりが使われることが増えています。</p>
                        <p>LEDは少ない電気で明るく光り、長持ちします。</p>
                        <p>信号機や家の電気にも使われています。</p>
                    `,
                    image: 'https://placehold.co/600x400/FFEB3B/black?text=LED',
                    quizzes: [
                        { q: '豆電球より少ない電気で光るものは？', options: ['ろうそく', 'LED', '懐中電灯'], answer: 1 },
                        { q: 'LEDの良いところは？', options: ['すぐ切れる', '長持ちする', '熱くなる'], answer: 1 },
                        { q: 'LEDはどこに使われている？', options: ['信号機', '昔の家', '焚き火'], answer: 0 }
                    ]
                }
            ]
        },
        insects: {
            title: '昆虫（こんちゅう）の体と育ち方',
            lessons: [
                {
                    id: 'i1', title: '1. 昆虫の体',
                    content: `
                        <h3>3つの部分</h3>
                        <p>昆虫の体は、「頭（あたま）」「胸（むね）」「腹（はら）」の3つの部分に分かれています。</p>
                        <p>ダンゴムシやクモは、体が2つに分かれているので、昆虫ではありません。</p>
                        <p>カブトムシやチョウは昆虫です。</p>
                    `,
                    image: 'https://placehold.co/600x400/795548/white?text=Insects+Body',
                    quizzes: [
                        { q: '昆虫の体はいくつに分かれている？', options: ['2つ', '3つ', '4つ'], answer: 1 },
                        { q: '昆虫の体の部分は？', options: ['頭・胸・腹', '頭・首・体', '頭・背中・お尻'], answer: 0 },
                        { q: '昆虫ではないものは？', options: ['カブトムシ', 'チョウ', 'クモ'], answer: 2 }
                    ]
                },
                {
                    id: 'i2', title: '2. 足の数',
                    content: `
                        <h3>足はどこにある？</h3>
                        <p>昆虫の足は全部で6本あります。</p>
                        <p>足はすべて「胸（むね）」から生えています。</p>
                        <p>頭や腹から足は生えていません。</p>
                    `,
                    image: 'https://placehold.co/600x400/795548/white?text=6+Legs',
                    quizzes: [
                        { q: '昆虫の足は何本？', options: ['4本', '6本', '8本'], answer: 1 },
                        { q: '足はどこから生えている？', options: ['頭', '胸', '腹'], answer: 1 },
                        { q: 'クモの足は何本？（ヒント：昆虫より多いよ）', options: ['6本', '8本', '10本'], answer: 1 }
                    ]
                },
                {
                    id: 'i3', title: '3. チョウの育ち方',
                    content: `
                        <h3>変身するよ</h3>
                        <p>チョウは、たまご → 幼虫（ようちゅう） → さなぎ → 成虫（せいちゅう）と姿を変えながら育ちます。</p>
                        <p>このように姿を大きく変えることを「変態（へんたい）」といいます。</p>
                        <p>幼虫は葉っぱを食べ、成虫は花の蜜を吸います。</p>
                    `,
                    image: 'https://placehold.co/600x400/795548/white?text=Butterfly+Life',
                    quizzes: [
                        { q: 'チョウの幼虫は何を食べる？', options: ['肉', '葉っぱ', '魚'], answer: 1 },
                        { q: 'さなぎになるのはどれ？', options: ['バッタ', 'トンボ', 'チョウ'], answer: 2 },
                        { q: 'チョウの育ち方の順番は？', options: ['たまご→幼虫→さなぎ→成虫', 'たまご→さなぎ→幼虫→成虫', '幼虫→たまご→成虫'], answer: 0 }
                    ]
                },
                {
                    id: 'i4', title: '4. バッタの育ち方',
                    content: `
                        <h3>さなぎにならない</h3>
                        <p>バッタやトンボは、さなぎにならずに成虫になります。</p>
                        <p>たまご → 幼虫 → 成虫 という順番で育ちます。</p>
                        <p>幼虫は成虫と似た形をしていますが、羽がまだありません。</p>
                    `,
                    image: 'https://placehold.co/600x400/795548/white?text=Grasshopper',
                    quizzes: [
                        { q: 'バッタはさなぎになる？', options: ['なる', 'ならない', '時々なる'], answer: 1 },
                        { q: 'バッタの幼虫にないものは？', options: ['足', '目', '羽'], answer: 2 },
                        { q: 'トンボはさなぎになる？', options: ['なる', 'ならない', 'わからない'], answer: 1 }
                    ]
                },
                {
                    id: 'i5', title: '5. 昆虫を探そう',
                    content: `
                        <h3>どこにいるかな？</h3>
                        <p>昆虫はいろいろな場所に住んでいます。</p>
                        <p>草むら、土の中、木の上、水の中など。</p>
                        <p>それぞれの場所で、食べ物を見つけたり、敵から隠れたりしています。</p>
                    `,
                    image: 'https://placehold.co/600x400/795548/white?text=Finding+Insects',
                    quizzes: [
                        { q: 'カブトムシが好きそうな場所は？', options: ['海の中', '木の上', '砂漠'], answer: 1 },
                        { q: '水の中に住む昆虫は？', options: ['ゲンゴロウ', 'アリ', 'チョウ'], answer: 0 },
                        { q: '土の中に住む昆虫は？', options: ['トンボ', 'オケラ', 'ハチ'], answer: 1 }
                    ]
                }
            ]
        },
        sdgs: {
            title: 'SDGs：陸の豊かさも守ろう',
            lessons: [
                {
                    id: 's1', title: '1. SDGsってなに？',
                    content: `
                        <h3>未来のための目標</h3>
                        <p>SDGs（エスディージーズ）は、世界中の人が幸せに暮らすための17の目標です。</p>
                        <p>貧困をなくしたり、環境を守ったりするための約束です。</p>
                        <p>2030年までに達成することを目指しています。</p>
                    `,
                    image: 'https://placehold.co/600x400/2196F3/white?text=What+is+SDGs',
                    quizzes: [
                        { q: 'SDGsの目標はいくつある？', options: ['10個', '17個', '100個'], answer: 1 },
                        { q: 'いつまでの達成を目指している？', options: ['2030年', '2050年', '明日まで'], answer: 0 },
                        { q: 'SDGsは誰のためのもの？', options: ['大人だけ', '子供だけ', '世界中の人'], answer: 2 }
                    ]
                },
                {
                    id: 's2', title: '2. 目標15：陸の豊かさ',
                    content: `
                        <h3>森や生き物を守ろう</h3>
                        <p>目標15番は「陸の豊かさも守ろう」です。</p>
                        <p>森の木や、そこに住む動物たちを守ることは、とても大切です。</p>
                        <p>森がなくなると、動物の住処がなくなり、空気も汚れてしまいます。</p>
                    `,
                    image: 'https://placehold.co/600x400/2196F3/white?text=Goal+15',
                    quizzes: [
                        { q: 'SDGs目標15番のテーマは？', options: ['海の豊かさ', '陸の豊かさ', '宇宙の豊かさ'], answer: 1 },
                        { q: '森がなくなると困ることは？', options: ['動物が住めなくなる', '涼しくなる', '広くなる'], answer: 0 },
                        { q: '守るべきものは？', options: ['ゲーム', '森や生き物', 'お菓子'], answer: 1 }
                    ]
                },
                {
                    id: 's3', title: '3. 絶滅（ぜつめつ）の危機',
                    content: `
                        <h3>いなくなる生き物たち</h3>
                        <p>人間が森を壊したり、汚したりすることで、多くの生き物が「絶滅（ぜつめつ）」しそうになっています。</p>
                        <p>絶滅とは、その種類の生き物が地球から全くいなくなってしまうことです。</p>
                        <p>一度絶滅すると、二度と戻りません。</p>
                    `,
                    image: 'https://placehold.co/600x400/2196F3/white?text=Endangered',
                    quizzes: [
                        { q: '生き物が地球から全くいなくなることを何という？', options: ['冬眠', '絶滅', '引越し'], answer: 1 },
                        { q: '絶滅した生き物はどうなる？', options: ['また生まれる', '二度と戻らない', '隠れているだけ'], answer: 1 },
                        { q: '生き物が減っている原因の一つは？', options: ['森が壊されること', 'エサが増えること', '天気が良いこと'], answer: 0 }
                    ]
                },
                {
                    id: 's4', title: '4. ゴミ問題',
                    content: `
                        <h3>ポイ捨てはやめよう</h3>
                        <p>森や山にゴミを捨てると、動物が間違えて食べてしまったり、怪我をしたりします。</p>
                        <p>プラスチックのゴミは、自然に分解されずにずっと残ります。</p>
                        <p>ゴミは決められた場所に捨てましょう。</p>
                    `,
                    image: 'https://placehold.co/600x400/2196F3/white?text=No+Littering',
                    quizzes: [
                        { q: 'ゴミを森に捨てるとどうなる？', options: ['肥料になる', '動物が困る', '森が喜ぶ'], answer: 1 },
                        { q: 'プラスチックのゴミはどうなる？', options: ['すぐ消える', 'ずっと残る', '土になる'], answer: 1 },
                        { q: 'ゴミはどうすればいい？', options: ['川に流す', '埋める', '決められた場所に捨てる'], answer: 2 }
                    ]
                },
                {
                    id: 's5', title: '5. 私たちにできること',
                    content: `
                        <h3>小さなことから始めよう</h3>
                        <p>私たちにもできることがあります。</p>
                        <ul style="text-align: left; margin: 10px 0 20px 20px;">
                            <li>紙を大切に使う（リサイクル）</li>
                            <li>食べ残しをしない</li>
                            <li>植物や動物を大切にする</li>
                        </ul>
                        <p>みんなの力が集まれば、地球を守ることができます。</p>
                    `,
                    image: 'https://placehold.co/600x400/2196F3/white?text=Action',
                    quizzes: [
                        { q: '私たちにできることは？', options: ['紙を無駄にする', 'リサイクルする', '電気をつけっぱなしにする'], answer: 1 },
                        { q: '食べ残しをしないことは良いこと？', options: ['良いこと', '悪いこと', 'どちらでもない'], answer: 0 },
                        { q: '地球を守るには？', options: ['一人で頑張る', 'みんなで協力する', '何もしない'], answer: 1 }
                    ]
                }
            ]
        },
        news: {
            title: 'さいしんニュース',
            lessons: [
                {
                    id: 'n1', title: '1. 新しい星の発見',
                    content: `
                        <h3>地球に似た星？</h3>
                        <p>遠い宇宙で、地球に似た新しい星が見つかりました。</p>
                        <p>この星には、水があるかもしれないと言われています。</p>
                        <p>もしかしたら、生き物がいるかもしれませんね。</p>
                    `,
                    image: 'https://placehold.co/600x400/607D8B/white?text=New+Planet',
                    quizzes: [
                        { q: '新しく見つかったのは何？', options: ['新しい星', '新しい月', '新しい太陽'], answer: 0 },
                        { q: 'その星にあるかもしれないものは？', options: ['コーラ', '水', 'お菓子'], answer: 1 },
                        { q: '生き物はいるかもしれない？', options: ['絶対にいない', 'いるかもしれない', 'もう見つかった'], answer: 1 }
                    ]
                },
                {
                    id: 'n2', title: '2. 恐竜の化石',
                    content: `
                        <h3>巨大な骨が見つかった</h3>
                        <p>日本で、新しい恐竜の化石が見つかりました。</p>
                        <p>とても大きな体を持っていたようです。</p>
                        <p>化石を調べると、昔の地球の様子がわかります。</p>
                    `,
                    image: 'https://placehold.co/600x400/607D8B/white?text=Dinosaur+Fossil',
                    quizzes: [
                        { q: '見つかったのは何の化石？', options: ['マンモス', '恐竜', '魚'], answer: 1 },
                        { q: '化石から何がわかる？', options: ['明日の天気', '昔の様子', '宝の場所'], answer: 1 },
                        { q: '恐竜の体は？', options: ['とても小さかった', 'とても大きかった', '見えなかった'], answer: 1 }
                    ]
                },
                {
                    id: 'n3', title: '3. ロケット打ち上げ',
                    content: `
                        <h3>宇宙へ出発！</h3>
                        <p>新しいロケットが宇宙へ打ち上げられました。</p>
                        <p>このロケットは、月へ行くための実験をします。</p>
                        <p>将来は、みんなも宇宙旅行に行けるようになるかもしれません。</p>
                    `,
                    image: 'https://placehold.co/600x400/607D8B/white?text=Rocket',
                    quizzes: [
                        { q: 'ロケットはどこへ行く？', options: ['海の中', '地底', '宇宙'], answer: 2 },
                        { q: '今回のロケットの目的は？', options: ['月へ行く実験', '太陽へ行く実験', '散歩'], answer: 0 },
                        { q: '将来できるようになるかもしれないことは？', options: ['タイムトラベル', '宇宙旅行', '透明人間'], answer: 1 }
                    ]
                },
                {
                    id: 'n4', title: '4. 深海（しんかい）の謎',
                    content: `
                        <h3>深い海の底</h3>
                        <p>海のとても深い場所「深海（しんかい）」で、変わった生き物が見つかりました。</p>
                        <p>光が届かない真っ暗な場所でも、生き物は工夫して生きています。</p>
                        <p>体が光る魚などもいます。</p>
                    `,
                    image: 'https://placehold.co/600x400/607D8B/white?text=Deep+Sea',
                    quizzes: [
                        { q: '海のとても深い場所を何という？', options: ['浅瀬', '深海', '湖'], answer: 1 },
                        { q: '深海はどんな場所？', options: ['明るい', '真っ暗', 'カラフル'], answer: 1 },
                        { q: '深海の生き物の特徴は？', options: ['空を飛ぶ', '体が光るものもいる', '言葉を話す'], answer: 1 }
                    ]
                },
                {
                    id: 'n5', title: '5. ロボットの進化',
                    content: `
                        <h3>お手伝いロボット</h3>
                        <p>お掃除をしたり、荷物を運んだりするロボットが増えています。</p>
                        <p>AI（人工知能）を使って、自分で考えて動くことができます。</p>
                        <p>人間とロボットが一緒に暮らす未来が近づいています。</p>
                    `,
                    image: 'https://placehold.co/600x400/607D8B/white?text=Robot',
                    quizzes: [
                        { q: '最近増えているのは？', options: ['恐竜', 'ロボット', '宇宙人'], answer: 1 },
                        { q: 'ロボットは何を使って考える？', options: ['AI（人工知能）', '魔法', '勘'], answer: 0 },
                        { q: 'ロボットは何をしてくれる？', options: ['いたずら', 'お手伝い', '居眠り'], answer: 1 }
                    ]
                }
            ]
        }
    };

    // Render Quiz for Lesson
    function renderLessonQuiz(topicId, lessonIndex) {
        const topic = fullContentData[topicId];
        const lesson = topic.lessons[lessonIndex];
        const quizzes = lesson.quizzes;

        let html = `
            <button id="back-to-lesson-btn" class="back-button">← 解説にもどる</button>
            <h2 class="content-title">「${lesson.title}」のクイズ</h2>
        `;

        quizzes.forEach((quiz, index) => {
            html += `
                <div class="quiz-card">
                    <p class="quiz-question">Q${index + 1}. ${quiz.q}</p>
                    <div class="quiz-options">
                        ${quiz.options.map((opt, i) => `
                            <button class="quiz-option-btn" onclick="checkAnswer(this, ${index}, ${i}, ${quiz.answer})">${opt}</button>
                        `).join('')}
                    </div>
                    <p class="quiz-result" id="result-${index}"></p>
                </div>
            `;
        });

        contentArea.innerHTML = html;

        document.getElementById('back-to-lesson-btn').addEventListener('click', () => renderLessonDetail(topicId, lessonIndex));

        // Expose checkAnswer globally
        window.checkAnswer = (btn, quizIndex, selected, correct) => {
            const resultEl = document.getElementById(`result-${quizIndex}`);
            const buttons = btn.parentElement.querySelectorAll('.quiz-option-btn');
            buttons.forEach(b => b.disabled = true);

            if (selected === correct) {
                btn.style.backgroundColor = '#4CAF50';
                btn.style.color = 'white';
                resultEl.textContent = 'せいかい！🎉';
                resultEl.style.color = '#4CAF50';
            } else {
                btn.style.backgroundColor = '#F44336';
                btn.style.color = 'white';
                resultEl.textContent = 'ざんねん... 正解は ' + quizzes[quizIndex].options[correct];
                resultEl.style.color = '#F44336';
            }
        };
    }

    // Render Lesson Detail
    function renderLessonDetail(topicId, lessonIndex) {
        const topic = fullContentData[topicId];
        const lesson = topic.lessons[lessonIndex];

        contentArea.innerHTML = `
            <button id="back-to-list-btn" class="back-button">← 一覧にもどる</button>
            <article class="content-article">
                <h2 class="content-title">${lesson.title}</h2>
                <img src="${lesson.image}" alt="${lesson.title}" class="content-image">
                <div class="content-text">${lesson.content}</div>
                <div style="text-align: center; margin-top: 30px;">
                    <button id="quiz-btn" class="quiz-start-btn">クイズをする！</button>
                </div>
            </article>
        `;

        document.getElementById('back-to-list-btn').addEventListener('click', () => renderLessonList(topicId));
        document.getElementById('quiz-btn').addEventListener('click', () => renderLessonQuiz(topicId, lessonIndex));
    }

    // Render Lesson List
    function renderLessonList(topicId) {
        const topic = fullContentData[topicId];

        if (!topic || topic.lessons.length === 0) {
            alert('このトピックのコンテンツは準備中です。');
            return;
        }

        let html = `
            <button id="back-home-btn" class="back-button">← ホームにもどる</button>
            <h2 class="content-title">${topic.title}</h2>
            <div class="lesson-list">
        `;

        topic.lessons.forEach((lesson, index) => {
            html += `
                <div class="lesson-card" onclick="openLesson('${topicId}', ${index})">
                    <h3>📖 ${lesson.title}</h3>
                </div>
            `;
        });

        html += '</div>';
        contentArea.innerHTML = html;

        document.getElementById('back-home-btn').addEventListener('click', renderHome);

        // Expose openLesson globally
        window.openLesson = (tId, lIdx) => {
            renderLessonDetail(tId, lIdx);
        };
    }

    // Render Home Page
    function renderHome() {
        const grid = document.createElement('div');
        grid.className = 'topic-grid';

        topics.forEach(topic => {
            const card = document.createElement('div');
            card.className = 'topic-card';
            card.style.borderTop = `5px solid ${topic.color}`;
            card.innerHTML = `
                <div class="topic-icon">${topic.icon}</div>
                <h3 class="topic-title">${topic.title}</h3>
            `;
            card.addEventListener('click', () => {
                renderLessonList(topic.id);
            });
            grid.appendChild(card);
        });

        contentArea.innerHTML = '';
        contentArea.appendChild(grid);
    }

    // Initialize
    renderHome();
});
