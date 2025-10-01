# 🚀 Guia de Deploy no Vercel

## Método 1: Deploy via GitHub (Recomendado)

### Passo 1: Preparar o Projeto

✅ Todos os arquivos necessários já estão no projeto:
- `package.json` - Dependências e scripts
- `vite.config.js` - Configuração do Vite
- `vercel.json` - Configuração do Vercel
- `.gitignore` - Arquivos a serem ignorados

### Passo 2: Criar Repositório no GitHub

```bash
# Inicializar Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - Projeto Victory React"

# Criar repositório no GitHub e conectar
# (Substitua 'seu-usuario' e 'seu-repositorio' pelos seus dados)
git remote add origin https://github.com/seu-usuario/seu-repositorio.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### Passo 3: Deploy no Vercel

1. **Acesse**: https://vercel.com
2. **Login**: Faça login com sua conta GitHub
3. **New Project**: Clique em "Add New" > "Project"
4. **Import Repository**: 
   - Selecione o repositório do GitHub que você criou
   - Clique em "Import"
5. **Configure Project**:
   - Framework Preset: **Vite** (detectado automaticamente)
   - Build Command: `npm run build` (já configurado)
   - Output Directory: `dist` (já configurado)
   - Install Command: `npm install` (já configurado)
6. **Deploy**: Clique em "Deploy"

✅ Pronto! Seu projeto estará online em alguns minutos.

---

## Método 2: Deploy via CLI do Vercel

### Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 2: Login no Vercel

```bash
vercel login
```

### Passo 3: Deploy

```bash
# Deploy de produção
vercel --prod
```

Siga as instruções no terminal e pronto!

---

## 📁 Arquivos Necessários

Todos estes arquivos **devem estar** no repositório:

### Essenciais:
- ✅ `package.json` - Dependências do projeto
- ✅ `vite.config.js` - Configuração do Vite
- ✅ `index.html` - HTML principal
- ✅ `vercel.json` - Configuração do Vercel (criado)
- ✅ `.gitignore` - Arquivos ignorados pelo Git

### Código Fonte:
- ✅ `/src/` - Todo o código fonte React
- ✅ `/src/components/` - Componentes React
- ✅ `/src/pages/` - Páginas da aplicação
- ✅ `/src/data/` - Arquivos JSON com dados
- ✅ `/src/*.css` - Arquivos de estilo

### NÃO incluir:
- ❌ `node_modules/` - Dependências (serão instaladas automaticamente)
- ❌ `dist/` - Build (gerado automaticamente)
- ❌ `.env` - Variáveis de ambiente locais

---

## 🔄 Atualizações Automáticas

Após o deploy inicial via GitHub:

1. **Faça alterações** no código localmente
2. **Commit e Push**:
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   git push
   ```
3. **Deploy Automático**: Vercel detecta e faz deploy automaticamente!

---

## 🌐 URL do Projeto

Após o deploy, você receberá:
- **URL Temporária**: `seu-projeto.vercel.app`
- **Domínio Customizado**: Pode adicionar seu próprio domínio nas configurações

---

## 📊 Dados do Projeto

Os arquivos JSON em `/src/data/` serão incluídos no build automaticamente.
Para alterar os dados após o deploy:
1. Edite os arquivos JSON localmente
2. Faça commit e push
3. Vercel fará redeploy automaticamente

---

## 🐛 Solução de Problemas

### Build falhou?
- Verifique se `npm run build` funciona localmente
- Confira se todas as dependências estão no `package.json`

### Página 404 ao navegar?
- O arquivo `vercel.json` já está configurado com rewrites
- Isso garante que o React Router funcione corretamente

### Gráficos não aparecem?
- Verifique se os arquivos JSON estão no repositório
- Confirme que os imports estão corretos nos componentes

---

## ✅ Checklist Antes do Deploy

- [ ] `npm install` funciona sem erros
- [ ] `npm run dev` funciona localmente
- [ ] `npm run build` cria a pasta `dist` sem erros
- [ ] Todos os arquivos estão commitados no Git
- [ ] `.gitignore` está configurado corretamente
- [ ] `vercel.json` está presente

---

## 🎉 Resultado Final

Seu projeto estará disponível em:
- 📈 Página de Gráficos: `https://seu-projeto.vercel.app/`
- 🎮 Simulador: `https://seu-projeto.vercel.app/simulador`

**Performance:**
- ⚡ Carregamento rápido (CDN global)
- 🔄 HTTPS automático
- 📱 Totalmente responsivo
- 🚀 Deploy em ~30 segundos

---

## 📚 Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Guia Vite + Vercel](https://vercel.com/guides/deploying-vite-with-vercel)
- [React Router + Vercel](https://vercel.com/guides/using-react-router-with-vercel)

---

**Desenvolvido para fins acadêmicos** 🎓

