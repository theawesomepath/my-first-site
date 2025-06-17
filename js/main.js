const messages = [
	"Git — это сила 💪",
	"Каждый коммит — шаг вперёд 🚀",
	"Push it real good 🔥",
	"Ветка не ломается — ветка мержится 🧠",
	"Ты уже круче большинства! 😎"
];

function showMotivation() {
	const random = Math.floor(Math.random() * messages.length);
	document.getElementById('motivation').textContent = messages[random];
}