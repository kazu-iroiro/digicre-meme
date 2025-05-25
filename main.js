// 部分一致辞書
const customDictionary = {
    "グーグル": "Google",
    "オープンエーアイ": "OpenAI",
    "ちゃっとじーぴーてぃー": "ChatGPT",
    "じーめーる": "Gmail",
    "えっくす": "X（旧Twitter）"
};

// 部分一致置換関数
function applyCustomDictionary(text, dictionary) {
    for (const [key, value] of Object.entries(dictionary)) {
        const pattern = new RegExp(key, "gi");
        text = text.replace(pattern, value);
    }
    return text;
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));//timeはミリ秒

async function memeChecker(text) {
    const imageBox = document.getElementById("imagebox");

    text = text.replace(/[\s ]/g, "");
    console.log(text);

    switch (text) {
        case "怪しい日本語":
            console.log("怪レい日本語");
            insertImage("./stamps/ayashiinihongo.png");
            break;

        case "閉園":
            console.log("閉園");
            insertImage("./stamps/heien.png");
            break;

        case "ほとんど違法":
            console.log("ほとんど違法");
            insertImage("./stamps/hotondoihou.webp");
            break;

        case "偉業":
        case "いぎょう":
        case "医療":
        case "行":
            console.log("偉業");
            insertImage("./stamps/igyo.png");
            break;

        case "いい話":
        case "良い話":
            console.log("いい話");
            insertImage("./stamps/iihanashi.png");
            break;

        case "しらんけど":
        case "知らんけど":
            insertImage("./stamps/shirankedo.jpg");
            break;

        case "光と闇の行方":
            insertImage("./stamps/hikaritoyaminoyukue.png");
            break;

        case "爆誕":
            insertImage("./stamps/bakutan.png");
            break;

        case "おふとんに押し込んであげましょうね":
        case "お布団に押し込んであげましょうね":
            insertImage("./stamps/ofutonnioshikondeagemasyoune.webp");
            break;

        case "部室":
            insertImage("./stamps/bushitu.png");
            break;

        case "治安が良くない":
            insertImage("./stamps/tiangayokunai.png");
            break;

        case "できない":
            insertImage("./stamps/dekinai.png");
            break;

        case "できる":
            insertImage("./stamps/dekiru.png");
            break;

        case "でたわね":
        case "出たわね":
            insertImage("./stamps/detawane.png");
            break;

        case "英雄の証":
            insertImage("./stamps/eiyunoakashi.png");
            break;

        case "ゆるしてくれ":
        case "許してくれ":
            insertImage("./stamps/yurushitekure.png");
            break;

        case "ファッキンホット":
        case "ハッキングホット":
        case "ハッキング":
            insertImage("./stamps/fakinhot.png");
            break;

        case "深い":
            insertImage("./stamps/fukai.png");
            break;

        case "ふわふわ":
            insertImage("./stamps/fuwafuwa.png");
            break;

        case "ガハハ":
            insertImage("./stamps/gahaha.png");
            break;

        case "エッチなのはいけないと思います":
            insertImage("./stamps/hnanohaikenaitoomoimasu.png");
            break;

        case "激しく同意":
            insertImage("./stamps/hageshikudoui.png");
            break;

        case "話せばわかる":
            insertImage("./stamps/hanasebawakaru.png");
            break;

        case "金がない":
            insertImage("./stamps/kaneganai.png");
            break;

        case "危険が危ない":
            insertImage("./stamps/kikengaabunai.png");
            break;

        case "これ好き":
            insertImage("./stamps/koresuki.png");
            break;

        case "これは":
            insertImage("./stamps/koreha.png");
            break;


        // 公開版は画像なし
        case "丸亀製麺":
            insertImage("./stamps/marugameseimen.png");
            break;

        case "名言":
            insertImage("./stamps/meigen.png");
            break;

        case "寝てくれ":
            insertImage("./stamps/netekure.png");
            break;

        case "にこにこ":
        case "ニコニコ":
            insertImage("./stamps/nikoniko.png");
            break;

        case "って思うじゃん":
        case "で思うじゃん":
            insertImage("./stamps/teomoujyan.png");
            break;

        case "俺も俺も":
            insertImage("./stamps/oremooremo.png");
            break;

        case "推し":
            insertImage("./stamps/oshi.png");
            break;

        case "お疲れ様です":
            insertImage("./stamps/otsukaresamadesu.png");
            break;

        case "パワー":
            insertImage("./stamps/power.png");
            break;

        case "よし":
            insertImage("./stamps/yoshi.png");
            break;

        case "優秀な後輩":
            insertImage("./stamps/yusyunakouhai.png");
            break;

        case "そういう日もある":
            insertImage("./stamps/souiuhimoaru.png");
            break;

        case "一緒にやろ":
        case "一緒にやろう":
            insertImage("./stamps/isyoniyaro.gif");
            break;

        case "ですわ":
            insertImage("./stamps/desuwa.jpg");
            break;

        case "最強":
            insertImage("./stamps/saikyo.gif");
            break;

        default:
            await sleep(5000); // 誤認識で一時的にマッチしないのを防ぐ
            // clearImage();
    }
}

function insertImage(src) {
    const imageBox = document.getElementById("imagebox");
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("fade-in");
    img.style.maxWidth = "100%";
    img.style.marginTop = "1em";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    imageBox.appendChild(img);

    // 3秒後にフェードアウト開始
    setTimeout(() => {
        img.classList.remove("fade-in"); // 念のため消してから付ける
        img.classList.add("fade-out");

        // フェードアウト終了後に削除（0.5秒後）
        setTimeout(() => {
            imageBox.removeChild(img);
        }, 500);
    }, 3000); // 表示から3秒後に開始
}

function clearImage() {
    const imageBox = document.getElementById("imagebox");
    while (imageBox.firstChild) {
        imageBox.removeChild(imageBox.firstChild);
    }
}

// Web Speech API 設定
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("このブラウザはWeb Speech APIに対応していません。他のブラウザを使用してください。");
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.continuous = true;
    recognition.interimResults = true;

    const output = document.getElementById('output');
    const status = document.getElementById('status');
    let finalTranscript = '';

    recognition.onstart = () => {
        status.textContent = 'ステータス: 音声認識中...';
    };

    recognition.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            let transcript = event.results[i][0].transcript;
            transcript = applyCustomDictionary(transcript, customDictionary);
            if (event.results[i].isFinal) {
                finalTranscript += transcript + '\n';
            } else {
                interimTranscript += transcript;
            }
        }
        console.log(interimTranscript);
        memeChecker(interimTranscript);
        output.textContent = interimTranscript;
    };

    recognition.onerror = (event) => {
        console.error("エラー:", event.error);
        status.textContent = `エラー: ${event.error}`;
    };

    recognition.onend = () => {
        status.textContent = '再起動中...';
        recognition.start();
    };

    recognition.start();
}