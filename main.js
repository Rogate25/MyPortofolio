document.addEventListener("DOMContentLoaded", () => {
    const words = ["Front-end Developer", "Back-end Developer", "Web Developer", "Software Engineer", "UI/UX Designer"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    const typingTextSpan = document.querySelector(".typing-text span");

    function type() {
        if (i < words.length) {
            if (!isDeleting && j <= words[i].length) {
                currentWord = words[i].substring(0, j);
                typingTextSpan.innerHTML = currentWord;
                j++;
            }

            if (isDeleting && j <= words[i].length) {
                currentWord = words[i].substring(0, j);
                typingTextSpan.innerHTML = currentWord;
                j--;
            }

            if (j === words[i].length) {
                isDeleting = true;
            }

            if (isDeleting && j === 0) {
                isDeleting = false;
                i++;
                if (i === words.length) {
                    i = 0;
                }
            }
        }

        const typingSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typingSpeed);
    }

    type();
});
