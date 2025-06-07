
function toggleMenu() {
  document.getElementById('nav').classList.toggle('open');
}

function loadContent(key) {
  const contentData = {
    home: '<h2>ようこそ！</h2><p>濱田家のルーツを探る！　温泉、酒、観光！</p><p>みんなで作る、みんなが主役の旅。<br>けやきが丘から始まるワクワクの物語。</p>',
    mtg1: `

<div style="border-left: 5px solid #2b6cb0; padding-left: 1rem; margin-bottom: 1.5rem;">
  <h2 style="margin-top: 0;">第1回打合せ（2025/6/6）</h2>
</div>
<div style="border: 1px solid #ccc; padding: 1rem; margin-bottom: 1.5rem; background: #fdfdfd;">
  <p><strong>日時：</strong>2025年6月6日（金） 19:00-22:00</p>
  <p><strong>場所：</strong>集会所1F 和室</p>
  <p><strong>参加者：</strong>渡辺さん、濱田農さん、石川さん、近内</p>
</div>

<section>
  <h2>📸 前回の旅行（東伊豆）</h2>
  <ul>
    <li>参加者：23名（バス28人乗りをチャーター）</li>
    <li>費用：約30万円（1泊2日、運転手含む）</li>
    <li>チラシ：<a href="img/20240622_flyer.jpg" target="_blank">前回の旅行チラシ</a></li>
    <li>メンバー：<a href="doc/20240622_member.pdf" target="_blank">旅行メンバーリスト</a></li>
  </ul>
</section>

<hr>

<section>
  <h2>🧳 今回の旅行（秩父・小鹿野町）</h2>
  <h3>■ 行先・宿泊</h3>
  <ul>
    <li><a href="https://maps.app.goo.gl/yR6jyP2p8pb128TZ8" target="_blank">埼玉県秩父郡小鹿野町下小鹿野401（濱田農園）</a></li>
    <li>宿泊：濱田家（20〜30名可・仕切り・エアコンあり）</li>
    <li>案内・宿提供：濱田さん</li>
  </ul>

  <h3>■ 日程</h3>
  <ul>
    <li>2025年9月13日（土）〜14日（日）</li>
    <li>8:00 けやきが丘出発</li>
    <li>濱田さんは現地集合・解散</li>
  </ul>
</section>

<section>
  <h2>🚌 交通手段（案）</h2>
  <ul>
    <li>バス：渡辺さんのコネ（20～32人）</li>
    <li>レンタカー：ハイエース（10人乗り、22,660円）</li>
    <li>石川さんのアルファード（7〜8人）</li>
    <li>運転：石川・近内（普通免許）</li>
    <li>ルート：外環→八王子経由→秩父（関越より早い）</li>
  </ul>
</section>

<section>
  <h2>🐾 ペット</h2>
  <p>丸本家のネム（犬）参加OK</p>
</section>

<section>
  <h2>🧭 旅行内容（案）</h2>
  <ul>
    <li>秩父神社観光</li>
    <li>温泉（せいねんの湯、薬師の湯）</li>
    <li>「でんろく」で飲み会／酒持参で宴</li>
    <li>ジビエ料理（イノシシなど）</li>
    <li>長瀞で川下り・かき氷・果物狩り・観光</li>
    <li>キャンプ・農場体験・飯盒炊爨・季節収穫体験</li>
  </ul>
</section>

<section>
  <h2>🔍 下見について</h2>
  <ul>
    <li>日程：2025年8月13日〜14日（1泊2日）</li>
    <li>メンバー：石川アルファードで近内家（4名）＋濱田家（3名）</li>
    <li>備考：お盆中で農作業繁忙期につき柔軟に調整</li>
    <li>候補地：三峰神社、三峰山、武甲山登山など</li>
  </ul>
</section>

<section>
  <h2>💡 コンセプト</h2>
  <ul>
    <li>愛護会や引退記念などの冠は付けない</li>
    <li>誰でも参加OKの仲良し旅行</li>
    <li>初参加や関係の薄い方は一応相談制</li>
    <li>子供や学生は無料</li>
  </ul>
</section>

<section>
  <h2>📣 募集</h2>
  <ul>
    <li>方法：口コミ中心</li>
    <li>メンバー管理：近内がリスト管理</li>
    <li>申込窓口：石川・濱田・近内まで</li>
  </ul>
</section>
    `,
    mtg2: '<h2>第2回打合せ（XXXX）</h2><p>（今後追加予定）</p>',
    preview: '<h2>下見（2025/8/13,14）</h2><p>（今後詳細追記予定）</p>',
    maintrip: '<h2>本番（2025/9/13,14）</h2><p>（今後詳細追記予定）</p>',
    reference: '<h2>参考資料</h2><p>（今後追加予定）</p>'
  };

  document.getElementById('content').innerHTML = contentData[key] || '<h2>準備中です</h2>';
  document.getElementById('nav').classList.remove('open');
}
