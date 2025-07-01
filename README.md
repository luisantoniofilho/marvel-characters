Marvel Heroes - Case Técnico

SOBRE O PROJETO

- Esta aplicação é uma SPA em React que permite navegar pela lista dos personagens da Marvel, visualizar detalhes e marcar até 5 favoritos, respeitando os requisitos do desafio técnico.

- Caso queira testá-la online, acesse o link a seguir no navegador:
  https://luis-antonio-marvel-characters.vercel.app/

COMO RODAR A APLICAÇÃO LOCALMENTE

Pré-requisitos:

- Node.js (versão 16+ recomendada)

- npm ou yarn

Passos para rodar localmente

Clone o repositório:

- git clone https://github.com/luisantoniofilho/marvel-characters.git
  cd marvel-characters

Instale as dependências:

- npm install ou yarn install

(Opcional) Configure variáveis de ambiente:

Importante: A API oficial da Marvel não está funcionando, então o projeto está utilizando uma API mock com JSON para garantir o funcionamento local, que nao precisa de variáveis de ambiente.

- Crie um arquivo .env.local

- Adicione suas chaves de API Marvel conforme as instruções (exemplo):

- REACT_APP_MARVEL_PUBLIC_KEY=your_public_key
- REACT_APP_MARVEL_PRIVATE_KEY=your_private_key

Rode o projeto em modo de desenvolvimento:

- npm run dev ou yarn dev

- Acesse http://localhost:5173 no navegador para testar.

Testando a aplicação:

- Navegue na lista inicial de heróis.

- Utilize a busca para filtrar por nome.

- Ordene os personagens pelo nome em ordem ascendente ou descendente.

- Marque até 5 personagens como favoritos.

- Confira a página de detalhes de cada personagem com informações e quadrinhos recentes.

- Teste o layout responsivo em diferentes tamanhos de tela.

- Os favoritos são persistidos localmente para manter a seleção após recarregar a página.

CUIDADOS E BOAS PRÁTICAS ADOTADAS:

- TypeScript: Uso completo de tipagem estática para maior segurança e manutenção do código.

- ESLint: Configurado para garantir padrões de qualidade e evitar erros comuns.

- Prettier: Padroniza o estilo do código, facilitando leitura e colaboração.

- Modularização: Componentes pequenos e reutilizáveis para melhor organização.

- Responsividade: Layout adaptado para dispositivos móveis e desktops.

- Git: Commits frequentes e descritivos, facilitando o entendimento do histórico.

- Deploy: Projeto hospedado no Vercel com integração contínua via GitHub para facilitar atualizações e avaliação.

RESPOSTA TÉCNICA: Como lidaria com o limite de 5 favoritos usando Redux?

- No redux eu centralizaria a lógica de favoritos no store global. A action responsável por adicionar um favorito verificaria o tamanho atual da lista de favoritos antes de permitir a adição de um novo. Caso já existam 5 favoritos, a action impediria a inclusão de mais, garantindo assim o limite estabelecido.

- Essa forma de organizar a lógica no Redux ajuda a manter o controle dos favoritos centralizado e evita que a regra do limite seja quebrada, mesmo se diferentes partes da aplicação tentarem alterar a lista ao mesmo tempo. Assim, a interface sempre fica atualizada corretamente e o usuário tem uma experiência consistente.
