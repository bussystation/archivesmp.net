// ==========================
// MEMBER LIST
// ==========================
async function loadMembers() {
    try {
        const res = await fetch("members.json");
        const data = await res.json();
        const container = document.getElementById("members");
        if (!container) return;

        container.innerHTML = data.map(m => {
            return `
                <a href="${m.link}" target="_blank" class="member-card">
                    <div class="member-logo-wrap">
                        <img src="${m.logo}" alt="${m.name}" class="member-logo">
                    </div>
                    <div class="member-info">
                        <h3 class="member-name">${m.name}</h3>
                        <p class="member-short">${m.short || ""}</p>
                    </div>
                </a>
            `;
        }).join("");
    } catch (err) {
        console.error("Failed to load members:", err);
    }
}

loadMembers();
