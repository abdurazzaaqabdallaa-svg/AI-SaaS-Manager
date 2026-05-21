const GEMINI_API_KEY = "API_KEY_GEMINI_KEE_ASITTI_GALCHI"; 

const WP_URL = "https://abab.tirushop.com/wp-json/wp/v2/posts";
const WP_USER = "abdur"; 
const WP_APP_PASSWORD = "UKnU O7tM JwYD ubC1 WCXZ bEFW"; 

function registerBlog() {
    const name = document.getElementById('blogName').value;
    const niche = document.getElementById('niche').value;
    const keywords = document.getElementById('keywords').value;

    if(!name || !niche || !keywords) {
        alert("Mee dursa ragaa guutuu guuti!");
        return;
    }

    localStorage.setItem('blog_name', name);
    localStorage.setItem('blog_niche', niche);
    localStorage.setItem('blog_keywords', keywords);

    alert(`Milkiidhaan Galmaa'eera!\nMaqaa: ${name}\nNiche: ${niche}`);
}

async function triggerAIAgent() {
    const loading = document.getElementById('loading');
    const resultBox = document.getElementById('resultBox');
    const titleField = document.getElementById('articleTitle');
    const contentField = document.getElementById('articleContent');

    const niche = localStorage.getItem('blog_niche') || "Technology";
    const keywords = localStorage.getItem('blog_keywords') || "AI, Future tech";

    loading.classList.remove('hidden');
    resultBox.classList.add('hidden');

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    const promptText = `Hojii kee akka Tech-Blogger fi ogessa SEO ol'aanaatti hojdhu. 
    Mata-duree (Niche) kana irratti hudaa'i: ${niche}. 
    Jechoota gabaa (Keywords) kanneen keessatti hammati: ${keywords}.
    Mata-duree barreeffamaa namatti tolu, dabalataan barreeffama SEO sirrii ta'e kan hunda galeessa ta'e Afaan Oromootiin barreessi.
    Gabaasa kee bifa JSON kanaan qofa deebisi: 
    { "title": "Mata-duree Asitti", "content": "Qabiyye barreeffamaa HTML format khaan asitti" }`;

    const requestBody = {
        contents: [{
            parts: [{ text: promptText }]
        }]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        const aiText = data.candidates[0].content.parts[0].text;
        
        const cleanJson = aiText.replace(/```json/g, "").replace(/```/g, "").trim();
        const articleData = JSON.parse(cleanJson);

        titleField.innerText = articleData.title;
        contentField.innerHTML = articleData.content;

        await postToWordPress(articleData.title, articleData.content);

    } catch (error) {
        console.error("Rakkoon uumame:", error);
        titleField.innerText = "Kora dhabame!";
        contentField.innerHTML = `<p style="color:red;">Rakkoon uumameera. Error: ${error.message}</p>`;
    } finally {
        loading.classList.add('hidden');
        resultBox.classList.remove('hidden');
    }
}

async function postToWordPress(title, content) {
    const credentials = btoa(`${WP_USER}:${WP_APP_PASSWORD}`);

    const postData = {
        title: title,
        content: content,
        status: 'draft' 
    };

    try {
        const wpResponse = await fetch(WP_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        if(wpResponse.ok) {
            alert("Barreeffamni AI'n qopheesse kallattiin WordPress (abab.tirushop.com) irratti Draft ta'ee fe'ameera!");
        } else {
            console.error("WordPress Post Error:", wpResponse.statusText);
            alert("WordPress irratti post gochuun hin danda'amne. Ragaa kee qori.");
        }
    } catch (err) {
        console.error("WordPress Connection Error:", err);
    }
}
