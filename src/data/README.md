# 📊 Dados dos Gráficos

Esta pasta contém os dados em formato JSON que alimentam os gráficos do projeto.

## 📁 Estrutura dos Arquivos

### `lineChartData.json` - Gráfico de Linha
```json
{
  "title": "Título do gráfico",
  "data": [
    { "x": 1, "y": 2 },
    { "x": 2, "y": 3 }
  ]
}
```
- **x**: Valor do eixo horizontal (números)
- **y**: Valor do eixo vertical (números)

### `barChartData.json` - Gráfico de Barras
```json
{
  "title": "Título do gráfico",
  "data": [
    { "x": "A", "y": 13 },
    { "x": "B", "y": 16 }
  ]
}
```
- **x**: Nome da categoria (texto)
- **y**: Valor da barra (número)

### `pieChartData.json` - Gráfico de Pizza
```json
{
  "title": "Título do gráfico",
  "data": [
    { "x": "Categoria A", "y": 35 },
    { "x": "Categoria B", "y": 25 }
  ]
}
```
- **x**: Nome da categoria (texto)
- **y**: Porcentagem ou valor (número)

### `areaChartData.json` - Gráfico de Área
```json
{
  "title": "Título do gráfico",
  "data": [
    { "x": "Jan", "y": 10 },
    { "x": "Fev", "y": 15 }
  ]
}
```
- **x**: Rótulo do período (texto)
- **y**: Valor (número)

## ✏️ Como Editar os Dados

1. **Abra o arquivo JSON** correspondente ao gráfico que deseja modificar
2. **Edite os valores** de `x` e `y` nos objetos do array `data`
3. **Adicione ou remova** itens do array conforme necessário
4. **Salve o arquivo** - as mudanças serão refletidas automaticamente

## 💡 Dicas

- Mantenha o formato JSON válido (chaves entre aspas, vírgulas corretas)
- Use valores numéricos para `y` em todos os gráficos
- Para o gráfico de linha, use números sequenciais em `x`
- Para gráficos de barras, pizza e área, use textos descritivos em `x`
- O campo `title` é opcional e pode ser usado para documentação

## 🔄 Recarregamento Automático

Ao usar `npm run dev`, o Vite detecta automaticamente as alterações nos arquivos JSON e recarrega os gráficos na página.

## 📝 Exemplo de Edição

**Antes:**
```json
{ "x": "Jan", "y": 10 }
```

**Depois:**
```json
{ "x": "Janeiro", "y": 25 }
```

Isso mudará o rótulo de "Jan" para "Janeiro" e o valor de 10 para 25 no gráfico.

