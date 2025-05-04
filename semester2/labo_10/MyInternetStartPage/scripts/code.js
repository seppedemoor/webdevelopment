const setup = () => {
    const inputField = document.querySelector("input");
    const container = document.querySelector(".geschiedenisRaster");  // aangepast van 'geschiedenis'

    const bronnen = {
        g: { naam: "Google", url: "https://www.google.com/search?q=", kleur: "#4285F4", alias: ["g", "google"] },
        y: { naam: "YouTube", url: "https://www.youtube.com/results?search_query=", kleur: "#FF0000", alias: ["y", "youtube"] },
        x: { naam: "X", url: "https://x.com/hashtag/", kleur: "#1DA1F2", alias: ["x"] },
        i: { naam: "Instagram", url: "https://www.instagram.com/explore/tags/", kleur: "#C13584", alias: ["i", "instagram"] }
    };

    const aliasMap = {};
    Object.entries(bronnen).forEach(([key, bron]) => {
        bron.alias.forEach(a => aliasMap[a] = key);
    });

    let geschiedenis = JSON.parse(localStorage.getItem("geschiedenis")) || [];

    const maakKaart = (item, index) => {
        const col = document.createElement("div");
        col.className = "geschiedenis-kolom"; // blijft hetzelfde

        const kaart = document.createElement("div");
        kaart.className = "geschiedenis-kaart";
        kaart.style.backgroundColor = item.kleur;

        const titel = document.createElement("h5");
        titel.textContent = item.title;

        const tekst = document.createElement("p");
        tekst.textContent = item.text;

        const link = document.createElement("a");
        link.className = "knop-klein";
        link.href = item.url;
        link.target = "_blank";
        link.textContent = "Go!";

        const verwijder = document.createElement("button");
        verwijder.className = "knop-klein";
        verwijder.textContent = "Verwijder";
        verwijder.style.backgroundColor = "#dc3545";
        verwijder.onclick = () => {
            geschiedenis.splice(index, 1);
            localStorage.setItem("geschiedenis", JSON.stringify(geschiedenis));
            container.innerHTML = "";
            geschiedenis.forEach(maakKaart);
        };

        kaart.append(titel, tekst, link, verwijder);
        col.appendChild(kaart);
        container.appendChild(col);
    };

    const verwerkCommando = () => {
        const invoer = inputField.value.trim();

        if (invoer === "/h" || invoer === "/help") {
            alert("Beschikbare commando's:\n/g of /google [zoekterm]\n/y of /youtube [zoekterm]\n/x [zoekterm]\n/i of /instagram [zoekterm]\n/h of /help");
            return;
        }

        if (!invoer.startsWith("/") || invoer.length < 3 || !invoer.includes(" ")) {
            alert("Fout: Ongeldig commando. Voorbeeld: /g zoekterm");
            return;
        }

        const prefix = invoer.slice(1, invoer.indexOf(" ")).toLowerCase();
        const zoekterm = invoer.slice(invoer.indexOf(" ")).trim();

        const sleutel = aliasMap[prefix];
        if (!sleutel) {
            alert("Fout: Onbekende prefix. Gebruik /h voor hulp.");
            return;
        }

        const bron = bronnen[sleutel];
        const url = bron.url + encodeURIComponent(zoekterm.replace(/\s+/g, sleutel === "x" ? "" : "+"));

        const item = {
            title: bron.naam,
            text: zoekterm,
            url: url,
            kleur: bron.kleur
        };

        geschiedenis.push(item);
        localStorage.setItem("geschiedenis", JSON.stringify(geschiedenis));
        window.open(item.url, "_blank");
        container.innerHTML = "";
        geschiedenis.forEach(maakKaart);
        inputField.value = "";
    };

    document.querySelector(".submit").addEventListener("click", verwerkCommando);  // aangepast van 'knop-groot'
    inputField.addEventListener("keypress", (e) => e.key === "Enter" && verwerkCommando());

    geschiedenis.forEach(maakKaart);
};

window.addEventListener("load", setup);
