export function initChatbot() {
const chatbot = document.getElementById("chatbot");
const toggleBtn = document.getElementById("chat-toggle");
const closeBtn = document.getElementById("close-chat");
const messages = document.getElementById("messages");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

if (!chatbot || !toggleBtn) return; // proteção

console.log("chatbot:", chatbot);
console.log("toggleBtn:", toggleBtn);

const ESTADOS = {
	PERGUNTA_CPF: "pergunta_cpf",
	INSERIR_CPF: "inserir_cpf",
	MENU: "menu",
	CPF_INVALIDO: "cpf_invalido",
	ENCERRADO: "encerrado",
};

let estadoAtual = null;
let chatIniciado = false;

toggleBtn.addEventListener("click", () => {
	chatbot.classList.toggle("aberto");

	if (chatbot.classList.contains("aberto")) {
		if (!chatIniciado) {
			iniciarChat();
			chatIniciado = true;
		}
		input.focus();
	}
});

closeBtn.addEventListener("click", () => {
	chatbot.classList.remove("aberto");
});

function addBotMessage(texto) {
	const div = document.createElement("div");
	div.className = "bot";
	div.innerText = texto;
	messages.appendChild(div);
	messages.scrollTop = messages.scrollHeight;
}

function addUserMessage(texto) {
	const div = document.createElement("div");
	div.className = "user";
	div.innerText = texto;
	messages.appendChild(div);
	messages.scrollTop = messages.scrollHeight;
}

function addBotMessageComOpcoes(texto, opcoes) {
	const container = document.createElement("div");
	container.className = "bot";
	container.innerText = texto;

	const optionsDiv = document.createElement("div");
	optionsDiv.className = "options";

	opcoes.forEach((op) => {
		const btn = document.createElement("button");
		btn.innerText = op.label;

		btn.onclick = () => {
			addUserMessage(op.label);
			optionsDiv.remove();
			processarResposta(op.value);
		};

		optionsDiv.appendChild(btn);
	});

	container.appendChild(optionsDiv);
	messages.appendChild(container);
	messages.scrollTop = messages.scrollHeight;
}

function iniciarChat() {
	messages.innerHTML = "";
	estadoAtual = ESTADOS.PERGUNTA_CPF;

    document.querySelector(".chatbot-input").style.display = "flex";

	input.disabled = true;
	sendBtn.disabled = true;

	addBotMessage("Olá, que bom ter você na Havan 💙");
	addBotMessage("Eu sou a Liberdade e vou te acompanhar por aqui 🗽");

	addBotMessageComOpcoes("Quer informar seu CPF para um atendimento mais completo?", [
		{ label: "Sim, inserir CPF", value: "SIM_CPF" },
		{ label: "Não, continuar sem", value: "NAO_CPF" },
		{ label: "Sair", value: "SAIR" },
	]);
}

function processarResposta(acao) {
	if (acao === "REINICIAR") {
		iniciarChat();
		return;
	}

	if (acao === "SAIR") {
		encerrarAtendimento();
		return;
	}

if (acao === "SAIR_FINAL") {
	estadoAtual = ESTADOS.ENCERRADO;
	chatIniciado = false;
	messages.innerHTML = "";
	return;
}

	switch (estadoAtual) {
		case ESTADOS.PERGUNTA_CPF:
			if (acao === "SIM_CPF") {
				estadoAtual = ESTADOS.INSERIR_CPF;
				addBotMessage("Digite seu CPF:");
				input.disabled = false;
				sendBtn.disabled = false;
                input.focus();
			}
			if (acao === "NAO_CPF") {
				estadoAtual = ESTADOS.MENU;
				mostrarMenu();
			}
			break;

		case ESTADOS.CPF_INVALIDO:
			if (acao === "CONTINUAR") {
				estadoAtual = ESTADOS.MENU;
				mostrarMenu();
			}
			break;

		case ESTADOS.MENU:
			addBotMessage("Funcionalidade em desenvolvimento 🚧");
			mostrarAcoesFinais();
			break;
	}
}

sendBtn.onclick = enviarCPF;

input.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		enviarCPF();
	}
});

function enviarCPF() {
	if (estadoAtual !== ESTADOS.INSERIR_CPF) return;

	const cpf = input.value.trim();
	if (!cpf) return;

	addUserMessage(cpf);
	input.value = "";

	if (verificarCPF(cpf)) {
		addBotMessage("CPF encontrado com sucesso ✅");
		estadoAtual = ESTADOS.MENU;
		mostrarMenu();
	} else {
		estadoAtual = ESTADOS.CPF_INVALIDO;
		addBotMessageComOpcoes("CPF não encontrado 😕", [
			{ label: "Continuar sem CPF", value: "CONTINUAR" },
			{ label: "Sair", value: "SAIR" },
		]);
	}
}

function mostrarMenu() {
	addBotMessageComOpcoes("Como posso te ajudar?", [
		{ label: "Cartão Havan", value: "CARTAO" },
		{ label: "Meus Pedidos", value: "PEDIDOS" },
		{ label: "Lojas Físicas", value: "LOJAS" },
		{ label: "Sair", value: "SAIR" },
	]);
}

function mostrarAcoesFinais() {
	addBotMessageComOpcoes("Deseja fazer algo mais?", [
		{ label: "Novo atendimento", value: "REINICIAR" },
		{ label: "Encerrar", value: "SAIR" },
	]);
}

function encerrarAtendimento() {
	estadoAtual = ESTADOS.ENCERRADO;
	input.disabled = true;
	sendBtn.disabled = true;

	document.querySelectorAll(".options").forEach((o) => o.remove());

	addBotMessage("Atendimento encerrado 👋");

	addBotMessageComOpcoes("Deseja iniciar um novo atendimento?", [
		{ label: "Sim", value: "REINICIAR" },
		{ label: "Não", value: "SAIR_FINAL" },
	]);
}

function verificarCPF(cpf) {
	return ["12345678900", "11122233344"].includes(cpf); //prótotipo
}
}