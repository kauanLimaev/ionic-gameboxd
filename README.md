# Gameboxd

Gameboxd é uma plataforma inspirada no Letterboxd voltada para jogos digitais. O projeto foi desenvolvido durante as aulas de Programação para Aplicativos Mobile II do curso M-TEC em Desenvolvimento de Sistemas da ETEC de Praia Grande.

## Objetivo

Desenvolver uma aplicação web responsiva utilizando Ionic e Angular, aplicando conceitos de consumo de APIs REST, componentização de interfaces e desenvolvimento de aplicações modernas.

## Funcionalidades Planejadas

- [ ] Busca de jogos
- [ ] Página de detalhes dos jogos
- [ ] Sistema de avaliações
- [ ] Favoritos

## Tecnologias

- Ionic
- Angular
- TypeScript
- HTML5
- CSS3
- RAWG API

## Instalação

Use Node.js `20.19` ou superior.

```bash
git clone https://github.com/kauanLimaev/ionic-gameboxd.git
cd ionic-gameboxd
npm install
cp src/environments/environment.example.ts src/environments/environment.ts
ionic serve
```

Depois de copiar o arquivo de exemplo, abra `src/environments/environment.ts` e coloque sua chave da RAWG em `rawgApiKey`.

## Chave da API RAWG

Este projeto usa a API da RAWG. A chave gratuita é indicada para projetos pessoais, hobby e uso não comercial.

Para rodar localmente, use a chave normalmente em `src/environments/environment.ts`. Esse arquivo está no `.gitignore`, então ele não deve ser enviado para o GitHub.

Importante: o `.gitignore` só impede novos commits do arquivo. Se a chave já tiver sido enviada para o repositório antes, o mais seguro é recriar a chave no painel da RAWG ou remover o arquivo do controle do Git com `git rm --cached src/environments/environment.ts`.

Em um site frontend, qualquer chave colocada direto no Angular pode aparecer no JavaScript enviado ao navegador. Por isso, no Vercel o projeto usa uma rota `/api/rawg`, que lê a chave pela variável de ambiente `RAWG_API_KEY` e evita que ela apareça no bundle do site.

## Deploy no Vercel

Para publicar no Vercel sem expor a chave no bundle do Angular:

1. Crie uma variavel de ambiente no Vercel chamada `RAWG_API_KEY`.
2. Cole nela a chave da RAWG.
3. Use `npm run build` como comando de build.
4. Use `www` como pasta de saida.

Em producao, o app chama a rota `/api/rawg`, que usa a variavel `RAWG_API_KEY` no servidor do Vercel. Ainda assim, mantenha o backlink obrigatorio para a RAWG nas paginas que usam os dados.
