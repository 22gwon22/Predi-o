# Predição de Rotas CCO

Site React/Vite pronto para importar na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy na Vercel

1. Suba esta pasta para um repositório GitHub.
2. Na Vercel, clique em **Add New Project**.
3. Importe o repositório.
4. Framework: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.

## Padrão de importação

Dentro do próprio site, clique em **Baixar modelo** para gerar o Excel padrão com as abas:

- ESCALA_DIA_SEGUINTE
- OCORRENCIAS_DIA_ATUAL
- DE_PARA_MOTORISTAS
- EXCECOES_INTERJORNADA
- EQUIPAMENTOS
- PARAMETROS
- HISTORICO_ROTAS

## Histórico

A primeira versão salva o histórico em `localStorage`, ou seja, no navegador do usuário. Para uso com múltiplos usuários, o próximo passo é integrar com banco de dados, como Supabase, PostgreSQL ou API própria.
