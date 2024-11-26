document.addEventListener('DOMContentLoaded', () => {    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {

        button.addEventListener('click', function () {

            const atual = document.querySelector('.passo.ativo');

            if (!atual) {
                console.error('Nenhum passo ativo encontrado.');
                return;
            }

            
            const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');

            
            const proximoPasso = document.getElementById(proximoPassoId);

           
            if (!proximoPasso) {
                console.error(`Passo com ID "${proximoPassoId}" não encontrado.`);
                return;
            }


            atual.classList.remove('ativo');

            
            proximoPasso.classList.add('ativo');
        });
    });
});
