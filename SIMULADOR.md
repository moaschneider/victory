# 🎮 Guia do Simulador Interativo

## 📋 Visão Geral

O Simulador é uma página interativa onde você pode simular compras de produtos e ver os dados sendo atualizados em tempo real em um gráfico.

## 🎯 Layout da Página

A página está dividida em **3 painéis**:

### 1️⃣ Painel de Controle (Esquerda Superior - 30%)
**Funcionalidades:**
- 🛍️ **Seletor de Produto**: Escolha qual produto deseja simular a compra
- 🛒 **Botão "Adicionar +1"**: Adiciona 1 unidade ao produto selecionado
- 🔄 **Botão "Resetar"**: Volta os dados para os valores iniciais
- **Layout Compacto**: Botões lado a lado para facilitar o uso

### 2️⃣ Painel JSON (Esquerda Inferior - 30%)
**Funcionalidades:**
- 📄 Exibe os dados em formato JSON
- 🔄 Atualiza automaticamente quando você simula uma compra
- 🎨 Syntax highlighting (cores para melhor visualização)
- 📋 Mostra exatamente como os dados estão estruturados

### 3️⃣ Painel do Gráfico (Direita - 70%)
**Funcionalidades:**
- 📊 Gráfico de barras interativo
- 🔄 Atualização em tempo real (com animação bounce)
- 🎨 Cores diferentes para cada produto
- 💡 Tooltips ao passar o mouse
- 📈 Eixos com labels descritivos

## 🎬 Como Usar

### Passo a Passo:

1. **Acesse o Simulador**
   - Clique no botão "🎮 Simulador" no topo da página
   - Ou navegue para `/simulador`

2. **Simule uma Compra**
   - Selecione um produto no dropdown
   - Clique em "🛒 Adicionar +1"

3. **Observe as Mudanças**
   - ✅ O botão mostra "Compra Registrada!" por 1.5 segundos
   - 📊 O gráfico atualiza com animação bounce
   - 📄 O JSON é atualizado instantaneamente
   - 📈 As estatísticas são recalculadas

4. **Resetar Dados** (Opcional)
   - Clique em "🔄 Resetar Dados" para voltar aos valores iniciais

## 💡 Recursos Visuais

### Feedback Visual
- ✓ **Confirmação de Compra**: Botão fica verde com checkmark
- 🎨 **Animação Bounce**: Barras do gráfico "saltam" ao atualizar
- 🔄 **Hover Effects**: Elementos respondem ao passar o mouse
- 📱 **Responsivo**: Layout se adapta a telas menores

### Estatísticas Automáticas
- **Total de Vendas**: Soma de todas as vendas
- **Mais Vendido**: Produto com maior número de vendas

## 🎨 Cores dos Produtos

Cada produto tem sua própria cor no gráfico:
- Produto A: 🟣 Roxo (#667eea)
- Produto B: 🟪 Roxo Escuro (#764ba2)
- Produto C: 💜 Rosa (#f093fb)
- Produto D: 🔵 Azul (#4facfe)
- Produto E: 🟢 Verde (#43e97b)

## 📱 Responsividade

### Desktop (> 1200px)
- Layout de 3 colunas lado a lado
- Painéis esquerdos empilhados (30%)
- Gráfico ocupando 70% da largura

### Tablet (768px - 1200px)
- Painéis esquerdos ficam lado a lado (50% cada)
- Gráfico ocupa 100% da largura abaixo

### Mobile (< 768px)
- Todos os painéis empilhados verticalmente
- 100% da largura cada
- Fontes e botões adaptados

## 🛠️ Tecnologias Utilizadas

- **React Hooks**: `useState` para gerenciar estado local
- **Victory**: Biblioteca de gráficos com animações
- **CSS Grid/Flexbox**: Layout responsivo
- **React Router**: Navegação entre páginas

## 🎓 Aplicações Acadêmicas

Este simulador pode ser usado para:
- 📊 Demonstração de atualização de dados em tempo real
- 🎮 Exemplo de interatividade em aplicações web
- 📈 Visualização de dados dinâmicos
- 🧪 Simulação de sistemas de vendas
- 🎨 Estudo de UX/UI com feedback visual

## 💻 Código de Exemplo

### Estrutura dos Dados:
```javascript
[
  { x: 'Produto A', y: 10 },
  { x: 'Produto B', y: 15 },
  { x: 'Produto C', y: 8 },
  { x: 'Produto D', y: 12 },
  { x: 'Produto E', y: 5 }
]
```

### Como os Dados São Atualizados:
```javascript
// Ao clicar em "Simular Compra"
setSalesData(prevData => {
  return prevData.map(item => {
    if (item.x === selectedProduct) {
      return { ...item, y: item.y + parseInt(quantity) }
    }
    return item
  })
})
```

## 🎯 Próximos Passos

Você pode expandir o simulador adicionando:
- 📤 Exportar dados para CSV/Excel
- 📅 Histórico de compras
- 🎨 Mais tipos de gráficos (linha, pizza, etc)
- 💾 Salvar dados no localStorage
- 🔔 Notificações de metas atingidas
- 📊 Comparação entre períodos

---

**Dica**: Experimente simular várias compras seguidas para ver as animações e atualizações em tempo real! 🚀

