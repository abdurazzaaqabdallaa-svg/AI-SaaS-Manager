// Blog galmeessuuf
function registerBlog() {
    const name = document.getElementById('blogName').value;
    const niche = document.getElementById('niche').value;

    if(!name || !niche) {
        alert("Mee dursa ragaa guutuu guuti!");
        return;
    }

    alert(`Milkiidhaan Galmaa'eera!\nMaqaa: ${name}\nNiche: ${niche}`);
}

// AI dammaqsuu (Yeroo bilbila irratti hojjennu)
function triggerAIAgent() {
    const loading = document.getElementById('loading');
    const resultBox = document.getElementById('resultBox');
    const title = document.getElementById('articleTitle');
    const content = document.getElementById('articleContent');

    // Loading agarsiisuu
    loading.classList.remove('hidden');
    resultBox.classList.add('hidden');

    // Sa'aa 2 booda akka waan AI'n barreesseetti ragaa agarsiisuu
    setTimeout(() => {
        loading.classList.add('hidden');
        resultBox.classList.remove('hidden');

        // Fakkeenya barreeffama AI
        title.innerText = "Teeknoolojii Qonnaa: Drip Irrigation Fi Faayidaa Isaa";
        content.innerHTML = `
            <p>Jiruu fi jireenya qonnaa ammayyeessuuf teeknoolojiiwwan jiran keessaa bishaan qusachuun bonsee (drip irrigation) isa tokkoodha...</p>
            <p><strong>Keywords:</strong> qonna, bishaan, agri-tech</p>
        `;
    }, 2000); 
}

