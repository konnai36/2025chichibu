
function toggleMenu() {
  document.getElementById('nav').classList.toggle('open');
}

function loadContent(key) {
  const contentData = {
    home: '<h2>ようこそ！</h2><p>みんなで作る、みんなが主役の旅。<br>けやきが丘から始まるワクワクの物語。</p>',
    mtg1: `
      <h2>第1回打合せ（2025/6/6）</h2>
      <div class="note-info">
        <p><strong>日時：</strong>2025年6月6日（金） 19:00-22:00</p>
        <p><strong>場所：</strong>集会所1F 和室</p>
        <p><strong>参加者：</strong>渡辺さん、濱田農さん、石川さん、近内</p>
      </div>
      <h3>■前回の旅行について</h3>
      <p>行先は東伊豆。23名参加、28人乗りのバスをチャーター。１泊２日で、運転手もろもろ込みで30万円くらい。</p>
      <h3>■今回の旅行</h3>
      <ul>
        <li>行先：秩父（決定）</li>
        <li>宿泊：濱田家（1部屋に20〜30名ほど入れる、仕切り・エアコンあり）</li>
      </ul>
      <h3>■交通手段</h3>
      <ul>
        <li>渡辺さんのコネ（バス）</li>
        <li>ハイエース×2（石川・近内運転）</li>
      </ul>
    `,
    mtg2: '<h2>第2回打合せ（XXXX）</h2><p>（今後追加予定）</p>',
    preview: '<h2>下見（2025/8/13,14）</h2><p>（今後詳細追記予定）</p>',
    maintrip: '<h2>本番（2025/9/13,14）</h2><p>（今後詳細追記予定）</p>',
    reference: '<h2>参考資料</h2><p>（今後追加予定）</p>'
  };

  document.getElementById('content').innerHTML = contentData[key] || '<h2>準備中です</h2>';
  document.getElementById('nav').classList.remove('open');
}
