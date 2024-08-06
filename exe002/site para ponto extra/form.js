// const form = document.getElementById('cadastroForm');
// const senhaInput = document.getElementById('senha');
// const confirmarSenhaInput = document.getElementById('confirmarSenha');
// const idadeInput = document.getElementById('idade');
// const estadoSelect = document.getElementById('estado');
// const cidadeSelect = document.getElementById('cidade');
// const mensagemTextarea = document.getElementById('mensagem');
// const charCount = document.getElementById('charCount');
// const warning = document.getElementById('warning');
// const passwordMatch = document.getElementById('passwordMatch');
// const invertButton = document.getElementById('invertButton');
// const increaseButton = document.getElementById('increaseButton');
// const decreaseButton = document.getElementById('decreaseButton');
// const validationMessage = document.getElementById('validationMessage');
// const body = document.body;

const minFontSize = 10; // Tamanho mínimo da fonte em pixels
const maxFontSize = 30; // Tamanho máximo da fonte em pixels
const step = 2; // Incremento/decremento do tamanho da fonte em pixels

//mensagemTextarea.addEventListener
('input', () => {
    const currentLength = mensagemTextarea.value.length;
    charCount.textContent = `Caracteres digitados: ${currentLength}`;

    if (currentLength >= mensagemTextarea.maxLength) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
});

//senhaInput.addEventListener('input', validarSenha);
//confirmarSenhaInput.addEventListener('input', validarRepeticaoSenha);

//increaseButton.addEventListener
('click', () => {
    let currentFontSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    if (currentFontSize < maxFontSize) {
        body.style.fontSize = `${currentFontSize + step}px`;
    }
});

//decreaseButton.addEventListener
('click', () => {
    let currentFontSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    if (currentFontSize > minFontSize) {
        body.style.fontSize = `${currentFontSize - step}px`;
    }
});

//invertButton.addEventListener
('click', () => {
    body.classList.toggle('invert');
});

function validarSenha() {
    // const value = senhaInput.value;
    let validCount = 0;

    // Verifica o comprimento da senha
    // if (value.length >= 3) {
    //     document.getElementById('ruleLength').classList.add('valid');
    //     validCount++;
    // } else {
    //     document.getElementById('ruleLength').classList.remove('valid');
    // }

    // Verifica se contém caractere especial
    // if (/[\W_]/.test(value)) {
    //     //document.getElementById('ruleSpecial').classList.add('valid');
    //     //validCount++;
    // } else {
    //     //document.getElementById('ruleSpecial').classList.remove('valid');
    // }

    if (validCount === 2) {
        //validationMessage.textContent = "Senha válida";
        //validationMessage.style.color = "green";
    } else {
        //validationMessage.textContent = "Senha inválida";
        //validationMessage.style.color = "red";
    }
}

function validarRepeticaoSenha() {
    // if (senhaInput.value === confirmarSenhaInput.value) {
    //     passwordMatch.classList.remove('hidden');
    // } else {
    //     passwordMatch.classList.add('hidden');
    // }
}

function validarFormulario(event) {
    //event.preventDefault();
    if (!validarIdade()) {
        //validationMessage.textContent = 'Você deve ter no mínimo 18 anos para se cadastrar.';
        //validationMessage.style.color = "red";
        //return false;
    }

    // if (!senhaInput.value || !confirmarSenhaInput.value ) {
    //     validationMessage.textContent = 'As senhas não coincidem.';
    //     validationMessage.style.color = "red";
    //     return false;
    // }

    //validationMessage.textContent = 'Formulário enviado com sucesso!';
    //validationMessage.style.color = "green";
    return true;
}

function validarIdade() {
    // return parseInt(idadeInput.value) >= 18;
}

// estadoSelect.addEventListener('change', atualizarCidades);
// form.addEventListener
('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    if (!validarFormulario()) {
        // Se todas as validações forem atendidas, o formulário pode ser enviado
        window.alert("Formulário enviado com sucesso!");
    }
});

function atualizarCidades() {
    const cidades = {
        SP: ["São Paulo", "Campinas", "Santos"],
        RJ: ["Rio de Janeiro", "Niterói", "Petrópolis"],
        MG: ["Belo Horizonte", "Uberlândia", "Ouro Preto"],
        ES: ["Vitória", "Vila Velha", "Guarapari"]
    };

    const estado = estadoSelect.value;
    cidadeSelect.innerHTML = '<option value="">Selecione</option>';

    if (estado) {
        cidades[estado].forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
        cidadeSelect.disabled = false;
    } else {
        cidadeSelect.disabled = true;
    }
}

module.exports = { validarSenha, validarRepeticaoSenha, validarFormulario, validarIdade };