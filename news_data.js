/**
 * Project Festa 2026 共通ニュースデータ
 * このファイルのデータを編集すると、
 * トップページ(index.html)とお知らせページ(information.html)の両方に反映されます。
 * ご情報を撒かないように、メディアには気を付けて投稿してください。
 * 仲良く使ってね～
 */
const sharedNewsData = [
    {
        id: 1,
        date: "2026.01.21",
        category: "important",
        title: "【重要】Project Festa 2026の入場チケットの予約受付ページを公開！",
        summary: "2026/01/31より受付開始です。チケットはご来場に<strong>必ず必要</strong>となります！お早めのご予約を。",
        content: `<p>保護者の方、外部の方などの、横浜創英中学・高等学校に所属している方以外の皆様は、入場のためにデジタルチケットが必要となります。</p>
        　　　　　 <p>無料ですので、予約は当日まで受け付けておりますが、お忘れのないように、お早めにお申し込みください。</p>
                  <p>公開されたPeatixのサイトを用いて、チケットを各自必ずご用意ください。</p>
                  <div class="bg-gray-100 p-4 rounded mt-4"><strong>リンク：</strong> https://soei-pf2026.peatix.com/</div>`
    },
    {
        id: 2,
        date: "2026.01.21",
        category: "important",
        title: "【重要】当日の来場について",
        summary: "Project Festa 2026へのご来場に関する重要なお知らせです。入場方法、持ち物と感染症対策についてご確認ください。",
        content: `<p>Project Festa 2026にご来場いただく皆様へ、当日のスムーズな入場と安全確保のため、以下の点についてご協力をお願い申し上げます。</p>
                  <h4 class="font-bold text-lg mt-6 mb-2 border-l-4 border-brand-red pl-2">入場方法について</h4>
                  <p>スムーズな進行のため、<strong>一般来場者様は「正門」からのご入場</strong>をお願いいたします。南門は関係者専用となりますのでご注意ください。<br>
                  また、入場の際にはオンラインチケットの提示が必要となっております。入場ゲートは大変混雑いたしますので、事前にチケットの画面を準備してお並びください。</p>
                  <h4 class="font-bold text-lg mt-6 mb-2 border-l-4 border-brand-red pl-2">体育館について</h4>
                  <p>セレモニーを行う体育館には<strong>外履きで入場することができません</strong>。必ず<strong>上履きやスリッパなどとそれを携帯する袋を持参</strong>し、スムーズに楽しくイベントをお楽しみください。</p>`
    },
    {
        id: 3,
        date: "2026.01.21",
        category: "important",
        title: "【重要】Project Festa 2026の入場チケットの予約受付予定について",
        summary: "チケットはご来場に<strong>必ず必要</strong>となります。お早めのご予約を。",
        content: `<p>保護者の方、外部の方などの、横浜創英中学・高等学校に所属している方以外の皆様は、入場のためにデジタルチケットが必要となります。</p>
                  <p>今後公開予定のPeatixのサイトを用いてチケットを各自ご用意ください。</p>
                  <div class="bg-gray-100 p-4 rounded mt-4"><strong>リンク：</strong> https://soei-pf2026.peatix.com/</div>`
    },
    {
        id: 4,
        date: "2026.01.21",
        category: "info",
        title: "キッチンカーの誘致決定！",
        summary: "様々な種類のキッチンカーが集結します。お腹がすいたら、ぜひお越しください！",
        content: `<p>Project Festa 2026の開催中にキッチンカーがやってきます！</p>
                  <h4 class="font-bold text-lg mt-6 mb-2 border-l-4 border-brand-gray pl-2">様々な屋台が集結！</h4>
                  <p>中学生の発案で着々と計画を進めていたキッチンカーの誘致が実現しました。<br>
                  フェスタの開始から終了まで、皆様の知的好奇心だけでなく<strong>おなかも舌も満足</strong>させる企画がてんこ盛りです！<strong>1号館裏へレッツゴー‼</strong></p>
                  <h4 class="font-bold text-lg mt-6 mb-2 border-l-4 border-brand-gray pl-2">出店店舗と時間帯について</h4>
                  <p>出店店舗は<strong>&me…</strong>、<strong>キッチンカーKI KI</strong>、<strong>HIDAMARI -waffle-</strong>、<strong>773crepe</strong>の四つです。そのうち &me… は一日目、 キッチンカーKI KI は二日目のみの営業となります。ご了承ください。</p>`
    },
    {
        id: 5,
        date: "2026.01.21",
        category: "info",
        title: "SNSアカウント準備中です…",
        summary: "Project Festa関連のSNSアカウントの準備を進めております。様々なコンテンツをお楽しみいただけます！",
        content: `<p>各種リンクは公開後、このニューススレッドにも掲載いたします。いましばらくお待ちください…。</p>
                  <ul class="list-disc list-inside mt-2 space-y-1">
                    <li><strong>X(旧Twitter)：</strong>準備中</li>
                    <li><strong>Instagram：</strong>準備中</li>
                    <li><strong>Youtube：</strong>https://youtube.com/live/XSiDKIQYi_I</li>
                  </ul>
                  <p class="mt-4">ぜひフォローなどもよろしくお願いします。</p>`
    },
    {
        id: 6,
        date: "2026.01.21",
        category: "info",
        title: "ホームページ開設のお知らせ",
        summary: "Project Festaのホームページはこちらです！",
        content: `<p>ここではフェスタに関する様々な情報を公開してまいります。楽しんでご覧ください！</p>
                  <h4 class="font-bold text-lg mt-6 mb-2 border-l-4 border-brand-gray pl-2">開催前からワクワクできるサイト！</h4>
                  <p>皆さんこんにちは！ Project Festa実行委員会の広報担当です。<br>
                  このサイトではフェスタの概要はもちろん、お楽しみニュースやお得な情報まで、フェスタ関連のさまざまなお知らせをお届けします。<br>
                  皆様にお楽しみいただけるようなサイトにしてまいりますので、ぜひ、定期的にご覧くださいね！</p>
                  <h4 class="font-bold text-lg mt-6 mb-2 border-l-4 border-brand-gray pl-2">このサイトの楽しみ方</h4>
                  <p>このサイトは大まかな情報だけでなく、個人の探究内容や付随して行われるイベントの情報などのニッチな情報も満載！<br>
                  いろいろな場所をクリックして、あなたの気になるものを探し当ててみてください‼</p>`
    }
];
