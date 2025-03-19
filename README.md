# Visualizador 3D em Realidade Aumentada

Esta é uma aplicação web responsiva que permite visualizar modelos 3D em realidade aumentada usando a biblioteca Model Viewer.

## Funcionalidades

- Visualização de modelos 3D
- Suporte a Realidade Aumentada (AR)
- Controles de rotação e zoom
- Interface responsiva
- Suporte a Android (Scene Viewer) e iOS (Quick Look)
- Barra de progresso durante o carregamento
- Design minimalista e moderno

## Requisitos

- Servidor web para hospedar os arquivos
- Navegador moderno com suporte a WebGL
- Para AR:
  - Android: Chrome 81+ com ARCore
  - iOS: Safari 12+ com ARKit

## Como Usar

1. Coloque seus modelos 3D na pasta `modelo3d`:
   - O arquivo `.glb` é usado para visualização web e Android
   - O arquivo `.usdz` é usado para AR no iOS

2. Hospede os arquivos em um servidor web HTTPS (necessário para AR)

3. Acesse a página através de um dispositivo compatível

## Estrutura de Arquivos

```
.
├── index.html
├── styles.css
├── script.js
└── modelo3d/
    ├── modelo.glb
    └── modelo.usdz
```

## Controles

- **Ver em AR**: Inicia a experiência em realidade aumentada
- **Girar Esquerda/Direita**: Rotaciona o modelo
- **Aproximar/Afastar**: Controla o zoom do modelo

## Compatibilidade

- **Desktop**: Chrome, Firefox, Safari, Edge
- **Android**: Chrome (AR via WebXR)
- **iOS**: Safari (AR via Quick Look)

## Notas

- Para melhor performance, otimize seus modelos 3D antes de usar
- Recomenda-se manter o tamanho dos arquivos abaixo de 10MB
- Use HTTPS para funcionalidades de AR 