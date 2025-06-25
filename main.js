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

const wordList = [
    {
        "word": "怪レい日本語",
        "targets": [
            "怪しい日本語",
            "怪しい"
        ],
        "file": "./stamps/ayashiinihongo.png"
    },
    {
        "word": "閉園",
        "targets": [
            "閉園"
        ],
        "file": "./stamps/heien.png"
    },
    {
        "word": "ほとんど違法",
        "targets": [
            "ほとんど違法",
            "ほとんど"
        ],
        "file": "./stamps/hotondoihou.webp"
    },
    {
        "word": "偉業",
        "targets": [
            "偉業",
            "いぎょう",
            "医療",
            "行"
        ],
        "file": "./stamps/igyo.png"
    },
    {
        "word": "いい話",
        "targets": [
            "いい話",
            "良い話"
        ],
        "file": "./stamps/iihanashi.png"
    },
    {
        "word": "しらんけど",
        "targets": [
            "しらんけど",
            "知らんけど"
        ],
        "file": "./stamps/shirankedo.jpg"
    },
    {
        "word": "光と闇の行方",
        "targets": [
            "光と闇の行方"
        ],
        "file": "./stamps/hikaritoyaminoyukue.png"
    },
    {
        "word": "爆誕",
        "targets": [
            "爆誕"
        ],
        "file": "./stamps/bakutan.png"
    },
    {
        "word": "おふとんに押し込んであげましょうね",
        "targets": [
            "おふとんに押し込んであげましょうね",
            "お布団に押し込んであげましょうね",
            "お布団",
            "おふとん"
        ],
        "file": "./stamps/ofutonnioshikondeagemasyoune.webp"
    },
    {
        "word": "部室",
        "targets": [
            "部室"
        ],
        "file": "./stamps/bushitu.png"
    },
    {
        "word": "治安が良くない",
        "targets": [
            "治安が良くない"
        ],
        "file": "./stamps/tiangayokunai.png"
    },
    {
        "word": "できない",
        "targets": [
            "できない"
        ],
        "file": "./stamps/dekinai.png"
    },
    {
        "word": "できる",
        "targets": [
            "できる"
        ],
        "file": "./stamps/dekiru.png"
    },
    {
        "word": "でたわね",
        "targets": [
            "でたわね",
            "出たわね"
        ],
        "file": "./stamps/detawane.png"
    },
    {
        "word": "英雄の証",
        "targets": [
            "英雄の証",
            "英雄"
        ],
        "file": "./stamps/eiyunoakashi.png"
    },
    {
        "word": "ゆるしてくれ",
        "targets": [
            "ゆるしてくれ",
            "許してくれ"
        ],
        "file": "./stamps/yurushitekure.png"
    },
    {
        "word": "ファッキンホット",
        "targets": [
            "ファッキンホット",
            "ハッキングホット",
            "ハッキング"
        ],
        "file": "./stamps/fakinhot.png"
    },
    {
        "word": "深い",
        "targets": [
            "深い"
        ],
        "file": "./stamps/fukai.png"
    },
    {
        "word": "ふわふわ",
        "targets": [
            "ふわふわ"
        ],
        "file": "./stamps/fuwafuwa.png"
    },
    {
        "word": "ガハハ",
        "targets": [
            "ガハハ"
        ],
        "file": "./stamps/gahaha.png"
    },
    {
        "word": "エッチなのはいけないと思います",
        "targets": [
            "エッチなのはいけないと思います"
        ],
        "file": "./stamps/hnanohaikenaitoomoimasu.png"
    },
    {
        "word": "激しく同意",
        "targets": [
            "激しく同意"
        ],
        "file": "./stamps/hageshikudoui.png"
    },
    {
        "word": "話せばわかる",
        "targets": [
            "話せばわかる"
        ],
        "file": "./stamps/hanasebawakaru.png"
    },
    {
        "word": "金がない",
        "targets": [
            "金がない"
        ],
        "file": "./stamps/kaneganai.png"
    },
    {
        "word": "危険が危ない",
        "targets": [
            "危険が危ない",
            "危険"
        ],
        "file": "./stamps/kikengaabunai.png"
    },
    {
        "word": "これ好き",
        "targets": [
            "これ好き"
        ],
        "file": "./stamps/koresuki.png"
    },
    {
        "word": "これは",
        "targets": [
            "これは"
        ],
        "file": "./stamps/koreha.png"
    },
    {
        "word": "名言",
        "targets": [
            "名言"
        ],
        "file": "./stamps/meigen.png"
    },
    {
        "word": "寝てくれ",
        "targets": [
            "寝てくれ"
        ],
        "file": "./stamps/netekure.png"
    },
    {
        "word": "にこにこ",
        "targets": [
            "にこにこ",
            "ニコニコ"
        ],
        "file": "./stamps/nikoniko.png"
    },
    {
        "word": "って思うじゃん",
        "targets": [
            "って思うじゃん",
            "で思うじゃん"
        ],
        "file": "./stamps/teomoujyan.png"
    },
    {
        "word": "俺も俺も",
        "targets": [
            "俺も俺も"
        ],
        "file": "./stamps/oremooremo.png"
    },
    {
        "word": "推し",
        "targets": [
            "推し"
        ],
        "file": "./stamps/oshi.png"
    },
    {
        "word": "お疲れ様です",
        "targets": [
            "お疲れ様です"
        ],
        "file": "./stamps/otsukaresamadesu.png"
    },
    {
        "word": "パワー",
        "targets": [
            "パワー"
        ],
        "file": "./stamps/power.png"
    },
    {
        "word": "よし",
        "targets": [
            "よし"
        ],
        "file": "./stamps/yoshi.png"
    },
    {
        "word": "優秀な後輩",
        "targets": [
            "優秀な後輩"
        ],
        "file": "./stamps/yusyunakouhai.png"
    },
    {
        "word": "そういう日もある",
        "targets": [
            "そういう日もある"
        ],
        "file": "./stamps/souiuhimoaru.png"
    },
    {
        "word": "一緒にやろ",
        "targets": [
            "一緒にやろ",
            "一緒にやろう"
        ],
        "file": "./stamps/isyoniyaro.gif"
    },
    {
        "word": "ですわ",
        "targets": [
            "ですわ"
        ],
        "file": "./stamps/desuwa.jpg"
    },
    {
        "word": "最強",
        "targets": [
            "最強"
        ],
        "file": "./stamps/saikyo.gif"
    }
]

async function memeChecker(text) {
    text = text.replace(/[\s ]/g, "");
    console.log(`チェック: ${text}`);

    for (const item of wordList) {
        if (item.targets.includes(text)) {
            console.log(`マッチ: ${item.word}`);
            insertImage(item.file);

            if (isConnected) {
                try {
                    await sendComment(item.word);
                } catch (error) {
                    console.error("コメント送信エラー:", error);
                }
                return; // 最初にマッチしたものだけを表示
            }
        }
    }
    await sleep(5000);
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
