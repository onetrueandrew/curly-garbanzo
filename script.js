const bg = document.querySelector(".background");

let current = { x: 0, y: 0, scale: 1.15 };
let target  = { x: 0, y: 0, scale: 1.15 };

function randomTarget() {
    target = {
        x: (Math.random() - 0.5) * 6,   // subtle pan
        y: (Math.random() - 0.5) * 6,
        scale: 1.15 + Math.random() * 0.05 // gentle zoom variation
    };
}

// Change direction every few seconds
setInterval(randomTarget, 6000);
randomTarget();

function animate() {
    current.x += (target.x - current.x) * 0.01;
    current.y += (target.y - current.y) * 0.01;
    current.scale += (target.scale - current.scale) * 0.01;

    bg.style.transform = `
        scale(${current.scale})
        translate(${current.x}%, ${current.y}%)
    `;

    requestAnimationFrame(animate);
}

animate();

//copy
const codeEl = document.getElementById("copyCode");

if (codeEl) {
    codeEl.addEventListener("click", async () => {
        const code = codeEl.innerText.trim();

        try {
            await navigator.clipboard.writeText(code);
            codeEl.classList.add("copied");

            const original = codeEl.innerText;
            codeEl.innerText = "COPIED ✓";

            setTimeout(() => {
                codeEl.innerText = original;
                codeEl.classList.remove("copied");
            }, 1200);
        } catch {
            alert("Copy failed — please select and copy manually.");
        }
    });
}
