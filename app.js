
<!DOCTYPE html>
<html lang="om">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Tech-Blogger (Version Iccitii)</title>
    <!-- Tailwind CSS miidhaginaaf -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .hidden { display: none; }
        .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #2563eb;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
</head>
<body class="bg-slate-100 min-h-screen font-sans">

    <div class="max-w-3xl mx-auto py-12 px-4">
        <!-- Header -->
        <div class="text-center mb-10">
            <h1 class="text-4xl font-extrabold text-blue-700 mb-2">AI Tech-Blogger 🤖</h1>
            <p class="text-slate-600 italic">Barreeffama teeknoolojii AI'n barreessii kallattiin WordPress irratti 'Draft' godhi.</p>
        </div>

        <!-- 1. WordPress Config (Local Storage keessa save ta'a) -->
        <div class="bg-white p-6 rounded-2xl shadow-md mb-8 border border-blue-100">
            <h2 class="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">1</span>
                Qindaa'ina WordPress
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" id="wpUrl" placeholder="URL: https://weebsaayitiikee.com" class="p-3 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                <input type="text" id="wpUser" placeholder="Username (fkn. admin)" class="p-3 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                <input type="password" id="wpPass" placeholder="Application Password (bakka duwwaa qabu)" class="p-3 border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                <button onclick="saveWP()" class="bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition active:scale-95">Save Qindaa'ina</button>
            </div>
            <p class="text-[10px] text-slate-400 mt-3 text-center">*Iccitiin kee Browser kee keessatti qofa qabama (Safe).*</p>
        </div>

        <!-- 2. AI Content Generator -->
        <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-200">
            <h2 class="text-lg font-bold text-slate-800 mb-4 flex items-center">
                <span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center mr-2 text-sm">2</span>
                Mata-duree Barreeffamaa
            </h2>
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1">Mata-duree Gurguddaa (Niche):</label>
                    <input type="text" id="niche" placeholder="fkn. Artificial Intelligence, Web Dev..." class="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                </div>
                <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1">Jechoota Ijoo (Keywords):</label>
                    <input type="text" id="keywords" placeholder="fkn. Python, Future, Software" class="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                </div>
                <button onclick="generateAI()" id="btnAction" class="w-full bg-slate-900 text-white font-black py-4 rounded-xl shadow-lg hover:bg-black transition-all transform active:scale-95">
                    BARREEFFAMA AI'N BARREESSI
                </button>
            </div>
        </div>

        <!-- Loading Spinner -->
        <div id="loading" class="hidden mt-12 text-center">
            <div class="loader mx-auto"></div>
            <p class="mt-4 text-blue-700 font-bold animate-pulse">AI'n barreessaa jira, maaloo obsi...</p>
        </div>

        <!-- Result Box -->
        <div id="resultBox" class="hidden mt-12 bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-blue-600">
            <h2 id="resTitle" class="text-3xl font-black text-slate-900 mb-6 border-b pb-4"></h2>
            <div id="resContent" class="prose prose-blue max-w-none text-slate-700 leading-relaxed">
                <!-- Barreeffamni asitti dhufa -->
            </div>
        </div>
    </div>

    <script>
        // WordPress settings save gochuu
        function saveWP() {
            localStorage.setItem('wp_url', document.getElementById('wpUrl').value);
            localStorage.setItem('wp_user', document.getElementById('wpUser').value);
            localStorage.setItem('wp_pass', document.getElementById('wpPass').value);
            alert("Qindaa'inni kee milkiin save ta'eera!");
        }
